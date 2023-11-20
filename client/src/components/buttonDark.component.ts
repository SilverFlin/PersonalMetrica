
export function setTheme() {
    const theme = localStorage.getItem('theme')
    if (theme === null || theme === '') {
        localStorage.setItem('theme', 'dark');
        document.body.classList.add('dark');
        return 'dark'
    }


    localStorage.setItem('theme', '');
    document.body.classList.remove('dark');
    return ''
}

export function setupTheme() {
    const theme = localStorage.getItem('theme')
    if (theme) {
        document.body.className = theme;
    }

}


export default function darkModeChange() {
    const containerDarkMode = document.createElement('div');
    containerDarkMode.classList.add('container-dark-mode');
    const buttonDarkMode = document.createElement('button');
    buttonDarkMode.classList.add('btn-dark-mode');
    buttonDarkMode.classList.add('btn-primary');

    buttonDarkMode.innerHTML = 'Dark Mode';

    buttonDarkMode.addEventListener('click', () => {
        if (setTheme() === 'dark') {
            buttonDarkMode.innerHTML = 'Light Mode';
            return
        }
        buttonDarkMode.innerHTML = 'Dark Mode';


    })
    containerDarkMode.appendChild(buttonDarkMode);

    return containerDarkMode;
}
