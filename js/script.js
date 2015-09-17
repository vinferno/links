
var date = new Date().getDate();


var date2 = date -1;
var today = date.toString();
var yesterday = date2.toString();

var as = document.getElementsByTagName('a');



for(i=0;i<as.length;i++){
	if ((i>5 && i< 12) || (i>17 && i<24)){
	as[i].href=as[i].href + (date - 1);
	}

	if ((i>11 && i< 18) || (i>23 && i<30)){
	as[i].href=as[i].href + (date);
	}

};