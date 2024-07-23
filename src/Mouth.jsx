import { arc } from "d3";
import PropTypes from 'prop-types';

const Mouth = ({ mouthRadius, mouthWidth }) => {
  const mouthArc = arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius + mouthWidth)
    .startAngle(Math.PI / 2)
    .endAngle(Math.PI * 3/2);

  return <path d={mouthArc()}></path>;
};

Mouth.propTypes = {
  mouthRadius: PropTypes.number.isRequired,
  mouthWidth: PropTypes.number.isRequired,
};

export default Mouth;
