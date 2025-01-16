

//Lightbox 

//1. Definimos constantes y variables 

const imgList = document.querySelectorAll(".Onboarding-img");

const lightbox = document.querySelector(".Onboarding-lightbox")

const imagenLightbox = document.querySelector(".Onboarding-imagenGrande");

const closeBtn = document.querySelector(".Onboarding-close");



//Cuando hago click en una calse imagen, 
//añadimos la clase isActive
//tenemos que añadir a la imagen el atributo src de la imagen 


imgList.forEach((imagen,index) => {

    imgList[index].addEventListener('click', ()=> {


        lightbox.classList.add(`isActive`);
        imagenLightbox.src = imgList[index].src;

    })



});

//cuando hago click en close, 
//lightbox remove isActive

closeBtn.addEventListener(`click`, () =>{

    lightbox.classList.remove(`isActive`);

});