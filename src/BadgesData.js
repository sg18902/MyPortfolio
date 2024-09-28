import PythonIcon from "./assets/Instagram.webp";
import Meta1 from "./assets/meta_frontend_badge.png";
import Meta2 from "./assets/meta_fullstack_badge.png";
import Ibm from "./assets/ibm_fullstack_badge.png";
import Python from "./assets/python_badge.png";
import Java from "./assets/java_badge.png";
import microservices from "./assets/microservices.png"


export const badgesData = [
    {  icon: <img src={Meta2} alt="Meta2" style={{ width: '210px', height: '215px' }} onClick={() => window.open('https://www.credly.com/badges/2879d8e8-424e-491b-bdd0-f7b492bbdb39/public_url', '_blank')} /> },
    { icon: <img src={Java} alt="Java" style={{ width: '210px', height: '215px' }}  onClick={() => window.open('https://www.credly.com/badges/c6c7319a-9f27-423d-9829-51a21b9496c5/public_url', '_blank')} /> },
    {  icon: <img src={Ibm} alt="Ibm" style={{ width: '210px', height: '215px' }}  onClick={() => window.open('https://www.credly.com/badges/8c6681f7-5110-488b-b21e-9c231559ab55/public_url', '_blank')} /> },
    { icon: <img src={Python} alt="Python" style={{ width: '210px', height: '215px', borderRadius: '50%' }}  onClick={() => window.open('https://www.credly.com/badges/eaf35645-8ba3-4b59-be7a-d81b25a65097/public_url', '_blank')} /> },
    { icon: <img src={Meta1} alt="Meta1" style={{ width: '210px', height: '215px' }}   onClick={() => window.open('https://www.credly.com/badges/7c9af675-56b9-4634-b970-ee8970c66ae2/public_url', '_blank')}/> },
    { icon: <img src={microservices} alt="microservices" style={{ width: '210px', height: '215px', borderRadius: '50%'  }}  onClick={() => window.open('https://www.credly.com/badges/d88f27a7-c36b-42ed-874d-36ee33d28d12/public_url', '_blank')}/> },
]