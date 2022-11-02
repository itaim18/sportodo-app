import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
const Contact = () => {
  return (
    <div className="about-section contact" id="contact">
      <ul>
        <li>
          <a
            className="facebook-link"
            href="https://www.facebook.com/itai.mizlish/"
          >
            <FaFacebookF />
          </a>
        </li>
        <li>
          <a
            className="linkedin-link"
            href="https://www.linkedin.com/in/itai-mizlish/"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a className="github-link" href="https://github.com/itaim18">
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            className="instagram-link"
            href="https://www.instagram.com/mizlishitai/"
          >
            <FaInstagram />
          </a>
        </li>
        <li>
          <a className="whatsapp-link" href="https://wa.me/+972542258899">
            <FaWhatsapp />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
