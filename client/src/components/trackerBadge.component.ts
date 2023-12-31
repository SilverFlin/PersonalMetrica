import { RecordList, TimerRecord, Tracker } from "../views/ProfilePage";

function getHabitSvg() {
  return `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="101"
                  height="100"
                  viewBox="0 0 101 100"
                  fill="none"
                >
                  <rect x="0.5" width="100" height="100" rx="50" fill="white" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M45.0648 21.5164C40.8749 24.7921 42.1124 31.6374 47.1958 33.3048C54.226 35.6099 59.4847 27.3393 54.2787 22.1659C51.6337 19.5382 47.9304 19.2769 45.0648 21.5164ZM49.4055 35.3213C45.5929 35.5538 44.4038 36.0107 41.0495 38.5269C36.5751 41.8838 36.3991 42.7519 38.5107 51.0091C39.7058 55.6829 39.8002 55.8069 42.1517 55.7995C45.0024 55.7914 45.0284 55.9397 43.0051 60.6135C41.8323 63.3238 40.4612 64.8908 37.4783 66.9324C35.2968 68.4256 33.3226 70.1373 33.0916 70.7352C32.6066 71.9915 34.1485 75.5012 35.357 75.8909C35.8064 76.0363 38.4632 74.3992 41.2597 72.2528C44.9519 69.4191 47.1066 67.0409 49.1269 63.5696C50.9304 60.4695 52.0489 59.1727 52.3089 59.8812C52.5288 60.4821 53.9051 64.2952 55.3683 68.3548C56.8308 72.4144 58.5161 76.4836 59.1126 77.3967C60.858 80.0686 65.3629 79.2146 65.3629 76.212C65.3629 75.6208 63.6916 70.5905 61.6491 65.0333C59.6065 59.476 57.9353 53.876 57.9353 52.5894V50.2496L62.3495 52.464C66.3448 54.4687 66.8736 54.5698 67.9202 53.529C69.9717 51.4904 69.3619 50.5921 63.8045 47.4647C59.7996 45.2105 59.5991 44.9492 58.352 40.3692C57.2074 36.1694 55.9521 34.4584 54.3463 34.9102C54.0737 34.9869 51.8499 35.1722 49.4055 35.3213ZM42.9494 44.4148C42.6962 45.0511 42.9279 47.3761 43.4642 49.5816C44.4164 53.4988 44.4387 53.5239 44.4149 50.6401C44.38 46.5 43.5407 42.9334 42.9494 44.4148Z"
                    fill="#5C5C5C"
                  />
                </svg>`
}

function getTimerSvg() {
  return `
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="101"
        height="100"
        viewBox="0 0 101 100"
        fill="none"
    >
        <rect x="0.5" width="100" height="100" rx="50" fill="white" />
        <path
        d="M40.0506 21V28.2753H47.326V28.4936C34.9579 30.2397 25.5 40.9344 25.5 53.7389C25.5 67.7803 36.9223 79.2026 50.9636 79.2026C65.005 79.2026 76.4272 67.7803 76.4272 53.7389C76.4272 50.465 75.6997 47.4094 74.6084 44.6448L67.9879 47.4094C68.7882 49.5193 69.1519 51.5563 69.1519 53.8117C69.1519 63.9244 61.0763 72 50.9636 72C40.8509 72 32.7753 63.9244 32.7753 53.8117C32.7753 43.699 40.8509 35.6234 50.9636 35.6234C53.1462 35.6234 55.2561 35.9872 57.3659 36.7874L59.8395 29.9486C58.1662 29.3666 56.4201 29.0756 54.6013 28.7846V28.3481H61.8766V21.0728H40.0506V21ZM76.4272 29.4394C76.4272 29.4394 49.8723 49.883 48.49 51.2653C47.1077 52.7204 47.1077 54.8302 48.49 56.2853C49.8723 57.7404 52.0549 57.7404 53.51 56.2853C54.965 54.8302 76.5 29.4394 76.5 29.4394H76.4272Z"
        fill="#5C5C5C"
        />
        </svg>
`
}


