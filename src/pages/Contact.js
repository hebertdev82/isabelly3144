const Contact = () => {
    return <div className="contactScreen">

      <div className="leftContactScreen">
        <div className="itemContact">
          <a href="mailto:email@email.com.br">
            <img src="email.png" alt="E-mail" />
            <span>E-mail</span>
          </a>
        </div>

        <div className="itemContact">
          <a href="https://instagram.com">
            <img src="instagram.png" alt="Instagram" />
            <span>Instagram</span>
          </a>
        </div>

        <div className="itemContact">
          <a href="https://linkedin.com">
            <img src="linkedin.png" alt="Linkedin" />
            <span>Linkedin</span>
          </a>
        </div>
      </div>
      
      <div className="rightContactScreen">
        <img src="contact-photo.png" alt="Contact Me" />
      </div>
      
      
    </div>;
  };
  
  export default Contact;