const footer = document.createElement("footer")
footer.classList.add("footer")

const company = document.createElement("p")
company.classList.add("company")
company.textContent = "The Kid Studio BTL"

const copyright = document.createElement("p")
copyright.classList.add("copyright")
copyright.textContent = "© 2026 Todos los derechos reservados."


footer.appendChild(company)
footer.appendChild(copyright)


export { footer }