import { v4 as uuidv4 } from 'uuid';
import infoData from "./db-footer/inform-data.json"
import InformationBlock from "./Information-block/InformationBlock";
import WeatherBlock from "./Information-block/WeatherBlock";

export default function InformationBox() {
  return (
    <>
      <div className={"info-box-footer"} key={uuidv4()}>
        {infoData.map(data => (
          data.heading === "Погода" ? WeatherBlock(data) : InformationBlock(data)
        ))}
      </div>
    </>
  )
}