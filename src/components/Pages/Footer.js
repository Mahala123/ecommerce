import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-title">
        THE GENERICS
        </div>
        <div className="footer-icons">
        <ul >
        <li>
          <a href="https://www.youtube.com">
            <img
              src="https://prasadyash2411.github.io/ecom-website/img/6260efc8fc9a9002669d2f4ad9956cc0.jpg"
              alt="youtube"
              className="photo"
            ></img>
          </a>
          </li>
          <li>
          <a href="https://accounts.spotify.com/en/login">
            <img
              src="https://prasadyash2411.github.io/ecom-website/img/Spotify%20Logo.png"
              alt="spotify"
              className="photo"
            ></img>
          </a>
          </li>
        <li>
          <a href="https://www.facebook.com/">
            <img
              src="https://prasadyash2411.github.io/ecom-website/img/Facebook%20Logo.png"
              alt="facebook"
              className="photo"
            ></img>
          </a>
        </li>
        </ul>
        </div>
       
       
      
    </footer>
  );
};

export default Footer;
