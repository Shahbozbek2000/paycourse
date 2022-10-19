import React, { memo } from 'react'
import { Checkbox } from 'antd'
import { ContractProvider, HasChecked } from './style'
import { PdfViewer } from 'components/pdf-viewer'

const Contract = ({ hasChecked, setHasChecked }) => {
  const onChange = (e) => {
    setHasChecked(e.target.checked)
  }
  return (
    <ContractProvider>
      <PdfViewer/>
      <HasChecked>
        <Checkbox checked={hasChecked} onChange={onChange}>
          Я согласен
        </Checkbox>
      </HasChecked>
    </ContractProvider>
  )
}

export default memo(Contract)