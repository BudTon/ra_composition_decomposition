import { v4 as uuidv4 } from 'uuid';


export default function WeatherBlock(blockData) {
  return (

    <div className={"weather-block-footer"} key={uuidv4()}>
      <div>
        {blockData.heading}
      </div>
      <img className="img-weather" src={blockData.img} alt="..." width="16" height="16" />
        {blockData.information.map((item) => (
          <div className={"news-header"} key={uuidv4()}>
            <a href={item.link}>{item.title}</a>
          </div>
        ) )}
    </div>

  )

}