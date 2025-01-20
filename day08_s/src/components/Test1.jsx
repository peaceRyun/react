import styles from './Test1.module.scss';

const Test1 = () => {
    return (
        <div className={styles.box}>
            <article className={styles.box1}>1</article>
            <article>2</article>
            <article>3</article>
        </div>
    );
};

export default Test1;
/*
    파일명.module.css/scss
    import 사용자정의명 from './Button.module.css';
    <태그 className={사용자정의명.클래스}>컨텐츠</태그>;

    1. 유지보수 할 때 많이 사용한다. css의 클래스 중복이름을 피하기 위해서
    2. 처음부터 클래스명의 중복때문에 작성하는 사람도 많다.
    클래스명안에는 태그명가능
    클래스명안에는 클래스를 사용할 수 없다.
    https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/

    
    F12 -> 개발모드 확인할 때 [filename]\_[classname]\_\_[hash].
    _box_76uj6_1
    _클래스명_hash
*/
