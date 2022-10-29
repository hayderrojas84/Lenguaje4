import {Link} from "react-router-dom"
const Header =()=>{

    return(

            
        <div className="menut">
            
            <Link to="inicio" className="textoI"> INICIO</Link> &nbsp; &nbsp; &nbsp;
            <Link to="herramientas" className="textoI"> HERRAMIENTAS </Link> &nbsp; &nbsp; &nbsp;
            <Link to="materiales" className="textoI"> MATERIALES </Link> &nbsp; &nbsp; &nbsp;
            <Link to="electrodomesticos" className="textoI"> ELECTRODOMESTICOS </Link> &nbsp; &nbsp; &nbsp;
            <Link to="redes" className="textoI" >REDES SOCIALES</Link> &nbsp; &nbsp; &nbsp;

        </div>
        
    )
};
export default Header