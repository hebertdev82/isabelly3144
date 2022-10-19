import '../Styles.css';

const Home = () => {
    return <div className="homeConfig">
      
    <div className="leftContent">
      <img src="isa-draw.png" alt="Isabelly" />
    </div>

    <div className="rightContent">
      <h1>Hi, I'm Isa Martins!</h1>
      <h3>Front End Developer</h3>

      <div className="buttons">
        <div className="button01">
          <a href="https://github.com/Isabelly1" target="{_blank}"><img src="github-logo.png" alt="Github" /></a>
        </div>
        <div className="button02">
          <a href="https://instagram.com/isabellymartins.1" target="{_blank}"><img src="instagram-logo.png" alt="Instagram" /></a>
        </div>
        <div className="button03">
        <a href="https://linkedin.com/in/isabelly-martins-" target="{_blank}"><img src="linkedin-logo.png" alt="Linkedin" /></a>
        </div>
      </div>

    </div>

    </div>;
  };
  
  export default Home;