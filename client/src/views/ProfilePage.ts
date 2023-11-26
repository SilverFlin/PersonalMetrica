import getTrackerBadgeComponent from "../components/trackerBadge.component";
import { httpGetRecordList, httpGetUserFromToken } from "../hooks/requests";

export interface Tracker {
  _id: string,
  name: string,
  typeTracker: string,
  creationTime: string,
  recordId: string,
}

export interface RecordList {
  records: HabitRecord[] | TimerRecord[],
  typeRecord: string,
}

export interface HabitRecord {

}

export interface TimerRecord {
  durationInSeconds: number,
}

export interface UserProfile {
  email: string;
  url_img: string;
  createdAt: string;
  trackers: Tracker[];
}

async function loadUser(): Promise<UserProfile | null> {
  let user: UserProfile | null = await httpGetUserFromToken(sessionStorage.getItem("token")!)
  return user;
}

async function getTrackerRecords(trackerId: string): Promise<any> {
  let recordList = await httpGetRecordList(trackerId);
  return recordList
}

function timeAgo(timestamp: Date): string {
  const now = new Date();
  const diff = now.getTime() - timestamp.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  return `${days} days old`;
}

async function getAllBadges(user?: UserProfile): Promise<string> {
  let allBadges: string = '';

  if (user) {
    for (let tracker of user.trackers) {
      let trackerBadge = getTrackerBadgeComponent(tracker, await httpGetRecordList(tracker.recordId));
      allBadges += trackerBadge;
    }
  }

  return allBadges;
}

export default async function getProfilePage() {
  let user = await loadUser()
    .catch((error) => {
      console.log(error);
      window.location.hash = "#login";
      return;
    });

  let username = user?.email.split('@')[0];
  let userDaysOld = timeAgo(new Date(user?.createdAt as string));


  let allBadges: string = '';

  if (user) {
    allBadges = await getAllBadges(user);
  }

  return `
        <div
      class="flex h-screen w-full px-[5rem] py-[3rem] gap-8 items-start justify-center"
    >
      <div class="flex flex-col items-start gap-[1.6rem]">
        <div
          class="shadow-xl bg-gray-100 rounded-tl-[2.2rem] flex w-[27.5rem] h-[25rem] flex-col justify-center gap-7 items-center"
        >
          <div class="flex w-[23rem] justify-center items-start gap-[5.125rem]">
            <div
              class="bg-cover rounded-full w-[8.5rem] h-[8.5rem]"
              style="
                background-image: url('https://source.unsplash.com/random');
              "
            ></div>
            <div
              class="flex flex-col justify-between items-end flex-1 self-stretch"
            >
              <p class="text-[2rem] font-extralight max-w-[10rem] text-ellipsis overflow-hidden">${username}</p>
              <p class="text-[2rem] font-extralight">${userDaysOld}</p>
            </div>
          </div>
          <div
            class="shadow-xl bg-gray-100 rounded-[1.06rem] flex w-[15.75rem] py-[1.5rem] justify-center align-center gap-[0.625]"
          >
            <p
              class="text-center text-[2rem] tracking-widest font-extralight italic"
            >
              «Rookie»
            </p>
          </div>
        </div>

        <div
          class="bg-cover shadow-xl flex w-[27.5rem] h-[25rem] flex-col justify-center items-center rounded-bl-[2.2rem] bg-white"
          style="background-image: url('https://source.unsplash.com/random')"
        ></div>
      </div>

      <div
        class="shadow-xl flex h-[51.6rem] w-[67rem] bg-gray-100 rounded-r-[2.2rem] gap-[1.5rem] items-center flex-col py-[2.5rem]"
      >
        <h1 class="uppercase text-center text-4xl font-light">
          Trackers Summary
        </h1>
        <!-- Scrolleable -->
        <div class="flex w-[61.3rem] bg-white">
          <div
            class="overflow-y-scroll flex h-[40rem] py-[3rem] justify-center items-start content-start flex-1 flex-wrap gap-[3.8rem]"
          >
            <!-- Badges -->
            ${allBadges}
            <!-- End of Badges -->
          </div>
        </div>
      </div>
    </div>`
}