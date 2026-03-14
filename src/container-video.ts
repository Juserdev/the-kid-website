import { content } from "./config/content.config";


export function container_video(main: HTMLDivElement) {
  const container = document.createElement('div')
  container.classList.add('container-video')

  const video = document.createElement("video")
  video.classList.add("hero_video")
  video.autoplay = true;
  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  video.src = content.main.video

  container.appendChild(video)

  //* CREACION DE SCROLL DOWN

  const adc = content.arrow_down.container
  const adi = content.arrow_down.icon

  const container_arrow_down = document.createElement('div')
  container_arrow_down.classList.add(adc.class)

  const content_arorw = document.createElement("div")
  content_arorw.classList.add('content_arrow')

  const icon_arrow_down = document.createElement('img')
  icon_arrow_down.src = adi.src
  icon_arrow_down.alt = adi.alt
  icon_arrow_down.classList.add(adi.class)

  content_arorw.appendChild(icon_arrow_down)
  container_arrow_down.appendChild(content_arorw)

  container.appendChild(container_arrow_down)

  main.appendChild(container)
}