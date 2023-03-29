import React, { useState } from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import LatestTransactions from './LatestTransaction';

export const TransactionList = () => {
    
    const [maxLimit] = useState(1500);
    const [cardBalance] = useState((Math.random() * maxLimit).toFixed(2));

    const available = (maxLimit - cardBalance).toFixed(2);

    const getCurrentMonth = () => {
        const monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
          ];
          const monthIndex = new Date().getMonth();
          return monthNames[monthIndex];
      };

      const currentDate = new Date();
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
        const dailyPointsBySeason = {
            'Winter': 5,
            'Spring': 7,
            'Summer': 10,
            'Fall': 8
        };

        const currentSeason = seasons[Math.floor(currentDate.getMonth() / 3)];

        // Розраховуємо кількість поінтів за сьогоднішній день
        let dailyPoints = 0;
        switch (currentDate.getDate()) {
            case 1:
                // Перший день пори року - отримуємо 2 поінта
                dailyPoints = 2;
                break;
            case 2:
                // Другий день пори року - отримуємо 3 поінта
                dailyPoints = 3;
                break;
            default:
            // Третій та наступні дні пори року
                const prevDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 1);
                const prevSeason = seasons[Math.floor(prevDate.getMonth() / 3)];
                let prevPoints = 0;
                switch (prevDate.getDate()) {
                    case 1:
                        prevPoints = 2;
                        break;
                    case 2:
                        prevPoints = 3;
                        break;
                    default:
                        prevPoints = Math.round((dailyPointsBySeason[prevSeason] * 1.0) + (dailyPointsBySeason[prevSeason] * 0.6));
                        break;
                }
                dailyPoints = Math.round((prevPoints * 1.0) + (prevPoints * 0.6));
                break;
        }
  return (
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
            <p className='messageNoPaymentDue'>You've paid your {getCurrentMonth()} balance.</p>
            <BsCheckCircle className='checkButton'/>
        </div>
        {/* <LatestTransactions/> */}
    </div>
  )
}
