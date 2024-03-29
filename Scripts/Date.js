//بسم الله الرحمن الرحيم

let Datenow = new Date();
let DateValue;
let YearNow = Datenow.getFullYear();
let MonthNow = Datenow.getMonth() + 1;
let DayNow = Datenow.getDate();
if (DayNow < 10) {
  DayNow = String("0" + DayNow);
}

if (MonthNow < 10) {
  MonthNow = String("0" + MonthNow);
}

let Month;
let Year;
let Day;


//Other Variables

let ScrnV = "C-Times";


  // API Show Times 

  
function ShowTimes(Res){
  Loading(false)
  document.getElementById("FajrT").innerHTML = Res.data.data[0].timings.Fajr;
    document.getElementById("SunriseT").innerHTML =
     Res.data.data[0].timings.Sunrise;
       document.getElementById("DhuhrT").innerHTML =
        Res.data.data[0].timings.Dhuhr;
       document.getElementById("AsrT").innerHTML = Res.data.data[0].timings.Asr;
       document.getElementById("MaghribT").innerHTML =
         Res.data.data[0].timings.Maghrib;
       document.getElementById("IshaT").innerHTML = Res.data.data[0].timings.Isha;
}



function ShowTableM(Res , DataLength){
  Loading(false)
  document.getElementById("TableM").innerHTML = `
  <tr><td> مواقيت الصلاة طوال الشهرالميلادي</td></tr>
  <tr>
  <td>توقيت الصلاة - اليوم</td>
  <td>الفجر</td>
  <td>الشروق</td>
  <td>الظهر</td>
  <td>العصر</td>
  <td>المغرب</td>
  <td>العشاء</td>
</tr>`;
    for (let i = 0; i < DataLength; i++) {
      document.getElementById("TableM").innerHTML += `<tr>
      <td>${Res.data.data[i].date.gregorian.date}</td>
      <td>${Res.data.data[i].timings.Fajr}</td>
      <td>${Res.data.data[i].timings.Sunrise}</td>
      <td>${Res.data.data[i].timings.Dhuhr}</td>
      <td>${Res.data.data[i].timings.Asr}</td>
      <td>${Res.data.data[i].timings.Maghrib}</td>
      <td>${Res.data.data[i].timings.Isha}</td>
  </tr>`;
    }

  }
