console.log("Bu Site Samet Ali Tarafından 10/9/22 Tarihinde Yapılmıştır Tüm Hakları Saklıdır")
//Poweredbysamet
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
