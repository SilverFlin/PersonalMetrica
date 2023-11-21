import './style.css'
import './selector.css'
import darkModeChange, { setupTheme } from './components/buttonDark.component';
import { setupRouting } from './routing';

document.body.appendChild(darkModeChange());

setupRouting()
setupTheme()

