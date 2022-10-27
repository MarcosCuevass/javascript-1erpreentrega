const div = document.getElementsByClassName("testDiv");
// console.log(div);

const etiquetaPe = document.createElement("p");
etiquetaPe.textContent = "Hello World";

div[0].appendChild(etiquetaPe);
