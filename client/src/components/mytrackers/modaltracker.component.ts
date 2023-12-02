import { httpCreateRecordItem } from "../../hooks/requests";


function bindModalRecord(nodeParent: HTMLElement, element: any) {
    if (!nodeParent) {
        return;
    }
    const type = element.typeTracker;

    let trackerDialog = nodeParent.querySelector<HTMLDialogElement>("#trackerDialog")!;
    trackerDialog.showModal();

    let cancelButton = trackerDialog.querySelector<HTMLButtonElement>("#cancel")!;
    let formRecord = trackerDialog.querySelector<HTMLFormElement>("#recordForm")!;
    let saveButton = trackerDialog.querySelector<HTMLFormElement>("#saveRecord")!;
    let input = formRecord.querySelector<HTMLInputElement>('input')!;

    const handleSubmitRecord = (e: Event) => {
        e.preventDefault();
        formRecord.setAttribute('disabled', '');
        saveButton.setAttribute('disabled', '');

        let requestData: any = {};

        if (type === 'timer') {
            const [minutes, seconds] = input.value.split(':').map(Number);
            requestData.durationInSeconds = minutes * 60 + seconds;
        }
        if (type === 'habit') {
            requestData.habitCompletion = input.checked;
        }

        httpCreateRecordItem(element.recordId, requestData)
            .then(() => {
                trackerDialog.close();
                input.value = '';
                input.checked = false;
                formRecord.removeAttribute('disabled');
                saveButton.removeAttribute('disabled');
                window.location.reload();
            });
    };

    const handleCancel = (e: Event) => {
        e.preventDefault();
        trackerDialog.close();
    };

    formRecord.addEventListener("submit", handleSubmitRecord);
    cancelButton.addEventListener("click", handleCancel);
}

function getForm(typeTracker: string): string {
    if (typeTracker === 'habit') {
        return createHabitForm();
    } else if (typeTracker === 'timer') {
        return createTimerForm();
    } else {
        return '';
    }
}

function createHabitForm(): string {
    return `
    <div class="mx-2 p-2 h-7 flex justify-center items-center">
        <label class="text-base" for="habit">
            habit Completion:
            </label>
            <input class=" mx-2 h-4 w-4 rounded-full shadow" type="checkbox" id="habit">
           
      </div>
    `;
}

function createTimerForm(): string {
    return `
    <div class="mx-2 p-2 h-auto flex justify-center items-center">
        <label for="timer">
            time of record:
        </label>
            <input class="text-input p-2" type="text" id="timer" name="timer" placeholder="00:00" pattern="^[0-9]{2}\:[0-9]{2}$"
            title="the format of this field must be 00:00"
            >   
      </div>

    `;
}

function createModalDialog(form: string): string {
    return `
        <dialog id="trackerDialog">
        <div >
            <form id="recordForm" class="flex flex-col justify-center w-auto" >
                ${form}
                <div class="flex justify-center m-2">
                <button class="w-3  bg p-0 m-1 btn-primary" id="saveRecord">save </button>
                <button class=" w-3  bg p-0 m-1 btn-primary" id="cancel">cancel</button>
                </div>
            </form>
            </div>
        </dialog>
    `;
}


export {
    bindModalRecord as bindModal,
    createModalDialog,
    getForm

}