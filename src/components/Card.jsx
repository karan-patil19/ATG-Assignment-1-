import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ className, icon, title, text,}) => {
  return (
    <div className={`card custom-card ${className}`}>
      <div className="card-body">
        <div className="icon mb-3">{icon}</div>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.element,
  title: PropTypes.string,
  text: PropTypes.string,
  
};

export default Card;
