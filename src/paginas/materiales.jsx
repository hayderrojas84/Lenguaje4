const Materiales = () => {
  function alerta() {
    alert("COMPRA EXITOSA");
  }

  const cemento =
    "https://www.loencuentras.com.co/240-large_default/cemento-gris-uso-general-50-kg.jpg";

  const sika =
    "data:image/jpeg;base64,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";

  const rollo_plastico =
    "https://http2.mlstatic.com/D_NQ_NP_705961-MCO43237714266_082020-O.jpg";

  const ladrillo =
    "https://depositoelnogal.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMk9wTUE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--e3a68175475fc585f0889fcd7cd2ffdf17365707/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9TY21WemFYcGxYM1J2WDJacGRGc0hhUUlnQTJrQ0lBTTZER052Ym5abGNuUkpJZ2hxY0djR09nWkZWRG9LYzJGMlpYSjdDRG9NY1hWaGJHbDBlV2xmT2dwemRISnBjRlE2RDJKaFkydG5jbTkxYm1SYkNHa0IvMmtCLzJrQi93PT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--f9b6205701877dad933126b17f2a1a57fbbba520/0200002000046.png?locale=es";

  const ethernit =
    "https://depositoelnogal.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeUZxTUE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--b83ba13834393b1b772c86f1feaa547b52ba8423/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9TY21WemFYcGxYM1J2WDJacGRGc0hhUUlnQTJrQ0lBTTZER052Ym5abGNuUkpJZ2hxY0djR09nWkZWRG9LYzJGMlpYSjdDRG9NY1hWaGJHbDBlV2xmT2dwemRISnBjRlE2RDJKaFkydG5jbTkxYm1SYkNHa0IvMmtCLzJrQi93PT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--f9b6205701877dad933126b17f2a1a57fbbba520/120001000024.png?locale=es";

  const zinc =
    "https://i0.wp.com/juanchodoitcenter.com/wp-content/uploads/2020/04/cubierta-arquitectonica-galvanizada-scaled.jpg?fit=1200%2C797&ssl=1";

  const estuco =
    "https://pintuland.com.co/wp-content/uploads/2020/07/Estuco_Plastico_pintuland.jpg";

  const ceramica =
    "https://decorceramica.vteximg.com.br/arquivos/ids/179774-800-800/ceramica-pisos-madera-fiori-amsterdam-r-38x75-cafe-fr04cf178.jpg?v=637655911484770000";

  const pintura =
    "https://corona.co/medias/ExtraBlindaje-Cunete.jpg?context=bWFzdGVyfGltYWdlc3wzMzUwNTh8aW1hZ2UvanBlZ3xoOGIvaDQ4LzkwODk4NTI0NzMzNzQvRXh0cmFCbGluZGFqZV9DdW5ldGUuanBnfGNjYWI0MjIwNTRiOTQ4M2JjYzZiNjkyNTBkYjhkM2JlNzgwOTg0MGFjM2NmYzlhYzYwZGZhMDM1N2JkODVmOWY";

  return (
    <>
      <h1 className="texto3">Materiales</h1>

      <div className="">
        <img
          alt="imagen"
          onClick={alerta}
          src={cemento}
          height="200px"
          width="200px"
          HSPACE="5%"
        />
        <img
          alt="imagen"
          onClick={alerta}
          src={sika}
          height="200px"
          width="200px"
          HSPACE="15%"
          VSPACE="10px"
        />
        <img
          alt="imagen"
          onClick={alerta}
          src={rollo_plastico}
          height="200px"
          width="200px"
          HSPACE="5%"
        />
      </div>

      <div className="">
        <img
          alt="imagen"
          onClick={alerta}
          src={ladrillo}
          height="200px"
          width="200px"
          HSPACE="5%"
        />
        <img
          alt="imagen"
          onClick={alerta}
          src={ethernit}
          height="200px"
          width="200px"
          HSPACE="15%"
          VSPACE="10px"
        />
        <img
          alt="imagen"
          onClick={alerta}
          src={zinc}
          height="200px"
          width="200px"
          HSPACE="5%"
        />
      </div>

      <div className="">
        <img
          alt="imagen"
          onClick={alerta}
          src={estuco}
          height="200px"
          width="200px"
          HSPACE="5%"
        />
        <img
          alt="imagen"
          onClick={alerta}
          src={ceramica}
          height="200px"
          width="200px"
          HSPACE="15%"
          VSPACE="10px"
        />
        <img
          alt="imagen"
          onClick={alerta}
          src={pintura}
          height="200px"
          width="200px"
          HSPACE="5%"
        />
      </div>
    </>
  );
};
export default Materiales;
