  //Setting Date 

  
  function SetDate() {
    DateValue = document.getElementById("Date").value;
      DateVal = new Date(DateValue);
      Month = DateVal.getMonth() + 1;
      Year = String(DateVal.getFullYear());
      Day = DateVal.getDate();
    
      if (Day < 10) {
        Day = String("0" + Day);
      }
    
      if (Month < 10) {
        Month = String("0" + Month);
      }
    }
    
    function SetDateNow() {
      Month = MonthNow;
      Year = YearNow;
      Day = DayNow;
      DateValue = `${Year}-${Month}-${Day}`;
      document.getElementById("Date").value = DateValue;
      console.log(DateValue)
    }
    

    SetDateNow();

function GetData() {
  //Get Gregorian data
    link =
      "http://api.aladhan.com/v1/calendarByCity/" +
      Year +
      "/" +
      Month +
      "?city=" +
      CityValue +
      "&country=" +
      CountryValue;
Loading(true)
  
    axios.get(link).then((Res) => {
let DataLength = Res.data.data.length - 1
      
      if(ScrnV == "C-Times"){
        ShowTimes(Res)
      }
      if(ScrnV == "G-Times"){
        ShowTableM(Res , DataLength)
      }
      
  
})


}

  GetData();



