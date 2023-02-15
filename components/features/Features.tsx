import { Container, Row, Col } from 'react-bootstrap';
import styles from "../../styles/Feature.module.scss";
import Image from 'next/image';


const Features = () => {
  return (
    <>
      <Row className={styles.features} >
        <Col md={5} sm={10} className='--flex-end '>
          <Image src="/assets/keyboard.png" alt='feature'
            width="837"
            height="396"
            className='img-fluid'
          />
        </Col>
        <Col md={3} sm={10} className='--flex-start --dir-column'>
          <h3 className={styles.features_header}>Features We Provide For You</h3>
          <p className={styles.features_text}>Curabitur tempor justo non turpis malesuada cursus. Mauris ac libero eu sem finibus lacinia nec pulvinar.</p>
        <ul className={styles.features_list}>
         <li className={styles.features_items}>Curabitur tempor justo</li>
         <li className={styles.features_items}>Curabitur tempor justo.</li>
         <li className={styles.features_items}>Curabitur tempor justo.</li>
         <li className={styles.features_items}>Curabitur tempor justo.</li>
        
        </ul>
        </Col>
      </Row>
    </>
  )
}

export default Features