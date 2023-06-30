import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import ItemBlock from '../components/ItemBlock';
import { fetchSurahItem } from '../redux/slices/getSurahItem';
import { Circle } from 'react-preloaders';

const FullSurah = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.getSurah.items);
  const status = useSelector((state) => state.getSurah.status);
  React.useEffect(() => {
    dispatch(fetchSurahItem(id));
  }, [id]);
  if (status === 'loading') {
    return <Circle />;
  }
  return (
    <>
      <Header />
      {status === 'error' ? (
        <div className="rejected">
          Произошла Ошибка. <br />
          Пожалуйста, повторите попытку позже.
        </div>
      ) : (
        <ItemBlock items={items} />
      )}
    </>
  );
};

export default FullSurah;
