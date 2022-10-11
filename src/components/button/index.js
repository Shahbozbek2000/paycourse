import LoaderComponent from 'components/loader'
import React from 'react'
import { Button, IsloadindWrap } from './style'

export function CrudButton({ type = 'button', onClick, name, disabled = false, className, isLoading }) {
   return (
      <Button
         type={type}
         onClick={onClick}
         disabled={disabled}
         className={className}>
         {isLoading ?
            <IsloadindWrap>
               <div className='isloading-text'>
                  Пожалуйста подождите
               </div>
               <LoaderComponent />
            </IsloadindWrap>
            : name}
      </Button>
   )
}
