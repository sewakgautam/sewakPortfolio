import userImage from "../assets/mf-avatar.svg";

function Home() {
  return (
    <>
      <div className="main">
        <div className="wrapper">
          <img className="image" src={userImage} />
          <h1>
            Sewak Gautam<span className="dot">.</span>
          </h1>
          <p>
            Jack of All Master of Javascript
            <i className="devicon-javascript-plain colored"></i>
          </p>
          <div className="icons">
            <a href="https://www.linkedin.com/in/sewakgtm/">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://www.github.com/sewakgautam">
              <i className="fa fa-github-alt"></i>
            </a>
            <a href="mailto:sewakgtm@gmail.com">
              <i className="fa fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="my_info">
          <h1 className="aboutmeHeading">ABOUT ME </h1>
          <div className="details">
            <p className="title">
              Howdy, fellow digital trailblazer!! I'm Sewak, your friendly
              neighborhood code wizard 🧙‍♂️.
            </p>
            <p style={{ textAlign: "justify" }} className="description">
              I've tamed the wilds of JavaScript, frolicked in the fields of
              Pern (Postgres, electron, react, Nest.js), and made bugs disappear
              faster than a magician with a hat full of rabbits 🎩🐇. If you're
              looking for someone to turn coffee into code, sprinkle a dash of
              creativity, and conjure up digital wonders, you're in the right
              place! Let's geek out together! 🚀✨
              {/* <a href="mailto:sewakgtm@gmail.com">
                <i className="fa fa-envelope" style={{ color: "black" }}></i>
              </a> */}
            </p>
          </div>
        </div>
      </div>
      <div className="projects">
        <div className="my_projects">
          <h1 className="projectsH1">PROJECTS</h1>
          <div className="projectDetails">
            <div className="projectList">
              <img className='comingSoon' src='https://clipart-library.com/new_gallery/14-142114_coming-soon-logo-png-coming-soon-png-black.png' height={'500px'}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
