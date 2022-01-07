import axios from "axios";

const KEY = "AIzaSyBHzETv9A1Ck9RGHOaZR48TObkPDRDSLw0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
