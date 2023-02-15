import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import styles from "../../styles/Testimonials.module.scss";

const Testimonials = () => {
    return (
        <>
            <Row className='--mt_s' >
                <Col className='--tc'>
                    <h3 className='--header'>
                        Trusted by Thousands of <br /> Happy Customer
                    </h3>
                    <p className='--text --tc'>Nam laoreet cursus diam, sed tristique arcu semper non.
                        Suspendisse<br /> suscipit est, nec laoreet mi. Nunc pellentesque imperdiet ultricies. </p>
                </Col>
            </Row>
            <Row className={styles.testimonials}>
                <Col md={3} className={styles.testimonials_card}>
                    <div className={styles.testimonials_card_header}>
                        <div>
                            <Image src='/assets/img1.svg'
                                alt='tes1'
                                height='50'
                                width='50'
                            />
                            <div>
                                <h4  className='--text-header'>Viezh Robert</h4>
                                <p>Warsaw, Poland</p>
                            </div>

                        </div>
                        <p>4.5</p>
                    </div>
                    <blockquote className='--text'>
                        “Mauris sem neque, ultrices nec sapien id,
                        consequat laoreet dolor. Ut rhoncus sollicitudin metus,
                        ac lobortis felis dignissim et. Fusce arcu ex”
                    </blockquote>
                </Col>
                <Col md={3} className={styles.testimonials_card}>
                    <div className={styles.testimonials_card_header}>
                        <div>
                            <Image src='/assets/img2.svg'
                                alt='tes1'
                                height='50'
                                width='50'
                            />
                            <div>
                                <h4  className='--text-header'>Yessica Christy</h4>
                                <p>Shanxi, China</p>
                            </div>

                        </div>
                        <p>4.5</p>
                    </div>
                    <blockquote className='--text'>
                        “Mauris sem neque, ultrices nec sapien id,
                        consequat laoreet dolor. Ut rhoncus sollicitudin metus,
                        ac lobortis felis dignissim et. Fusce arcu ex”
                    </blockquote>
                </Col>
                <Col md={3} className={styles.testimonials_card}>
                    <div className={styles.testimonials_card_header}>
                        <div>
                            <Image src='/assets/img3.svg'
                                alt='tes1'
                                height='50'
                                width='50'
                            />
                            <div>
                                <h4  className='--text-header'>Kim Young Jou</h4>
                                <p>Seoul, South Korea</p>
                            </div>

                        </div>
                        <p>4.5</p>
                    </div>
                    <blockquote className='--text'>
                        “Mauris sem neque, ultrices nec sapien id,
                        consequat laoreet dolor. Ut rhoncus sollicitudin metus,
                        ac lobortis felis dignissim et. Fusce arcu ex”
                    </blockquote>
                </Col>


            </Row>
        </>
    )
}

export default Testimonials