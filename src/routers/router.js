import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes.path';


export const Routers = () => {
   return (
      <Routes>
         {routes.map(({ path, element, index }) => {
            return (
               <Route
                  key={path}
                  path={path}
                  index={index}
                  element={element} />)
         })}
      </Routes>
   );
}

