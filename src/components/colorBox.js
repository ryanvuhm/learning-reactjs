import React from 'react';
import '../components/colorBox';
import PropTypes from 'prop-types';

function ColorBox(props) {
    const { color } = props;
  
    return (
      <div className='box' style={{ background: color }}>
          asdf
      </div>
    )
  
}

// declare all props used in this components
ColorBox.propTypes = {
  color: PropTypes.string.isRequired,
  rounded: PropTypes.bool,
}

ColorBox.defaultProps = {
  rounded: true,
};

export default ColorBox;