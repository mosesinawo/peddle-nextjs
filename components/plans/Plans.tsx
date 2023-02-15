import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import styles from "../../styles/Plans.module.scss";
const Plans = () => {
  return (
    <>
      <Row className='--flex-center'>
        <div >
          <h3 className={styles.plans_header}> Choose Your Plan</h3>
          <p className={styles.plans_text}>Let's choose the package that is best for you
            and explore it happily and <br /> cheerfully.</p>
        </div>
      </Row>
      <Row className={styles.plans}>
        <Col md={3} sm={4}  className={styles.plans_info}>
          <div className={styles.plans_image_wrapper}>

            <Image src='/assets/pricing3.svg' alt='plan-1'
              width='150'
              height='150'
            />
          </div>
          <ul>
          <h4 className={styles.plans_info_header}>Free Plan</h4>
            <li className={styles.plans_info_list}>Mauris sem neque</li>
            <li className={styles.plans_info_list}>Mauris sem neque</li>
            <li className={styles.plans_info_list}>Mauris sem neque</li>
            <li className={styles.plans_info_list}>Mauris sem neque</li>
          </ul>
          <div className={styles.plans_info_button}>

            <h3>Free</h3>
            <button>Select</button>
          </div>
        </Col>
        <Col md={3} sm={4}   className={styles.plans_info}>
          <div className={styles.plans_image_wrapper}>

            <Image src='/assets/pricing2.svg' alt='plan-1'
              width='150'
              height='150'
            />
          </div>
          <ul>
          <h4 className={styles.plans_info_header}>Standard Plan</h4>
            <li className={styles.plans_info_list}>Mauris sem neque</li>
            <li className={styles.plans_info_list}>Mauris sem neque</li>
            <li className={styles.plans_info_list}>Mauris sem neque</li>
            <li className={styles.plans_info_list}>Mauris sem neque</li>
            <li className={styles.plans_info_list}>Mauris sem neque</li>
          </ul>
          <div className={styles.plans_info_button}>

            <h3>$9/ <span>mo</span></h3>
            <button>Select</button>
          </div>
        </Col>
        <Col md={3} sm={4}   className={styles.plans_info}>
          <div className={styles.plans_image_wrapper}>

            <Image src='/assets/pricing1.svg' alt='plan-1'
              width='150'
              height='150'
            />
          </div>
          <ul>
          <h4 className={styles.plans_info_header}> Premium Plan</h4>
            <li className={styles.plans_info_list}>Mauris sem neque</li>
            <li className={styles.plans_info_list}>Mauris sem neque</li>
            <li className={styles.plans_info_list}>Mauris sem neque</li>
            <li className={styles.plans_info_list}>Mauris sem neque</li>
            <li className={styles.plans_info_list}>Mauris sem neque</li>
            <li className={styles.plans_info_list}>Mauris sem neque</li>
          </ul>
          <div className={styles.plans_info_button}>
            <h3>$12/ <span>mo</span></h3>
            <button>Select</button>
          </div>
        </Col>
      </Row>
      <Row className='--flex-center --mt'>
        <Col className='--tc'>
          <h3 className={styles.plans_header}> Get Started With <br /> Paddle Today</h3>
          <p className={styles.plans_text}>Praesent mollis lobortis nisl nec laoreet. Duis euismod nisl nec ante <br /> egestas ullamcorper</p>
          <a className='button --fzl'>Start Today</a>
        </Col>
      </Row>
      <Row className='--flex-center --mt_s'>
        <Col className='--tc'>
          <Image src='/assets/netflix.svg'
            height='60'
            width='190'
          />
          <Image src='/assets/netflix.svg'
            height='60'
            width='190'
          />
          <Image src='/assets/netflix.svg'
            height='60'
            width='190'
          />
          <Image src='/assets/netflix.svg'
            height='60'
            width='190'
          />
          <Image src='/assets/netflix.svg'
            height='60'
            width='190'
          />
        </Col>
      </Row>
    </>
  )
}

export default Plans
