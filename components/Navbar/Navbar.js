import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const NewsTopic = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 15px 15px 5px 15px;
  background-color: #1a73e8;
  color: white;
  width: 120px;
  padding: 10px;
  border-radius: 20px;
`;

const navbar = (props) => {
  const topics = ["Business", "Sports", "Technology"];

  return (
    <>
      <Container>
        {topics.map((topic) => {
          return (
            <NewsTopic key={topic}>
              <Link href={`/news/${topic}`}>
                <a>{topic}</a>
              </Link>
            </NewsTopic>
          );
        })}

        <NewsTopic>
          <Link href="/news/customNews">
            <a>Custom News</a>
          </Link>
        </NewsTopic>
      </Container>
    </>
  );
};

export default navbar;
