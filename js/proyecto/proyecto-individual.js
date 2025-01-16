

//1. Definimos constantes y variables 

const proyectos = [

    //Proyecto Mattura
    {
        id: 1,
        h1: "MATTURA",
        h2: "e-commerce",
        descripcion: "Descubre este e-commerce de un negocio local que fabrica muebles de madera de una forma amigable y sostenible con el medio ambiente",
        url: "",


        onboarding: [

            { src: "imgs/mattura/onboarding-1.png", alt: "onboarding1" },
            { src: "imgs/mattura/onboarding-2.png", alt: "onboarding2" },
            { src: "imgs/mattura/onboarding-3.png", alt: "onboarding3" },
            { src: "imgs/mattura/onboarding-4.png", alt: "onboarding4" },



        ],

        //Imagenes del proyecto
        imagenes: [
            { src: "imgs/mattura/home-inicio.png", alt: "Imagen" },
            { src: "imgs/mattura/cartel-1.png", alt: "Imagen" },
            { src: "imgs/mattura/producto.png", alt: "Imagen" },
            { src: "imgs/mattura/cartel-2.png", alt: "Imagen" },
            { src: "imgs/mattura/detalle.png", alt: "Imagen" },
            
            { src: "imgs/mattura/trabajos.png", alt: "Imagen" },
            { src: "imgs/mattura/portada.png", alt: "Imagen" }, 
            { src: "imgs/mattura/log-in.png", alt: "Imagen" },
            { src: "imgs/mattura/cartel-3.png", alt: "Imagen" },
            { src: "imgs/mattura/categorias.png", alt: "Imagen" },

            
            { src: "imgs/mattura/cartel-4.png", alt: "Imagen" },
            { src: "imgs/mattura/contacto.png", alt: "Imagen" },
            { src: "imgs/mattura/imagen-estanteria.png", alt: "Imagen" },
            { src: "imgs/mattura/favs.png", alt: "Imagen" },

        

        ],

        inicio: [

          
            { src: "imgs/mattura/img-tronco.png", alt: "portada" },
            { src: "imgs/mattura/imagen-detalle.png", alt: "detalle2" },
            { src: "imgs/mattura/imagen-estanteria.png", alt: "detalle2" },
           

        ],
    },


    //Proyecto cocozone
    {
        id:2,
        h1: "cocozone",
        h2: "userexperiencie,gaming,UX/UI design",
        descripcion: " cocozone es una plataforma gaming en la que puedes comprar y vender juegos, y jugar online. Únete y forma parte de la comunidad coco!",
        url: "",



        onboarding: [

            { src: "imgs/cocos/onboarding1.png", alt: "onboarding1" },
            { src: "imgs/cocos/onboarding2.jpg", alt: "onboarding2" },
            { src: "imgs/cocos/onboarding3.jpg", alt: "onboarding3" },
            { src: "imgs/cocos/onboarding4.png", alt: "onboarding4" },



        ],


           //Imagenes del proyecto
           imagenes: [
               { src: "imgs/cocos/chat.png", alt: "Imagen" },
            { src: "imgs/cocos/cartel-1.png", alt: "Imagen" },
            { src: "imgs/cocos/perfil.png", alt: "Imagen" },
            { src: "imgs/cocos/cartel-3.png", alt: "Imagen" },
            { src: "imgs/cocos/cartel-4.png", alt: "Imagen" },

            { src: "imgs/cocos/registro.png", alt: "Imagen" },
            { src: "imgs/cocos/portada.png", alt: "Imagen" },
            { src: "imgs/cocos/cartel-2.png", alt: "Imagen" },
            { src: "imgs/cocos/minijuegos.png", alt: "Imagen" },
            { src: "imgs/cocos/cartel-5.png", alt: "Imagen" },
            { src: "imgs/cocos/filtrado.png", alt: "Imagen" },
            { src: "imgs/cocos/tus-juegos.png", alt: "Imagen" },
           
            { src: "imgs/cocos/home.png", alt: "Imagen" },
           
            { src: "imgs/cocos/registro1.png", alt: "Imagen" },



        ],


        //Imagenes del proyecto
       
        inicio: [

          
            { src: "imgs/cocos/portada-color.png", alt: "Imagen" },
            { src: "imgs/cocos/coco-2.jpg", alt: "Imagen" },
            { src: "imgs/cocos/coco1.jpg", alt: "Imagen" },
           

        ],





     

    }

];




