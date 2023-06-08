import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="bottom">
      <div className="legal">
        {/* <img
          align="center"
          alt="logo"
          className="logo"
          src="src\components\Images\Logopit_cover2.png"
        /> */}

          <div className="words">
            <span> © 2023 All rights reserved </span>
            <a> License </a>
            <a> Terms </a>
            <a> Privacy </a>
          </div>
      </div>
    </footer>
  );
};
