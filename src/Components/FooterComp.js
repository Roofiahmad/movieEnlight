import React, { Component } from "react";
import "./FooterComp.css";
import googlePlay from "../Assets/googlePlay.png";
import appStore from "../Assets/appStore.png";
import logo2 from "../Assets/logo2.png";
import facebook from "../Assets/facebook.png";
import pinterest from "../Assets/pinterest.png";
import instagram from "../Assets/instagram.png";
import { Link } from "react-router-dom";

class FooterComp extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="roww">
            <div className="about">
              <Link className="d-flex navbar-brand text-white mb-3" to="/">
                <span>
                  <img
                    src="https://i.ibb.co/LZxNK66/png-clipart-graphic-film-cinema-movie-projector-hollywood-claquete-television-photography-thumbnail.png"
                    alt="MilanTV"
                    width="100"
                    className="d-inline-block mr-2 align-middle"
                  />
                </span>{" "}
                <img
                  src="https://i.ibb.co/SsB8dMk/Logo-Makr-1-RD36w-1.png"
                  alt="MilanTV"
                  width="200"
                  className="d-inline-block mr-2 align-middle"
                />
              </Link>
              <p className="lh-sm text-white footer_desc">
                MoviEnlight is a platform that enlighten your day. More than
                just giving you some movie recommendations, we offer you a
                platform to give a feedback to your recently watched movies and
                connected with other moviegoers world wide.
              </p>
            </div>
            <div className="info">
              <ul>
                <li>
                  <Link
                    class="text-white another-link"
                    aria-current="page"
                    to="/"
                  >
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link class="text-white another-link" to="/">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link class="text-white another-link" to="/">
                    Layanan
                  </Link>
                </li>
                <li>
                  <Link class="text-white another-link" to="/">
                    Karir
                  </Link>
                </li>
                <li>
                  <Link class="text-white another-link" to="/">
                    Pusat Media
                  </Link>
                </li>
              </ul>
            </div>
            <div className="social">
              <div className="mb-4">
                <p className="text-white">Download</p>
                <Link to="/">
                  <img
                    src={googlePlay}
                    alt=""
                    width="140"
                    className="d-inline-block mr-2 pb-2"
                  />
                </Link>
                <Link to="/">
                  <img
                    src={appStore}
                    alt=""
                    width="140"
                    className="d-inline-block pb-2"
                  />
                </Link>
              </div>
              <p className="text-white">Social Media</p>
              <Link className="mr-2" to="/">
                <img
                  src={facebook}
                  alt=""
                  width="30"
                  className="d-inline-block mr-1"
                />
              </Link>
              <Link className="mr-2" to="/">
                <img
                  src={pinterest}
                  alt=""
                  width="30"
                  className="d-inline-block mr-1"
                />
              </Link>
              <Link className="" to="/">
                <img
                  src={instagram}
                  alt=""
                  width="30"
                  className="d-inline-block mr-1"
                />
              </Link>
            </div>
          </div>
          <hr style={{ backgroundColor: "white" }} />
          <p className="text-white text-center copyright">
            Copyright &copy; 2020 MoviEnlight. All Rights Reserved
          </p>
        </div>
      </footer>
    );
  }
}

export default FooterComp;
