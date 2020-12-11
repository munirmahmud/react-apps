import React, { useState } from 'react';
import { FaCaretSquareDown, FaWindowClose } from 'react-icons/fa';
import './tour.scss';

const Tour = (props) => {
    const [showInfo, setShowInfo] = useState(false);

    const {id, city, img, name, info} = props.tour;
    const { removeTour } = props;

    const toggleInfo = () => {
        setShowInfo(showInfo => !showInfo);
    };


    
    return (
        <article className="tour">
            <div className="img__container">
                <img src={img} alt={name} />
            
                <span className="close__btn">
                    <FaWindowClose onClick={() => removeTour(id)} />
                </span>
            </div>

            <div className="tour__info">
                <h3>{city}</h3>
                <h4>{name}</h4>
                <h5>Info <FaCaretSquareDown onClick={toggleInfo} className="icon__down" /></h5>

                {showInfo && <p>{info}</p>}
            </div>
            
        </article>
    )
}

export default Tour;
