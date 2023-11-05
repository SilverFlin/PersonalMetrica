export default function () {
    return `<div class="select-type" id="select-type-graphic" role="select">
    <div class="option-type-selected">
        <div class="option-type" value="none">
            <div class="option-icon"><svg height="25" viewBox="0 0 19 30" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.51873 0C6.33123 0 3.96873 0.975 2.46873 2.475C0.968725 3.975 0.443726 5.85 0.256226 7.275L4.00623 7.7625C4.15623 6.825 4.45623 5.8875 5.16873 5.175C5.88123 4.4625 7.00623 3.75 9.51873 3.75C11.9937 3.75 13.3437 4.35 14.0937 5.025C14.8437 5.7 15.1437 6.525 15.1437 7.5C15.1437 10.6125 13.8687 11.475 11.9937 13.125C10.1187 14.775 7.64373 17.175 7.64373 21.5625V22.5H11.3937V21.5625C11.3937 18.45 12.5562 17.5875 14.4312 15.9375C16.3062 14.2875 18.8937 11.8875 18.8937 7.5C18.8937 5.7 18.2562 3.675 16.6812 2.2125C15.0687 0.75 12.6687 0 9.51873 0ZM7.64373 26.25V30H11.3937V26.25H7.64373Z" />
                </svg>
            </div>
            <div class="option-text"> <span>Chart?</span></div>

        </div>
    </div>
    <div class="arrow"><svg width="35" height="23" viewBox="0 0 35 23" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M1.2757 1.84614C0.458397 2.67257 0 3.78798 0 4.95029C0 6.11261 0.458397 7.22802 1.2757 8.05445L14.1342 21.0267C15.088 21.9674 16.3218 22.4355 17.5424 22.4355C18.7631 22.4355 19.975 21.9674 20.9069 21.0267L33.7261 8.09821C34.5423 7.27122 35 6.15601 35 4.99405C35 3.83208 34.5423 2.71687 33.7261 1.88989C33.3243 1.4822 32.8455 1.15845 32.3175 0.937468C31.7894 0.716488 31.2227 0.602691 30.6503 0.602691C30.078 0.602691 29.5113 0.716488 28.9832 0.937468C28.4552 1.15845 27.9764 1.4822 27.5746 1.88989L17.5206 12.0271L7.42714 1.84614C7.02447 1.44003 6.54536 1.11769 6.01746 0.897717C5.48956 0.67774 4.92332 0.564484 4.35142 0.564484C3.77952 0.564484 3.21329 0.67774 2.68539 0.897717C2.15749 1.11769 1.67838 1.44003 1.2757 1.84614Z" />
        </svg>
    </div>
    <ul class="select-menu">
        <li class="select-item" value="barChart">
            <div class="option-icon"><svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0V21H24V18H3V0H0ZM15 0V15H21V0H15ZM6 6V15H12V6H6Z" />
            </svg>
            
            </div>
            <div class="option-text"> <span>Bar Chart</span></div>

        </li>
        <li class="select-item" value="lineChart">
            <div class="option-icon"><svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.3995 9.75556L20.0635 1.61111L21.9665 2.72222L16.2135 12.7778L9.05251 8.61111L3.80551 17.7778H21.9995V20H-0.000488281V0H2.19951V16.1556L8.24951 5.55556L15.3995 9.75556Z" fill="#686B6F"/>
            </svg>
            </div>
            <div class="option-text"> <span>Line Chart</span></div>

        </li>
    </ul>
</div>`
}