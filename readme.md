Interval splitter by month
============
This package contains a single short function that split an interval of dates in intervals of month between these two dates

## How to use ?
```js
var intervalSplitterByMonth = require('intervalSplitterByMonth');

//Split an interval from Tue Sep 01 2015 00:00:00 GMT+0200 (CEST) to Fri Sep 01 2017 00:00:00 GMT+0200 (CEST)
var startDate = 1441058400000;
var endDate = 1504216800000;
console.log(intervalSplitterByMonth( startDate, endDate ));

/*
[ { start: 1420066800000, end: 1422745200000 },
  { start: 1422745200000, end: 1425164400000 },
  { start: 1425164400000, end: 1427839200000 },
  { start: 1427839200000, end: 1430431200000 },
  { start: 1430431200000, end: 1433109600000 },
  { start: 1433109600000, end: 1435701600000 },
  { start: 1435701600000, end: 1438380000000 },
  { start: 1438380000000, end: 1441058400000 },
  { start: 1441058400000, end: 1443650400000 },
  { start: 1443650400000, end: 1446332400000 },
  { start: 1446332400000, end: 1448924400000 },
  { start: 1448924400000, end: 1451602800000 },
  { start: 1483225200000, end: 1485903600000 },
  { start: 1485903600000, end: 1488322800000 },
  { start: 1488322800000, end: 1490997600000 },
  { start: 1490997600000, end: 1493589600000 },
  { start: 1493589600000, end: 1496268000000 },
  { start: 1496268000000, end: 1498860000000 },
  { start: 1498860000000, end: 1501538400000 },
  { start: 1501538400000, end: 1504216800000 },
  { start: 1451602800000, end: 1454281200000 },
  { start: 1454281200000, end: 1456786800000 },
  { start: 1456786800000, end: 1459461600000 },
  { start: 1459461600000, end: 1462053600000 },
  { start: 1462053600000, end: 1464732000000 },
  { start: 1464732000000, end: 1467324000000 },
  { start: 1467324000000, end: 1470002400000 },
  { start: 1470002400000, end: 1472680800000 },
  { start: 1472680800000, end: 1475272800000 },
  { start: 1475272800000, end: 1477954800000 },
  { start: 1477954800000, end: 1480546800000 },
  { start: 1480546800000, end: 1483225200000 } ]
*/
```