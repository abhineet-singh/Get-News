import axios from "axios";

const axios_news = axios.create({
  baseURL: "https://newsapi.org",
});

axios_news.defaults.headers.common["Authorization"] =
  "YOUR API KEY";

export default axios_news;
