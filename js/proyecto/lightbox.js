

//Lightbox 

//1. Definimos constantes y variables 

const imgList = document.querySelectorAll(".Lightbox-imgs"); 



const lightbox = document.querySelector(".Div-lightbox")

const imagenLightbox = document.querySelector(".Lightbox-imagenGrande");

const closeBtn = document.querySelector(".Lightbox-close");



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