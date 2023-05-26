import {toggleSidebar} from '../../assets/scripts/index'

function App(){
    return(
        <>
        <div className="sidebar" id="sidebar">
        <div className="logo__details">
            <i className='bx bxl-nodejs'></i>
            <span className="logo__name">Rc Service</span>
        </div>
        <ul className="nav routes__pages">
            <li className="list__styleBar">
                <div className="dropdown">
                    <a href="">
                        <i className='bx bxs-bowl-rice'></i>
                        <span className="link__a">Prueba </span>
                    </a>
                </div>
            </li>
            <li className="list__styleBar">
                <div className="dropdown">
                    <a href="">
                        <i className='bx bxs-lemon'></i>
                        <span className="link__a">Prueba 2 </span>
                    </a>
                </div>
            </li>
            <li className="list__styleBar">
                <div className="dropdown">
                    <a href="">
                        <i className='bx bxs-objects-vertical-bottom'></i>
                        <span className="link__a">3 Prueba </span>
                    </a>
                </div>
            </li>
            <li className="list__styleBar">
                <div className="dropdown">
                    <a href="">
                        <i className='bx bxs-coffee-bean'></i>
                        <span className="link__a"> Cuarta Prueba </span>
                    </a>
                </div>
            </li>
        </ul>
    </div>

    <div className="home__section">
        <div className="home__content" >
            <div id='Contenedor'>
            <i className='bx bx-menu' id="btn_sidebar"  onClick={toggleSidebar}></i>
                
            </div>
            <div className='User__option'><h1>Admin</h1><i className='bx bxs-user-circle'></i></div>
        </div>
        <div ></div>
    </div>

    </>

    )
}
export default App;