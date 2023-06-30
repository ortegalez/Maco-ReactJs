import React from "react";
// import remera from "https://res.cloudinary.com/dmkieqxcp/image/upload/v1688091580/Maco__Slider/remera-grisclaro_wxmavp.jpg";
// import buzo from "https://res.cloudinary.com/dmkieqxcp/image/upload/v1688091601/Maco__Slider/buzo-verde_rmrd6h.jpg";
// import packs from " https://res.cloudinary.com/dmkieqxcp/image/upload/v1688091620/Maco__Slider/packx5_egdbfc.jpg";

const MainProducts = () => {
  let remera =
    "https://res.cloudinary.com/dmkieqxcp/image/upload/v1688091580/Maco__Slider/remera-grisclaro_wxmavp.jpg";

  let buzo =
    "https://res.cloudinary.com/dmkieqxcp/image/upload/v1688091601/Maco__Slider/buzo-verde_rmrd6h.jpg";

  let packs =
    " https://res.cloudinary.com/dmkieqxcp/image/upload/v1688091620/Maco__Slider/packx5_egdbfc.jpg";

  return (
    <section className="MainProducts__Container">
      <a href="#" rel="noopener noreferrer">
        <article>
          <h3>Remeras</h3>
          <img src={remera} alt="" />
        </article>
      </a>
      <a href="#" rel="noopener noreferrer">
        <article>
          <h3>Buzos</h3>
          <img src={buzo} alt="" />
        </article>
      </a>
      <a href="#" rel="noopener noreferrer">
        <article>
          <h3>Packs</h3>
          <img src={packs} alt="" />
        </article>
      </a>
    </section>
  );
};

export default MainProducts;
