import { printMenu } from "./menu"
import { printContact } from "./contact"
import './style.css'

printMenu("Atiqur")
printContact("Atiqur")

const div = document.createElement('div')
div.id = "content"
const h1 = document.createElement('h1')
h1.innerText = "Foodiz Resturant"
div.appendChild(h1)

document.body.appendChild(div)