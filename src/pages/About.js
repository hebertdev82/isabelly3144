import '../Styles.css';

const About = () => {
    return <div className="aboutScreen">

      <div className="leftScreenAbout">
        <h1>About Me!</h1>
        <p>Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis.Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.</p>

        <p>Quem num gosta di mim que vai caçá sua turmis!Per aumento de cachacis, eu reclamis.Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!Interagi no mé, cursus quis, vehicula ac nisi.</p>

        <p>Quem num gosta di mé, boa gentis num é.Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.Diuretics paradis num copo é motivis de denguis.Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!</p>

        <div className="buttons">
          <div className="button01">
            <a href="https://github.com"><img src="github-logo.png" alt="Github" /></a>
          </div>
          <div className="button02">
            <a href="https://instagram.com"><img src="instagram-logo.png" alt="Instagram" /></a>
          </div>
          <div className="button03">
          <a href="https://linkedin.com"><img src="linkedin-logo.png" alt="Linkedin" /></a>
          </div>
        </div>

      </div>
      
      <div className="rightScreenAbout">
        <img src="about-me.png" alt="About Me" />
      </div>
      
    </div>;
  };
  
  export default About;