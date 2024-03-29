//بسم الله الرحمن الرحيم

function ScrnCon() {
    if (ScrnV == "C-Times") {
      document.getElementById("Scrn").innerHTML = "";
      document.getElementById("Scrn").innerHTML = `      <div class="Times-Cards">
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
  </div>`;
  Loading(false)
    }
    if (ScrnV == "G-Times") {
      document.getElementById("Scrn").innerHTML = "";
      document.getElementById("Scrn").innerHTML = `<div class="Month-times">
      <table id="TableM"></table>
      </div>`;
      Loading(false)
    }
  }
  

// Other Functions



