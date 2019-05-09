import React from "react";
import Header from "./components/Header";
import logoAwesome from "./images/logo-awesome-profile-cards.svg";
import "./App.css";
import { createReadStream } from "fs";

function App() {
  return (
    <div className="place-items__cardmaker">
      <svg className="icons-lib" xmlns="http://www.w3.org/2000/svg">
        <symbol
          id="ico-mobile"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.442 27.442"
        >
          <path d="M19.494 0H7.948a1.997 1.997 0 0 0-1.997 1.999v23.446c0 1.102.892 1.997 1.997 1.997h11.546a1.998 1.998 0 0 0 1.997-1.997V1.999A1.999 1.999 0 0 0 19.494 0zm-8.622 1.214h5.7c.144 0 .261.215.261.481s-.117.482-.261.482h-5.7c-.145 0-.26-.216-.26-.482s.115-.481.26-.481zm2.85 24.255a1.275 1.275 0 1 1 0-2.55 1.275 1.275 0 0 1 0 2.55zm6.273-4.369H7.448V3.373h12.547V21.1z" />
        </symbol>

        <symbol
          id="ico-letter"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M467 61H45C20.218 61 0 81.196 0 106v300c0 24.72 20.128 45 45 45h422c24.72 0 45-20.128 45-45V106c0-24.72-20.128-45-45-45zm-6.214 30L256.954 294.833 51.359 91h409.427zM30 399.788V112.069l144.479 143.24L30 399.788zM51.213 421l144.57-144.57 50.657 50.222c5.864 5.814 15.327 5.795 21.167-.046L317 277.213 460.787 421H51.213zM482 399.787L338.213 256 482 112.212v287.575z" />
        </symbol>

        <symbol
          id="ico-linkedin"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-30 0 450 450"
        >
          <path d="M430.117 261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707-25.473 0-40.632 17.142-47.301 33.724-2.432 5.928-3.058 14.179-3.058 22.477V420.56h-92.219s1.242-251.285 0-277.32h92.21v39.309c-.187.294-.43.611-.606.896h.606v-.896c12.251-18.869 34.13-45.824 83.102-45.824 60.673-.001 106.157 39.636 106.157 124.818zM52.183 9.558C20.635 9.558 0 30.251 0 57.463c0 26.619 20.038 47.94 50.959 47.94h.616c32.159 0 52.159-21.317 52.159-47.94-.606-27.212-20-47.905-51.551-47.905zM5.477 420.56h92.184V143.24H5.477v277.32z" />
        </symbol>

        <symbol
          id="ico-github"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-30 0 450 450"
        >
          <path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 0 1-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z" />
        </symbol>
      </svg>

      <Header link="index.html" logoSrc={logoAwesome}/>

      <main className="main-content column-center">
        <section className="preview__section grid-item__card bgc-color-green">
          <div className="preview__section--container">
            <button className="reset__button">
              <img
                className="trash-icon"
                src="assets/images/trash.svg"
                alt="imagen reset"
              />
              Reset
            </button>
            <div className="preview__card">
              <div className="deco-rectangle__card" />
              <h2 className="full-name__card" id="card-name">
                Nombre Apellido
              </h2>

              <h3 className="ocupation__card" id="card-job">
                Front-end developer
              </h3>

              <div className="photo__preview js__profile-image" />

              <ul className="social__card--list">
                <li className="social__icons mobile-icon">
                  {" "}
                  <a href="" id="mobile-link">
                    <svg className="wrap-icon">
                      <use href="#ico-mobile" />
                    </svg>
                  </a>
                </li>

                <li className="social__icons email-icon">
                  {" "}
                  <a className="email__card">
                    <svg className="wrap-icon">
                      <use href="#ico-letter" />
                    </svg>
                  </a>
                </li>

                <li className="social__icons linkedin-icon">
                  {" "}
                  <a className="linkedin-link" href="" target="_blank">
                    <svg className="wrap-icon">
                      <use href="#ico-linkedin" />
                    </svg>
                  </a>
                </li>

                <li className="social__icons github-icon">
                  {" "}
                  <a className="link-github" href="" target="_blank">
                    <svg className="wrap-icon">
                      <use href="#ico-github" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="grid-item__fill-fields">
          <form action="/signup" method="post" className="main-form">
            <section className="panel">
              <div className="panel__dropdown">
                <div className="title-image__wrapper">
                  <img
                    className="dropdown__icon-section"
                    src="./assets/images/ungroup.svg"
                    alt=""
                  />
                  <h2 className="dropdown__title">Diseña</h2>
                </div>
                <img
                  className="dropdown__arrow--up"
                  id="dropdown__down-arrow--design"
                  src="./assets/images/down-arrow.svg"
                  alt="Abrir panel diseña"
                />
              </div>
              <div className="panel__design-radios panel--openFlex">
                <p className="radios__title">Colores</p>
                <div className="radios__picker">
                  <label
                    className="control__text radios-text"
                    for="option-color-1"
                  >
                    <input
                      className="control__radio radios-buttons"
                      id="option-color-1"
                      type="radio"
                      value="1"
                      name="palette"
                      checked
                    />{" "}
                    <span className="control__indicator" />
                    <span className="box-wrapper">
                      <span className="box box-color1" />
                      <span className="box box-color2" />

                      <span className="box box-color3" />
                    </span>
                  </label>
                  <label
                    className="control__text radios-text"
                    for="option-color-2"
                  >
                    <input
                      className="control__radio radios-buttons"
                      id="option-color-2"
                      type="radio"
                      value="2"
                      name="palette"
                    />{" "}
                    <span className="control__indicator" />
                    <span className="box-wrapper">
                      <span className="box box-color4" />
                      <span className="box box-color5" />

                      <span className="box box-color6" />
                    </span>
                  </label>
                  <label
                    className="control__text radios-text"
                    for="option-color-3"
                  >
                    <input
                      className="control__radio radios-buttons"
                      id="option-color-3"
                      type="radio"
                      value="3"
                      name="palette"
                    />{" "}
                    <span className="control__indicator" />
                    <span className="box-wrapper">
                      <span className="box box-color7" />
                      <span className="box box-color8" />

                      <span className="box box-color9" />
                    </span>
                  </label>
                </div>
              </div>
            </section>
            <section className="panel">
              <div className="panel__dropdown">
                <div className="title-image__wrapper">
                  <img
                    className="dropdown__icon-section"
                    src="./assets/images/keyboard.svg"
                    alt=""
                  />
                  <h2 className="dropdown__title">Rellena</h2>
                </div>
                <img
                  className="dropdown__arrow--down"
                  id="dropdown__down-arrow--fill"
                  src="./assets/images/down-arrow.svg"
                  alt="Abrir panel rellena"
                />
              </div>
              <fieldset className="panel__fill-form panel--close">
                <div className="dropdown__item">
                  <label className="item__label" for="name">
                    Nombre completo <span className="marker"> *</span>
                  </label>
                  <input
                    className="item__info"
                    type="text"
                    id="fullName"
                    data-id="card-name"
                    placeholder="Monster Terribilus"
                    name="name"
                    required
                  />
                </div>
                <div className="dropdown__item">
                  <label className="item__label" for="job">
                    Puesto <span className="marker"> *</span>
                  </label>
                  <input
                    className="item__info"
                    type="text"
                    id="rol"
                    data-id="card-job"
                    placeholder="Front-end"
                    name="job"
                    required
                  />
                </div>
                <div className="dropdown__item">
                  <label className="item__label" for="photo">
                    Imagen de perfil
                  </label>
                  <div className="item__info--image-container">
                    <input
                      type="file"
                      className="js__profile-upload-btn item__info hidden__file--button"
                      name="photo"
                      id="personalImage"
                    />
                    <button
                      type="button"
                      className="item__info--button js__profile-trigger"
                    >
                      Añadir imagen
                    </button>
                    <div className="js__profile-preview item__info--thumbnail" />
                  </div>
                </div>
                <div className="dropdown__item">
                  <label className="item__label" for="phone">
                    Teléfono <span className="marker"> *</span>
                  </label>
                  <input
                    className="item__info"
                    type="tel"
                    id="phoneNumber"
                    placeholder="123456789"
                    maxlength="9"
                    name="phone"
                    pattern="^\d{3}\d{3}\d{3}$"
                    title="ej: 123456789"
                    required
                  />
                </div>
                <div className="dropdown__item">
                  <label className="item__label" for="email">
                    Email <span className="marker"> *</span>
                  </label>
                  <input
                    className="item__info"
                    type="email"
                    id="email"
                    placeholder="dontBeScared@gmail.com"
                    name="email"
                    required
                  />
                </div>
                <div className="dropdown__item">
                  <label className="item__label" for="linkedin">
                    Linkedin
                  </label>
                  <input
                    className="item__info"
                    type="url"
                    id="linkedin"
                    placeholder="linkedin.com/monsterYey"
                    name="linkedin"
                  />
                </div>
                <div className="dropdown__item">
                  <label className="item__label" for="github">
                    GitHub
                  </label>
                  <input
                    className="item__info"
                    type="text"
                    id="github"
                    placeholder="monsterYey"
                    name="github"
                  />
                </div>
              </fieldset>
            </section>
            <section className="panel">
              <div className="panel__dropdown">
                <div className="title-image__wrapper">
                  <img
                    className="dropdown__icon-section"
                    src="./assets/images/share.svg"
                    alt=""
                  />
                  <h2 className="dropdown__title">Comparte</h2>
                </div>
                <img
                  className="dropdown__arrow--down"
                  id="dropdown__down-arrow--share"
                  src="./assets/images/down-arrow.svg"
                  alt="Abrir panel compartir"
                />
              </div>
              <div className="align_share panel--close">
                <button className="btn_share" type="submit">
                  <img
                    className="icon__id-card"
                    src="assets/images/id-card.svg"
                    alt="Crear tarjeta"
                  />
                  Crear Tarjeta
                </button>
              </div>
            </section>
            <section className="align_share align_share_text panel-design panel__twitter panel--close">
              <p className="card-create">La tarjeta ha sido creada</p>
              <p>
                {" "}
                <a className="card-link" href="" />
              </p>
              <div className="align_share">
                {" "}
                <a
                  className="twitter-share-button"
                  href='https://twitter.com/intent/tweet?text= Mirad%20que%20tarjeta%20más%20chachi%20he%20creado%20con%20la%20aplicación%20"Awesome%20Profile-cards"&url= '
                  data-size="large"
                  target="_blank"
                >
                  <img
                    className="icon__twitter"
                    src="assets/images/twitter.svg"
                    alt="compartir en Twitter"
                  />
                  Compartir en Twitter
                </a>
              </div>
            </section>
          </form>
        </section>
      </main>

      <footer className="footer__page">
        <div className="footer__flex-wrapper column-center">
          {" "}
          <small className="footer__copyright">
            Awesome profile-cards @2019
          </small>
          <div className="logos">
            <img
              src="assets/images/logo-disena-aventura.jpg"
              alt="Logo de Diseña tu aventura"
              className="footer__image--logo"
            />{" "}
            <a
              className="footer__link"
              href="https://adalab.es/"
              target="blank"
            >
              <img
                src="assets/images/logo-adalab.png"
                alt="Logo de Adalab"
                className="footer__image"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
