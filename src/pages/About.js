import '../Styles.css';

const About = () => {
    return <div className="aboutScreen">

      <div className="leftScreenAbout">
        <h1>Olá, me chamo Isabelly Martins Lopes</h1>
        <p>Tenho 20 anos e nasci e cresci na cidade de São Paulo/SP. Sou uma calma, e sempre gosto de aprender mais, e com esse desejo de aprender sonho em levar conhecimento a outras pessoas.</p>

        <p>Comecei minha carreira como facilitadora de inglês técnico para devs, fazendo Análise e Desenvolvimento de Sistemas na Unicid.</p>

        <p>Através da Faculdade conheci o Vai na Web, e lá comecei aprender sobre desenvolvimento Front-End, estou em busca de me tornar uma desenvolvedora Full-Stack, para isso estou me empenhando para alcançar essa meta.</p>

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
      
      <div className="rightScreenAbout">
        <img src="photo02.jpg" alt="About Me" />
      </div>
      
    </div>;
  };
  
  export default About;