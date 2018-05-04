import React, { Component } from 'react';
import moment from 'moment';
import Day from './components/Day';
import Week from './components/Week';
import Month from './components/Month';

const modes = {
  MONTH: 'MONTH',
  WEEK: 'WEEK',
  DAY: 'DAY',
}

class Calendar extends Component{
  constructor(props){
    super(props);

    this.state = {
      mode: modes.MONTH,
    };
  }

  componentDidMount(){
    // To Do:
    //  Determine the current date and set this as the selected date

    console.log('CURRENT MONTH ===> ', moment().month());
    console.log('CURRENT WEEK ===> ', moment().week());
    console.log('CURRENT WEEKDAY ===> ', moment().weekday());
    console.log('CURRENT DAY ===> ', moment().day());
    console.log('CURRENT DATE ===> ', moment().date());


  }

  render(){

    return (
      <div className='calendar-container'>
        {
          this.state.mode === modes.DAY
            ? <Day />
            : this.state.mode === modes.WEEK
              ? <Week />
              : <Month />
        }
      </div>
    )
  }
}

export default Calendar;
