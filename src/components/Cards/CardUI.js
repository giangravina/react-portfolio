import React from 'react';

const Card = props => {
    return(
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt="img1" className="card-img-top" />
            </div>
        <div className="card-body text-dark">
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text text-secondary">{props.summary}</p>
            <a target="_blank" href={props.link} className="btn card-button">Button</a>
        </div>
        </div>
    );
}

export default Card;