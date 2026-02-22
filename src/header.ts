import { content } from './content/content'

const header = document.createElement("header")
header.classList.add("header")

const a_logo = document.createElement("a")
a_logo.href = "#"
a_logo.classList.add("a_logo")

const logo = document.createElement("img")
logo.src = content.header.logo_img
logo.alt = content.header.logo_alt
logo.classList.add("logo")

a_logo.appendChild(logo)

const links_divs = document.createElement("div")
links_divs.classList.add("links_divs")

const a_mail = document.createElement("a")
a_mail.href = `mailto:${content.email}`
a_mail.innerHTML = content.icons.mail_icon
a_mail.classList.add("a_mail")

const text_a_mail = document.createElement("span")
text_a_mail.classList.add("text_a_mail")
text_a_mail.textContent = content.email

a_mail.appendChild(text_a_mail)

const wa_btn_header = document.createElement("a")
wa_btn_header.href = content.whatsapp_link
wa_btn_header.classList.add("wa_btn_header")
wa_btn_header.innerHTML = content.icons.whatsapp_icon

const text_btn_header = document.createElement("span")
text_btn_header.textContent = content.header.btn_text
text_btn_header.classList.add("text_btn_header")


wa_btn_header.appendChild(text_btn_header)

links_divs.appendChild(a_mail)
links_divs.appendChild(wa_btn_header)


header.appendChild(a_logo)
header.appendChild(links_divs)

export { header }