'use strict';

/**
 * This function split an interval [ startDate, endDate ] by month
 * @param startDate {timestamp} is the first date of the interval
 * @param endDate {timestamp} is the last date of the interval
 * @returns {Array} Splitted date ( Ex : [ { start, end }, { start, end }, { start, end } ] )
 */
module.exports = function intervalSplitterByMonth ( startDate, endDate ){
  //We check if the interval is correctly built
  if ( endDate < startDate ){
    throw 'The startDate is more recent than the endDate, check your dates' + { endDate : endDate, startDate : startDate };
  }
  //We check if dates are timestamp
  if( ( new Date( startDate ) ).getTime() < 0 || ( new Date( endDate ) ).getTime() < 0 ){
    throw 'The startDate or the endDate is not a timestamp, check your dates' + { endDate : endDate, startDate : startDate };
  }

  var dateSplittedByMonth = [];

  //Get Year of each date
  var firstYear = new Date( startDate ).getFullYear();
  var lastYear  = new Date( endDate ).getFullYear();

  //Get month of each date
  var firstMonth  = new Date( startDate ).getMonth();
  var lastMonth   = new Date( endDate ).getMonth();

  //Special case if years are differents
  if( firstYear !== lastYear ){
    //Find how many year are concerned by the interval
    var nbYear = lastYear - firstYear;

    for (var y = 0; y < nbYear; y++){
      //If this is the first year of the interval we need to split from the first date to the end of the year
      if( y === 0 ){
        for( var m = firstMonth ; m <= 11; m++ ){
          var obj1 = {
            start : new Date( startDate ).setMonth( m ),
            end : new Date( startDate ).setMonth( m + 1 )
          };

          if( m === firstMonth ){
            obj1.start = startDate;
          }

          if( obj1.end !== obj1.start ){
            dateSplittedByMonth.push( obj1 );
          }
        }
        //In the other case we split next years in month
      } else {
        for( var l = 0 ; l <= 11; l++ ){
          var obj3 = {
            start : new Date( new Date( startDate ).setFullYear( firstYear + y ) ).setMonth( l ),
            end : new Date( new Date( startDate ).setFullYear( firstYear + y ) ).setMonth( l + 1 )
          };

          if( obj3.end !== obj3.start ){
            dateSplittedByMonth.push( obj3 );
          }
        }
      }

      //If this is the last year of the interval we need to split from the first date of the year to the last date
      if( y === ( nbYear - 1 ) ){
        for( var n = 0 ; n <= lastMonth; n++ ){
          var obj2 = {
            start : new Date( endDate ).setMonth( n ),
            end : new Date( endDate ).setMonth( n + 1 )
          };

          if( n === lastMonth ){
            obj2.end = endDate;
          }

          if( obj2.end !== obj2.start ){
            dateSplittedByMonth.push( obj2 );
          }
        }
      }
    }
    //In this case we are in the same year so we just have to build months between start and last date
  } else {
    for( var x = firstMonth ; x <= lastMonth; x++ ){
      var obj = {
        start : new Date( startDate ).setMonth( x ),
        end : new Date( startDate ).setMonth( x + 1 )
      };

      if( x === lastMonth ){
        obj.end = endDate;
      }

      if( x === firstMonth ){
        obj.start = endDate;
      }

      if( obj.end !== obj.start ){
        dateSplittedByMonth.push( obj );
      }
    }
  }

  return dateSplittedByMonth;
};