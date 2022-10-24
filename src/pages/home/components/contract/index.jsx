import React, { memo } from 'react'
import { Checkbox } from 'antd'
import { ContractProvider, DownloadContract, HasChecked } from './style'
import { PdfViewer } from 'components/pdf-viewer'
import FilePath from 'assets/pdf/offerta.pdf'

const Contract = ({ hasChecked, setHasChecked }) => {
  const onChange = (e) => {
    setHasChecked(e.target.checked)
  }
  return (
    <ContractProvider>
      <PdfViewer />
      <h2>Публичная оферта</h2>
      <DownloadContract href={FilePath} download>
        Ознакомиться с предложением
      </DownloadContract>
      <HasChecked>
        <Checkbox checked={hasChecked} onChange={onChange}>
          Я согласен с условиями договора
        </Checkbox>
      </HasChecked>
    </ContractProvider>
  )
}

export default memo(Contract)
