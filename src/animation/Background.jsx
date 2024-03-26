import PropTypes from "prop-types";

export const Background = () => {
  const colorsX = ["#59D5E0", "#FF71CD", "#8B93FF"];
  const moveElementX = `
  @keyframes moveElementX {
    0% {
      transform: translate(-200px, -300px);
    }
    50% {
      transform: translate(600px, 500px);
    }
    100% {
      transform: translate(-200px, -300px);
    }
  }
  `;

  const colorsY = ["#59D5E0", "#FF71CD", "#8B93FF"];
  const moveElementY = `
  @keyframes moveElementY {
    0% {
      transform: translate(600px, 100px);
    }
    50% {
      transform: translate(100px, 600px);
    }
    100% {
        transform: translate(600px, 100px);
    }
  }
  `;
  return (
    <div className="relative w-full h-full overflow-hidden">
      <style>{moveElementX}</style>
      {colorsX.map((color, index) => {
        return (
          <BlurredElement
            key={index}
            color={color}
            animation="moveElementX"
            duration={index + 1 * 4}
          />
        );
      })}

      <style>{moveElementY}</style>
      {colorsY.map((color, index) => {
        return (
          <BlurredElement
            key={index}
            color={color}
            animation="moveElementY"
            duration={index + 1 * 4}
          />
        );
      })}
    </div>
  );
};

export const BlurredElement = ({ color, duration, animation }) => {
  return (
    <div
      className="w-[400px] h-[400px] blur-[80px] rounded-full absolute top-0 left-0"
      style={{
        backgroundColor: color,
        animation: `${animation} ${duration}s linear infinite `,
      }}
    ></div>
  );
};

BlurredElement.propTypes = {
  color: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  animation: PropTypes.string.isRequired,
};
