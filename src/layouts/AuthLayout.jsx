import { Outlet } from "react-router-dom";
import { Background } from "../animation/Background";
import GlassBlurContainer from "../animation/GlassBlurContainer";
import { Alert } from "../components/Alert";

const AuthLayout = () => {
  return (
    <div className="w-full h-full min-h-screen flex justify-between bg-white lg:bg-[#f5f7fa] ">
      <aside className="w-1/2 relative hidden lg:block">
        <Background />
        <GlassBlurContainer />
      </aside>
      <div className="w-full lg:w-1/2 relative flex justify-between items-center">
        <Alert />
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
