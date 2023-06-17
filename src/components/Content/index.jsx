import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './index.module.scss';
import chunk from 'lodash.chunk';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { fetchSurahData } from '../../redux/slices/SurahSlice';

const Content = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = React.useState('');
  const items = useSelector((state) => state.surah.items);
  const filtered = items.filter(
    (e) =>
      e.translation.toLowerCase().includes(search.toLowerCase()) ||
      e.transliteration.toLowerCase().includes(search.toLowerCase()),
  );

  const columns = chunk(filtered, 29);
  React.useEffect(() => {
    dispatch(fetchSurahData());
  }, [dispatch]);

  return (
    <div className={style.root}>
      <Container>
        <div className={style.rootInfo}>
          <h1>Священный Коран</h1>
          <p>
            «И читай (о, Пророк) то из книги Господа твоего, что дается
            откровением тебе. Нет замены Его Словам, и никогда ты не найдешь
            помимо Него защиты.» (18:27)
          </p>
        </div>
        <input
          placeholder="поиск.."
          className={style.rootSearch}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
        />
        <div className={style.rootBox}>
          {filtered.length == 0 && (
            <p className={style.rootNotFound}>Не найдено.</p>
          )}
          {columns.map((e, i) => (
            <div key={i} className={style.rootBoxList}>
              {e.map((elem, index) => (
                <Link
                  key={index}
                  className={style.rootLink}
                  to={`/surah/${elem.id}`}>
                  <li className={style.rootBoxItem} key={index}>
                    <span>{elem.id}</span>. {elem.transliteration} (
                    {elem.translation})
                  </li>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Content;
