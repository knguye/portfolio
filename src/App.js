import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import { FaDesktop, FaDice, FaHamburger, FaPhone, FaRobot, FaStickyNote, FaWindowClose, FaXing } from 'react-icons/fa'

const projects = [
        <div>
              <h2>IRL Betting App (Work in Progress)</h2>
              <p>A full-stack mobile application where users will be able to exchange "real-life" wagers with eachother. </p>
              <h3>Stack</h3>
              <p><b>Front-end:</b> React Native Mobile/Web</p>
              <p><b>Back-end:</b> PostgreSQL, Node.JS + Express, <a href={`https://firebase.google.com/docs/auth`}>Firebase Auth</a></p>
              <p><b>Libraries/APIs: </b> <a href={`https://expo.dev/`}>Expo GO</a>,  
                                            <a href={`https://redux-toolkit.js.org/`}> Redux Toolkit</a> 
                                            </p>
            </div>,
        
      <div>
        <h2>Meal Planner</h2>
        <p>A full-stack web application that generates meals for a user based on caloric and macronutrient intake.</p>
        <h3>Stack</h3>
        <p><b>Front-end:</b> React</p>
        <p><b>Back-end:</b> Node.JS (proxy server) + Express</p>
        <p><b>Libraries/APIs: </b> <a href={`https://platform.fatsecret.com/api/`}>Fatsecret REST API</a> </p>
      </div>,

    <div>
      <h2>Local Notepad App</h2>
      <p>A localStorage based application that allows the user to enter in quick, editable sticky notes</p>
      <h3>Stack</h3>
      <p><b>Front-end:</b> React</p>
      <p><b>Back-end:</b> localStorage</p>
      <p><b>Libraries/APIs:</b> N/A </p>
    </div>,

    <div>
    <h2>Kev's Coding Academy</h2>
    <p>My business, where I educate and assist secondary and post-secondary students with their programming courses!</p>
    <h3>What I've done</h3>
    <ul>
      <li>Helped over 100 students with their school assignments as well as general understanding of multiple languages</li>
      <li>Taught multiple programming languages/libraries (Java, C, C++, Python, Javascript, even Powershell and MATLAB!)</li>
      <li>Achieved over 20 5-star reviews on Google</li>
      <li>Made my own website with HTML and CSS</li>
      <li>Organized group lessons for multiple children at a time, teaching web development</li>
    </ul>
    </div>,

    <div>
    <h2>Greenhouse Robot Project</h2>
    <p>For my Western University Capstone project - helped developed a prototype greenhouse robot with autonomous movement</p>
    <h3>My Contributions</h3>
    <ul>
      <li>Added QR code scanning to the robot with Linux, the zbar library and a logitech webcam</li>
      <li>Developed a subscription-based system to send QR data throughout the Robot Operating System</li>
      <li>Assisted in hardware troubleshooting, as well as hardware procurement</li>
      <li>Presented ideas, reports, and presentations to professors and industry leaders</li>
    </ul>
    </div>,
]

const links = [
  `https://expo.dev/accounts/knoodl/projects/BetOnClient`,
  `https://meal-planner-client.onrender.com/`,
  `https://knguye.github.io/notepad-app/`,
  `https://kevscodingacademy.com`,
  ''
]

const icons = [
  <FaDice size={`5em`} color={'tomato'}></FaDice>,
  <FaHamburger size={`5em`} color={'lavender'}/>,
  <FaStickyNote size={`5em`} color={'khaki'}></FaStickyNote>,
  <FaDesktop size={`5em`} color={'steelblue'}></FaDesktop>,
  <FaRobot size={`5em`} color={'lightgreen'}></FaRobot>
]

const colors = [
  'tomato',
  'lavender',
  'khaki',
  'steelblue',
  'lightgreen'
]

const maxMobileWidth = 640;

/* TODO:
  1. Get it so mobile icons are "active" on click and deactivated on close (set icon to an X to get out)
  2. Add link button to each portfolio summary
  3. Test on mobile to make sure everything fits
*/


function App() {
  const [activeProject, setActiveProject] = useState();
  const [activeLink, setActiveLink] = useState();

  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(() => (width < 720) ? true : false);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
    if (width < maxMobileWidth) {
      setIsMobile(true);
    }
    else {
      setIsMobile(false);
    }
  }

  useEffect (() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, [width])

  return (
    <div className="App">     
      <div className={`Projects`}>
        {
          projects.map((val, key) => {
            return(
              <Link link={links[key]} 
                      onClick={() => {
                        if (activeProject == projects[key]){
                          setActiveProject();
                          setActiveLink();
                        }
                        else {
                          setActiveProject(projects[key]);
                          setActiveLink(links[key]);
                        }

                      }} 
                      active={activeProject == projects[key] ? true : false}
                          onMouseOut={() => setActiveProject()} 
                            onMouseOver={() => setActiveProject(projects[key])}
                      color={colors[key]}>
              {icons[key]}
              </Link>
            )
          })
        }


      </div>
      <ProjectDescription link={activeLink} active={(activeProject) ? true : false}>
        {activeProject}
      </ProjectDescription>
    </div>
  );

  function Link(props) {
    // TODO: Don't go right to the link when clicking on mobile
    //const [isTapped, setIsTapped] = useState(); // Mobile only for "clicks"

    if (isMobile){
      return (
        <button class={props.active ? `mobile-link tapped-link` : `mobile-link`} onClick={props.onClick}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
            {props.children}
          </div>
        </button>
      )
    }
    else {
      return (
        <a href={props.link} class={`hover-link`} onMouseOver={props.onMouseOver} onMouseOut={props.onMouseOut}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
            {props.children}
          </div>
        </a>
      )
    }
  
  }
  
  function ProjectDescription(props){

    if (isMobile){
      return (
        <div class={`project-desc-mobile flex-animated ${props.active ? 'flex-added' : ''}` }>
          {props.children}
          {props.active && props.link !== '' ? <a class={`project-link-btn`} href={props.link} type={`button`}>Link</a> : null}
        </div>
      )
    }
    else {
      return (
        <div class={`project-desc`}>
          {props.children}
        </div>
      )
    }
  }
}



export default App;


/*
        <Link link={links[0]} 
                            onClick={() => {
                              setActiveProject(projects[0]);
                            }} 
                                onMouseOut={() => setActiveProject()} 
                                  onMouseOver={() => setActiveProject(projects[0])}>
            {icons[0]}
        </Link>
        <Link link={links[1]}  
                                    onClick={() => {
                                      setActiveProject(projects[1]);
                                    }} 
                                onMouseOut={() => setActiveProject()} 
                                  onMouseOver={() => setActiveProject(projects[1])}>

        </Link>
        <Link link={links[2]} 
                                    onClick={() => {
                                      setActiveProject(projects[2]);
                                    }} 
                                onMouseOut={() => setActiveProject()} 
                                  onMouseOver={() => setActiveProject(projects[2])}>

        </Link>
        <Link link={links[3]} 
                                    onClick={() => {
                                      setActiveProject(projects[3]);
                                    }} 
                                onMouseOut={() => setActiveProject()} 
                                  onMouseOver={() => setActiveProject(projects[3])}>

        </Link>
        <Link onMouseOut={() => setActiveProject()} 
                                    onClick={() => {
                                      setActiveProject(projects[4]);
                                    }} 
                    onMouseOver={() => setActiveProject(projects[4])}>

        </Link>
*/