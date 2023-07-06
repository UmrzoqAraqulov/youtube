import React, { Component } from "react";
import "./allVedios.scss";
import { Link } from "react-router-dom";

export class AllVedios extends Component {
  state = {
    imgCondition: "",
  };
  render() {
    const {videoId, title, author, thumbnails } = this.props;
    return (
      <div className="card">
        <Link to={`video/${videoId}`}>
          <img
            className="img"
            src={thumbnails[1] ? thumbnails[1].url : thumbnails[0].url}
            alt=""
          />
        </Link>
        <div className="info">
          <div className="icon">
            <img src={author.avatar[0]?.url} alt="" />
          </div>
          <div className="title">
            <h3>{title}</h3>
          </div>
          <div className="more">
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default AllVedios;
