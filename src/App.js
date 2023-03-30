import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import { TransactionList } from './components/TransactionList';
import {TransactionDetail} from './components/TransactionDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element = {<TransactionList/>}/>
            <Route path='/transaction-detail/:id' element={<TransactionDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
