import { Suspense } from 'react'
import { createBrowserHistory } from 'history';
import './App.css'
import Routes from './routes';

export const history = createBrowserHistory();

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes />
    </Suspense>
  )
}

export default App
