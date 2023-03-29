import React, { useState } from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import {LatestTransactions} from './LatestTransaction';

const dailyPointsBySeason = {
  'Winter': 5,
  'Spring': 7,
  'Summer': 10,
  'Fall': 8
};

const seasons = {
  0: 'Spring',
  1: 'Spring',
  2: 'Summer',
  3: 'Summer',
  4: 'Summer',
  5: 'Fall',
  6: 'Fall',
  7: 'Fall',
  8: 'Winter',
  9: 'Winter',
  10: 'Winter',
  11: 'Spring'
};

const getCurrentMonthName = () => {
  const monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];
  const monthIndex = new Date().getMonth();
  return monthNames[monthIndex];
};

const calculateDailyPoints = () => {
  const currentDate = new Date();
  const currentSeason = seasons[Math.floor(currentDate.getMonth() / 3)];
  const dailyPoints = dailyPointsBySeason[currentSeason];

  if (currentDate.getDate() === 1) {
    return dailyPoints + 1;
  } else if (currentDate.getDate() === 2) {
    return dailyPoints + 2;
  } else {
    const prevDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 1);
    const prevSeason = seasons[Math.floor(prevDate.getMonth() / 3)];
    const prevPoints = dailyPointsBySeason[prevSeason];
    return Math.round((prevPoints * 1.0) + (prevPoints * 0.6));
  }
};

export const TransactionList = () => {

    const [maxLimit] = useState(1500);
    const [cardBalance] = useState((Math.random() * maxLimit).toFixed(2));
    const available = (maxLimit - cardBalance).toFixed(2);
    const dailyPoints = calculateDailyPoints();


  return (
    <>
      <div className='menu'>
          <div className='cardBalance'>
              <p>Card Balance</p>
              <h1>$ {cardBalance}</h1>
              <p className='paragraphAvailable'>$ {available} Available</p>
          </div>

          <div className='dailyPoints'>
              <p>Daily Points</p>
              <p className='paragraphDailyPoints'>{dailyPoints}</p>
          </div>

          <div className='noPaymentDue'>
              <p>No Payment Due</p>
              <p className='messageNoPaymentDue'>You've paid your {getCurrentMonthName()} balance.</p>
              <BsCheckCircle className='checkButton'/>
          </div>
      </div>
      <LatestTransactions/>
    </>
  )
}
