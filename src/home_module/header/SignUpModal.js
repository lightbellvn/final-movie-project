import React, { Component } from "react";

export default class SignUpModal extends Component {
  render() {
    return (
      <div id="menuModal" className="modal fade" role="dialog">
        <div className="modal_content_1">Lịch chiếu</div>
        <div className="modal_content_2">Rạp chiếu</div>
        <div className="modal_content_1">Giá vé</div>
        <div className="modal_content_2">Khuyến mãi</div>
        <div className="modal_content_3">Đăng xuất</div>
      </div>
    );
  }
}
