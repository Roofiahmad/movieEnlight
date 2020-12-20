import React, { Component } from 'react';
import './FooterComp.css';
import googlePlay from '../Assets/googlePlay.png';
import appStore from '../Assets/appStore.png';
import logo from '../Assets/logo.png';
import facebook from '../Assets/facebook.png'
import pinterest from '../Assets/pinterest.png'
import instagram from '../Assets/instagram.png'
import { Link } from 'react-router-dom';

class FooterComp extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container ">
          <div className="roww">
            <div className="about">
              <Link className="d-flex navbar-brand text-white mb-3" to="/">
                <img src={logo} alt="MilanTV" height="60" className="d-inline-block mr-2 align-middle" />
            <h4 className="title">MilanTV</h4>
          </Link>
              <p className="lh-sm text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quas atque nisi earum qui eaque ipsa odit autem corporis facilis aliquam voluptatibus dicta architecto reiciendis excepturi deleniti inventore repellat ex.</p>
            </div>
            <div className="info">
              <ul>
                <li>
                  <Link class="text-white" aria-current="page" to="/">Tentang Kami</Link>
                </li>
                <li>
                  <Link class="text-white" to="/">Blog</Link>
                </li>
                <li>
                  <Link class="text-white" to="/">Layanan</Link>
                </li>
                <li>
                  <Link class="text-white" to="/">Karir</Link>
                </li>
                <li>
                  <Link class="text-white" to="/">Pusat Media</Link>
                </li>
              </ul>
            </div>
            <div className="social">
              <div className="mb-4">
                <p className="text-white">Download</p>
                <Link className="mr-3" to="/">
                  <img src={googlePlay} alt="" width="140" className="d-inline-block mr-1" />
                </Link>
                <Link className="" to="/">
                  <img src={appStore} alt="" width="140" className="d-inline-block mr-1" />
                </Link>
              </div>
              <p className="text-white">Social Media</p>
              <Link className="mr-2" to="/">
            <img src={facebook} alt="" width="30" className="d-inline-block mr-1" />
              </Link>
              <Link className="mr-2" to="/">
            <img src={pinterest} alt="" width="30" className="d-inline-block mr-1" />
              </Link>
              <Link className="" to="/">
            <img src={instagram} alt="" width="30" className="d-inline-block mr-1" />
              </Link>
            </div>
            </div>
            <hr style={{backgroundColor:"white"}} />
            <p className="text-white text-center">Copyright &copy; 2020 MilanTV. All Rights Reserved</p>
          </div>
      </footer >
    );
  }
}

export default FooterComp;