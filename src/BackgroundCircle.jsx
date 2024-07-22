import PropTypes from 'prop-types';

const BackgroundCircle = ({ radius, strokeW }) => (
  <circle 
    r={radius}
    fill="yellow" 
    stroke="black" 
    strokeWidth={strokeW}>
  </circle>
);

BackgroundCircle.propTypes = {
  radius: PropTypes.number.isRequired,
  strokeW: PropTypes.number.isRequired,
};

export default BackgroundCircle;
