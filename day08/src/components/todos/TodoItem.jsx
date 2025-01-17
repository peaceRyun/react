const TodoItem = ({ todo }) => {
    const { id, title } = todo;
    return (
        <li>
            {id} /{title}
        </li>
    );
};

export default TodoItem;
