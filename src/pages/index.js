import { connect } from "react-redux";

import dynamic from "next/dynamic";
import Navbar from "../../components/Navbar/Navbar";
import NewsWrapper from "../../components/NewsWrapper/NewsWrapper";
import News from "../../components/News/News";
import axios_news from "../../axios/axios_news";

const NewsGrid = dynamic(() => import("../../components/NewsGrid/NewsGrid"), {
  loading: () => <h4>More News Loading</h4>,
  ssr: false,
});

const home = ({ updateNews, newsContent }) => {
  updateNews(newsContent.slice(3));

  console.log("app getting rendered");

  return (
    <>
      <Navbar />
      <NewsWrapper>
        {newsContent.slice(0, 3).map((news, idx) => {
          return (
            <News
              key={idx}
              title={news.title}
              description={news.description}
              urlToImage={news.urlToImage}
              fullContent={news.content}
            />
          );
        })}
        <NewsGrid />
      </NewsWrapper>
    </>
  );
};

home.getInitialProps = async () => {
  console.log("🚀 ~ file: index.js ~ line 39 ~ getInitialProps");

  const newsContent = await axios_news
    .get("/v2/top-headlines?country=in")
    .then((response) => response.data.articles.slice(0, 15))
    .catch((err) => console.log(err));

  return {
    newsContent,
  };
};

const mapDisptachToProps = (dispatch) => {
  return {
    updateNews: (newsContent) =>
      dispatch({ type: "UPDATE_NEWSARR", newsContent }),
  };
};

export default connect(null, mapDisptachToProps)(home);
