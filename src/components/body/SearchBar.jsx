import React, { useState } from 'react';
import Nav from './Nav';
import categories from './db-body/categories.json';
import imgSearchBar from './img/img-ya.jpg';
import './search-bar.css';
import { fakerRU as faker } from '@faker-js/faker'
import AsideBoby from './aside-body/AsideBody'
import asideImgBody from './aside-body/img/img-aside-body.jpg'

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [newCategorie, setCategorie] = useState([[]])

  const handleCategorie = (e) => {
    e.preventDefault();
    const newsNewBlock = categories.filter(news => news.category === e.target.textContent);
    setCategorie(newsNewBlock)
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      <div className={'search-bar-box'}>
        <img src={imgSearchBar} alt="..." />
        <div>
          <Nav
            imgSearchBar={imgSearchBar}
            categories={categories}
            newCategorie={newCategorie}
            handleCategorie={handleCategorie} />
          <form onSubmit={handleSubmit}>
            <div className={'search-bar'}>
              <input
                className='search-bar-input'
                type="text"
                placeholder="Что ищете?"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
              <button type="submit" className='btm-search-bar'> Найти </button>
            </div>
          </form>
          <div className='example'>
            <h5>Найдется все. Например:</h5>
            <p>{faker.lorem.sentence(3)}</p>
          </div>
        </div>
      </div >
      <AsideBoby
        asideImgBody={asideImgBody}
      />
    </>
  );
};
