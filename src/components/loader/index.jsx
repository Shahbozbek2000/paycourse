import ReactLoading from 'react-loading'
import React from 'react'
import { LoaderWrapper } from './style'

const LoaderComponent = () => {
  return (
   <LoaderWrapper>
      <ReactLoading type="spinningBubbles" color="#fff" width={20} />
   </LoaderWrapper>
  )
}

export default LoaderComponent
