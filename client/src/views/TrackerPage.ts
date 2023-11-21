import createTrackerComponent from "../components/mytrackers/createTracker.component";


export function bindTrackerPage(){
    createTrackerComponent();
}

export default function getTrackerPage() {
    
    return `<div class="my-trackers" id="mytrackers"></div>`;

}