import * as React from 'react'
import * as ReactDom from 'react-dom/client'
import App from './App'

const root = ReactDom.createRoot(document.getElementById('app') as HTMLElement)
root.render(<App></App>)