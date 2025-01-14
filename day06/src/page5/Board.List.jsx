const BoardList = ({ item }) => {
    const { id, title, body } = item;
    return (
        <>
            <tr>
                <td> {id} </td>
                <td> {title} </td>
                <td> {body} </td>
            </tr>
        </>
    );
};

export default BoardList;
