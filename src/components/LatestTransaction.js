import React, {useState} from 'react';
import latestTransactions from '../data/latestTransactions.json';
import { SiApplepay } from 'react-icons/si';
import { TransactionDetail } from './TransactionDetail';

// Створив для форматування дати, яка буде приходити з json файлу  
const formatDate = (dateString) =>{
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const date = new Date(dateString);
  return daysOfWeek[date.getDay()];
}

export const LatestTransactions = () => {
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const handleTransactionClick = (transaction) => {
    setSelectedTransaction(transaction);
  };

  return (
    <div>
      <h2 className='headerLatestTransactions'>Latest Transactions</h2>
      {selectedTransaction ? (
        <TransactionDetail
          transaction={selectedTransaction}
          onClose={() => setSelectedTransaction(null)}
        />
      ) : (
        <ul className='transactionList'>
          {latestTransactions.map((transaction) => (
            <li key={transaction.id} onClick={() => handleTransactionClick(transaction)}>
              <div className='payLogoContainer'>
                <SiApplepay className='payLogo' />
              </div>
              <div>
                <span className='transactionName'>
                  <strong>{transaction.name}</strong>
                </span>
                {transaction.pending && (
                  <p className='messageTransaction'>Pending-</p>
                )}
                <p className='messageTransaction'>{transaction.description}</p>
                {transaction.authorizedUser && (
                  <span className='messageTransaction'>
                    {transaction.authorizedUser} - 
                  </span>
                )}
                <span className='messageTransaction'>
                  {formatDate(transaction.date)}
                </span>
              </div>
              <div>
                <p>{transaction.amount}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
