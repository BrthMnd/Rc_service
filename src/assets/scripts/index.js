
export function toggleSidebar() {
    
    let sidebar = document.getElementById('sidebar');
    let Contenedor = document.getElementById('btn_sidebar');
    // console.log("hola");
    sidebar.classList.toggle('close');
    Contenedor.classList.toggle('close');


}