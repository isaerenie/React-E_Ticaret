import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { INavbar } from "../models/INavbar"
import { control } from "../utils/control"



function Navbar(item: INavbar) {

  const navigate = useNavigate()
  const fncLogout = () => {
    sessionStorage.removeItem('user')
    localStorage.removeItem('user')
    navigate('/')

  }
  const user = control()!.result.username
  const rol = control()!.result.authorities[0].authority
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
      <div className="container">

        {rol === 'ROLE_admin'
          ?
          <NavLink className="navbar-brand" to='/dashboard'>Dashboard</NavLink>
          :
          <NavLink className="navbar-brand" to='/sitehome'>SiteHome</NavLink>
        }
        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav">
          <li className="nav-item">
              <NavLink className="nav-link" to='/products'>Ürünler</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/category'>Katgoriler</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/orders'>Siparişler</NavLink>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a href="" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                <i className="fa fa-user"></i> {user}
              </a>
              <div className="dropdown-menu">
                <a href="login.html" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <i className="fa fa-user-times"></i> Çıkış
                </a>
                <a role='button' href="settings.html" className="dropdown-item" aria-expanded="false">
                  <i className="fa fa-cog"></i> Profil Ayarları
                </a>
              </div>
            </li>


            <li className="nav-item">

              {/* <NavLink className="nav-link" to={"/orders"}> <i className="fa fa-shopping-cart"></i> </NavLink> */}

            </li>

          </ul>
          <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Kullanıcı Çıkış Ekranı</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                 Çıkmak istediğinizde emin misiniz?
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
                  <button data-bs-dismiss="modal" onClick={fncLogout} type="button" className="btn btn-danger">Çıkış</button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal" tabIndex={-1}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Modal title</h5>

                </div>
                <div className="modal-body">
                  <p>Modal body text goes here.</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar

