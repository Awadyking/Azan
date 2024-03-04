//بسم الله الرحمن الرحيم

let Datenow = new Date();
let DateValue;
let YearNow = Datenow.getFullYear();
let MonthNow =  Datenow.getMonth() + 1
let DayNow = Datenow.getDate()
if(DayNow < 10){
    DayNow = String("0" + DayNow)
    }
    
if(MonthNow < 10){
    MonthNow = String("0" + MonthNow)
    }


//Screen Control 
let ScrnV ;
function ScrnCon(){
if(ScrnV == "C-Times"){
document.getElementById("Scrn").innerHTML = ""
document.getElementById("Scrn").innerHTML = 
`      <div class="Times-Cards">
<div class="Card" id="Fajr">
  <p>الفجر</p>
  <img src="img/Fajr.png"/>
  <p id="FajrT"></p>
</div>
<div class="Card" id="Sunrise">
  <p>الشروق</p>
  <img src="img/Sunrise.png"/>
  <p id="SunriseT"></p>
</div>
<div class="Card" id="Dhuhr">
  <p>الظهر</p>
  <img src="img/Dhuhr.png"/>
  <p id="DhuhrT"></p>
</div>
<div class="Card" id="Asr">
  <p>العصر</p>
  <img src="img/Asr.png"/>
  <p id="AsrT"></p>
</div>
<div class="Card" id="Maghrib">
  <p>المغرب</p>
  <img src="img/Maghrib.png"/>
  <p id="MaghribT"></p>
</div>
<div class="Card" id="Isha">
  <p>العشاء</p>
  <img src="img/Isha.png"/>
  <p id="IshaT"></p>
</div>
</div>`
}if(ScrnV == "G-Times"){
    document.getElementById("Scrn").innerHTML = ""
    document.getElementById("Scrn").innerHTML = 
    `<div class="Month-times">
    <table id="TableM"></table>
    </div>`
}if(ScrnV == "H-Times"){
    document.getElementById("Scrn").innerHTML = ""
    document.getElementById("Scrn").innerHTML = 
    `<div class="Month-times">
    <table id="TableH"></table>
    </div>`
}
}



//Footer Code Block
document.getElementById("footer").innerHTML = `Copyright © ${YearNow} . All rights reserved`;



//Cities Arrays Code Block

let EgyptCities = [["القاهرة" ,"Cairo"],
                   ["الجيزة" ,"Giza"],
                   ["الإسكندرية" ,"Alexandria"],
                   ["الإسماعيلية" ,"Ismailia"]]

let KSACities = [["الرياض" ,"Riyadh"],
                    ["مكة" ,"Makkah"],
                    ["المدينة" ,"Elamdina"],
                    ["جدة" ,"Jeddah"]]
let UAECities = [["دبي" ,"Dubai"],
                    ["أبو ظبي" ,"Abu Dhabi"],
                    ["الشارقة" ,"Sharjah"]]




//The Countries & Cites Values
let CountryValue = "Egypt";
let CityValue = "Cairo";
let EgyptCityIndex = EgyptCities.length -1
let KSACityIndex = KSACities.length -1 
let UAECityIndex = UAECities.length -1 


function GetCity(){
if(CountryValue == "Egypt"){
document.getElementById("City").innerHTML = ""
for(let i = 0 ; i <= EgyptCityIndex ; i++){
document.getElementById("City").innerHTML += 
`<option value="${ EgyptCities[i][1]}">${ EgyptCities[i][0]}</option>` 
}
}if(CountryValue == "KSA"){
    document.getElementById("City").innerHTML = ""
    for(let i = 0 ; i <= KSACityIndex ; i++){
    document.getElementById("City").innerHTML += 
    `<option value="${ KSACities[i][1]}">${ KSACities[i][0]}</option>` 
}}if(CountryValue == "UAE"){
    document.getElementById("City").innerHTML = ""
    for(let i = 0 ; i <= UAECityIndex ; i++){
    document.getElementById("City").innerHTML += 
    `<option value="${ UAECities[i][1]}">${ UAECities[i][0]}</option>` 
}}


}
GetCity()



// Date Values
let Month ;
let Year;
let Day;

