import './style.css'
import { header } from './header'
import { main_body } from './body'
import { footer } from './footer'

const main = document.querySelector<HTMLDivElement>('#app')

main?.appendChild(header)
main?.appendChild(main_body)
main?.appendChild(footer)