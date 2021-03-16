import axios from "axios";

export const layDanhSachPhimAction = () => {
  return async (dispatch) => {
    const result = await axios({
      url:
        "https://Movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
    });
    dispatch({
      type: "LAY_DANH_SACH_PHIM",
      mangPhim: result.data,
    });
  };
};
