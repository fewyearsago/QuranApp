import React from 'react';
import Container from 'react-bootstrap/Container';
import style from './index.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const Time = () => {
  const [timesNow, setTimesNow] = React.useState('');
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const week = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье',
  ];
  const year = new Intl.DateTimeFormat('ar-TN-u-ca-islamic', {
    year: 'numeric',
  })
    .format(Date.now())
    .slice(0, 4);
  const day = currentDate.getDay() - 1;

  const getTime = () => {
    const date = new Date().toLocaleTimeString();
    const times = date.replace(':', ' .').replace(':', ' .');
    setTimesNow(times);
  };

  React.useEffect(() => {
    const interval = setInterval(getTime, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  React.useEffect(() => {
    getTime();
  }, [currentDate]);

  return (
    <Container>
      <div className={style.root}>
        <div className={style.rootItem}>
          <h6>День</h6>
          <p>{week[day]}</p>
        </div>
        <div className={style.rootItem}>
          <h6>Год</h6>
          <p>{year}</p>
          <h6>По Хиджре</h6>
        </div>
        <div className={style.rootItem}>
          <h6>Время</h6>
          <p>{timesNow}</p>
        </div>
      </div>
    </Container>
  );
};

export default Time;
