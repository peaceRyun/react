const BoardPaging = ({ pageNumber, onCurrent }) => {
    //pageNumber => 10 => 10개가 필요 => 배열이 필요
    const arr = [];
    /*
    [...Array(pageNumber)].forEach((_, idx) => {
        arr.push(idx);
    });
    [...Array(10)] : 배열방을 10개 만들기 .forEach((현재값이 필요없으면 _처리, 인덱스) => {
        arr.push(인덱스);
    });
    */
    // pageNumber.forEach();
    for (let i = 1; i < pageNumber + 1; i++) {
        arr.push(i);
    }
    return (
        <>
            {arr.map((item) => (
                <a href='#' key={item} onClick={() => onCurrent(item)}>
                    {item}
                </a>
            ))}

            {/* {[...Array(pageNumber)].map((_, idx) => (
                <a hef='#' key={idx} onClick={() => onCurrent(idx + 1)}>
                    {idx + 1}
                </a>
            ))} */}
        </>
    );
};

export default BoardPaging;
