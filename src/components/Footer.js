import logo from "../img/LOGO.svg";

function getYear() {
  return new Date().getFullYear();
}

export function Footer() {
  return (
    <footer className="footer-wrapper block">
      <div className="footer">
        <div className="footer__logo">
          <img src={logo} alt="logo" />
        </div>
        <p className="footer__disclaimer">
          This is the pet project created to test my own skills using React.js.
        </p>

        <p className="footer__copyrights">
          &copy; {getYear()} Company. All rights reserved
        </p>
      </div>
    </footer>
  );
}