function SetDate(){
  DateValue =   document.getElementById("Date").value;
  DateVal = new Date(DateValue)
  Month = DateVal.getMonth() + 1;
  Year = String(DateVal.getFullYear());
  Day = DateVal.getDate();

  if(Day< 10){
    Day = String("0" + Day)
    }
    
if(Month < 10){
    Month = String("0" + Month)
    
    }

}

function SetDateNow(){
    Month = MonthNow;
    Year = YearNow;
    Day = DayNow;
    DateValue = `${Year}-${Month}-${Day}`;
    document.getElementById("Date").value = DateValue
}

SetDateNow()


//API 

function GetData(){
    //Get Gregorian data
link ="http://api.aladha.com/v1/calendarByCity/"+Year+"/" +Month +"?city="+CityValue +"&country="+CountryValue
axios.get(link)
.then((Res) => {

    let DataLength = Res.data.data.length
    document.getElementById("TableM").innerHTML =`
    <tr><td> مواقيت الصلاة طوال الشهرالميلادي</td></tr>
    <tr>
    <td>توقيت الصلاة - اليوم</td>
    <td>الفجر</td>
    <td>الشروق</td>
    <td>الظهر</td>
    <td>العصر</td>
    <td>المغرب</td>
    <td>العشاء</td>
</tr>`
    for(let i = 0; i < DataLength ; i++){

        document.getElementById("TableM").innerHTML +=
        `<tr>
        <td>${Res.data.data[i].date.gregorian.date}</td>
        <td>${Res.data.data[i].timings.Fajr}</td>
        <td>${Res.data.data[i].timings.Sunrise}</td>
        <td>${Res.data.data[i].timings.Dhuhr}</td>
        <td>${Res.data.data[i].timings.Asr}</td>
        <td>${Res.data.data[i].timings.Maghrib}</td>
        <td>${Res.data.data[i].timings.Isha}</td>
    </tr>`
    }
})
.catch(()=>{
    document.getElementById("Scrn").innerHTML = ""
    document.getElementById("Scrn").innerHTML = `<p id="Error">Sorry! This is An Error</p>`

})
 
axios.get(link)
.then((Res) => {

    let DataLength = Res.data.data.length
    document.getElementById("TableH").innerHTML =`
    <tr><td> مواقيت الصلاة طوال الشهرالميلادي بالتاريخ الهجري</td></tr>
    <tr>
    <td>توقيت الصلاة - اليوم</td>
    <td>الفجر</td>
    <td>الشروق</td>
    <td>الظهر</td>
    <td>العصر</td>
    <td>المغرب</td>
    <td>العشاء</td>
</tr>`
    for(let i = 0; i < DataLength ; i++){

        document.getElementById("TableH").innerHTML +=
        `<tr>
        <td>${Res.data.data[i].date.hijri.date}</td>
        <td>${Res.data.data[i].timings.Fajr}</td>
        <td>${Res.data.data[i].timings.Sunrise}</td>
        <td>${Res.data.data[i].timings.Dhuhr}</td>
        <td>${Res.data.data[i].timings.Asr}</td>
        <td>${Res.data.data[i].timings.Maghrib}</td>
        <td>${Res.data.data[i].timings.Isha}</td>
    </tr>`
    }
})
.catch(()=>{
    document.getElementById("Scrn").innerHTML = ""
    document.getElementById("Scrn").innerHTML = `<p id="Error">Sorry! This is An Error</p>`

})

axios.get(link)
.then((Res)=>{
document.getElementById("FajrT").innerHTML = Res.data.data[0].timings.Fajr
document.getElementById("SunriseT").innerHTML = Res.data.data[0].timings.Sunrise
document.getElementById("DhuhrT").innerHTML = Res.data.data[0].timings.Dhuhr
document.getElementById("AsrT").innerHTML = Res.data.data[0].timings.Asr
document.getElementById("MaghribT").innerHTML = Res.data.data[0].timings.Maghrib
document.getElementById("IshaT").innerHTML = Res.data.data[0].timings.Isha

})
.catch(()=>{
    document.getElementById("Scrn").innerHTML = ""
    document.getElementById("Scrn").innerHTML = `<p id="Error">Sorry! This is An Error</p>`

})
}

GetData()


console.log()