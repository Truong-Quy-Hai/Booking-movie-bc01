import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router";

class Home extends Component {
  state = {
    arrayFilms: [],
  };
  componentDidMount() {
    // use axios to get information from backend
    const promise = axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
    });
    promise
      .then((res) => {
        this.setState({ arrayFilms: res.data });
      })
      .catch((err) => console.log(err));
    //
  }

  renderFilms = () => {
    return this.state.arrayFilms.map((film) => {
      const { history } = this.props;
      return (
        <div
          style={{ cursor: "pointer" }}
          className="col-4 mb-4"
          key={film.maPhim}
        >
          <div className="card text-left">
            <img
              src={film.hinhAnh}
              alt={film.hinhAnh}
              className="card-img-top"
              style={{ objectFit: "cover", height: 300 }}
            />
            <div className="card-body">
              <h4 className="card-title">{film.tenPhim}</h4>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="text-center display-4 mt-2 mb-4">Danh sách phim</div>
        <div className="container-fluid">
          <div className="row">{this.renderFilms()}</div>
        </div>
      </div>
    );
  }
}
export default withRouter(Home);
