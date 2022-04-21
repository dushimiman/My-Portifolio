import React  from "react";

const Home = () => {
    return(
      <>
   <header id="header">
    <div class="d-flex flex-column">

      <div class="profile">
        <img src="assets/img/diane.JPG" alt="" class="img-fluid rounded-circle"/>
        <h1 class="text-light"><a href="index.html">Diane Dushimimana</a></h1>
        <div class="social-links mt-3 text-center">
          <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
          <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
          <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
          <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
        </div>
      </div>

      <nav id="navbar" class="nav-menu navbar">
        <ul>
          <li><a href="#hero" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></a></li>
          <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li>
          <li><a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
        
          <li><a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
        </ul>
      </nav>
    </div>
  </header>
  <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
    <div class="hero-container" data-aos="fade-in">
      <h1>Diane Dushimimana</h1>
      <p>I'm Full Stack developer <span class="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
    </div>
  </section>
  <main id="main">

  
    <section id="about" class="about">
      <div class="container">

        <div class="section-title">
          <h2>About</h2>
          <p>I'm full stack developer in  react j.s and  node j.s and i have experience of one years</p>
        </div>

        <div class="row">
          <div class="col-lg-4" data-aos="fade-right">
            <img src="assets/img/diane.JPG" class="img-fluid" alt=""/>
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>UI/UX Designer &amp; Web Developer.</h3>
            <p class="fst-italic">
            Experienced UI/UX Designer with a 5+ year proven track record of creating, improving, and developing IT solutions. Highly skilled in Sketch and UX research. In a previous position at SheCanCode Company, achieved 10% early completion of projects with a client satisfaction rate of 92%.
            </p>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>21 Nov 1995</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>https://github.com/dushimiman</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+250780564438</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Kigali, Rwanda</span></li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>25</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>dushimediane12@gmail.com</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p>
            I'm an innovative software engineer with 2years of experience managing all aspects of the development process for small to medium-sized companies.” 
            </p>
          </div>
        </div>

      </div>
    </section>

 
   


    <section id="skills" class="skills section-bg">
      <div class="container">

        <div class="section-title">
          <h2>Skills</h2>
          <p>My goal is to become a successful software engineer that has made a positive impact on my business and contributed to my technical development over the next five years. I feel drawn to new challenges, eager to move up in the team so that I may serve on more technical issues and make an even bigger impact.</p>
        </div>

        <div class="row skills-content">

<div class="col-lg-6">

  <div class="progress">
    <span class="skill">HTML <i class="val">100%</i></span>
    <div class="progress-bar-wrap">
      <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>

  <div class="progress">
    <span class="skill">CSS <i class="val">90%</i></span>
    <div class="progress-bar-wrap">
      <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>

  <div class="progress">
    <span class="skill">JavaScript <i class="val">75%</i></span>
    <div class="progress-bar-wrap">
      <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>

</div>

<div class="col-lg-6">

  <div class="progress">
    <span class="skill">PHP <i class="val">10%</i></span>
    <div class="progress-bar-wrap">
      <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>

  <div class="progress">
    <span class="skill">C @ C++ <i class="val">90%</i></span>
    <div class="progress-bar-wrap">
      <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>

  <div class="progress">
    <span class="skill">Photoshop <i class="val">55%</i></span>
    <div class="progress-bar-wrap">
      <div class="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>

</div>

</div>

      </div>
    </section>

   
    <section id="resume" class="resume">
      <div class="container">

        <div class="section-title">
          <h2>Resume</h2>
        </div>

        <div class="row">
          <div class="col-lg-6" data-aos="fade-up">
            <h3 class="resume-title">Sumary</h3>
            <div class="resume-item pb-0">
              <h4>Diane Dushimimana</h4>
              <p><em>Innovative and deadline-driven Web Designer with 1+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
              <ul>
                <li>Kigali, Rwanda</li>
                <li>(+250) 7805-64438</li>
                <li>https://www.linkedin.com/in/diane-dushimimana-a20859227/</li>
              </ul>
            </div>

            <h3 class="resume-title">Education</h3>
            <div class="resume-item">
              <h4>Bachelor in Information System </h4>
              <h5>2018 - 2022</h5>
              <p><em>College of Science And Technology</em></p>
              <p></p>
            </div>
            <div class="resume-item">
              <h4>Secondary Deploma</h4>
              <h5>2015 - 2017</h5>
              <p><em>G S BUNYONGA</em></p>
              <p>I study mathematics, economics, and computer science in high school.</p>
            </div>
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 class="resume-title">COMPUTER SKILLS</h3>
            <div class="resume-item">
              <ul>
                <li>Microsoft specialist</li>
                <li>Graphic Design</li>
                <li>Photoshop</li>
                <li>Data base management</li>
                <li>Computer programming</li>
              </ul>
            </div>
          
          </div>
          </div>
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 class="resume-title">Professional Experience</h3>
            <div class="resume-item">
              <h4>Software Developer</h4>
              <h5>2021 - Present</h5>
              <p><em>SheCanCode, Kacyiru, Kigali </em></p>
              <ul>
                <li>Learned Java Script(React Js ,Node JS), html, CSS, Mongoo Db and Web Deployment</li>
                <li>Delegate tasks to the 4 members of the design team and provide counsel on all aspects of the project. </li>
                <li>Created the IGIRE MUHINZI website, which allows Individuals
to easily buy and sell all agricultural products.</li>
<li>Demo: https://agricultureproject.netlify.app/product</li>
<li>Projects: https://github.com/dushimiman</li>
                <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
              </ul>
            </div>
            <div class="resume-item">
              <h4>CERTIFICATIONS</h4>
              <p><em>Stepping Stone Advertising, New York, NY</em></p>
              <ul>
                <li>I have an AKAZI KANOZE certificate in entrepreneurship, creativity, innovation, saving and
leadership.</li>
                <li>I have a certificate from the Igire RWANDA organization in She Can Code in Java script (React
J.s and Node J.s), HTML, and CSS.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>

  
    

   

   
    

   
  </main>
            </>
    )
}
export default Home;