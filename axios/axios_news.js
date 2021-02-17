import axios from "axios";

const axios_news = axios.create({
  baseURL: "https://newsapi.org",
});

axios_news.defaults.headers.common["Authorization"] =
  "49e7a5b759a746ad80d63d271956bf7d";

export default axios_news;
