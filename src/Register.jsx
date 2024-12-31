import "./Register.css";

export default function Register() {
  const onFinish = (values) => {
    console.log("ค่าที่ได้รับจากฟอร์ม: ", values);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          ลงทะเบียน
        </h2>
        <form
          name="register"
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const values = Object.fromEntries(formData.entries());
            onFinish(values);
          }}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              อีเมล
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                id="email"
                name="email"
                type="email"
                required
                className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm"
                placeholder="อีเมลของคุณ"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              เบอร์โทรศัพท์
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm"
                placeholder="เบอร์โทรศัพท์"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                ชื่อ
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm"
                  placeholder="ชื่อ"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                นามสกุล
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm"
                  placeholder="นามสกุล"
                />
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              รหัสผ่าน
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                id="password"
                name="password"
                type="password"
                required
                className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm"
                placeholder="กำหนดรหัสผ่านขั้นต่ำ 8 ตัว"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              ยืนยันรหัสผ่าน
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm"
                placeholder="กำหนดรหัสผ่านขั้นต่ำ 8 ตัว"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              ถัดไป
            </button>
          </div>

          <p className="mt-4 text-center text-sm text-gray-600">
            มีบัญชีอยู่แล้ว?{" "}
            <a
              href="#"
              className="font-medium text-green-600 hover:text-green-500"
            >
              เข้าสู่ระบบ
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
