import './App.css'
import NewsBox from './components/header/NewsBox'
import SearchBar from './components/body/SearchBar'
import InformationBox from './components/footer/InformationBox'

export default function App() {

  return (
    <>
      <h1>5. Домашнее задание к занятию «Композиция компонентов»</h1>
      <h2>5.2 Декомпозиция</h2>
      <div className='container'>
        <NewsBox />
        <SearchBar />
        <InformationBox />
      </div>
    </>
  )
}
