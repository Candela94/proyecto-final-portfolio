

// --------------------------
//      Variables
//---------------------------

const headers = document.querySelectorAll(".Acordeon-header");




// --------------------------
//   Funciones y listeners
//---------------------------


headers.forEach((header) => {

    header.addEventListener("click", ( )=> {

        //Buscamos el siguiente hermano directo relacionado 
        const cont = header.nextElementSibling;

        if(cont.classList.contains("active")) {
            cont.classList.remove("active");

        } else {
            document.querySelectorAll(".Acordeon-contenido").forEach((content) => {
                content.classList.remove("active");

            });

            cont.classList.add("active");
        }





        // contenido.forEach((content) => {
        //     content.classList.remove("active");

        // });

        // cont.classList.toggle("active");


    });

});

