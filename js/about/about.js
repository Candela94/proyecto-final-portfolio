


//1. Constantes y variables

const paginas = document.querySelectorAll(".Acordeon-pag");
const contenidos = document.querySelectorAll(".Acordeon-contenido");



//2. Funciones y addEventListeners


paginas.forEach((pagina) => {

    pagina.addEventListener("click", () => {

        const contenido = pagina.querySelector(".Acordeon-contenido")
    


        //Cerramos las páginas del acordeón

        paginas.forEach(pag => {
            if (pag !== pagina) {
                pag.classList.remove("u-isActive");
                pag.querySelector(".Acordeon-contenido").classList.remove("u-txtActive");
            }
        });


        //Alternamos clase en la página seleccionada
        const isActive = pagina.classList.toggle("u-isActive");
      

        //mostramos y ocultamos el contenido

        if (isActive) {
            contenido.classList.add("u-txtActive");
        } else {
            contenido.classList.remove("u-txtActive");
         }

    });

        //Aseguramos de que el contenido esté cerrado al cargar la página 
        paginas.forEach((pagina) =>{

            pagina.classList.remove("u-isActive");
            pagina.querySelector(".Acordeon-contenido").classList.remove("u-txtActive");

        });



});


// paginas[0].click();