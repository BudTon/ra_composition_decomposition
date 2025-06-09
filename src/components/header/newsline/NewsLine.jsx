import CurrentTime from "./CurrentTime"
import { v4 as uuidv4 } from 'uuid';

export default function NewsLine({ handleHeadline, newsBlock, newsData }) {
  return (
    <>
      <div className={"news-box"}>
        <ul className={"news-category-list"}>
          {newsData.map((news) => (
            <li className={"news"}
              onClick={() => handleHeadline(event)}
              key={uuidv4()}
            >{news.category}</li>
          ))}
          <li>
            <CurrentTime />
          </li>
        </ul>
        <ul className={"news-header-box"}>
          {newsBlock[0].headline.map((news) => (
            <li className={"news-header"} key={uuidv4()}>
              <img className="img-news" src={news.img} alt="..." width="16" height="16" />
              <a href={news.link}>{news.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
