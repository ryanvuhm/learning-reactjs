import React, {useState} from 'react';
import '../components/colorBox';
import PropTypes from 'prop-types';

function ColorBox(props) {
    const { color } = props;
    const [count, setCount] = useState(0);
    return (
      <div>
        <div className='box' style={{ background: color }}>
            color
        </div>

        <div>{count}</div>

        <button onClick={() => setCount(x => x + 1)}>Increase</button>
        
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