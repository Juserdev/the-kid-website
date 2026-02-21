import whatsappIcon from '../public/whatsapp.svg?raw'
import taskAlt from '../public/task_alt.svg?raw'
import heroVideo from './assets/videos/video.mp4'

const main_body = document.createElement("main")
main_body.classList.add("main")

const left_container = document.createElement("div")
left_container.classList.add("left_container")

const info_tags_container = document.createElement("div")
info_tags_container.classList.add("info_tags_container")

const tags = [
  { text: "ACTIVACIONES", class_1: "tag", class_2: "tag_1" },
  { text: "INCENTIVOS", class_1: "tag", class_2: "tag_2" },
  { text: "EXPERIENCIA", class_1: "tag", class_2: "tag_3" },
]

tags.forEach(tag => {
  const p = document.createElement("p")
  p.textContent = tag.text
  p.classList.add(tag.class_1, tag.class_2)

  info_tags_container.appendChild(p)
})


const texts_container = document.createElement("div")
texts_container.classList.add("texts_container")

const title = document.createElement("h1")
title.classList.add("title")
title.textContent = "Las mejores ideas empiezan jugando."

const paragraph = document.createElement("p")
paragraph.classList.add("paragraph")
paragraph.textContent = "Nos gustan las ideas inquietas, las marcas valientes y los proyectos que no se parecen a los demás. Estamos preparando algo nuevo, pero ya podemos empezar contigo."

texts_container.appendChild(title)
texts_container.appendChild(paragraph)

const wa_btn_header = document.createElement("a")
wa_btn_header.href = "#"
wa_btn_header.classList.add("wa_btn_header")
wa_btn_header.innerHTML = whatsappIcon

const text_btn_main = document.createElement("span")
text_btn_main.textContent = "Juguemos juntos"
text_btn_main.classList.add("text_btn_header")

wa_btn_header.appendChild(text_btn_main)

const down_tags = [
  { icon: taskAlt, text: "Producción integral" },
  { icon: taskAlt, text: "Medición de impacto" },
  { icon: taskAlt, text: "Retorno de Experiencia" },
]

const down_tags_container = document.createElement("div")
down_tags_container.classList.add("down_tags_container")

down_tags.forEach(down_tag => {
  const container = document.createElement("div")
  container.classList.add("down_container")
  container.innerHTML = down_tag.icon

  const span = document.createElement("span")
  span.classList.add("down_task_text")
  span.textContent = down_tag.text

  container.appendChild(span)
  down_tags_container.appendChild(container)
})

left_container.appendChild(info_tags_container)
left_container.appendChild(texts_container)
left_container.appendChild(wa_btn_header)
left_container.appendChild(down_tags_container)

// RIGHT CONTAINER


const right_container = document.createElement("div")
right_container.classList.add("right_container")

const video = document.createElement("video")
video.classList.add("hero_video")
video.autoplay = true;
video.muted = true;
video.loop = true;
video.playsInline = true;


const source = document.createElement("source")
source.src = heroVideo
source.type = "video/mp4"

video.appendChild(source)

right_container.appendChild(video)

main_body.appendChild(left_container)
main_body.appendChild(right_container)


export { main_body }