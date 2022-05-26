import './Navbar.scss'

export const Navbar = () => {

  return (   
    <header className="header"> 
      <div className="header__container">
        <h1 className="header__logo"> Ecommerce </h1>

        <nav className="header__navbar">
       	  <p className="header__navlink"> Inicio </p>
          <p className="header__navlink"> Productos </p>
          <p className="header__navlink"> Servicios </p>
          <p className="header__navlink"> Nosotros </p>
          <p className="header__navlink"> Contacto </p>
        </nav>
      </div>
    </header>
  )
}
