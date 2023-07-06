import React, { useState } from 'react'
import {useLocation} from 'react-router-dom'
import AllVedios from '../components/allVedios/AllVedios';


const axios = require("axios");

const options = {
  method: "GET",
  url: "https://youtube138.p.rapidapi.com/home/",
  params: { hl: "en", gl: "US" },
  headers: {
    "X-RapidAPI-Key": "2423efe813msh031f0dde88ef9c9p116db7jsn4b9e440b478c",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

const VideoPage = async() => {
  const location = useLocation();
  console.log(location);
  const [videoInfo, setVideoInfo] = useState();
    try {
      const response = await axios.request(options);
      // setVideoInfo();
    } catch (error) {
      console.error(error);
    }
  return (
    <div>
      <AllVedios/>
    </div>
  )
}

export default VideoPage