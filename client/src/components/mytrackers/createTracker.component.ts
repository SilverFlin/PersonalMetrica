import { httpCreateTracker, httpGetTrackers } from "../../hooks/requests";
import { myTrackersComponent } from "./myTrackers.component";



export default function createTrackerComponent() {
    const nodeParent = document.getElementById('mytrackers')!;
    nodeParent.innerHTML = `
    <form  id="createTracker">
    <div class="form-tracker"  tabindex="0">
    
    <div class="select-type" id="select-type-tracker" role="select">
        <div class="option-type-selected">
            <div class="option-type" value="none">
                <div class="option-icon"><svg height="25" viewBox="0 0 19 30" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.51873 0C6.33123 0 3.96873 0.975 2.46873 2.475C0.968725 3.975 0.443726 5.85 0.256226 7.275L4.00623 7.7625C4.15623 6.825 4.45623 5.8875 5.16873 5.175C5.88123 4.4625 7.00623 3.75 9.51873 3.75C11.9937 3.75 13.3437 4.35 14.0937 5.025C14.8437 5.7 15.1437 6.525 15.1437 7.5C15.1437 10.6125 13.8687 11.475 11.9937 13.125C10.1187 14.775 7.64373 17.175 7.64373 21.5625V22.5H11.3937V21.5625C11.3937 18.45 12.5562 17.5875 14.4312 15.9375C16.3062 14.2875 18.8937 11.8875 18.8937 7.5C18.8937 5.7 18.2562 3.675 16.6812 2.2125C15.0687 0.75 12.6687 0 9.51873 0ZM7.64373 26.25V30H11.3937V26.25H7.64373Z" />
                    </svg>
                </div>
                <div class="option-text"> <span>Tracker</span></div>
                
                </div>
                <input class="select-value" type="text" value="none" >
        </div>
        <div class="arrow"><svg width="35" height="23" viewBox="0 0 35 23" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M1.2757 1.84614C0.458397 2.67257 0 3.78798 0 4.95029C0 6.11261 0.458397 7.22802 1.2757 8.05445L14.1342 21.0267C15.088 21.9674 16.3218 22.4355 17.5424 22.4355C18.7631 22.4355 19.975 21.9674 20.9069 21.0267L33.7261 8.09821C34.5423 7.27122 35 6.15601 35 4.99405C35 3.83208 34.5423 2.71687 33.7261 1.88989C33.3243 1.4822 32.8455 1.15845 32.3175 0.937468C31.7894 0.716488 31.2227 0.602691 30.6503 0.602691C30.078 0.602691 29.5113 0.716488 28.9832 0.937468C28.4552 1.15845 27.9764 1.4822 27.5746 1.88989L17.5206 12.0271L7.42714 1.84614C7.02447 1.44003 6.54536 1.11769 6.01746 0.897717C5.48956 0.67774 4.92332 0.564484 4.35142 0.564484C3.77952 0.564484 3.21329 0.67774 2.68539 0.897717C2.15749 1.11769 1.67838 1.44003 1.2757 1.84614Z" />
            </svg>
        </div>
        <ul class="select-menu">
            <li class="select-item" value="timer">
                <div class="option-icon"><svg width="27" height="30" viewBox="0 0 27 30" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.5 0V3.75H11.25V3.8625C4.875 4.7625 0 10.275 0 16.875C0 24.1125 5.8875 30 13.125 30C20.3625 30 26.25 24.1125 26.25 16.875C26.25 15.1875 25.875 13.6125 25.3125 12.1875L21.9 13.6125C22.3125 14.7 22.5 15.75 22.5 16.9125C22.5 22.125 18.3375 26.2875 13.125 26.2875C7.9125 26.2875 3.75 22.125 3.75 16.9125C3.75 11.7 7.9125 7.5375 13.125 7.5375C14.25 7.5375 15.3375 7.725 16.425 8.1375L17.7 4.6125C16.8375 4.3125 15.9375 4.1625 15 4.0125V3.7875H18.75V0.0375H7.5V0ZM26.25 4.35C26.25 4.35 12.5625 14.8875 11.85 15.6C11.1375 16.35 11.1375 17.4375 11.85 18.1875C12.5625 18.9375 13.6875 18.9375 14.4375 18.1875C15.1875 17.4375 26.2875 4.35 26.2875 4.35H26.25Z" />
                    </svg>
                </div>
                <div class="option-text"> <span>Timer</span></div>
    
            </li>
            <li class="select-item" value="habit">
                <div class="option-icon"><svg width="19" height="30" viewBox="0 0 19 30" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M6.0963 0.771033C3.97916 2.43667 4.60443 5.9173 7.17307 6.76513C10.7254 7.93723 13.3826 3.73187 10.752 1.10131C9.41555 -0.234802 7.54425 -0.367662 6.0963 0.771033ZM8.28962 7.79048C6.36314 7.90871 5.76227 8.14103 4.06736 9.42046C1.80649 11.1274 1.71754 11.5687 2.78455 15.7674C3.38842 18.1438 3.43609 18.2069 4.62432 18.2031C6.06477 18.199 6.07791 18.2744 5.05556 20.6509C4.46294 22.0291 3.77011 22.8258 2.26286 23.864C1.16057 24.6232 0.162996 25.4936 0.0462738 25.7976C-0.198805 26.4363 0.580342 28.2209 1.19097 28.4191C1.41804 28.493 2.76053 27.6606 4.17357 26.5692C6.03925 25.1284 7.12803 23.9191 8.14887 22.154C9.06013 20.5777 9.62535 19.9183 9.75671 20.2786C9.8678 20.5841 10.5633 22.523 11.3026 24.5872C12.0416 26.6514 12.8932 28.7205 13.1946 29.1847C14.0765 30.5434 16.3528 30.1091 16.3528 28.5824C16.3528 28.2817 15.5084 25.724 14.4763 22.8983C13.4441 20.0726 12.5997 17.2251 12.5997 16.5709V15.3812L14.8302 16.5071C16.849 17.5264 17.1162 17.5779 17.645 17.0487C18.6816 16.0121 18.3735 15.5553 15.5654 13.9651C13.5417 12.8189 13.4404 12.686 12.8102 10.3572C12.2319 8.22172 11.5976 7.35174 10.7862 7.58144C10.6484 7.62047 9.52477 7.71467 8.28962 7.79048ZM5.02741 12.4143C4.89943 12.7378 5.01652 13.9201 5.2875 15.0415C5.76865 17.0333 5.77991 17.046 5.7679 15.5797C5.75026 13.4746 5.32616 11.6611 5.02741 12.4143Z" />
                    </svg>
                </div>
                <div class="option-text"> <span>Habit</span></div>
    
            </li>
        </ul>
    </div>
    <input class="text-input" rows="1" placeholder="What is your tracker?"></input>
    <button class="btn-primary" id="btn-create-tracker type="submit">create</button>
    </div>
    </form>`
    //setup selects
    setupSelect(nodeParent.querySelector<HTMLDivElement>('#select-type-tracker')!)
    bindFormCreateTracker(nodeParent.querySelector<HTMLDivElement>('#createTracker')!)

    // fetch to get trackers from server
    httpGetTrackers().then(res => {
        myTrackersComponent(nodeParent, res);
    })
}

