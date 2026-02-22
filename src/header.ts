import whatsappIcon from '../public/whatsapp.svg?raw'
import mailIcon from '../public/mail.svg?raw'
import logo_the_kid from '../public/Logo.png'

const header = document.createElement("header")
header.classList.add("header")

const a_logo = document.createElement("a")
a_logo.href = "wa.me/573165296938"
a_logo.classList.add("a_logo")

const logo = document.createElement("img")
logo.src = logo_the_kid
logo.classList.add("logo")

a_logo.appendChild(logo)

const links_divs = document.createElement("div")
links_divs.classList.add("links_divs")

const a_mail = document.createElement("a")
a_mail.href = "mailto:ventas@thekid.com.co"
a_mail.innerHTML = mailIcon
a_mail.classList.add("a_mail")

const text_a_mail = document.createElement("span")
text_a_mail.classList.add("text_a_mail")
text_a_mail.textContent = "ventas@thekid.com.co"

a_mail.appendChild(text_a_mail)

const wa_btn_header = document.createElement("a")
wa_btn_header.href = "#"
wa_btn_header.classList.add("wa_btn_header")
wa_btn_header.innerHTML = whatsappIcon

const text_btn_header = document.createElement("span")
text_btn_header.textContent = "Contáctanos"
text_btn_header.classList.add("text_btn_header")


wa_btn_header.appendChild(text_btn_header)

links_divs.appendChild(a_mail)
links_divs.appendChild(wa_btn_header)


header.appendChild(a_logo)
header.appendChild(links_divs)

export { header }