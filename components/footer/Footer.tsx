import Image from 'next/image';
import styles from "../../styles/Footer.module.scss";
import { Container, Row, Col } from 'react-bootstrap';
const Footer = () => {
    return (
        <>
            <Row className={styles.footer}>
                <Col md={4}>
                    <Image
                        src="./assets/PEDDLE.svg"
                        alt='footer-img'
                        width='91'
                        height='38'
                    />
                    <p className='--text'>
                        Praesent mollis lobortis nisl nec laoreet.
                        Duis euismod nisl nec ante egestas ullamcorper. Duis id mauris
                        consequat, ultrices ligula at, laoreet mag.
                    </p>
                    <p style={{color:'#AFB5C0'}} className='--text'>&copy;2020PADDLE</p>
                </Col>
                <Col md={6} className='--tc --flex-between --fs'>


                    <div className='--flex-column --fs'>
                        <h4 className='--text-header'>Product</h4>
                        <ul>
                            <li>Praesent </li>
                            <li> Laoreet</li>
                            <li> Laoreet</li>
                            <li> server</li>
                        </ul>
                    </div>
                    <div className='--flex-column --fs'>
                        <h4 className='--text-header'>Engage</h4>
                        <ul>
                            <li>Mauris </li>
                            <li> Aenean</li>
                            <li> Linsean</li>
                            <li> Lingula</li>
                        </ul>
                    </div>
                    <div className='--flex-column --fs'>
                        <h4 className='--text-header'>Earn Money</h4>
                        <ul>
                            <li>Ultrices </li>
                            <li> Fusce</li>

                        </ul>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Footer