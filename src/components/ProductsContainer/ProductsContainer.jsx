import React, { useState } from "react";
import Hoddies from "../../assets/hoddies_img.js";
import tShirt from "../../assets/tshirt.js";
import {
  BsCart,
  BsSearch,
  BsPerson,
  BsFillCaretDownFill,
  BsFillCaretUpFill,
} from "react-icons/bs";

const ProductsContainer = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const showDropDown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <main className="productsContainer__Container">
      <section className="productsContainer__Header">
        <h3>Productos</h3>

        <div onClick={showDropDown} className="productsContainer__trigger">
          <div className="productsContainer__trigger-button">
            <p>Destecados</p>
            <button>
              <BsFillCaretDownFill />
            </button>
          </div>

          <div
            className={`productsContainer__trigger-dropdown ${
              isDropdownOpen ? "active" : ""
            }`}
          >
            <ul>
              <li>Descatados</li>
              <li>Precio: Mayor a menor</li>
              <li>Precio: Menos a mayor</li>
              <li>A-Z</li>
              <li>Z-A</li>
            </ul>
          </div>
        </div>
      </section>
      <aside className="productsContainer__Aside">
        <h4>Filtrar por:</h4>
        <ul>
          <li>
            <input type="checkbox" />
            <p>Remeras</p>
          </li>
          <li>
            <input type="checkbox" />
            <p>Buzos</p>
          </li>
          <li>
            <input type="checkbox" />
            <p>Packs</p>
          </li>
        </ul>
      </aside>
      <section className="productsContainer__Main">
        {Hoddies.map((item) => (
          <a href="#" key={item.id}>
            <article className="productsContainer__Main-Card">
              <figure>
                <img src={item.img} alt={item.title} />
              </figure>
              <div>
                <h3>{item.title}</h3>
                <span>${item.price}</span>
                <p>3 Cuotas sin interés ${item.price / 3}</p>
              </div>
              {/* <div className="card-size">
                <p>{item.size}</p>
              </div> */}
            </article>
          </a>
        ))}
        {tShirt.map((item) => (
          <a href="#" key={item.id}>
            <article className="productsContainer__Main-Card">
              <figure>
                <img src={item.img} alt={item.title} />
              </figure>
              <div>
                <h3>{item.title}</h3>
                <span>${item.price}</span>
                <p>3 Cuotas sin interés ${item.price / 3}</p>
              </div>
              {/* <div className="card-size">
                <p>{item.size}</p>
              </div> */}
            </article>
          </a>
        ))}
      </section>
    </main>
  );
};

export default ProductsContainer;