function createBadgeDescription(recordList: RecordList) {
  let coreValue: number = 0;



  let innerText = ''
  if (recordList.typeRecord === 'timer') {
    recordList.records.forEach((record) => {
      coreValue += (record as TimerRecord).durationInSeconds;
    })
    coreValue = coreValue / recordList.records.length
    coreValue = coreValue / 60


    innerText = `avarage of <span class="inline text-[#FF5F5F]">${coreValue.toFixed(3)}</span> min`
  } else if (recordList.typeRecord === 'habit') {
    let consecutiveDays = 0;
    let currentDay = new Date();
    let index = 0;
    while (index < recordList.records.length) {
      if (isSameDay(currentDay, new Date(recordList.records[index].creationTime))) {
        consecutiveDays++;
        currentDay.setDate(currentDay.getDate() - 1);
      } else break;
      index++;
    }
    innerText = `<span class="text-[#FF5F5F] inline">${consecutiveDays}</span> consecutive days`
  }

  return innerText
}

function isSameDay(date1: Date, date2: Date) {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

function getTrackerBadgeComponent(tracker: Tracker, recordList: RecordList) {
  let svg: string = '';
  if (tracker.typeTracker === "habit") {
    svg = getHabitSvg();
  } else if (tracker.typeTracker === "timer") {
    svg = getTimerSvg();
  }


  const description = createBadgeDescription(recordList)

  // TODO add dynamic description

  return `<div
              class="rounded-[0.6rem] bg-gray-200 flex w-[13rem] h-[8.5rem] px[0.3rem] pb-[1.5rem] flex-col justify-end items-center gap-[0.6rem]"
            >
              <div
                class="w-[6.25rem] h-[6.25rem] shrink-0 bg-white rounded-full"
              >
                ${svg}
              </div>
              <h1
                class="font-extralight text-center text-xl h-[1.25rem] w-[8.3rem]"
              >
                ${tracker.name}
              </h1>

              <p
                class="w-[8.3rem] h-[1.25rem] text-xs text-center font-semibold lowercase"
              >
              ${description}
              </p>
            </div>`

}

// <div
//               class="rounded-[0.6rem] bg-gray-200 flex w-[13rem] h-[8.5rem] px[0.3rem] pb-[1.5rem] flex-col justify-end items-center gap-[0.6rem]"
//             >
//               <div
//                 class="w-[6.25rem] h-[6.25rem] shrink-0 bg-white rounded-full"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="101"
//                   height="100"
//                   viewBox="0 0 101 100"
//                   fill="none"
//                 >
//                   <rect x="0.5" width="100" height="100" rx="50" fill="white" />
//                   <path
//                     d="M40.0506 21V28.2753H47.326V28.4936C34.9579 30.2397 25.5 40.9344 25.5 53.7389C25.5 67.7803 36.9223 79.2026 50.9636 79.2026C65.005 79.2026 76.4272 67.7803 76.4272 53.7389C76.4272 50.465 75.6997 47.4094 74.6084 44.6448L67.9879 47.4094C68.7882 49.5193 69.1519 51.5563 69.1519 53.8117C69.1519 63.9244 61.0763 72 50.9636 72C40.8509 72 32.7753 63.9244 32.7753 53.8117C32.7753 43.699 40.8509 35.6234 50.9636 35.6234C53.1462 35.6234 55.2561 35.9872 57.3659 36.7874L59.8395 29.9486C58.1662 29.3666 56.4201 29.0756 54.6013 28.7846V28.3481H61.8766V21.0728H40.0506V21ZM76.4272 29.4394C76.4272 29.4394 49.8723 49.883 48.49 51.2653C47.1077 52.7204 47.1077 54.8302 48.49 56.2853C49.8723 57.7404 52.0549 57.7404 53.51 56.2853C54.965 54.8302 76.5 29.4394 76.5 29.4394H76.4272Z"
//                     fill="#5C5C5C"
//                   />
//                 </svg>
//               </div>
//               <h1
//                 class="font-extralight text-center text-xl h-[1.25rem] w-[8.3rem]"
//               >
//                 5km run
//               </h1>
//               <p
//                 class="w-[8.3rem] h-[1.25rem] text-xs text-center font-semibold lowercase"
//               >
//                 avarage of <span class="inline text-[#FF5F5F]">8.8 min</span>
//               </p>
//             </div>

export default getTrackerBadgeComponent;

