const Electrodomesticos = () => {
  function alerta() {
    alert("COMPRA EXITOSA");
  }

  const taladro =
    "https://belltec.com.co/6906-large_default/taladro-de-rotacion-industrial-38-pulg-dewalt-dwd014-b3.jpg";

  const pulidora =
    "https://belltec.com.co/3727-large_default/pulidora-4-12-1100w-sjs-ii-anti-restart-freno-mecanico.jpg";

  const hidrolavadora =
    "https://www.alkosto.com/medias/4054278047904-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wzNTg1OXxpbWFnZS9qcGVnfGltYWdlcy9oNDgvaGU5Lzg4NzgxODIwMDY4MTQuanBnfDMwMTcyODY5MjM5ZDJjZjE3ZGEwZDYyYTM3OWQwMDY3ZTlmZmE5NjlkNDgxYjgxMDBmYWFkODZiODNkYjgxOGQ";

  const motocierra =
    "https://equipmaster.com.co/wp-content/uploads/2021/05/Motosiera_STIHL_MS170_EQUIPMASTER.jpg";

  const guadaña =
    "https://www.savake.com.co/wp-content/uploads/2020/10/384669-2-1.png";

  const compresor =
    "https://fabriles.com.co/wp-content/uploads/2021/08/CAX1.5L.jpg";

  const motosoldador =
    "https://maquitecdecolombia.com/wp-content/uploads/2021/08/Motosoldador-VANTAGE-500-PERKINS-Lincoln-K2686-1-Vista-ppal.jpg";

  const martillo_demoledor =
    "https://belltec.com.co/3746-large_default/martillo-demoledor-avt-hex-31kg-makita-hm1812.jpg";

  const sierra_circular =
    "https://prodiamco.com/wp-content/uploads/cortadora-manual-madera.jpg";

  return (
    <>
      <h1 className="texto3">Equipos</h1>

      <div className="">
        <img
          alt="Imagen"
          onClick={alerta}
          src={taladro}
          height="200px"
          width="200px"
          HSPACE="5%"
        />
        <img
          alt="Imagen"
          onClick={alerta}
          src={hidrolavadora}
          height="200px"
          width="200px"
          HSPACE="15%"
          VSPACE="10px"
        />
        <img
          alt="Imagen"
          onClick={alerta}
          src={sierra_circular}
          height="200px"
          width="200px"
          HSPACE="5%"
        />
      </div>

      <div className="">
        <img
          alt="Imagen"
          onClick={alerta}
          src={guadaña}
          height="200px"
          width="200px"
          HSPACE="5%"
        />
        <img
          alt="Imagen"
          onClick={alerta}
          src={martillo_demoledor}
          height="200px"
          width="200px"
          HSPACE="15%"
          VSPACE="10px"
        />
        <img
          alt="Imagen"
          onClick={alerta}
          src={motocierra}
          height="200px"
          width="200px"
          HSPACE="5%"
        />
      </div>

      <div className="">
        <img
          alt="Imagen"
          onClick={alerta}
          src={motosoldador}
          height="200px"
          width="200px"
          HSPACE="5%"
        />
        <img
          alt="Imagen"
          onClick={alerta}
          src={compresor}
          height="200px"
          width="200px"
          HSPACE="15%"
          VSPACE="10px"
        />
        <img
          alt="Imagen"
          onClick={alerta}
          src={pulidora}
          height="200px"
          width="200px"
          HSPACE="5%"
        />
      </div>
    </>
  );
};
export default Electrodomesticos;
