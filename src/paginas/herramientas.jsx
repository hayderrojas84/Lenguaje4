
const Herramientas = () => {
  function alerta(){
    alert("COMPRA EXITOSA")
  }

  const martillo="https://belltec.com.co/2059-large_default/martillo-con-mango-de-madera-cabeza-conica.jpg"

  const almadana="https://sucasamateriales.com/Inicio/wp-content/uploads/2018/07/almadana-con-cabo-colima-4libras-D_NQ_NP_961811-MCO27316691926_052018-F.jpg"

  const escuadra="https://upload.wikimedia.org/wikipedia/commons/1/1b/Vinkli.jpg"

  const destornillador="https://inversionesproin.com/wp-content/uploads/2020/07/60004.jpeg"

  const serrucho="https://belltec.com.co/6162-large_default/serrucho-luctador.jpg"

  const segueta="https://belltec.com.co/11846-large_default/marco-psegueta-12pulg-stanley-15098.jpg"

  const alicate="https://belltec.com.co/14746-large_default/alicate-electricista-stanley-84056.jpg"

  const hombre_solo="https://www.ferreteriasamir.com/2138-home_default/hombre-solo-10-curvo-84-369-stanley.jpg"

  const pinza="https://www.steren.com.co/media/catalog/product/cache/b69086f136192bea7a4d681a8eaf533d/image/173682f9e/pinza-de-punta.jpg"




  return (
    <>
      <h1 className="texto3">Herramientas</h1>

      <div className="">
        <img
          alt="imagen"
          onClick={alerta}
          src={martillo}
          height="200px"
          width="200px"
          HSPACE="5%"
        />
        <img
          alt="imagen"
          onClick={alerta}
          src={destornillador}
          height="200px"
          width="200px"
          HSPACE="15%"
          VSPACE="10px"
        />
        <img
          alt="imagen"
          onClick={alerta}
          src={alicate}
          height="200px"
          width="200px"
          HSPACE="5%"
        />
      </div>

      <div className="">
        <img
          alt="imagen"
          onClick={alerta}
          src={almadana}
          height="200px"
          width="200px"
          HSPACE="5%"
        />
        <img
          alt="imagen"
          onClick={alerta}
          src={serrucho}
          height="200px"
          width="200px"
          HSPACE="15%"
          VSPACE="10px"
        />
        <img
          alt="imagen"
          onClick={alerta}
          src={hombre_solo}
          height="200px"
          width="200px"
          HSPACE="5%"
        />
      </div>

      <div className="">
        <img
          alt="imagen"
          onClick={alerta}
          src={escuadra}
          height="200px"
          width="200px"
          HSPACE="5%"
        />
        <img
          alt="imagen"
          onClick={alerta}
          src={segueta}
          height="200px"
          width="200px"
          HSPACE="15%"
          VSPACE="10px"
        />
        <img
          alt="imagen"
          onClick={alerta}
          src={pinza}
          height="200px"
          width="200px"
          HSPACE="5%"
        />
      </div>
    </>
  );
};
export default Herramientas;
