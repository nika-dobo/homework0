let body = document.body

let div = document.createElement("div")

let p = document.createElement("p")
div.appendChild(p)
p.textContent("hello world")

let button = document.createElement("button")
div.appendChild(button)

body.appendChild(div)