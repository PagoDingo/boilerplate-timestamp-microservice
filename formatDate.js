/*const formatDate = (date) => {
  console.log()
  c = new Date(date).toDateString().split(" ")
  c[0] += ','
  timeString = new Date(date).toTimeString().split(" ")
  c.push(timeString[0] + " " + "GMT")
  formattedDate = c.join(" ")
  return formattedDate
}
*/ // bad no bueno

var months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec'
]

var daysOfWeek = [
  '0',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
  'Sun'
]

// "Fri, 25 Dec 2015 00:00:00 GMT"
const dateFormat = (date) => {
  date = new Date(date)
  var dayOfWeek = daysOfWeek[date.getDay()] + ","
    //console.log(dayofWeek)
  var dayOfMonth = date.getUTCDate()
      if (dayOfMonth < 10){
        dayOfMonth = "0" + dayOfMonth.toString()
      }
    //console.log(dayOfMonth)
  var month = months[date.getMonth()]
    //console.log(month)
  var year = date.getFullYear()
    //console.log(year)
  var time = date.toTimeString().split(" ")[0]
    //console.log(time)
  
  var formattedDate = [dayOfWeek,dayOfMonth,month,year,time,"GMT"]
    .join(" ")
  //console.log(formattedDate)
  return formattedDate;
}

dateFormat("2002-2-2")

//module.exports = formatDate
module.exports = dateFormat