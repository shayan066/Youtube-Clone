import React from 'react'

const timeSince = (date) => {

  const second = Math.floor((new Date().valueOf() - date.valueOf())/1000);

  const interval = second/31536000;  // Year

  if(interval > 1){
    return Math.floor(interval) + 'years';
  }

  interval = second/2592000;    // Month

  if(interval> 1){
    return Math.floor(interval) + 'months';
  }

  interval = second/86400;    //Day

  if(interval > 1){
    return Math.floor(interval) + "day";
  }

  interval = second/3600;   // Hour

  if(interval> 1){
    return Math.floor(interval) + "hour";
  }

  interval = second/60;   // Minute

  if(interval>1){
    return Math.floor(interval) + "minute";
  }

  return Math.floor(second) + "second";

}

export default timeSince