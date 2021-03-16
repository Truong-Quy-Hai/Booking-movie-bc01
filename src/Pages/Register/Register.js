import React, { Component } from "react";

const namesToWords = {
  taiKhoan: "Tài khoản",
  matKhau: "Mật khẩu",
  email: "Email",
  soDienThoai: "Số điện thoại",
  hoTen: "Họ tên",
};

const mapNamesToWords = (name) => namesToWords[name];

export default class Register extends Component {
  state = {
    values: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDienThoai: "",
      hoTen: "",
    },
    errors: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDienThoai: "",
      hoTen: "",
    },
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((state) => ({
      ...state,
      values: { ...state.values, [name]: value },
      errors: {
        ...state.errors,
        [name]:
          value === "" ? mapNamesToWords([name]) + " không được để trống" : "",
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {errors, values} = this.state;
    for (let err in errors) {
      if (errors[err]) console.log("Còn error");
    }
    for (let value in values) {
      if (values[value] === "") console.log("Còn error");
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <form className="col-5 mx-auto" onSubmit={this.handleSubmit}>
            <div className="display-4">Đăng ký</div>
            <div className="form-group">
              <label>Tài khoản</label>
              <input
                name="taiKhoan"
                className="form-control"
                type="text"
                onChange={this.handleChange}
              />
              <p className="invalid-feedback" style={{ display: "block" }}>
                {this.state.errors.taiKhoan}
              </p>
            </div>
            <div className="form-group">
              <label>Tên</label>
              <input
                name="hoTen"
                className="form-control"
                type="text"
                onChange={this.handleChange}
              />
              <p className="invalid-feedback" style={{ display: "block" }}>
                {this.state.errors.hoTen}
              </p>
            </div>
            <div className="form-group">
              <label>Mật khẩu</label>
              <input
                name="matKhau"
                className="form-control"
                type="password"
                onChange={this.handleChange}
              />
              <p className="invalid-feedback" style={{ display: "block" }}>
                {this.state.errors.matKhau}
              </p>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                name="email"
                className="form-control"
                type="text"
                onChange={this.handleChange}
              />
              <p className="invalid-feedback" style={{ display: "block" }}>
                {this.state.errors.email}
              </p>
            </div>
            <div className="form-group">
              <label>Số điện thoại</label>
              <input
                name="soDienThoai"
                className="form-control"
                type="text"
                onChange={this.handleChange}
              />
              <p className="invalid-feedback" style={{ display: "block" }}>
                {this.state.errors.soDienThoai}
              </p>
            </div>
            <div className="form-group">
              <button className="btn btn-success" type="submit">
                Đăng ký
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
