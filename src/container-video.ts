import { content } from "./content/content";

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


  main.appendChild(container)
}