import { useState, useEffect } from 'react';

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Обновляем состояние каждые секунды
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId); // очистка интервала при удалении компонента
  }, []);

  const options = {
    weekday: 'long', // Полное название дня недели
    // year: 'numeric', // Год в числовом виде
    month: 'long', // Месяц полным названием
    day: 'numeric', // День месяца
    hour: 'numeric', // Час
    minute: 'numeric', // Минуты
    second: 'numeric' // Секунды
  };

  return (
    <>
      {currentTime.toLocaleString('ru-RU', options)}
    </>
  );
};

export default CurrentTime;