import logo from "../img/Valis_logo_v1.svg";

export function Header() {
  return (
    <header className="header-wrapper">
      <div className="header">
        <div className="header__logo">
          <img src={logo} alt="VALIS" />
        </div>
      </div>
    </header>
  );
}
