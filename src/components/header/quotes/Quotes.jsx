import { v4 as uuidv4 } from 'uuid';
import './quotes.css'

export default function Quotes({quotes}) {
  return (
    <>
      <ul className='quotes'>
      {quotes.map((quote) => (
        <li className={"quote"}
          key={uuidv4()}
        >{quote.title} {quote.quote} {quote.dynamic}</li>
      ))}
      </ul>
    </>
  )
}