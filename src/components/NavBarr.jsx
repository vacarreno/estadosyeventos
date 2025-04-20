import React from 'react'

export default function NavBarr() {
  const total = 25000;
  const precioFormateado = total.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP',
  });
  const token = false;
  return (
    <>
   
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
      data-bs-target="#navbarExample" aria-controls="navbarExample" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="#">Pizzería Mamma Mía!</a>
      <div className="collapse navbar-collapse" id="navbarExample">
        <ul className="navbar-nav me-auto mb-0">
                    <li className="nav-item">
                        <button className="btn btn-success" type="button">
                        <span role="img" aria-label="pizza">🍕</span>Home
                        </button>
                    </li> 
          {token ? 
          
          <li className="nav-item">
          <button className="btn btn-success" type="button">
          <span role="img" aria-label="candado-abierto">🔓</span>
            Perfil
          </button>
      </li> 
          
          : null
          }
          {token ? 
          <li className="nav-item">
          <button className="btn btn-success" type="button">
          <span role="img" aria-label="candado-cerrado">🔒</span>Logout
          </button>
      </li> 
          
          : null
          }
          {token ? 
            null :  <li className="nav-item">
                        <button className="btn btn-success" type="button">
                          <span role="img" aria-label="candado-con-llave">🔐</span> Login
                        </button>
                    </li> 
          }
          
          {token ? 
           null : <li className="nav-item">
           <button className="btn btn-success" type="button">
             <span role="img" aria-label="candado-con-llave">🔐</span> Register
           </button>
       </li> 
          }        
        </ul>
        <div className="d-flex align-items-center flex-column flex-lg-row">
            <button className="btn btn-danger" type="button">
            <span role="img" aria-label="carrito">🛒</span> Total: {precioFormateado}
            </button>
        </div>
      </div>
    </div>
  </nav>
  </>
  )
}
