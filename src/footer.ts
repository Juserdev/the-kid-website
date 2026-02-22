import { content } from './content/content'

const footer = document.createElement("footer")
footer.classList.add("footer")

const company = document.createElement("p")
company.classList.add("company")
company.textContent = content.footer.company

const copyright = document.createElement("p")
copyright.classList.add("copyright")
copyright.textContent = content.footer.copyright


footer.appendChild(company)
footer.appendChild(copyright)


export { footer }