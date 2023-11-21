(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();function L(e){e.innerHTML=`
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
                <div class="option-text"> <span>Habbit</span></div>
    
            </li>
        </ul>
    </div>
    <textarea class="text-input" rows="1" placeholder="What is your tracker?"></textarea>
    <button class="btn-primary" id="btn-create-tracker">create</button>
    </div>
    </form>`,h(e.querySelector("#select-type-tracker")),f(e.querySelector("#createTracker"))}function h(e){const t=e.querySelector(".option-type"),n=e.querySelectorAll(".select-item");e.addEventListener("click",()=>{e.classList.toggle("active")}),n.forEach(i=>{i.addEventListener("click",()=>{t.innerHTML=`<input class="select-value" type="radio" value="${i.getAttribute("value")}" checked>`+i.innerHTML})})}function f(e){const t=e.querySelector(".text-input");e.querySelector("#btn-create-tracker").addEventListener("click",()=>{const i=e.querySelector(".select-value"),r={name:t.value,typeTracker:i.value};u(r),t.value=""}),t.addEventListener("keypress",i=>{const r=e.querySelector(".select-value");if(i.key==="Enter"){i.preventDefault();const a={name:t.value,typeTracker:r.value};u(a),t.value=""}})}function u(e){console.log(JSON.stringify(e)),fetch("http://localhost:3000/account/tracker/id????",{method:"POST",headers:{"Content-Type":"application/json","x-auth-token":"<token>"},body:JSON.stringify(e)}).then(t=>{if(t.ok)return t.json();throw new Error("Error")}).then(t=>console.log(t)).catch(t=>alert(t.message))}function y(){const e=localStorage.getItem("theme");return e===null||e===""?(localStorage.setItem("theme","dark"),document.body.classList.add("dark"),"dark"):(localStorage.setItem("theme",""),document.body.classList.remove("dark"),"")}function w(){const e=localStorage.getItem("theme");e&&(document.body.className=e)}function k(){const e=document.createElement("div");e.classList.add("container-dark-mode");const t=document.createElement("button");return t.classList.add("btn-dark-mode"),t.classList.add("btn-primary"),t.innerHTML="Dark Mode",t.addEventListener("click",()=>{if(y()==="dark"){t.innerHTML="Light Mode";return}t.innerHTML="Dark Mode"}),e.appendChild(t),e}function b(e,t){const n=document.createElement("div");n.classList.add("select-type"),n.id=t.idHTMLElement,n.role="select",e.appendChild(n),n.innerHTML=`
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
            <path d="M15.3995 9.75556L20.0635 1.61111L21.9665 2.72222L16.2135 12.7778L9.05251 8.61111L3.80551 17.7778H21.9995V20H-0.000488281V0H2.19951V16.1556L8.24951 5.55556L15.3995 9.75556Z" />
            </svg>
            </div>
            <div class="option-text"> <span>Line Chart</span></div>

        </li>
    </ul>  
`,h(n)}function M(e,t){const n=document.createElement("div");return n.classList.add("tracker"),e.appendChild(n),t&&t.forEach(i=>{const r=document.createElement("div"),a=document.createElement("div"),o=document.createElement("div"),c=document.createElement("div");o.classList.add("tracker-item-footer"),r.classList.add("tracker-item"),a.classList.add("tracker-item-header"),c.classList.add("tracker-item-body"),n.appendChild(r),r.appendChild(a),r.appendChild(c),T(a,i),c.innerHTML+=`
                        <div class="tracker-chart">
                        component to chart js
                        </div>
                    `,o.innerHTML='<button class="btn-primary">Capture entry</button>',b(o,{idHTMLElement:"select-type-graphic"}),r.appendChild(o);const l=r.querySelector(".edit-tracker"),p=r.querySelector("input"),m=a.querySelector("button"),g=o.querySelector("button");m.addEventListener("click",()=>{console.log("fetch... detelete")}),g.addEventListener("click",()=>{console.log("Capture entry.....")}),r.querySelector(".edit-item").addEventListener("click",()=>{l.classList.add("active"),p.focus()}),E(p,l)}),n}function T(e,t){const n=document.createElement("div");return n.classList.add("edit-item"),n.innerHTML=`
            <h4>${t.name} 
                <svg width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                    <path  d="m3.99 16.854-1.314 3.504a.75.75 0 0 0 .966.965l3.503-1.314a3 3 0 0 0 1.068-.687L18.36 9.175s-.354-1.061-1.414-2.122c-1.06-1.06-2.122-1.414-2.122-1.414L4.677 15.786a3 3 0 0 0-.687 1.068zm12.249-12.63 1.383-1.383c.248-.248.579-.406.925-.348.487.08 1.232.322 1.934 1.025.703.703.945 1.447 1.025 1.934.058.346-.1.677-.348.925L19.774 7.76s-.353-1.06-1.414-2.12c-1.06-1.062-2.121-1.415-2.121-1.415z" >
                    </path>
                </svg>
            </h4>
            <div class='edit-tracker'>
                <input class='text-input' type="text" value="${t.name}">
            </div>
    `,e.appendChild(n),e.innerHTML+=`
    <button>
    <svg  width="25px" heigth="25px" background="none" viewBox="-3 0 32 32" version="1.1">
        <g>
        <g  transform="translate(-261.000000, -205.000000)" >
            <path d="M268,220 C268,219.448 268.448,219 269,219 C269.552,219 270,219.448 270,220 L270,232 C270,232.553 269.552,233 269,233 C268.448,233 268,232.553 268,232 L268,220 L268,220 Z M273,220 C273,219.448 273.448,219 274,219 C274.552,219 275,219.448 275,220 L275,232 C275,232.553 274.552,233 274,233 C273.448,233 273,232.553 273,232 L273,220 L273,220 Z M278,220 C278,219.448 278.448,219 279,219 C279.552,219 280,219.448 280,220 L280,232 C280,232.553 279.552,233 279,233 C278.448,233 278,232.553 278,232 L278,220 L278,220 Z M263,233 C263,235.209 264.791,237 267,237 L281,237 C283.209,237 285,235.209 285,233 L285,217 L263,217 L263,233 L263,233 Z M277,209 L271,209 L271,208 C271,207.447 271.448,207 272,207 L276,207 C276.552,207 277,207.447 277,208 L277,209 L277,209 Z M285,209 L279,209 L279,207 C279,205.896 278.104,205 277,205 L271,205 C269.896,205 269,205.896 269,207 L269,209 L263,209 C261.896,209 261,209.896 261,211 L261,213 C261,214.104 261.895,214.999 262.999,215 L285.002,215 C286.105,214.999 287,214.104 287,213 L287,211 C287,209.896 286.104,209 285,209 L285,209 Z" id="trash" >
            </path>
        </g>
        </g>
    </svg>
    </button>`,n}function E(e,t){function n(i){setTimeout(()=>{i.classList.remove("active")},150)}e.addEventListener("focus",function(){const i=this.value.length;this.setSelectionRange(i,i)}),e.addEventListener("change",()=>{n(t),console.log("fetch... update")}),e.addEventListener("keypress",i=>{i.key==="Enter"&&n(t)}),e.addEventListener("focusout",()=>{n(t)})}function H(e,t){const n=document.createElement("div"),i=document.createElement("div"),r=document.createElement("div");n.classList.add("my-trackers"),i.classList.add("my-trackers-header"),r.classList.add("my-trackers-body"),i.innerHTML="<h1>My Trackers</h1>",n.appendChild(i),n.appendChild(r),e.appendChild(n),M(r,t)}function x(e){const t=document.createElement("div");return t.id="mytrackers",t.classList.add("my-trackers"),e.appendChild(t),t}function s(){return`
        <nav>
            <a href="#/"> Home </a>
            <a href="#login"> Login </a>
            <a href="#register"> Register </a>
            <a href="#dashboard"> Dashboard </a>
            <a href="#profile"> Profile </a>
        </nav>
    `}function V(){return`
        <p>landing pagse</p>
    `}function S(){return`
        <img src="https://i.imgur.com/4AiXzf8.png" alt="logo" class="logo">
    `}function Z(){return`
    ${s()}
    ${V()}
    `}function q(){return`
   ${s()}
   ${S()}
   `}function I(){return`
    ${s()}
    <p>register page</p>`}function B(){return`
    ${s()}
    <p>dashboard page</p>`}function D(){return`
    ${s()}
    <p>profile page</p>`}const v={404:{title:"404",description:"Page not found",template:"<p>404</p>"},"/":{title:"Landing",description:"Landing page",template:Z()},login:{title:"Login",description:"Login page",template:q()},register:{title:"Register",description:"Register page",template:I()},dashboard:{title:"Dashboard",description:"Dashboard page",template:B()},profile:{title:"Profile",description:"Profile page",template:D()}},d=async()=>{let e=window.location.hash.replace("#","");e.length==0&&(e="/"),v[e]||(e="404");const t=v[e],n=t.template;document.getElementById("app").innerHTML=n,document.title=t.title};function O(){window.addEventListener("hashchange",d),window.addEventListener("DOMContentLoaded",d),d()}document.body.appendChild(k());const P=document.querySelector("#app"),C=x(P);L(C);H(C,[{name:"Tracker 1"},{name:"Tracker 2"},{name:"Tracker 3"}]);O();w();
