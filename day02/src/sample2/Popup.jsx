import { IoCloseSharp } from 'react-icons/io5';

const Popup = ({ onClose, current }) => {
    const { imgurl, title } = current;
    return (
        <>
            <div className='bg'></div>
            <div className='popup'>
                <IoCloseSharp className='close' onClick={onClose} />
                <img src={imgurl} alt={title} />
                <h2>{title}</h2>
            </div>
        </>
    );
};

export default Popup;
