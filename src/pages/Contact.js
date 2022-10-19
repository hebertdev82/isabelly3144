import '../Styles.css';

const Contact = () => {
    return <div className="contactScreen">

      <div className="leftContactScreen">
        <div className="itemContact">
          <a href="mailto:isabellymartins846@gmail.com" target="{_blank}">
            <img src="email.png" alt="E-mail" />
          </a>
          <span>E-mail || Me envie um e-mail, tire suas dúvidas.</span>
        </div>

        <div className="itemContact">
          <a href="https://instagram.com/isabellymartins.1" target="{_blank}">
            <img src="instagram.png" alt="Instagram" />
          </a>
          <span>Instagram || Confira meu Instagram.</span>
        </div>

        <div className="itemContact">
          <a href="https://linkedin.com/in/isabelly-martins-" target="{_blank}">
            <img src="linkedin.png" alt="Linkedin" />
          </a>
          <span>Linkedin || Entre em contato comigo pelo Linkedin.</span>
        </div>
      </div>
      
      <div className="rightContactScreen">
        <img src="photo01.jpg" alt="Contact Me" />
      </div>
      
    </div>;
  };
  
  export default Contact;