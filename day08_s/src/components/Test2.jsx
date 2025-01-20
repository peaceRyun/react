import styles from './Test2.module.css';
import './Test2.css';

const Test2 = () => {
    return (
        <div className='wrap'>
            {/* 클래스 1개 불러오기 */}
            <div className='box'>1</div>
            <div className={styles.box}>1</div>

            {/* 클래스 두개 이상 불러오기: 다중클래스 - 많이 사용*/}
            <div className='box bg'>2</div>
            <div className={`${styles.box} ${styles.bg}`}>2</div>
            <div className={`box ${styles.bg}`}>2</div>
            <div className={`${styles.box} bg`}>2</div>

            {/* 클래스 두개 이상 불러오기: 다중클래스 */}
            <div className={[styles.box, styles.bg].join(' ')}>3</div>
            <div className={['box', styles.bg].join(' ')}>3</div>
            <div className={[styles.box, 'bg'].join(' ')}>3</div>
        </div>
    );
};

export default Test2;
