import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { layDanhSachPhimAction } from "../../redux/actions/PhimActions";

class Home extends Component {
  state = {
    arrayFilms: [],
  };
  componentDidMount() {
    this.props.dispatch(layDanhSachPhimAction());
  }

  renderFilms = () => {
    return this.props.mangPhim.map((film, index) => {
      return (
        <div style={{ cursor: "pointer" }} className="col-4 mb-4" key={index}>
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

const mapStateToProps = (state) => ({
  mangPhim: state.phimReducer.mangPhim,
});

export default connect(mapStateToProps)(Home);
