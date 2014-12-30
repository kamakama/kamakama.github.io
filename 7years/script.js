//countdown shamelessly taken from http://www.jjam.de/JavaScript/Datum_Uhrzeit/Countdown.html
      //LAUGHING-DATE:
	  //	airing time of zan sayonara zetsubou sensei e02: 11 July 2009 24:30 Japan Time
	  //	exact point of time in the episode: 12 July 2009 00:46 Japan Time
	  //	german time: 11 July 2009 17:46
	  //	UTC: 11 July 15:46
var YEAR=2016, MONTH=7, DAY=11, HOUR=0, MINUTE=46, SECOND=0;
var laughDate=new Date(YEAR,MONTH-1,DAY,HOUR,MINUTE,SECOND);

function countdown() {
    startDate=new Date(); // get date

    // calculate countdown and display until laughDate is reached
    if(startDate<laughDate)  {

		var years=0, months=0, days=0, hours=0, minutes=0, seconds=0;

        // years
        while(startDate<laughDate) {
			years++;
            startDate.setFullYear(startDate.getFullYear()+1);
        }
        startDate.setFullYear(startDate.getFullYear()-1);
        years--;

        // months
        while(startDate<laughDate) {
			months++;
			startDate.setMonth(startDate.getMonth()+1);
        }
        startDate.setMonth(startDate.getMonth()-1);
        months--;

        // days
        while(startDate.getTime()+(24*60*60*1000)<laughDate) {
            days++;
            startDate.setTime(startDate.getTime()+(24*60*60*1000));
        }

        // hours
        hours=Math.floor((laughDate-startDate)/(60*60*1000));
        startDate.setTime(startDate.getTime()+hours*60*60*1000);

        // minutes
        minutes=Math.floor((laughDate-startDate)/(60*1000));
        startDate.setTime(startDate.getTime()+minutes*60*1000);

        // seconds
        seconds=Math.floor((laughDate-startDate)/1000);

        // format display
        (years!=1)?years=years+" years,  ":years=years+" year,  ";
        (months!=1)?months=months+" months,  ":months=months+" month,  ";
        (days!=1)?days=days+" days,  ":days=days+" day,  ";
        (hours!=1)?hours=hours+" hours,  ":hours=hours+" hour,  ";
        (minutes!=1)?minutes=minutes+" minutes  and  ":minutes=minutes+" minutes and  ";
        (seconds!=1)?seconds=seconds+" seconds":seconds=seconds+" second";

	document.getElementById('countdowndiv').innerHTML=years+months+days+hours+minutes+seconds;
		  
        setTimeout('countdown()',200);
    }
    // set everything 0
    else document.getElementById('countdowndiv').innerHTML="YOU REMEMBERED, DIDN'T YOU?";
}
