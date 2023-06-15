import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSurahData } from '../../redux/slices/SurahSlice';
import style from './index.module.scss';
import chunk from 'lodash.chunk';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

const Content = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchSurahData());
  }, []);
  const items = useSelector((state) => state.surah.items);
  const columns = chunk(items, 29);

  return (
    <div className={style.root}>
      <Container>
        <div className={style.rootInfo}>
          <h1>Священный Коран</h1>
          <p>
            «И читай (о, Пророк) то из книги Господа твоего, что дается
            откровением тебе. Нет замены Его Словам, и никогда ты не найдешь
            помимо Него защиты. (18:27)
          </p>
        </div>
        <div className={style.rootBox}>
          {columns.map((e, i) => (
            <div key={i} className={style.rootBoxList}>
              {e.map((elem, index) => (
                <li className={style.rootBoxItem} key={index}>
                  <span>{elem.id}</span>. {elem.transliteration} (
                  {elem.translation})
                </li>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Content;