export function setupSelect(element: HTMLDivElement,handleChange?:any) {
    const selected = element.querySelector<HTMLDivElement>('.option-type')
    const items = element.querySelectorAll('.select-item')
    const option = element.querySelector<HTMLInputElement>('.select-value');  
    if(!option){
        return;
    }
    element.addEventListener('click', () => {
        element.classList.toggle('active')
    });

    items.forEach(item => {
        item.addEventListener('click', () => {
            selected!.innerHTML = `${item.innerHTML}`;  
            const value = item.getAttribute('value')!;
            option.setAttribute("value",value); 
            if(handleChange){
                handleChange(value);
            }
        })
    })    
}

function bindFormCreateTracker(nodeParent: HTMLElement) {
    // test 
    const input = nodeParent.querySelector<HTMLTextAreaElement>('.text-input')
    function createTracker() {
        const selectedTypeTracker = nodeParent.querySelector<HTMLInputElement>('.select-value');
        const name = input?.value;
        const typeTracker = selectedTypeTracker?.value;
        if (!name||/^s*$/.test(name)) { alert("name must not be empty"); return; }
        if (!typeTracker ||typeTracker==='none') { alert("type tracker must be selected"); return; }

        httpCreateTracker(
            {
                name,
                typeTracker
            }
        ).then(() => {
            createTrackerComponent();
            input!.value = 'none'
        })
        // handle error

    }

    nodeParent.addEventListener('submit', (e) => {
        e.preventDefault();
        createTracker();
    });



}

