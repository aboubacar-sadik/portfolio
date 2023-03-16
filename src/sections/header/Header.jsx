import Navbar from './Navbar';
import { headerData } from './headerData';
import profilImage from '../../assets/img/profil.jpg';
import { Fade } from 'react-awesome-reveal';

export default function Header() {
   return (
      <div>
         <Navbar />
         <div className="header">
            <div className="profil-infos">
               <Fade duration={4000}>
                  <p className="hello mono-font">{headerData.hello}</p>
                  <h1 className="name">{headerData.name}</h1>
                  <h2 className="slogan">{headerData.slogan}</h2>
                  <p className="profil-description">{headerData.details}</p>
               </Fade>
            </div>
            <div className="profil-image">
               <div className="circle-image">
                  <img src={profilImage} alt="" />
               </div>
            </div>
         </div>
      </div>
   );
}
