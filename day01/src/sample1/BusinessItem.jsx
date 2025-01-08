const BusinessItem = ({ item }) => {
    //구조분해
    const { imgurl, kor, eng, desc } = item;
    return (
        <li>
            <a href='#'>
                <div>
                    <img src={imgurl} alt={kor} />
                </div>
                <h3>
                    {kor}
                    <span> {eng}</span>
                </h3>
                <p>{desc}</p>
            </a>
        </li>
    );
};

export default BusinessItem;
