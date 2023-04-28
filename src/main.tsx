import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      {/*<MantineProvider theme={{ fontFamily: 'Open Sans', fontSize: '3em' }} withGlobalStyles withNormalizeCSS>*/}
          <Provider store={store}>
              <App />
          </Provider>
      {/*</MantineProvider>*/}
  </React.StrictMode>,
)
