const topbar=document.getElementById('topbar');//para localizar cuando hacemos clic en la barra superior

const loginModal=document.getElementById('login-modal');
const registerModal=document.getElementById('register-modal');

const loginForm=document.getElementById('login-form');
const registerFomr=document.getElementById('register-form');

//en este caso el topbar esta en todas la paginas pero es recomendable preguntar si existe por si el proyecto crece y en algun
// lado no esta el topbar entonces prevenimos que haya eventos y se disparen lo q causaria error, es decir, comprobamos si el
// elemento existe antes de agregar eventos
if(topbar)
{
    topbar.addEventListener('click',(e)=>
    {
        //si en el topbar hacemos clic donde dice login buscaremos el padre con parentElement que es el div topbar__icon que
        // tiene como atributo un data-type=login por consola se verá en dataset dentro del div topbar__icon y dira login
        console.dir(e.target.parentElement.dataset.type);

        // si es distinto a undefined significa que hemos echo clic en el login dentro del div que este div tiene un data-type
        if(e.target.parentElement.dataset.type!= undefined)
        {
            if(e.target.parentElement.dataset.type=='login')//una ves que no sea undefined vemos si es login o register
            {
                loginModal.classList.add('lightbox--show');
            }else if(e.target.parentElement.dataset.type=='register')
            {
                registerModal.classList.add('lightbox--show');
            }
        }
    })
}


if(loginModal)//si existe osea que esta abierta
{
    loginModal.addEventListener('click',(e)=>
    {
        //si hicimos clic en la ventana no en el formulario verificamos con contain si existe la clase
        if(e.target.classList.contains('lightbox'))
        {
            loginModal.classList.remove('lightbox--show');//sacamos la clase para que desaparezca la modal de login
        }
    })
}
if(registerModal)
{
    registerModal.addEventListener('click',(e)=>
    {
        if(e.target.classList.contains('lightbox'))
        {
            registerModal.classList.remove('lightbox--show');
        }
    })
}

//SI EXISTE EL FORMULARIO DE LOGIN
if(loginForm)
{
    loginForm.addEventListener('submit',(e)=>
    {
        e.preventDefault();

        setTimeout(()=>
        {
            //en un metodo para hacer perder el foco en este caso al boton que le dimos con css para que cuando acamos
            // clic y tenga el foco se active una escala que lo hace mas chico y lo metemos en un setTimeout para que tarde
            e.target.button.blur();
        },800)
        console.log('SEND');
    })
}

//SI EXISTE EL FORMULARIO DE REGISTRO
if(registerFomr)
{
    registerFomr.addEventListener('submit',(e)=>
    {
        e.preventDefault();
        console.log('SEND');
    })
}