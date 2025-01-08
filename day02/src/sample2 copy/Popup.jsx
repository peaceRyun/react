import { IoCloseSharp } from 'react-icons/io5';

const Popup = ({ data, onToggle }) => {
    const { id, title, imgurl, desc } = data;
    const onView = (id) => {
        setCurrent(data.find((item) => item.id === id));
    };
    return (
        <>
            <div className='bg'></div>
            <div className='popup'>
                <IoCloseSharp className='close' onClick={() => onToggle} />
                <img src={imgurl} alt={title} />
                <h2>{desc}</h2>
            </div>
        </>
    );
};

export default Popup;
