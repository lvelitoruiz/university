import React from "react";

const Modal = () => {
  return (
    <div className="fixed left-0 top-0 h-screen w-screen bg-opacity-40 bg-black z-50 flex items-center justify-center">
      <div className="bg-white rounded-3xl w-[650px] p-6 lg:pt-[60px] lg:pb-[60px]">
        {/* Sign In */}
        <div className="hidden">
          <h3 className="text-[26px] lg:text-[30px] ff-cg--semibold text-center mb-8">Sing in to your account</h3>
          <form className="flex items-center justify-center" action="">
            <div className="w-full lg:w-[80%]">
              <div className="mb-4">
                <label className="text-[12px] ff-cg--semibold" htmlFor="">Email</label>
                <input className="w-full border border-solid placeholder:text-[#000000] p-[10px] focus:outline-none rounded-md" type="text" placeholder="Studen@domain.com" />
              </div>
              <div>
                <label className="text-[12px] ff-cg--semibold" htmlFor="">Password</label>
                <input className="w-full border border-solid placeholder:text-[#000000] p-[10px] focus:outline-none rounded-md" type="password" placeholder="*******" />
              </div>
              <button className="w-full flex items-center justify-center bg-[#fdbf38] py-[14px] px-[16px] rounded-2xl mt-[30px]">
                <span className="ff-cg--semibold mr-[20px]">Sign In</span>
              </button>
            </div>
          </form>
        </div>
        {/* Register */}
        <div>
          <h3 className="text-[26px] lg:text-[30px] ff-cg--semibold text-center mb-8">Register</h3>
          <form className="flex items-center justify-center" action="">
            <div className="w-full lg:w-[80%]">
              <div className="mb-4">
                <label className="text-[12px] ff-cg--semibold" htmlFor="">Email</label>
                <input className="w-full border border-solid placeholder:text-[#000000] p-[10px] focus:outline-none rounded-md" type="text" placeholder="Studen@domain.com" />
              </div>
              <div className="mb-4">
                <label className="text-[12px] ff-cg--semibold" htmlFor="">Name</label>
                <input className="w-full border border-solid placeholder:text-[#000000] p-[10px] focus:outline-none rounded-md" type="text" placeholder="Studen@domain.com" />
              </div>
              <div>
                <label className="text-[12px] ff-cg--semibold" htmlFor="">Password</label>
                <input className="w-full border border-solid placeholder:text-[#000000] p-[10px] focus:outline-none rounded-md" type="password" placeholder="*******" />
              </div>
              <div>
                <label className="text-[12px] ff-cg--semibold" htmlFor="">Password</label>
                <input className="w-full border border-solid placeholder:text-[#000000] p-[10px] focus:outline-none rounded-md" type="password" placeholder="*******" />
              </div>
              <button className="w-full flex items-center justify-center bg-[#fdbf38] py-[14px] px-[16px] rounded-2xl mt-[30px]">
                <span className="ff-cg--semibold mr-[20px]">Sign In</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
