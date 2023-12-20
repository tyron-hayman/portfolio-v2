import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
import '../scss/main.css';

export default function Header() {
  return (
    <div className='container-nav'>
      <nav className="navbar">
        <div className="container-nav">
          <div className='row justify-content-between'>
            <div className='col-5'>
              <a className="navbar-brand" href="/">
              <i class="fa-solid fa-terminal"></i> TH
              </a>
            </div>
            <div className='col-5'>
              <ul class="nav justify-content-end">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/about">About</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}