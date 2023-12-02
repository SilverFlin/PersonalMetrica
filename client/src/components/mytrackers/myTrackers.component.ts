
import trackerComponent from "./tracker.component";

export function myTrackersComponent(nodeParent: HTMLElement, data?: any) {
    const myTrackers = document.createElement('div');
    const myTrackersHeader = document.createElement('div');
    const myTrackersBody = document.createElement('div');

    myTrackers.classList.add('my-trackers');
    myTrackersHeader.classList.add('my-trackers-header');
    myTrackersBody.classList.add('my-trackers-body');
    myTrackersHeader.innerHTML = '<h1 class="text-3xl">My Trackers</h1>';

    myTrackers.appendChild(myTrackersHeader);
    myTrackers.appendChild(myTrackersBody);

    nodeParent.appendChild(myTrackers)
    if (data.length === 0) {
        myTrackersBody.innerHTML = `
        <div 
        class="my-trackers-body-empty">
            <p>You don't have any trackers yet.</p>
        </div>
        `
        return;
    }

    data.reverse();

    trackerComponent(myTrackersBody, data)!

}

