
// -----------------------------------------------
//    1.Selección de constantes y variables 
// -----------------------------------------------



const proyectos = [


    { title: "Mattura", description: "Mattura", alt: "Mattura", file: "img/mattura/portadaImagen (2).png", logo: "img/logos/mattura-logo-blanco.png", description: "imagen 1", url: "mattura.html" },

    { title: "Rutea", description: "Rutea", alt: "Rutea", file: "img/rutea/portada.webp", logo: "img/logos/logo-rutea-blanco.png", description: "imagen 2", url: "rutea.html" },

    { title: "unavioska.", description: "unavioska.", alt: "unavioska.", file: "img/vioska/6 (1)_optimized_.webp", logo: "img/logos/una-vioska-blanco.png", description: "imagen 3", url: "una-vioska.html" },

    

    { title: "cocoZone", description: "cocoZone", alt: "cocoZone", file: "img/cocos/portada-color.webp", logo: "img/logos/cocos-logo.png", description: "imagen 4", url: "cocos.html" },

    { title: "Giftopia", description: "Giftopia", alt: "Giftopia", file: "img/giftopia/portada-princi.png", logo: "img/logos/giftopia-logo-rosa.png", description: "imagen 5", url: "giftopia.html" },

];



const proyectosMobile = document.querySelector(".Main-proyectos");


const slider = document.querySelector('.Main-slider');

const btnSig = document.querySelector("#btnSig");
const btnAnt = document.querySelector("#btnAnt");



// Páginas que va a tener mi slider (versión dekstop)

const pag1 = proyectos.slice(0, 3); //la primera página va a tener los 3 primeros proyectos 
const pag2 = proyectos.slice(3, 5); //segunda pagina con los ultimos 3 proyectos 

let paginaActual = 1; //mostramos la primera pagina








// -----------------------------------------------
//    2.Definición de funciones y eventListeners
// -----------------------------------------------


// Función cards mobile
function mostrarCardsMobile() {


    // Recorremos el array para escoger todos los objetos que lo componen 
    proyectos.forEach(proyecto => {
        const { file, description, logo, url } = proyecto;


        const cardMobile = document.createElement('div');
        cardMobile.classList.add('Main-card')

        cardMobile.innerHTML = `
                                    <img class = "Main-img" src = "${file}" alt = "${description}">

                                    <div class="Main-infoProyectos">
                                     <img class= "Main-logoCard" src="${logo}" alt = "${description}">
                                     

                                      <div class="Main-cardButton"><a href = "${url}">Ver proyecto</a>
                                   
                                          </div>
                    </div>
                    

                    `
        proyectosMobile.appendChild(cardMobile);
    }
    )
};




// Función slider Dekstop
function mostrarCards() {

    slider.innerHTML = ""; //limpiamos slider antes de agregar cards

    let proyectosPagina;

    if (paginaActual === 1) {
        proyectosPagina = pag1;  //mostrar proyectos 1,2 y 3


    } else if (paginaActual === 2) {  //mostramos proyectos 4, 5 y 6
        proyectosPagina = pag2;

    }




    proyectosPagina.forEach((proyecto) => {

        const card = document.createElement('div');

        card.classList.add('Main-card');
        card.innerHTML = `

                        <div class = "Card-btnLogo">
                            <img class = "Card-logo" src = "${proyecto.logo}" alt = "${proyecto.alt}">

                            <button class = "Card-button"> Ver proyecto
                            
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>

                             </button>
                        </div>
                        
                        <img src = "${proyecto.file}" alt = "${proyecto.alt}" class= "Card-img">

                         <div class="card-info">
                        <h3 class="card-title">${proyecto.title}</h3>
                        <p class="card-p">${proyecto.description}</p>
                    </div>

        `

        const button = card.querySelector(".Card-button"); //selección del botón de la tarjeta que voy a crear en la función mostrarCards()


        //evento click al botón de la card
        button.addEventListener('click', () => {

            window.location.href = proyecto.url;  //redirige a la url del proyecto
        });



        //agregar card al slider 
        slider.appendChild(card);

    });
}








btnSig.addEventListener('click', () => {


    if (paginaActual < 2) {
        paginaActual++;
        mostrarCards();
    }

});


btnAnt.addEventListener('click', () => {

    if (paginaActual > 1) {
        paginaActual--;
        mostrarCards();
    }

});







// -----------------------------------------------
//    3.Ejecutamos
// -----------------------------------------------
mostrarCardsMobile()
mostrarCards();
