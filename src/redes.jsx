const Redes = () => {
    
    const instagram="https://images.vexels.com/media/users/3/137380/isolated/preview/1b2ca367caa7eff8b45c09ec09b44c16-logotipo-de-icono-de-instagram.png"

    const twitter="https://cdn-icons-png.flaticon.com/512/3670/3670151.png"

    const facebook="https://cdn-icons-png.flaticon.com/512/145/145802.png"

    const whatsapp="https://cdn-icons-png.flaticon.com/512/3670/3670051.png"
    return (
        <div className="imagenh">

        <h1 className="texto3" > Mis Redes Sociales </h1>

        <a href="https://www.facebook.com/haider.rojas.9"> <img alt="Imagen" src={facebook} height="200px" width="200px"/> </a>  &nbsp; &nbsp; &nbsp; &nbsp; 
        
        <a href="https://instagram.com/haiderrojas84?igshid=YmMyMTA2M2Y="><img alt="Imagen" src={instagram} height="200px" width="200px"/> </a> &nbsp; &nbsp; &nbsp; &nbsp; 

        <a href="https://wa.me/573202502483"><img alt="Imagen" src={whatsapp} height="200px" width="200px" /> </a> &nbsp; &nbsp; &nbsp; &nbsp;

        <a href="https://twitter.com/Hayder09993466?t=yYN_9v-RZLFdS9ZBnmwipAs=09"><img alt="Imagen" src={twitter} height="200px" width="200px" /> </a>

    </div>
    );
  };
  export default Redes;
  