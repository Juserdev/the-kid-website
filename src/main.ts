import './style.css'
import { header } from './header'
import { main_body } from './body'
import { footer } from './footer'
import { container_video } from './container-video'

const main = document.querySelector<HTMLDivElement>('#app')

const container = document.createElement("div")
container.classList.add('continaer-content')

container_video(main!)
main?.appendChild(header)
main?.appendChild(container)

// container?.appendChild(header)
container?.appendChild(main_body)
container?.appendChild(footer)