import React from 'react';
import Icon from 'assets/images/contract.jpg'
import { ContractProvider } from './style';

export const Contract = () => {
   return (
      <ContractProvider>
         <img src={Icon} alt='icon' />
      </ContractProvider>
   );
}

