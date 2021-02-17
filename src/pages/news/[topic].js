import axios_news from "../../../axios/axios_news";
import NewsGrid from "../../../components/NewsGrid/NewsGrid";
import NewsWrapper from "../../../components/NewsWrapper/NewsWrapper";
import { connect } from "react-redux";

const topicNews = ({ updateNews, specificNews }) => {
  updateNews(specificNews);

  return (
    <NewsWrapper>
      <NewsGrid />
    </NewsWrapper>
  );
};

export const getServerSideProps = async ({ query }) => {
  const specificNews = await axios_news
    .get(`/v2/top-headlines?country=in&category=${query.topic}`)
    .then((response) => response.data.articles.slice(0, 15))
    .catch((err) => console.log(err.config));

  return {
    props: { specificNews },
  };
};

const mapDisptachToProps = (dispatch) => {
  return {
    updateNews: (newsContent) =>
      dispatch({ type: "UPDATE_NEWSARR", newsContent }),
  };
};

export default connect(null, mapDisptachToProps)(topicNews);
