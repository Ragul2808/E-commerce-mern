import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      {/* Left Side - Welcome Section */}
      <div className="hidden lg:flex items-center justify-center bg-black w-1/2 px-8">
        <div className="max-w-md space-y-6 text-center text-white">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Welcome to Ecommerce Shopping
          </h1>
        </div>
      </div>

      {/* Right Side - Login/Register Forms */}
      <div className="flex items-center justify-center flex-1 bg-gray-100 px-6 py-12">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
