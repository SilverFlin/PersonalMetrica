import createTracker from './components/mytrackers/createTracker.component';
import './style.css'
import './selector.css'
import darkModeChange,{setupTheme} from './components/buttonDark.component';
import createView from './components/mytrackers/tracker.view';

document.body.appendChild(darkModeChange());
const app=document.querySelector<HTMLDivElement>('#app')!


const trackersView = createView(app)
createTracker(trackersView);

setupTheme()
