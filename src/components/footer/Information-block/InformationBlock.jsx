import { v4 as uuidv4 } from 'uuid';
import InfoGroup from './infoGroup';

export default function InformationBlock(blockData) {

  if (!blockData || !blockData.information) {
    return console.log('Данные отсутствуют');
  }

  return (
    <div className="info-block-footer" key={uuidv4()}>
      <div>{blockData.heading}</div>
      <ul>
        {blockData.information.map((info) => (
          <InfoGroup key={uuidv4()} info={info} />
        ))}
      </ul>
    </div>
  );

}