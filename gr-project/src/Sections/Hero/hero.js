import "./hero.scss";
import slider1 from '../../assets/img/slide_1.png'
import slider2 from '../../assets/img/slide_2.png'


const Hero = () => {


    return (

        <div className="container-slider">
            <div className="slider" id="slider">
                <div className="slider__section">
                    <img src={slider1} alt="slider1" className="slider__img" />
                </div>
                <div className="slider__section">
                    <img src={slider2} alt="slider2" className="slider__img" />
                </div>
           </div>
                <div className="slider__btn slider__btn--right" id="btn-right">&#62;</div>
                <div className="slider__btn slider__btn--left" id="btn-left">&#60;</div>
           
        </div>
    )
}

export default Hero