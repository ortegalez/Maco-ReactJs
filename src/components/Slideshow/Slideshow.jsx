import React, { useEffect, useRef } from "react";
import sliders from "../../assets/slider_img";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";

const Slideshow = () => {
  // El useRef toma un elemento del Dom como referencia.
  const slideshow = useRef(null);

  // Crea una variable para identificar el elemento mediante el ref={nombre_variable}, el elemento html.
  const intervalSlideshow = useRef(null);

  const next = () => {
    // La propiedad .current permite acceder al valor actual que tiene el elemento de referencia.
    // console.log(slideshow.current);

    // .current.children.legth devuelve la longitud del array.
    // console.log(slideshow.current.children.length);
    const conditionNext = slideshow.current.children.length;

    if (conditionNext > 0) {
      // Crea una variable que contenga el primer elemento.
      const firstElement = slideshow.current.children[0];

      // La propiedad .style.transition define la caracteristicas de la trasicion, velodidad de 1000 milisegundos
      slideshow.current.style.transition = `1000ms ease-out all`;

      // Puedo optener el ancho del primer jelemento en pantalla expresado en px
      const widthSlide = slideshow.current.children[0].offsetWidth;

      // La propiedad .style.transform define estilo de traslado y la distancia.
      slideshow.current.style.transform = `translateX(-${widthSlide}px)`;

      // Definiir una funcion para mover el primero elemento hacia el final sin que se vea en pantalla:
      const hiddenTransition = () => {
        // Transicion sin vista en la pantalla
        slideshow.current.style.transition = "none";
        // Traslado a la posicion cero
        slideshow.current.style.transform = `translateX(0)`;
        // La propiedad .current.appedChild(elemento_de_ref) para ubicar al elemento al final del array
        slideshow.current.appendChild(firstElement);
        // La propiedad .current.removeEventListener("nombre_identificacion_de la funcion", funcion)
        slideshow.current.removeEventListener(
          "transitionend",
          hiddenTransition
        );
      };

      slideshow.current.addEventListener("transitionend", hiddenTransition);
    }
  };

  const previous = () => {
    // Crear una variable para resumir la condicion para que verifica que el elemento no este vacio
    const conditionPrevious = slideshow.current.children.length;
    // Crear un if para comprobar que cumple la condicion
    if (conditionPrevious > 0) {
      const indexSlideshow = slideshow.current.children.length - 1;
      const lastElement = slideshow.current.children[indexSlideshow];
      // Metodo de js que coloca un elemento de ulimo
      slideshow.current.insertBefore(lastElement, slideshow.current.firstChild);

      slideshow.current.style.transition = "none";
      const widthSlide = slideshow.current.children[0].offsetWidth;

      // slideshow.current.style.transition = `translateX(-${widthSlide}px)`;
      slideshow.current.style.transform = `translateX(-${widthSlide}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = "1000ms ease-out all";
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  // Con el useEffect para controlar el renderizado cada vez que aparece un elemeneto nuevo en la pantalla.
  useEffect(() => {
    intervalSlideshow.current = setInterval(() => {
      next();
    }, 5000);

    // Eliminar los intervalos cuando me paro sobre el slideshow
    slideshow.current.addEventListener("mouseenter", () => {
      clearInterval(intervalSlideshow.current);
    });

    // Volvemos a poner el intervalo cuando saquen el cursor de slideshow
    slideshow.current.addEventListener("mouseleave", () => {
      intervalSlideshow.current = setInterval(() => {
        next();
      }, 5000);
    });
  }, []);

  return (
    <section className="slideshow__container">
      {/* Usa el atributo ref={nombre_variable_identificacion} */}
      <div className="slides" ref={slideshow}>
        {sliders.map((item) => (
          <div key={item.id}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
      <div className="slideshow__controls">
        <button onClick={previous}>
          <BsFillCaretLeftFill />
        </button>
        <button onClick={next}>
          <BsFillCaretRightFill />
        </button>
      </div>
    </section>
  );
};

export default Slideshow;
