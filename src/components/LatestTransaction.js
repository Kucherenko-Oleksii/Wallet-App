import React from 'react';

const latestTransactions = [
  {
    id: 1,
    type: 'Payment',
    amount: '+$50.00',
    name: 'IKEA',
    description: 'Furniture purchase',
    date: 'Today',
    pending: true,
  },
  {
    id: 2,
    type: 'Credit',
    amount: '-$25.00',
    name: 'Target',
    description: 'Grocery shopping',
    date: 'Yesterday',
    pending: false,
  },
  {
    id: 3,
    type: 'Payment',
    amount: '+$100.00',
    name: 'Amazon',
    description: 'Electronics purchase',
    date: 'Monday',
    authorizedUser: 'John Doe',
    pending: false,
  },
];

function LatestTransactions() {
  return (
    <div>
      <h2>Latest Transactions</h2>
      <ul>
        {latestTransactions.map(transaction => (
          <li key={transaction.id}>
            {transaction.pending && <span>Pending</span>}
            {transaction.authorizedUser && (
              <span>{transaction.authorizedUser} - </span>
            )}
            <span>{transaction.date}</span>
            <div>
              <span>
                {transaction.type}
              </span>
              <span>{transaction.amount}</span>
              <span>{transaction.name}</span>
              <span>{transaction.description}</span>
            </div>
            <div>
              {/*Додати логотипи */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LatestTransactions;