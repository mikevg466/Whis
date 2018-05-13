import React from 'react';
import { hourArr } from '../../../../constants';
import './Day.css';

const Day = props => (
  <div>
    <div className="date">
      <h1>{props.moment.format('MMMM Do YYYY')}</h1>
    </div>
    <div className="agenda">
      <div className="time">
        {
          hourArr.map(hourStr => (
            <div className="hour-block" key={hourStr}>
              <h3>{hourStr}</h3>
            </div>
          ))
        }
      </div>
      <div className="activities">
        {
          hourArr.map(hourStr => (
            <div className="hour-block" key={hourStr}>
              <div className="hour-block__qtr--first">
              </div>
              <div className="hour-block__qtr--second">
              </div>
              <div className="hour-block__qtr--third">
              </div>
              <div className="hour-block__qtr--fourth">
              </div>
            </div>
          ))
        }
      </div>
    </div>
  </div>
);

export default Day;
