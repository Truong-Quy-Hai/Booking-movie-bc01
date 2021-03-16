import React, { Component } from "react";
import { connect } from "react-redux";

class Loading extends Component {
  render() {
    const { loading } = this.props;
    return loading ? (
      <div
        style={{
          zIndex: "100",
          position: "fixed",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span className="display-4 font-weight-bold">Loading ...</span>
        </div>
      </div>
    ) : null;
  }
}

const mapStateToProps = (state) => ({
  loading: state.loadingReducer.loading,
});

export default connect(mapStateToProps)(Loading);
