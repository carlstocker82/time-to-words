// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight';
  } else if (time === '12:00') {
    return 'midday';
  }

  const timeArr = time.split(':');
  let hoursNumber = parseInt(timeArr[0]);
  let minutesNumber = parseInt(timeArr[1]);
  let minutesCheck = parseInt(timeArr[1]);

  let minutesAfter = parseInt(minutesNumber) > 30 ? 60 - parseInt(minutesNumber) : 0;
  if (minutesAfter != 0) {
    minutesCheck = minutesAfter;
    hoursNumber++;
  }


  let hoursText = '';
  switch (parseInt(hoursNumber)) {
    case 1:  hoursText = 'one'; break;
    case 2:  hoursText = 'two'; break;
    case 3:  hoursText = 'three'; break;
    case 4:  hoursText = 'four'; break;
    case 5:  hoursText = 'five'; break;
    case 6:  hoursText = 'six'; break;
    case 7:  hoursText = 'seven'; break;
    case 8:  hoursText = 'eight'; break;
    case 9:  hoursText = 'nine'; break;
    case 10: hoursText = 'ten';  break;
    case 11: hoursText = 'eleven';  break;
    case 12: hoursText = 'twelve';  break;
  }


  let minutesText = '';
  switch (parseInt(minutesCheck))   {
    case 1: minutesText = 'one'; break;
    case 2: minutesText = 'two'; break;
    case 3: minutesText = 'three'; break;
    case 4: minutesText = 'four'; break;
    case 5: minutesText = 'five'; break;
    case 6: minutesText = 'six'; break;
    case 7: minutesText = 'seven'; break;
    case 8: minutesText = 'eight'; break;
    case 9: minutesText = 'nine'; break;
    case 10: minutesText = 'ten'; break;
    case 11: minutesText = 'eleven'; break;
    case 12: minutesText = 'twelve'; break;
    case 13: minutesText = 'thirteen'; break;
    case 14: minutesText = 'fourteen'; break;
    case 15: minutesText = 'quarter'; break;
    case 16: minutesText = 'sixteen'; break;
    case 17: minutesText = 'seventeen'; break;
    case 18: minutesText = 'eighteen'; break;
    case 19: minutesText = 'nineteen'; break;
    case 20: minutesText = 'twenty'; break;
    case 21: minutesText = 'twenty one'; break;
    case 22: minutesText = 'twenty two'; break;
    case 23: minutesText = 'twenty three'; break;
    case 24: minutesText = 'twenty four'; break;
    case 25: minutesText = 'twenty five'; break;
    case 26: minutesText = 'twenty six'; break;
    case 27: minutesText = 'twenty seven'; break;
    case 28: minutesText = 'twenty eight'; break;
    case 29: minutesText = 'twenty nine'; break;
    case 30: minutesText = 'half'; break;
  }

  let finalText = '';
  if (minutesNumber == '00') {
    return `${hoursText} o'clock`;
  } else if (minutesNumber == '30') {
    return `half past ${hoursText}`;
  } else {
    if (parseInt(minutesNumber) < 30)  {
      return `${minutesText} past ${hoursText}`
    } else {

      return `${minutesText} to ${hoursText}`
    }

  }
}

module.exports = { convertTimeToWords };