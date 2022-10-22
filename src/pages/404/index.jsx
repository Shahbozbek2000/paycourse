import React from 'react';
import {
   NotFoundProvider,
   PictureTop,
   NotFoundBody,
   NotFoundButton,
 } from './style';
 import NotFoundImage from "assets/svg/notFound/404.svg"
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
   const navigate = useNavigate()
   return (
      <NotFoundProvider>
      <PictureTop>
        {/* <img src={NotFoundImage} alt="not-found" /> */}
        <h1>404</h1>
      </PictureTop>
      <NotFoundBody>
        <h1>Что-то сломалось</h1>
        <p>Попробуйте обновить страницу или зайдите позже</p>
          <NotFoundButton type="button" onClick={() => navigate(-1)}>
            Вернуться назад
          </NotFoundButton>
      </NotFoundBody>
    </NotFoundProvider>
   );
}

export default NotFound;
