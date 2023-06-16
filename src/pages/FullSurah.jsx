import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import ItemBlock from '../components/ItemBlock';

const FullSurah = () => {
  const { id } = useParams();
  const [surah, setSurah] = React.useState([]);
  React.useEffect(() => {
    const getFullSurah = async () => {
      try {
        const { data } = await axios.get(
          `https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/ru/${id}.json`,
        );
        setSurah(data);
      } catch {}
    };
    getFullSurah();
  }, []);
  if (surah.length == 0) {
    return 'Загрузка..';
  }

  return (
    <>
      <Header />
      <ItemBlock surah={surah} />
    </>
  );
};

export default FullSurah;
