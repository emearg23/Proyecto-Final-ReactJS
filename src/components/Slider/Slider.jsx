import {Carousel} from 'react-bootstrap';
import styles from "./Slider.module.css";
import publicidadImage from '../../img/publicidad-gaming.jpg';
import publicidadImage2 from '../../img/publicidad-gaming2.jpg';
import publicidadImage3 from '../../img/publicidad-gaming3.jpg';

const HeroSlider = () => {

    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1500}>
                    <img
                        className={styles.carousel}
                        src= { publicidadImage }
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className={styles.carousel2}
                        src={ publicidadImage2 }
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className={styles.carousel3}
                        src= { publicidadImage3 }
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default HeroSlider;