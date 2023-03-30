import latestTransactions from '../data/latestTransactions.json';
import { SiApplepay } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

const formatDate = (dateString) => {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const date = new Date(dateString);
  return daysOfWeek[date.getDay()];
};

export const LatestTransactions = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className='headerLatestTransactions'>Latest Transactions</h2>
      <ul className='transactionList'>
        {latestTransactions.map((transaction) => (
          <li key={transaction.id} onClick={() => navigate(`/transaction-detail/${transaction.id}`, { replace: true })}>
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
    </div>
  );
};