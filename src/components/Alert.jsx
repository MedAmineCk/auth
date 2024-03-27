import { useAuth } from "../context/AuthContext";
import {
  FaCircleCheck,
  FaCircleInfo,
  FaFaceDizzy,
  FaRegCircleXmark,
} from "react-icons/fa6";

export const Alert = () => {
  const { alert, setAlert } = useAuth();
  const { type, message, visibility } = alert;
  console.log(alert);

  /*useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 3000); // Adjust the timeout duration as needed (in milliseconds)

    return () => clearTimeout(timer);
  }, []);


  const progressBarAnimation = `
      @keyframes progress-animation {
        0% {
          width: 0%;
        }
        100% {
          width: 100%;
        }
      }
      `;

  */

  //type can be success, error, info

  const typeStyle =
    type === "error"
      ? "bg-red-100 border-red-500 text-red-500"
      : type === "info"
      ? "bg-blue-100 border-blue-500 text-blue-500"
      : "bg-green-100 border-green-500 text-green-500";

  const alertAnimation = `
@keyframes alert-animation {
  0% {
    transform: translate(-50%, -100%);
  }
  50% {
    transform: translate(-50%, 0%);
  }
  70% {
    transform: translate(-50%, -20%);
  }
  80% {
    transform: translate(-50%, 0%);
  }
  90% {
    transform: translate(-50%, -10%);
  }
  100% {
    transform: translate(-50%, 0%);
  }
}`;

  if (!visibility) {
    return null;
  }

  return (
    <>
      <style>{alertAnimation}</style>
      <div
        className={`border-l-4 px-4 py-3 rounded-xl w-fit min-w-80 absolute top-2 left-1/2 -translate-x-1/2 transition-all ${typeStyle} `}
        style={{ animation: `alert-animation 1.2s ease-in-out` }}
      >
        <div className="flex items-center mb-2">
          <div className="text-2xl mr-2">
            {type === "success" ? (
              <FaCircleCheck />
            ) : type === "error" ? (
              <FaFaceDizzy />
            ) : (
              <FaCircleInfo />
            )}
          </div>
          <div className="font-bold">{type}</div>
        </div>
        <div className="text-sm">{message}</div>
        <button
          type="button"
          className="absolute top-0 right-0 p-2 text-xl"
          onClick={() => setAlert({ ...alert, visibility: false })}
        >
          <FaRegCircleXmark />
        </button>
        {/* <style>{progressBarAnimation}</style>
      <div
        className={`h-1 rounded ${
          type === "error" ? "bg-red-500" : "bg-green-500"
        } mt-2`}
        style={{ width: 0, animation: `progress-animation 3s linear infinite` }}
      ></div> */}
      </div>
    </>
  );
};
