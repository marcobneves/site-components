import React from 'react'
import PropTypes from 'prop-types';
import './TextInput.css';

function TextInput(props) {
  const {size, label, type } = { ...props };
  const mode = size ? `text-input-${size}` : 'text-input-regular';
    return (
        <div className="text-input-container">
            <div  className={`text-input ${mode}`}>{label}</div>
            <input
             type={type}/>
        </div>
    )
}

export default TextInput

TextInput.propTypes = {
    label: PropTypes.string,
    size: PropTypes.oneOf(['regular','small', 'medium', 'large']),
    type: PropTypes.oneOf(['text','password', 'number', 'email']),
  };

  
TextInput.defaultProps = {
    label: 'Label',
    size: 'regular',
    type: 'text'
};
