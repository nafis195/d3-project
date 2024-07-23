import BackgroundCircle from "./BackgroundCircle.jsx";
import Eye from "./Eye.jsx";
import Mouth from "./Mouth.jsx";

function Face() {

  const width = 960;
  const height = 500;
  const centerX = width / 2;
  const centerY = height / 2;
  const strokewidth = 10;

  const eyeOffsetX = 100;
  const eyeOffsetY = 100;
  const eyeRadius = 50;

  const mouthWidth = 20;                                                                                 20;
  const mouthRadius = 140;

  
  return (
    <>
      <face>
        <svg width={width} height={height}>
          <g transform={`translate(${centerX}, ${centerY})`}>
            
            <BackgroundCircle 
              radius={centerY - strokewidth/2} 
              strokeW={strokewidth}>
            </BackgroundCircle>

            <Eye
              eyeOffsetX={eyeOffsetX}
              eyeOffsetY={eyeOffsetY}
              eyeRadius={eyeRadius}>
            </Eye>

            <Mouth
              mouthRadius={mouthRadius}
              mouthWidth={mouthWidth}>
            </Mouth>
            
          </g>
        </svg>
      </face>
    </>
  );
}

export default Face