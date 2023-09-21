import mainImg from "../images/images/image-hero-desktop.png";
import mobileImg from "../images/images/image-hero-mobile.png";
import clientImg1 from "../images/images/client-databiz.svg";
import clientImg2 from "../images/images/client-audiophile.svg";
import clientImg3 from "../images/images/client-meet.svg";
import clientImg4 from "../images/images/client-maker.svg";



function MainContent(){
    return(
        <div className="custom-container">
            <div className="flex-left">
            <h1>Make <span></span>remote work</h1>
            <p>Get your team in sync, no matter your location.
                Streamline processes, create team rituals, 
                and watch productivity soar.
            </p>

            <button className="custom-button">Learn more</button>
            <div className="clients">
            <img className="clients" src={clientImg1} />
            <img className="clients" src={clientImg2} />
            <img className="clients" src={clientImg3} />
            <img className="clients" src={clientImg4} />
            </div>
            </div>

            <div className="flex-right">
            <img className="mainImg"src={mainImg} />
            <img className="mobileImg" src={mobileImg} />

            </div>

        </div>

    );
}

export default MainContent;