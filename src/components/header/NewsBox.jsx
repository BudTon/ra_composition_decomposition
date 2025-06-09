import './header.css';
import newsData from './db-header/news.json';
import quotes from './db-header/quotes.json';
import asideHeader from './db-header/aside-header.json';
import asideImgHeader from './aside-header/img/aside-header.jpg'
import { useState } from "react";
import Quotes from "./quotes/Quotes";
import NewsLine from "./newsline/NewsLine";
import AsideHeader from './aside-header/AsideHeader';

export default function NewsBox() {
  const [newsBlock, setHeadline] = useState([newsData[0]])

  const handleHeadline = (e) => {
    e.preventDefault();
    const newsNewBlock = newsData.filter(news => news.category === e.target.textContent);
    setHeadline(newsNewBlock)
  };

  return (
    <>
      <div className={"news-box-header"}>
        <div className={"news-box"}>
          <NewsLine
            handleHeadline={handleHeadline}
            newsBlock={newsBlock}
            newsData={newsData} />
          <Quotes
            quotes={quotes} />
        </div>
        <div className={'aside-header'}>
          <AsideHeader
            asideHeader={asideHeader}
            asideImgHeader={asideImgHeader} />
        </div>
      </div>
    </>
  )
}
