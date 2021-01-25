const toggleMenu=document.getElementById('toggle-menu');
const asideBar=document.getElementById('asidebar');


toggleMenu.addEventListener('click',(e)=>
{
    // al hacer clic en una barra salta el evento como si hacemos clic en el div osea fuera de las barras y dentro de su 
    // contenedor y hay que controlar eso por posible fallos depende donde haga clic se puede mostrar o nu el menu
    console.dir(e.target);
    if(e.target.id=='toggle-menu' || e.target.parentElement.id=='toggle-menu')
    {
        asideBar.classList.toggle('show');
        toggleMenu.classList.toggle('show')
    }
})