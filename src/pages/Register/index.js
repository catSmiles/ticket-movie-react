/* eslint-disable jsx-a11y/anchor-is-valid */
function Register() {
  return (
    <div className="lg:w-1/2 xl:max-w-screen-sm">
      <div className="py-8 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
        <div className="cursor-pointer flex items-center">
          <div className="text-2xl text-indigo-800 tracking-wide ml-2 font-semibold">CyberLearn</div>
          {/* <img src={images.logo} alt="CyberLearn" /> */}
        </div>
      </div>
      {/* <div className="mt-8 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl"> */}
      <div className="mt-4 px-12 sm:px-24 md:px-48 lg:px-12 xl:px-24 xl:max-w-2xl">
        <h2
          className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
xl:text-bold"
        >
          Đăng ký
        </h2>
        <div className="mt-4">
          <form>
            {/* fullname */}
            <div>
              <div className="text-sm font-bold text-gray-700 tracking-wide">Họ tên</div>
              <input
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type=""
                placeholder="Họ và tên"
              />
            </div>
            {/* phone number */}
            <div className="mt-6">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">Số điện thoại</div>
              </div>
              <input
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type=""
                placeholder="0xxx-xxx-xxx"
              />
            </div>

            {/* email */}
            <div className="mt-6">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">Email</div>
              </div>
              <input
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type=""
                placeholder="user@gmail.com"
              />
            </div>
            {/* Password */}
            <div className="mt-6">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">Mật khẩu</div>
              </div>
              <input
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type=""
                placeholder="Nhập mật khẩu"
              />
            </div>
            {/* Confirm password */}
            <div className="mt-6">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">Xác nhập mật khẩu</div>
              </div>
              <input
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type=""
                placeholder="Xác nhận mật khẩu"
              />
            </div>

            <div className="mt-8">
              <button
                className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
          font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
          shadow-lg mb-8"
              >
                Đăng ký
              </button>
            </div>
          </form>
          {/* <div className="mt-12 text-sm font-semibold text-gray-700 text-center">
        Bạn chưa có tài khoản?
        <a href="#" className="cursor-pointer text-indigo-600 hover:text-indigo-800 ml-2">
          Đăng ký
        </a>
      </div> */}
        </div>
      </div>
    </div>
  );
}

export default Register;
