

// 1. Definimos constantes y variables 

const lista_imagenes = [

    {file: "./img/mockups/mattura-mockup.png", descripcion: "mattura" },
    
    {file: "./img/mockups/rutea-mockup.png", descripcion: "unavioska" },
    
    {file: "./img/mockups/rutea-mockup.png", descripcion: "rutea" },
    
    {file: "img/mockups/mattura-mockup.png", descripcion: "music" },
    
    {file: "./img/mockups/cocos-mockup.png", descripcion: "cocos" },
    
    {file: "./img/mockups/gifto-mockup.png", descripcion: "giftopia" },
    
    
    ];
    
    
    
    
    const slider = document.querySelector(".Main-slider");
    let offset = 0; //control del desplazamiento
    const speed = 1; //velocidad del desplazamiento 
    const heigthImagen = 600;
    
    
    
    
    //2. Funciones
    
    function generarImagenes(){
    
    
        lista_imagenes.forEach((imagen) => {
    
            const image = document.createElement('img');
            image.classList.add('Main-imagenes');
            image.src = imagen.file;
            image.alt = imagen.descripcion;
            slider.appendChild(image);
    
        });
    
        //clonamos imagenes para generar el efecto infinito 
        const images = Array.from(slider.children);
        images.forEach((img) => {
            
            const clone = img.cloneNode(true);
            slider.appendChild(clone);
    
    
        });
    
    }
    
    
    
    function moverSlider(){
    
        offset -= speed; //mueve hacia arriba 
        if (offset <= -heigthImagen*lista_imagenes.length) {
            offset = 0
        }
    
        slider.style.transform = `translateY(${offset}px)`;
        requestAnimationFrame(moverSlider);
    
    }
    
    
    
    
    
    
    
    
    
    
    
    // const lista_logos = [
    
    //     {file: "./img/logos/mattura-logo.png", descripcion: "mattura" },
        
    //     {file: "./img/logos/una-vioska.png", descripcion: "unavioska"},
    //     {file: ".img/logos/rutea-logo-negro", descripcion: "rutea" },
        
    //     {file: "./img/logos/mattura-logo.png", descripcion: "music" },
        
    //     {file: ".img/logos/cocos-logo.png", descripcion: "cocos" },
        
    //     {file: ".img/logos/giftopia-logo.png", descripcion: "giftopia" },
        
    // ];    
    
    // const sliderMobile = document.querySelector(".Main-sliderMobile");
    // const widthLogo = 200;
    // let offsetMobile = 0; //control del desplazamiento
    // const speedMobile = 1; //velocidad del desplazamiento 
    
    
    
    
    
    
    
    // function generarLogos(){
    
    //     lista_logos.forEach((logo) => {
    
    //         const image = document.createElement('img');
    //         image.classList.add('Main-sliderLogos');
    //         image.src = logo.file;
    //         image.alt = logo.descripcion;
    //         sliderMobile.appendChild(image);
    
    //         console.log("estoy generando ", logo)
    
    //     });
    
    //     //clonamos imagenes para generar el efecto infinito 
    //     const logos = Array.from(slider.children);
    //     logos.forEach((img) => {
            
    //         const clone = img.cloneNode(true);
    //         slider.appendChild(clone);
    
    
    //     }); 
    // }
    
    
    // function moverSliderMobile(){
    
    //     offsetMobile -= speedMobile; //mueve hacia arriba 
    //     if (offsetMobile <= -widthLogo*lista_logos.length) {
    //         offsetMobile = 0
    //     }
    
    //     sliderMobile.style.transform = `translateX(${offsetMobile}px)`;
    //     requestAnimationFrame(moverSliderMobile);
    
    // }
    
    
    
    // //Llamamos a las funciones 
    
    
    // generarLogos();
    // moverSliderMobile();
    
    
    generarImagenes();
    moverSlider();
    
    