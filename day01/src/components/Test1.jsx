const Panda3 = ({ ani3: { name } }) => {
    //const {name} = ani3
    return (
        <div>
            <h2>컴포넌트: {name}</h2>
        </div>
    );
};

const Panda2 = ({ name }) => {
    return (
        <div>
            <h2>컴포넌트: {name}</h2>
        </div>
    );
};

const Panda1 = ({ ani1 }) => {
    //구조분해
    const { name } = ani1;
    return (
        <div>
            <h2>컴포넌트: {name}</h2>
        </div>
    );
};

const Bird = ({ name }) => {
    return (
        <div>
            <h2>컴포넌트: {name}</h2>
        </div>
    );
};

const Cat = (props) => {
    //구조분해, 비구조 할당
    // const props = {name:"xxx"}
    const { name } = props;
    return (
        <div>
            <h2>컴포넌트: {name}</h2>
        </div>
    );
};

//props 객체
const Dog = (props) => {
    //props = {name : "푸들 강아지"}
    return (
        <div>
            <h2>컴포넌트: {props.name}</h2>
        </div>
    );
};

const Test1 = () => {
    const ani1 = { name: '판다1' };
    const ani2 = { name: '판다2' };
    const ani3 = { name: '판다3' };

    return (
        <div>
            <Dog name='푸들 강아지' />
            <hr />
            <Cat name='페르시안고양이' />
            <hr />
            <Bird name='부엉이 새' />
            <hr />
            <Panda1 ani1={ani1} />
            <hr />
            <Panda2 {...ani2} />
            <hr />
            <Panda3 ani3={ani3} />
        </div>
    );
};

export default Test1;