//2. Queremos obtener el ID del proyecto desde la URL 

const urlParams = new URLSearchParams(window.location.search);
const proyectoId = Number(urlParams.get("id"));//obtenemos el parámetro id de la URL
console.log('este es mi proyecto ', proyectoId);

const contenedorProyecto = document.querySelector("#Main-contenedorProyecto");
const proyecto = proyectos.find(p => p.id == proyectoId);


if(proyecto) {

    contenedorProyecto.innerHTML =`



    <section class="Main-intro">

    <div class="Main-introduccionMobile">
        <div class="Main-imgLogo">

            <img src="${proyecto.inicio[0].src}" alt="${proyecto.inicio[0].alt}" class="Main-img">

            <div class="Main-logoBoton">
               
                <svg></svg>
            </div> 

                 <div class="Main-descripcion">
                  
                </div>
         
           
        </div>
        </div>


  <!-- ------------------------------ -->
  <!--   INTRO VERSION DEKSTOP         -->
  <!-- ------------------------------ -->

   <div class="Main-introDekstop">


            <div class="Main-textoImagenes">


                <div class="Main-texto">

                    <h1 class="Main-h1Dekstop">${proyecto.h1}</h1>
                    <div class="Main-hastaghs">
                        <h2 class="Main-h2Dekstop">#userexperience</h2>
                        <h2 class="Main-h2Dekstop">${proyecto.h2}</h2>
                        <h2 class="Main-h2Dekstop">#ux/ui</h2>
                    </div>

                </div>


                <div class="Main-imagenes">
                    <img src="${proyecto.inicio[1].src}" alt="${proyecto.inicio[1].alt}" class="Main-imagenesIntro">
                     <img src="${proyecto.inicio[2].src}" alt="${proyecto.inicio[2].alt}" class="Main-imagenesIntro">
                   
                </div>


            </div>



            <div class="Main-imagenPrincipal">
               <img src="${proyecto.inicio[0].src}" alt="${proyecto.inicio[0].alt}" class = "Main-imagenPpal">
              
                <img src="">
            </div>


        </div>





  <section class="Main-content">
      
    <section class="Onboarding" id="Seccion-onboarding">
    <h2 class="Main-h2">Onboarding</h2>

    <div class="Onboarding-imagenes">
      <img src="${proyecto.onboarding[0].src}" alt="${proyecto.onboarding[0].alt}" class="Onboarding-img">
      <img src="${proyecto.onboarding[1].src}" alt="${proyecto.onboarding[1].alt}" class="Onboarding-img">
      <img src="${proyecto.onboarding[2].src}" alt="${proyecto.onboarding[2].alt}" class="Onboarding-img">
      <img src="${proyecto.onboarding[3].src}" alt="${proyecto.onboarding[3].alt}" class="Onboarding-img">
 </div>
      <div class="Onboarding-lightbox ">
                    <button class="Onboarding-close">
                        <svg class="Onboarding-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                          </svg>
                    </button>
                    <img  alt="imagenGrande" class="Onboarding-imagenGrande">
                </div>
            </section>


  <section class="Prototipado" id="Seccion-prototipado">
                <h2 class="Main-h2">Prototipado</h2>

                <div class="Prototipado-imagenes">


        <img src="${proyecto.imagenes[0].src}" alt="${proyecto.imagenes[0].alt}" class="Prototipado-img">
                   

     <img src="${proyecto.imagenes[1].src}" alt="${proyecto.imagenes[1].alt}" class="Prototipado-img">

        <img src="${proyecto.imagenes[2].src}" alt="${proyecto.imagenes[2].alt}" class="Prototipado-img">
                  
    <img src="${proyecto.imagenes[4].src}" alt="${proyecto.imagenes[4].alt}" class="Prototipado-img">
              
        <img src="${proyecto.imagenes[5].src}" alt="${proyecto.imagenes[5].alt}" class="Prototipado-img">
        <img src="${proyecto.imagenes[6].src}" alt="${proyecto.imagenes[6].alt}" class="Prototipado-img">
        <img src="${proyecto.imagenes[7].src}" alt="${proyecto.imagenes[7].alt}" class="Prototipado-img">

        <img src="${proyecto.imagenes[8].src}" alt="${proyecto.imagenes[8].alt}" class="Prototipado-img">

         <img src="${proyecto.imagenes[9].src}" alt="${proyecto.imagenes[9].alt}" class="Prototipado-img">
              
           <img src="${proyecto.imagenes[10].src}" alt="${proyecto.imagenes[10].alt}" class="Prototipado-img">

             <img src="${proyecto.imagenes[11].src}" alt="${proyecto.imagenes[11].alt}" class="Prototipado-img">

                  <img src="${proyecto.imagenes[12].src}" alt="${proyecto.imagenes[12].alt}" class="Prototipado-img">









                </div>
            </section>
            
  



              <section class="Main-contentDekstop">
            <div class="Acordeon">

                <section class="Acordeon-onboarding ">


                    <div class="Acordeon-header">
                        <h2 class="Acordeon-h2">Onboarding</h2>
                    </div>

                    <div class="Acordeon-contenido">
                        <p class="Acordeon-onboardingP">
                        </p>

                        <div class="Acordeon-onboardingImagenes ">
    <img src="${proyecto.onboarding[0].src}" alt="${proyecto.onboarding[0].alt}" class="Acordeon-onboardingImg">
      <img src="${proyecto.onboarding[1].src}" alt="${proyecto.onboarding[1].alt}" class="Acordeon-onboardingImg">
      <img src="${proyecto.onboarding[2].src}" alt="${proyecto.onboarding[2].alt}" class="Acordeon-onboardingImg">
      <img src="${proyecto.onboarding[3].src}" alt="${proyecto.onboarding[3].alt}" class="Acordeon-onboardingImg">
                            

                        </div>
                    </div>


                </section>


                <section class="Acordeon-prototipado">




                    <div class="Acordeon-header">
                        <h2 class="Acordeon-h2">Prototipado</h2>
                    </div>




    <div class="Acordeon-contenido">


        <div class="Acordeon-prototipadoImagenes">


        <img src="${proyecto.imagenes[0].src}" alt="${proyecto.imagenes[0].alt}" class="Prototipado-img">
                   

        <img src="${proyecto.imagenes[1].src}" alt="${proyecto.imagenes[1].alt}" class="Acordeon-prototipadoImg">

        <img src="${proyecto.imagenes[2].src}" alt="${proyecto.imagenes[2].alt}" class="Acordeon-prototipadoImg">
                  
        <img src="${proyecto.imagenes[4].src}" alt="${proyecto.imagenes[4].alt}" class="Acordeon-prototipadoImg">
              
        <img src="${proyecto.imagenes[5].src}" alt="${proyecto.imagenes[5].alt}" class="Acordeon-prototipadoImg">
        <img src="${proyecto.imagenes[6].src}" alt="${proyecto.imagenes[6].alt}" class="Acordeon-prototipadoImg">
        <img src="${proyecto.imagenes[7].src}" alt="${proyecto.imagenes[7].alt}" class="Acordeon-prototipadoImg">

        <img src="${proyecto.imagenes[8].src}" alt="${proyecto.imagenes[8].alt}" class="Acordeon-prototipadoImg">

        <img src="${proyecto.imagenes[9].src}" alt="${proyecto.imagenes[9].alt}" class="Acordeon-prototipadoImg">
              
        <img src="${proyecto.imagenes[10].src}" alt="${proyecto.imagenes[10].alt}" class="Acordeon-prototipadoImg">

        <img src="${proyecto.imagenes[11].src}" alt="${proyecto.imagenes[11].alt}" class="Acordeon-prototipadoImg">

        <img src="${proyecto.imagenes[12].src}" alt="${proyecto.imagenes[12].alt}" class="Acordeon-prototipadoImg">

                           

        </div>



    </div>

                </section>



                <section class="Acordeon-video ">


                    <div class="Acordeon-header">
                        <h2 class="Acordeon-h2">Video</h2>
                    </div>


                    <div class="Acordeon-contenido">
                        <video src="./img/mattura/prototipado/video-mattura.mp4" class="Acordeon-videoVideo"
                            controls></video>
                    </div>


                </section>

            </div>
        </section>

    
    `



} else {
    console.log("Proyecto no encontrado")
};







//Acordeon 


