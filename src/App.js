import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { FaDice, FaHamburger, FaPhone, FaRobot, FaStickyNote } from 'react-icons/fa'

function App() {
  const [activeProject, setActiveProject] = useState();



  return (
    <div className="App">
      <header className="Projects">
        <Link onMouseOver={() => setActiveProject(
            <div>
              <h2>IRL Betting App (COMING SOON!)</h2>
              <p>A full-stack mobile application where users will be able to exchange "real-life" wagers with eachother. </p>
              <h3>Stack</h3>
              <p><b>Front-end:</b> React Native Mobile/Web</p>
              <p><b>Back-end:</b> PostgreSQL, Node.JS + Express, <a href={`https://firebase.google.com/docs/auth`}>Firebase Auth</a></p>
              <p><b>Libraries/APIs: </b> <a href={`https://expo.dev/`}>Expo GO</a>,  
                                            <a href={`https://redux-toolkit.js.org/`}> Redux Toolkit</a> 
                                            </p>
            </div>
        )}>
          <FaDice size={`5em`} color={'tomato'}></FaDice>
        </Link>
        <Link link={`https://meal-planner-client.onrender.com/`} onMouseOver={() => setActiveProject(
            <div>
              <h2>Meal Planner</h2>
              <p>A full-stack web application that generates meals for a user based on caloric and macronutrient intake.</p>
              <h3>Stack</h3>
              <p><b>Front-end:</b> React</p>
              <p><b>Back-end:</b> Node.JS (proxy server) + Express</p>
              <p><b>Libraries/APIs: </b> <a href={`https://platform.fatsecret.com/api/`}>Fatsecret REST API</a> </p>
            </div>
        )}>
          <FaHamburger size={`5em`} color={'steelblue'}/>
        </Link>
        <Link link={`https://knguye.github.io/notepad-app/`} onMouseOver={() => setActiveProject(
            <div>
              <h2>Local Notepad App</h2>
              <p>A localStorage based application that allows the user to enter in quick, editable sticky notes</p>
              <h3>Stack</h3>
              <p><b>Front-end:</b> React</p>
              <p><b>Back-end:</b> localStorage</p>
              <p><b>Libraries/APIs:</b> N/A </p>
            </div>
        )}>
          <FaStickyNote size={`5em`} color={'khaki'}></FaStickyNote>
        </Link>
        <Link onMouseOver={() => setActiveProject(
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
            </div>
        )}>
          <FaRobot size={`5em`} color={'lightgreen'}></FaRobot>
        </Link>
      </header>
      <ProjectDescription>
        {activeProject}
      </ProjectDescription>
    </div>
  );
}

function Link(props) {
  return (
    <a href={props.link} class={`hover-link`} onMouseOver={props.onMouseOver}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        {props.children}
      </div>
    </a>
  )
}

function ProjectDescription(props){
  return (
    <div class={`project-desc`}>
      {props.children}
    </div>
  )
}

export default App;
