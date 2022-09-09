//Poweredbysamet
console.log("Site Samet Ali Yalçın Tarafından 09/09/22 14.05 Tarihinde Yapılmıştır Hakları Saklıdır")
window.onload = startTime;
function startTime()
{
 var today=new Date();
 var h=today.getHours();
 var m=today.getMinutes();

 h=checkTime(h);
 m=checkTime(m);
 document.getElementById('saat').innerHTML=h+":"+m;
 t=setTimeout('startTime()',1000);
}

function checkTime(i)
{
if (i<10)
 {
  i="0" + i;
 }
return i;
}

//Powered By Samet Ali YALÇIN
