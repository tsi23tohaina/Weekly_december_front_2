import './bulma.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook } from '@fortawesome/free-solid-svg-icons';

library.add(faFacebook);

function App() {
  return (
    <div>
        <nav className="navbar custom-navbar has-align-items-centered" id='colorBack'>
          <div className="navbar-brand">
              <a className="navbar-item navbar-logo" href="#">
                <img src="./image/Logo.png" className='mt-1' width="19.5" height='23' alt="" />
                <h1 className='is-size-4'>Pages</h1>
              </a>

              <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
             <div className="navbar-start">
              <a className="navbar-item" href="#">
                 <FontAwesomeIcon icon={faFacebook} />
              </a>

              <a className="navbar-item" href="#">
                À propos
              </a>

              <a className="navbar-item" href="#">
                Services
              </a>
            </div>

            <div className="navbar-end navbar-custom-end">
              <div className="navbar-item">
                  <div className="buttons">
                     <a className="button is-primary">
                        <strong>S'inscrire</strong>
                     </a>
                      <a className="button is-light">
                         Se connecter
                      </a>
                  </div>
              </div>
            </div>
          </div>
      </nav>
    </div>
  );
}

export default App;
