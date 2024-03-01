// import {  useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
import userImage from "../assets/mf-avatar.svg";
import projects from "../Json/Projects.json";

function Home() {
  // const [slideIndex, setSlideIndex] = useState(0);
  // const changeSlide = (n: number) => {
  //   setSlideIndex(n);
  // };

  function truncateText(text: string, maxLength: number) {
    // Split the text into an array of words
    const words = text.split(" ");

    // Check if the text length is already within the desired limit
    if (words.length <= maxLength) {
      return text; // Return the original text
    }

    // Otherwise, truncate the text to the desired length
    const truncatedWords = words.slice(0, maxLength); // Take the first maxLength words
    const truncatedText = truncatedWords.join(" "); // Join them back into a string
    return truncatedText + " ......"; // Append "..." to indicate truncated content
  }

  function ShowSlide() {
    const data: {
      title: string;
      thumbnail: string;
      description: string;
      projectLink: string;
      githubLink: string;
    }[] = projects.Projects!;
    return (
      <>
        {data.map((_, i) => {
          return (
            <div className="projectList">
              <div className="projectCards">
                <img className="projectImage" src={data[i].thumbnail}></img>
                <div className="projectTextContainer">
                  <h2>{data[i].title}</h2>
                  <p style={{ textAlign: "justify" }}>
                    {truncateText(data[i].description, 50)}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      justifyContent: "space-between",
                    }}
                  >
                    <a
                      className="projectBtnhref"
                      href={data[i].projectLink}
                      target="_blank"
                    >
                      <button className="projectBtn">View Project</button>
                    </a>
                    <a
                      className="projectBtnhref"
                      href={data[i].githubLink}
                      target="_blank"
                    >
                      <button className="projectBtn">
                        <i className="fa fa-github" style={{fontSize:"18px"}}></i>{" "}
                        Contribute
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }

  // setTimeout(() => {
  //   const length = projects.Projects.length;
  //   // console.log("this is length", length);
  //   const data = Math.floor(Math.random() * length);
  //   if (data > projects.Projects.length) setSlideIndex(0);
  //   setSlideIndex(data);
  // }, 50000);

  // function rotateArray(arr, timeInterval) {
  //   let currentIndex = 0;

  //   function printAndRotate() {
  //     const chunk = arr.slice(currentIndex, currentIndex + 3);
  //     console.log(chunk);

  //     currentIndex += 3;
  //     if (currentIndex >= arr.length) {
  //       currentIndex = 0;
  //     }

  //     setTimeout(printAndRotate, timeInterval * 1000);
  //   }

  //   printAndRotate();
  // }

  // const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // const timeInterval = 5000; // Time interval in seconds

  // rotateArray(a, timeInterval);

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
            {/* <img className='comingSoon' src='https://clipart-library.com/new_gallery/14-142114_coming-soon-logo-png-coming-soon-png-black.png' height={'500px'}></img> */}
            {/* {showSlide()} */}
            <ShowSlide />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
