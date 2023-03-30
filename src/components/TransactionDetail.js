import React from 'react';

import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { IoIosArrowBack } from 'react-icons/io';
import latestTransactions from '../data/latestTransactions.json';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const formattedDate = date.toISOString().substring(0, 10);
  return formattedDate;
}

export const TransactionDetail = () => {
  const { id } = useParams();
  const transaction = latestTransactions.find((transaction) => transaction.id === parseInt(id));
    
  const amount = transaction.amount.replace(/[+|-]/g, "");
  const navigate = useNavigate();
  return (
    <>
      <div className='arrowMenu'>
          <IoIosArrowBack className='arrowBack' onClick = {() => navigate("/", {replace: true})}/>
      </div>
      <div className='menuTransaction'>
        <div>
            <h2 className='headerAmount'>{amount}</h2>
        </div>
        <div className='transactionContainer'>
            <div className='transactionData'>
              <p>{transaction.name}</p>
              <p>{formatDate(transaction.date)}</p>
            </div>

            <div className='transactionView'>
              <p>Status: {transaction.pending ? 'Pending' : 'Approved'}</p>
              <p className='transactionDescription'>{transaction.description}</p>
            </div>

            <div className='transactionView transactionTotal'>
              <p>Total:</p>
              <p>{amount}</p>
            </div>
        </div>
      </div>
    </>
  );
};