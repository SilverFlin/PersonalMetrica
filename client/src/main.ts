import createTracker, { setupSelect } from './components/createTracker';
import selectChart from './components/selectChart';
import './style.css'
import './selector.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<!-- USAGE -->
${createTracker()}
<br>
${selectChart()}
`

// test 
const input = document.querySelector<HTMLTextAreaElement>('.text-input')
const button = document.querySelector<HTMLButtonElement>('#btn-create-tracker')
button!.addEventListener('click', () => {

  //TODO: implement same functionality as enter input
});
input!.addEventListener('keypress', (e) => {

  if (e.key === 'Enter') {
    e.preventDefault()
    const typeTracker = document.querySelector<HTMLInputElement>('.select-value');
    const body = {
      name: input!.value,
      typeTracker: typeTracker!.value
    }
    console.log(JSON.stringify(body))
    //TODO:: fetch
    fetch("http://localhost:3000/account/tracker/6545805733a99e070b50b1c6", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': '<token>'
      },
      body: JSON.stringify(body)
    })
      .then(res => {
        if (res.ok) {
          input!.value = ""
          return res.json()
        }
        throw new Error("Error")

      })
      .then(res => console.log(res))
      .catch(err => alert(err.message))
  }
});



//setup selects
setupSelect(document.querySelector<HTMLDivElement>('#select-type-tracker')!)
setupSelect(document.querySelector<HTMLDivElement>('#select-type-graphic')!)
