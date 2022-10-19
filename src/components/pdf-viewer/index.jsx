import React from 'react'
import { Viewer, Worker } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'
import FilePath from 'assets/pdf/offerta.pdf'
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import { PdfViewerProvider } from './style'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

export const PdfViewer = () => {
  // const defaultLayoutPluginInstance = defaultLayoutPlugin()

  return (
    <PdfViewerProvider>
      <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js">
        <Viewer
          fileUrl={FilePath}
          // plugins={[defaultLayoutPluginInstance]}
        />
      </Worker>
    </PdfViewerProvider>
  )
}
