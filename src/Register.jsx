import { useState } from "react";
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
    <div className="register-container">
      <div className="register-form-wrapper">
        {page === 1 && (
          <>
            <h2 className="form-title">ลงทะเบียน</h2>
            <form className="form-content" onSubmit={handleNext}>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  อีเมล
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="อีเมลของคุณ"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  เบอร์โทรศัพท์
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="เบอร์โทรศัพท์"
                />
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">
                    ชื่อ
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="ชื่อ"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName" className="form-label">
                    นามสกุล
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="นามสกุล"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  รหัสผ่าน
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="รหัสผ่าน"
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword" className="form-label">
                  ยืนยันรหัสผ่าน
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="ยืนยันรหัสผ่าน"
                />
              </div>

              <div className="form-group">
                <button type="next" className="form-button next-button">
                  ถัดไป
                </button>
              </div>

              <p className="form-footer">
                มีบัญชีอยู่แล้ว?{" "}
                <a href="#" className="form-link">
                  เข้าสู่ระบบ
                </a>
              </p>
            </form>
          </>
        )}

        {page === 2 && (
          <>
            <h2 className="form-title">ลงทะเบียน</h2>
            <form className="form-content" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="address" className="form-label">
                  บ้านเลขที่
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="บ้านเลขที่"
                />
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="village" className="form-label">
                    หมู่ที่
                  </label>
                  <input
                    id="village"
                    name="village"
                    type="text"
                    value={formData.village}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="หมู่ที่"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="soi" className="form-label">
                    ซอย
                  </label>
                  <input
                    id="soi"
                    name="soi"
                    type="text"
                    value={formData.soi}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="ซอย"
                  />
                </div>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="road" className="form-label">
                    ถนน
                  </label>
                  <input
                    id="road"
                    name="road"
                    type="text"
                    value={formData.road}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="ถนน"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="provinces" className="form-label">
                    จังหวัด
                  </label>
                  <input
                    id="provinces"
                    name="provinces"
                    type="text"
                    value={formData.provinces}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="จังหวัด"
                  />
                </div>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="subdistrict" className="form-label">
                    อำเภอหรือเขต
                  </label>
                  <input
                    id="subdistrict"
                    name="subdistrict"
                    type="text"
                    value={formData.subdistrict}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="อำเภอหรือเขต"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="district" className="form-label">
                    ตำบลหรือแขวง
                  </label>
                  <input
                    id="district"
                    name="district"
                    type="text"
                    value={formData.district}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="ตำบลหรือแขวง"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="postcode" className="form-label">
                  รหัสไปรษณีย์
                </label>
                <input
                  id="postcode"
                  name="postcode"
                  type="text"
                  value={formData.postcode}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="รหัสไปรษณีย์"
                />
              </div>

              <div className="form-grid">
                <button
                  type="button"
                  onClick={handleBack}
                  className="form-button back-button"
                >
                  ย้อนกลับ
                </button>
                <button type="submit" className="form-button submit-button">
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
