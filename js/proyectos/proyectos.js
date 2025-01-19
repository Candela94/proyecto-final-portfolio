
// -----------------------------------------------
//    1.Selección de constantes y variables 
// -----------------------------------------------



const proyectos = [


    { title: "Mattura", description: "Mattura", alt: "Mattura", file:"imgs/portadas/mattura-portada.png" , logo: "Mattura",  url: "http://127.0.0.1:5500/proyecto-individual.html?id=1" },

    { title: "Rutea", description: "Rutea", alt: "Rutea", file: "imgs/portadas/portada-rutea.png", logo: "Rutea",  url: "http://127.0.0.1:5500/proyecto-individual.html?id=5" },

    { title: "unavioska.", description: "unavioska.", alt: "una vioska.", file:"imgs/portadas/portada-unavioska.png" , logo: "unavioska.",  url: "./vioska.html" },

    

    { title: "cocoZone", description: "cocoZone", alt: "cocoZone", file:"imgs/portadas/cocos-portada.jpg" , logo: "cocozone",  url: "http://127.0.0.1:5500/proyecto-individual.html?id=2" },

    { title: "Giftopia", description: "Giftopia", alt: "Giftopia", file:"imgs/portadas/portada-giftopia.png" , logo: "Giftopia", url: "http://127.0.0.1:5500/proyecto-individual.html?id=4" },

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
        const { file, alt, logo, url } = proyecto;


        const cardMobile = document.createElement('div');
        cardMobile.classList.add('Main-card')

        cardMobile.innerHTML = `
                                  <a href = "${url}" type = "proyectos navegacion" title= "proyectos"><img class = "Main-img" src = "${file}" alt = "${alt}"></a>

                                    <div class="Main-infoProyectos">
                                    <p class= "Main-cardTitulo"> ${logo}</p>

                                      <div class="Main-cardButton"><a href = "${url}" type = "proyectos navegacion" title= "proyectos"> Ver proyecto</a>>
                                   
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
                           <p class="Card-logo">${proyecto.logo}</p>
                            <button class = "Card-button"> Ver proyecto
                            
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>

                             </button>
                        </div>
                        
                        <img src = "${proyecto.file}" alt = "${proyecto.alt}" class= "Card-img">

                        

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
        const cards = slider.querySelectorAll('.Main-card');
        cards.forEach(card => card.classList.add('salir')); //Añade la animación diseñada en css 
        
        setTimeout(() => {

         paginaActual++;
        mostrarCards();

        const newCards = slider.querySelectorAll('.Main-card');
        newCards.forEach(card => card.classList.add('entrar'));


        },500);
        
      
    }

});


btnAnt.addEventListener('click', () => {



    if (paginaActual > 1) {
        const cards = slider.querySelectorAll('.Main-card');
        cards.forEach(card => card.classList.add('entrar')); //Añade la animación diseñada en css 
        
        setTimeout(() => {

         paginaActual--;
        mostrarCards();

        const newCards = slider.querySelectorAll('.Main-card');
        newCards.forEach(card => card.classList.add('salir'));


        },500);
        
      
    }
    
    

});







// -----------------------------------------------
//    3.Ejecutamos
// -----------------------------------------------
mostrarCardsMobile()
mostrarCards();
