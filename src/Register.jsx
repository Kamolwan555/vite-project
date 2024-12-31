import React, { useState } from "react";
import "./Register.css";

export default function Register() {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    address: "",
    village: "",
    soi: "",
    road: "",
    province: "",
    subdistrict: "",
    district: "",
    postcode: "",
  });

  const onFinish = (values) => {
    console.log("ค่าที่ได้รับจากฟอร์ม: ", values);
    alert("ลงทะเบียนสำเร็จ!");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    setPage(page + 1);
  };

  const handleBack = () => {
    setPage(page - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFinish(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        {page === 1 && (
          <>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              ลงทะเบียน
            </h2>
            <form className="space-y-4" onSubmit={handleNext}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  อีเมล
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm"
                  placeholder="อีเมลของคุณ"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  เบอร์โทรศัพท์
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm"
                  placeholder="เบอร์โทรศัพท์"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    ชื่อ
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm"
                    placeholder="ชื่อ"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    นามสกุล
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm"
                    placeholder="นามสกุล"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  รหัสผ่าน
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm"
                  placeholder="รหัสผ่าน"
                />
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  ยืนยันรหัสผ่าน
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm"
                  placeholder="ยืนยันรหัสผ่าน"
                />
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
          </>
        )}

        {page === 2 && (
          <>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              ลงทะเบียน
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  บ้านเลขที่
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm"
                  placeholder="บ้านเลขที่"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="village"
                    className="block text-sm font-medium text-gray-700"
                  >
                    หมู่ที่
                  </label>
                  <input
                    id="village"
                    name="village"
                    type="text"
                    value={formData.village}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm"
                    placeholder="หมู่ที่"
                  />
                </div>

                <div>
                  <label
                    htmlFor="soi"
                    className="block text-sm font-medium text-gray-700"
                  >
                    ซอย
                  </label>
                  <input
                    id="soi"
                    name="soi"
                    type="text"
                    value={formData.soi}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm"
                    placeholder="ซอย"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="soi"
                    className="block text-sm font-medium text-gray-700"
                  >
                    ถนน
                  </label>
                  <input
                    id="road"
                    name="road"
                    type="text"
                    value={formData.road}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm"
                    placeholder="ถนน"
                  />
                </div>

                <div>
                  <label
                    htmlFor="provinces"
                    className="block text-sm font-medium text-gray-700"
                  >
                    จังหวัด
                  </label>
                  <input
                    id="provinces"
                    name="provinces"
                    type="text"
                    value={formData.provinces}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm"
                    placeholder="จังหวัด"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="subdistrict"
                    className="block text-sm font-medium text-gray-700"
                  >
                    อำเภอหรือเขต
                  </label>
                  <input
                    id="subdistrict"
                    name="subdistrict"
                    type="text"
                    value={formData.subdistrict}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm"
                    placeholder="อำเภอหรือเขต"
                  />
                </div>

                <div>
                  <label
                    htmlFor="district"
                    className="block text-sm font-medium text-gray-700"
                  >
                    ตำบลหรือแขวง
                  </label>
                  <input
                    id="district"
                    name="district"
                    type="text"
                    value={formData.district}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm"
                    placeholder="ตำบลหรือแขวง"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="postcode"
                  className="block text-sm font-medium text-gray-700"
                >
                  รหัสไปรษณีย์
                </label>
                <input
                  id="postcode"
                  name="postcode"
                  type="text"
                  value={formData.postcode}
                  onChange={handleChange}
                  required
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm"
                  placeholder="รหัสไปรษณีย์"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={handleBack}
                className="w-full flex justify-center py-2 px-4 border rounded-md shadow-sm text-sm font-medium back-button hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-300"
              >
                ย้อนกลับ
              </button>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                ลงทะเบียน
              </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
