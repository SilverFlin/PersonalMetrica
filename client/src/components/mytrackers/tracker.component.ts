import { httpEditTracker as editTracker, httpDeleteTracker, httpGetRecordList } from "../../hooks/requests";
import { createBarChart, createLineChart } from "../chart.component";
import createTrackerComponent from "./createTracker.component";
import { bindModal, createModalDialog, getForm } from "./modaltracker.component";
import createSelect from "./selectChart.component";


export default function trackerComponent(nodeParent: HTMLElement, data?: any): HTMLElement {

    const tracker = document.createElement('div');
    tracker.classList.add('tracker');
    nodeParent.appendChild(tracker);

    if (data) {
        // for each element in data create and setup a tracker item
        data.forEach((element: any) => {
            const trackerItem = document.createElement('div');
            const headerItem = document.createElement('div');
            const footerItem = document.createElement('div');
            const bodyItem = document.createElement('div');
            // adding classes
            footerItem.classList.add('tracker-item-footer');
            trackerItem.classList.add('tracker-item');
            headerItem.classList.add('tracker-item-header');
            bodyItem.classList.add('tracker-item-body');
            // appendChild of parent item
            tracker.appendChild(trackerItem);
            // appenchild on trackerItem
            trackerItem.appendChild(headerItem);
            trackerItem.appendChild(bodyItem);
            editItemTrackerComponent(headerItem, element);


            httpGetRecordList(element.recordId)
                .then((data) => {
                    bodyItem.innerHTML += ` <canvas class="tracker-chart" id="graph-${element.recordId}"> </canvas>`
                    createTrackerChart(`graph-${element.recordId}`, { records: data.records, title: element.name }, element.typeTracker)
                })

            footerItem.innerHTML = `<button class="btn-primary">Capture entry</button>`
            footerItem.innerHTML += createModalDialog(getForm(element.typeTracker));
            createSelect(footerItem, { idHTMLElement: 'select-type-graphic' })
            trackerItem.appendChild(footerItem);


            // setup Event listeners to update name on tracker item
            // listener to show edit name tracker input
            const editTracker = trackerItem.querySelector<HTMLElement>('.edit-tracker')!;
            const input = trackerItem.querySelector<HTMLInputElement>('input')!
            const buttonDelete = headerItem.querySelector<HTMLButtonElement>('button')!
            const buttonEntry = footerItem.querySelector<HTMLButtonElement>('button')!
            buttonDelete.addEventListener('click', () => {

                const id = buttonDelete.getAttribute('aria-value')
                if (id) {

                    httpDeleteTracker(id!).then(() => createTrackerComponent())

                }

            });
            buttonEntry.addEventListener('click', () => {
                bindModal(footerItem, element);
            });
            trackerItem.querySelector('.edit-item')!.addEventListener("click", () => {
                //setup edit name
                editTracker.classList.add('active');
                input.focus();

            })

            handleEventsInput(input, editTracker);


        });
    }

    return tracker;
}

function editItemTrackerComponent(nodeParent: HTMLElement, data: any): HTMLElement {

    const editItem = document.createElement('div');

    editItem.classList.add('edit-item');

    editItem.innerHTML = `
            <h4 id="name-tracker">${data.name} 
                <svg width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                    <path  d="m3.99 16.854-1.314 3.504a.75.75 0 0 0 .966.965l3.503-1.314a3 3 0 0 0 1.068-.687L18.36 9.175s-.354-1.061-1.414-2.122c-1.06-1.06-2.122-1.414-2.122-1.414L4.677 15.786a3 3 0 0 0-.687 1.068zm12.249-12.63 1.383-1.383c.248-.248.579-.406.925-.348.487.08 1.232.322 1.934 1.025.703.703.945 1.447 1.025 1.934.058.346-.1.677-.348.925L19.774 7.76s-.353-1.06-1.414-2.12c-1.06-1.062-2.121-1.415-2.121-1.415z" >
                    </path>
                </svg>
            </h4>
            <div class='edit-tracker'>
                <input class='text-input' type='text' value="${data.name}" aria-value="${data._id}">
            </div>
    `


    nodeParent.appendChild(editItem)
    nodeParent.innerHTML += `
    <button id="deleteTracker" aria-value="${data._id}">
    <svg  width="25px" heigth="25px" background="none" viewBox="-3 0 32 32" version="1.1">
        <g>
        <g  transform="translate(-261.000000, -205.000000)" >
            <path d="M268,220 C268,219.448 268.448,219 269,219 C269.552,219 270,219.448 270,220 L270,232 C270,232.553 269.552,233 269,233 C268.448,233 268,232.553 268,232 L268,220 L268,220 Z M273,220 C273,219.448 273.448,219 274,219 C274.552,219 275,219.448 275,220 L275,232 C275,232.553 274.552,233 274,233 C273.448,233 273,232.553 273,232 L273,220 L273,220 Z M278,220 C278,219.448 278.448,219 279,219 C279.552,219 280,219.448 280,220 L280,232 C280,232.553 279.552,233 279,233 C278.448,233 278,232.553 278,232 L278,220 L278,220 Z M263,233 C263,235.209 264.791,237 267,237 L281,237 C283.209,237 285,235.209 285,233 L285,217 L263,217 L263,233 L263,233 Z M277,209 L271,209 L271,208 C271,207.447 271.448,207 272,207 L276,207 C276.552,207 277,207.447 277,208 L277,209 L277,209 Z M285,209 L279,209 L279,207 C279,205.896 278.104,205 277,205 L271,205 C269.896,205 269,205.896 269,207 L269,209 L263,209 C261.896,209 261,209.896 261,211 L261,213 C261,214.104 261.895,214.999 262.999,215 L285.002,215 C286.105,214.999 287,214.104 287,213 L287,211 C287,209.896 286.104,209 285,209 L285,209 Z" id="trash" >
            </path>
        </g>
        </g>
    </svg>
    </button>`

    return editItem;

}




function handleEventsInput(input: HTMLInputElement, nodeParent: HTMLElement) {
    function hideInput(element: HTMLElement) {
        setTimeout(() => {
            element.classList.remove('active')
        }, 150)
    }
    // listener to change cursor position on input
    input.addEventListener('focus', function () {
        const valueLength = this.value.length;
        this.setSelectionRange(valueLength, valueLength);
    });
    // listener to update name on tracker item
    input.addEventListener('change', () => {

        hideInput(nodeParent)

        editTracker(input.getAttribute('aria-value')!, { name: input.value })
            .then(() => createTrackerComponent())

    })
    // listener to update name on tracker item
    input.addEventListener('keypress', (e) => {

        if (e!.key === 'Enter') {
            hideInput(nodeParent);
        }
    })
    // listener to hide edit name tracker input
    input.addEventListener('focusout', () => {
        hideInput(nodeParent);

    })
}

function createTrackerChart(idHTMLElement: string, data: { records: any, title: string }, typeTracker: any) {
    // Default chart
    const chartData: { days: string[], values: number[], title: string } = {
        days: data.records.map((record: any) => {
            return new Date(record.creationTime).toLocaleDateString('en-US', { day: 'numeric', month: 'numeric' })
        }),
        values: [],
        title: data.title
    }

    if (typeTracker === 'timer') {
        chartData.values = data.records.map((record: any) => record.durationInSeconds)
        return createLineChart(idHTMLElement, chartData);
    } else if (typeTracker === 'habit') {
        chartData.values = data.records.map((record: any) => record.habitCompletion)
        return createBarChart(idHTMLElement, chartData);
    }

    return ''
}

