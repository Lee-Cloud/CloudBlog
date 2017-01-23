module.exports = function(timestamp){
  var month = ['January','February','March','April','May','Juny','July','August','September','October','November','December'];
  var week = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  var day = week[new Date(timestamp).getDay()];
  var mon = month[new Date(timestamp).getMonth()];
  var date =new Date(timestamp).getDate();
  if (date < 10) {
    date = '0' + date ;
  }
  var year = new Date(timestamp).getFullYear();
  return day+','+mon+' '+date+','+year
}
