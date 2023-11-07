import createTracker from './components/mytrackers/createTracker.component';
import './style.css'
import './selector.css'
import darkModeChange,{setupTheme} from './components/buttonDark.component';
import { myTrackersComponent } from './components/mytrackers/myTrackers.component';
import createView from './components/mytrackers/tracker.view';

document.body.appendChild(darkModeChange());
const app=document.querySelector<HTMLDivElement>('#app')!


const trackers = createView(app)
createTracker(trackers);
myTrackersComponent(trackers, [{ name: 'Tracker 1' }, { name: 'Tracker 2' },{ name: 'Tracker 3' }]);

setupTheme()
