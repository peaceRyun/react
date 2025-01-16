const BoardList = ({ currentPosts, loading }) => {
    if (!loading) return <div>loading...</div>;
    return (
        <>
            {currentPosts.map((item) => (
                <tr key={item.id}>
                    <td> {item.id} </td>
                    <td> {item.title} </td>
                    <td> {item.body} </td>
                </tr>
            ))}
        </>
    );
};

export default BoardList;
