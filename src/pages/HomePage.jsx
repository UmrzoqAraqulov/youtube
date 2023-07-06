import React, { Component } from "react";
import AllVedios from "../components/allVedios/AllVedios";
import "./style.scss";
import { Link } from "react-router-dom";
const axios = require("axios");

const options = {
  method: "GET",
  url: "https://youtube138.p.rapidapi.com/home/",
  params: { hl: "en", gl: "US" },
  headers: {
    "X-RapidAPI-Key": "60feff9866msh2cd0bd9f86c73a1p1da85ejsnbc4370a81fe2",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export class HomePage extends Component {
  state = {
    videos: [],
  };

  componentDidMount() {
    this.getvideos();
  }
  getvideos = async () => {
    try {
      const response = await axios.request(options);
      this.setState({ videos: response.data.contents });
    } catch (error) {
      console.error(error);
    }
  };
  render() {
    return (
      <div className="header">
        {this.state.videos.map((changeVideo) => {
          const { video } = changeVideo;
          return <AllVedios key={video.videoId} {...video} />;
        })}
      </div>
    );
  }
}

export default HomePage;
