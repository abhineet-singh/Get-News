import { connect } from "react-redux";
import News from "../News/News";

const newsGrid = ({ newsArr }) => {
  if (newsArr?.length === undefined) {
    return <h1>Error Occurred</h1>;
  }

  return (
    <>
      {newsArr.map((news, idx) => {
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
    </>
  );
};

const mapStateToProps = (reduxStore) => {
  return {
    newsArr: reduxStore.newsArr,
  };
};

export default connect(mapStateToProps, null)(newsGrid);
