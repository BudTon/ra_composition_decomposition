import { v4 as uuidv4 } from 'uuid';

export default function Nav({ categories, newCategorie, handleCategorie }) {
  /** передаетсе в переменной newCategorie[0].category тег для поиска по категории */
  console.log(newCategorie[0].category);  
  return (
    <>
      <ul className={"news-category-list"}>
        {categories.map((news) => (
          <li className={"news"}
            onClick={() => handleCategorie(event)}
            key={uuidv4()}
          >{news.category}</li>
        ))}
      </ul>
    </>
  )
}