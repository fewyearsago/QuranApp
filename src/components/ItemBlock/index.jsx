import React from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useParams } from 'react-router-dom';
import style from './index.module.scss';

const ItemBlock = ({ items }) => {
  const { id } = useParams();
  const nextSurahId = Number(id) + 1;
  const [showButton, setShowButton] = React.useState(false);
  const onClickToScroll = () => {
    window.scrollTo(0, 0);
  };
  React.useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - 400;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 1000 && scrollTop + windowHeight < documentHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={style.root}>
      <Container>
        <div className={style.rootInner}>
          <h1>﴾ سورة {items.name} ﴿</h1>
          <p className={style.rootTitle}>
            Сура {items.transliteration} / {items.translation}
          </p>
          {items.verses.map((e, i) => (
            <div className={style.rootSurah} key={i}>
              <li>
                {e.id}. {e.translation}
              </li>
              <li dir="rtl" className={style.rootArabicText}>
                <span> ﴿{e.id}﴾</span>
                {e.text}
              </li>
            </div>
          ))}
        </div>
        <Link onClick={onClickToScroll} to="/read">
          <div className={style.rootContainer}>
            {showButton && (
              <button className={style.rootBtnHide}>
                <svg
                  width="40px"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg">
                  <title />
                  <g data-name="Layer 2" id="Layer_2">
                    <path
                      fill="gray"
                      d="M31,16A15,15,0,1,1,16,1,15,15,0,0,1,31,16ZM3,16A13,13,0,1,0,16,3,13,13,0,0,0,3,16Z"
                    />
                    <path
                      fill="gray"
                      d="M19.87,10.41,14.29,16l5.58,5.59a1,1,0,0,1,0,1.41h0a1,1,0,0,1-1.41,0L12.1,16.64a.91.91,0,0,1,0-1.28L18.46,9a1,1,0,0,1,1.41,0h0A1,1,0,0,1,19.87,10.41Z"
                    />
                  </g>
                </svg>
              </button>
            )}
          </div>
        </Link>
        <div className={style.rootLink}>
          <Link onClick={onClickToScroll} to={`/read`}>
            <button className={style.rootBtn}>К содержанию Корана</button>
          </Link>
          <Link onClick={onClickToScroll} to={`/surah/${nextSurahId}`}>
            <button className={style.rootBtn}>Следующая</button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default ItemBlock;
