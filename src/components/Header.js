import logo from "../img/LOGO.svg";

export function Header() {
  return (
    <header className="header-wrapper">
      <div className="header">
        <div className="header__logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </header>
  );
}
