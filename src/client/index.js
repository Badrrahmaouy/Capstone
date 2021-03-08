import { formHandler } from './js/app'

import './styles/page.scss'
import './styles/header.scss'
import './styles/footer.scss'

export { formHandler }

window.addEventListener('load', (e) => {
    const form = document.getElementById('inputs')
    form.addEventListener('submit', formHandler)
})