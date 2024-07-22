import PropTypes from 'prop-types';

const Eye = ({ eyeOffsetX, eyeOffsetY, eyeRadius }) => (
  <>
    <circle 
      cx={- eyeOffsetX}
      cy={- eyeOffsetY}
      fill="black" 
      r={eyeRadius}>
    </circle>

    <circle 
      cx={+ eyeOffsetX}
      cy={- eyeOffsetY}
      fill="black" 
      r={eyeRadius}>
    </circle>
  </>
);

Eye.propTypes = {
  eyeOffsetX: PropTypes.number.isRequired,
  eyeOffsetY: PropTypes.number.isRequired,
  eyeRadius: PropTypes.number.isRequired,
};

export default Eye;
