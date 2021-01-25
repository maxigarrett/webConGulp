const prev=document.getElementById('prev');
const next=document.getElementById('next');

// como obtenemos todos los objetos llamados igulaes necesitamos iterlos por eso lo pasamos a array con FROM
const images=Array.from(document.querySelectorAll('.abaut__img'));
const texts=Array.from(document.querySelectorAll('.abaut__text'));

// este contador va a determinar en q orden del array estamos
let cont=0;

if(prev)
{
    prev.addEventListener('click',()=>
    {
        // al hacer clic en el boton previus sacmos la clase show que muestra la primer img y texto
        images.map(image=>image.classList.remove('show'));
        texts.map(text=>text.classList.remove('show'));

        // preguntamos si apretamos en la flecha con id prev ya que estamos en evento clic de prev
        // con este if vemos si estamos en la primera foto ya que como es un array la primer foto va a ser 0
        // y si esta en 0 a cont le decimos q sea igual images(array).length -1(le restamos uno para q arranque de o xq es un array)
        if(cont==0) cont=images.length-1;
        else cont--;//en caso contrario le restamos 1
        images[cont].classList.add('show');
        texts[cont].classList.add('show');
    })
}

if(next)
{
    next.addEventListener('click',()=>
    {
        // al hacer clic en el boton previus sacmos la clase show que muestra la primer img y texto
        images.map(image=>image.classList.remove('show'));
        texts.map(text=>text.classList.remove('show'));

       
        if(cont==images.length-1)cont=0 ;
        else cont++;//en caso contrario le restamos 1
        images[cont].classList.add('show');
        texts[cont].classList.add('show');
    })
}