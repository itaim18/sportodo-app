import Lottie from "react-lottie";
import greenBall from "../images/green-ball.json";
const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: greenBall,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="loading">
      <Lottie options={defaultOptions} height={300} width={300} />
    </div>
  );
};

export default Loading;
