import { formHandler } from './js/app'
import { postData } from "./js/postModule";

import './styles/page.scss'
import './styles/header.scss'
import './styles/footer.scss'

export { formHandler, postData }

window.addEventListener('load', (e) => {
    const form = document.getElementById('inputs')
    form.addEventListener('submit', formHandler)
})