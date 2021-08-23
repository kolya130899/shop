import logo from "../img/Valis_logo_v1.svg";

function getYear() {
  return new Date().getFullYear();
}

export function Footer() {
  return (
    <footer className="footer-wrapper block">
      <div className="footer">
        <div className="footer__logo">
          <img src={logo} alt="" />
        </div>
        <p className="footer__disclaimer">
          This is the pet project created to test own skills using React.js.
        </p>

        <p className="footer__copyrights">
          &copy; {getYear()} Valis. All rights reserved
        </p>
      </div>
    </footer>
  );
}
