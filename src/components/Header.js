import MestoLogo from '../images/header/header-logo.svg';

function Header(){
    return(
        <header className="header">
        <img
          src={MestoLogo}
          alt="Логотип 'Mesto'"
          className="header__logo"
        />
      </header>
    )
}

export default Header;