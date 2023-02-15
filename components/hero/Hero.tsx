import { Container, Row, Col } from 'react-bootstrap';
import styles from "../../styles/Hero.module.scss";
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';


const Hero = () => {

    const [mobile, setMobile] = useState(false)
    const showNav = () => setMobile(!mobile);


    return (
        <>
            <Row className={styles.hero}>
                <Col>
                    <div className='--flex-between --pr --zi '>

                        <div className="logo">
                            <Image src="./assets/PEDDLE.svg" alt='logo'
                                width="91"
                                height="38"
                            />
                        </div>
                        <input type='checkbox' className={styles.nav_toggle_checkbox} id='navi-toogle'/>
                        <label for='navi-toogle' className={styles.nav_toggle}>
                            <span className={styles.nav_toggle_icon}>&nbsp;</span>
                        </label>
                    
                        <ul className='--flex-center'>
                            <li className={styles.hero_link}>About</li>
                            <li className={styles.hero_link}>FAQs</li>
                            <li className={styles.hero_link}>Pricing</li>
                            <li className={styles.hero_link}>Testimonials</li>
                        <div >
                            <Link href={"/auth"} className={styles.hero_btn_2}>Logout</Link>
                        </div>
                        </ul>
                        <div >
                            <Link href={"/auth"} className={styles.hero_btn}>Logout</Link>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className='--flex-end' style={{ marginTop: '4rem' }}>
                <Col md={5} className="--flex-center  ">
                    <div className='--flex-start --dir-column'>

                        <h1 className={styles.header}>We Are Everything We Aspire To BE</h1>
                        <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec ac orci condimentum lectus
                            efficitur tempor vel eu massa. Sed molestie turpis eget
                            ipsum malesuada dignissim
                        </p>
                        <a className='button --fzm'>Get Started</a>
                    </div>
                </Col>
                <Col className='--te' md={6}>
                    <Image src="/assets/webdeveloper1.png" alt='hero-image'
                        width="662"
                        height="408"
                        className='img-fluid'
                    />
                </Col>
            </Row>
            <Row className='--flex-center' style={{ marginTop: '8rem' }}>
                <Col md={8} className={styles.info}>
                    <div className="--flex-center">
                        <div className={styles.info_circle}>
                            <Image src="/assets/Vector.svg"
                            alt='circle'
                                width="17"
                                height="18"
                            />
                        </div>
                        <div className={styles.info_data}>
                            <h2>90+</h2>
                            <p>Users</p>
                        </div>
                    </div>
                    <div className="--flex-center">
                        <div className={styles.info_circle}>

                            <Image src="/assets/Vector.svg"
                                alt='circle'
                                width="14"
                                height="20"
                                

                            />
                        </div>
                        <div className={styles.info_data}>
                            <h2>90+</h2>
                            <p>Users</p>
                        </div>
                    </div>
                    <div className="--flex-center">
                        <div className={styles.info_circle}>

                            <Image src="/assets/Vector.svg"
                                alt='circle'
                                width="20"
                                height="18"
                            />
                        </div>
                        <div className={styles.info_data}>
                            <h2>90+</h2>
                            <p>Users</p>
                        </div>
                    </div>
                </Col>
            </Row>

        </>
    )
}

export default Hero