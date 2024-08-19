import PythonIcon from './assets/python.png';
import JavascriptIcon from './assets/java-script.png';
import JavaIcon from './assets/java.png';
import CIcon from './assets/c.png';
import HtmlIcon from './assets/html-5.png';
import CssIcon from './assets/css-3.png';
import SolidityIcon from './assets/solidity.png';
import SqlIcon from './assets/sql.png';
import MongoIcon from './assets/mongo.webp';
import reactjsicon from './assets/reactjs.png';
import nodejsicon from './assets/nodejs.png';
import fastapiicon from './assets/fastapi.png';
import flaskicon from './assets/flask.png';
import muiicon from './assets/mui.png';
import primeicon from './assets/primereact.webp';
import giticon from './assets/github.png';
import figmaicon from './assets/figma.webp';
import azureicon from './assets/azure.png';
import web3icon from './assets/web3.jpg';
import postmanicon from './assets/postman.png';
import vstusioicon from './assets/vs.webp';
import expressicon from './assets/express-js.png'

export const skillsData = {
    Languages: [
        { name: 'Python', icon: <img src={PythonIcon} alt="Python" style={{ width: '40px', height: '40px' }} /> },
        { name: 'JavaScript', icon: <img src={JavascriptIcon} alt="JavaScript" style={{ width: '40px', height: '40px' }} /> },
        { name: 'Java', icon: <img src={JavaIcon} alt="Java" style={{ width: '50px', height: '50px' }} /> },
        { name: 'C', icon: <img src={CIcon} alt="C" style={{ width: '40px', height: '50px' }} /> },
        { name: 'HTML', icon: <img src={HtmlIcon} alt="HTML" style={{ width: '40px', height: '40px' }} /> },
        { name: 'CSS', icon: <img src={CssIcon} alt="CSS" style={{ width: '40px', height: '40px' }} /> },
        { name: 'Solidity', icon: <img src={SolidityIcon} alt="Solidity" style={{ width: '50px', height: '50px', borderRadius: 25 }} /> },
    ],
    'Query Languages': [
        { name: 'SQL', icon: <img src={SqlIcon} alt="SQL" style={{ width: '40px', height: '40px' }} /> },
        { name: 'MongoDB', icon: <img src={MongoIcon} alt="MongoDB" style={{ width: '50px', height: '50px' }} /> },
    ],
    Frameworks: [
        { name: 'React.js', icon: <img src={reactjsicon} alt="React.js" style={{ width: '40px', height: '40px' }} /> },
        { name: 'Node.js', icon: <img src={nodejsicon} alt="Node.js" style={{ width: '50px', height: '50px' }} /> },
        { name: 'Express.js', icon: <img src={expressicon} alt="Express.js" style={{ width: '40px', height: '40px' }} /> },
        { name: 'FastAPI', icon: <img src={fastapiicon} alt="FastAPI" style={{ width: '40px', height: '40px', borderRadius: 25 }} /> },
        { name: 'Flask', icon: <img src={flaskicon} alt="Flask" style={{ width: '40px', height: '40px', borderRadius: 25 }} /> },
    ],
    'Tools & Technologies': [
        { name: 'Material-UI', icon: <img src={muiicon} alt="Material-UI" style={{ width: '50px', height: '50px' , borderRadius: 25}} /> },
        { name: 'PrimeReact', icon: <img src={primeicon} alt="PrimeReact" style={{ width: '40px', height: '40px' , borderRadius: 25}} /> },
        { name: 'GIT', icon: <img src={giticon} alt="GIT" style={{ width: '40px', height: '40px' }} /> },
        { name: 'Figma', icon: <img src={figmaicon} alt="Figma" style={{ width: '40px', height: '40px' }} /> },
        { name: 'Azure', icon: <img src={azureicon} alt="Azure" style={{ width: '40px', height: '40px' }} /> },
        { name: 'Web3', icon: <img src={web3icon} alt="Web3" style={{ width: '60px', height: '60px' , borderRadius: 50}} /> },
        { name: 'Visual Studio', icon: <img src={vstusioicon} alt="Visual Studio" style={{ width: '40px', height: '40px' }} /> },
        { name: 'Postman', icon: <img src={postmanicon} alt="Postman" style={{ width: '40px', height: '40px', borderRadius: 25 }} /> },
    ],
};
