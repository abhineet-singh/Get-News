import { connect } from "react-redux";
import axios_news from "../../../axios/axios_news";
import NewsGrid from "../../../components/NewsGrid/NewsGrid";
import NewsWrapper from "../../../components/NewsWrapper/NewsWrapper";

const slug = ({ keywordNews, updateNews }) => {
  updateNews(keywordNews);

  return (
    <NewsWrapper>
      <NewsGrid />
    </NewsWrapper>
  );
};

slug.getInitialProps = async ({ query }) => {
  const [keyword, startDate, endDate] = query.slug;

  console.log(keyword, startDate, endDate);

  const keywordNews = await axios_news
    .get("/v2/everything", {
      params: {
        q: keyword,
        from: startDate,
        to: endDate,
        sortBy: "popularity",
      },
    })
    .then((response) => response.data.articles.slice(0, 15))
    .catch((err) => console.log(err));

  console.log(keywordNews?.length);

  return { keywordNews };
};

const mapDisptachToProps = (dispatch) => {
  return {
    updateNews: (newsContent) =>
      dispatch({ type: "UPDATE_NEWSARR", newsContent }),
  };
};

export default connect(null, mapDisptachToProps)(slug);
