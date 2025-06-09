import { v4 as uuidv4 } from 'uuid';

export default function infoGroup({ info }) {

  if (!info) {
    return console.log('Данные отсутствуют');
  }
  return (
    <>
      <li key={uuidv4()}>
        {info.map((item) => (
          <a href={item.link} key={uuidv4()}>{item.title}</a>
        ))}
      </li>
    </>
  );
}