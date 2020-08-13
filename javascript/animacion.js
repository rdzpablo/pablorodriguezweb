const filtros = document.querySelector(".lista-filtros").children;

for (let i = 0; i < filtros.length; i++) {
    filtros[i].addEventListener("click", function () {
        for (let j = 0; j < filtros.length; j++) {
            filtros[j].classList.remove("active");
        }
        this.classList.add("active");
        const dataTarget = this.getAttribute("data-target");

        const galeria = document.querySelector(".galeria-portfolio").children;

        for (let k = 0; k < galeria.length; k++) {
            galeria[k].style.display = "none";
            if (galeria[k].getAttribute("data-id") == dataTarget) {
                galeria[k].style.display = "block";
            }
            else if (dataTarget == "todos") {
                galeria[k].style.display = "block";
            }
        }

    })
}




