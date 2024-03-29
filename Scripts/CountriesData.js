//بسم الله الرحمن الرحيم

let EgyptCities = [
    ["القاهرة", "Cairo"],
    ["الجيزة", "Giza"],
    ["الإسكندرية", "Alexandria"],
    ["الإسماعيلية", "Ismailia"],
  ];
  
  let KSACities = [
    ["الرياض", "Riyadh"],
    ["مكة", "Makkah"],
    ["المدينة", "Elamdina"],
    ["جدة", "Jeddah"],
  ];
  let UAECities = [
    ["دبي", "Dubai"],
    ["أبو ظبي", "Abu Dhabi"],
    ["الشارقة", "Sharjah"],
  ];
  
  //The Countries & Cites Values
  let CountryValue = "Egypt";
  let CityValue = "Cairo";
  let EgyptCityIndex = EgyptCities.length - 1;
  let KSACityIndex = KSACities.length - 1;
  let UAECityIndex = UAECities.length - 1;
  
  function GetCity() {
    if (CountryValue == "Egypt") {
      document.getElementById("City").innerHTML = "";
      for (let i = 0; i <= EgyptCityIndex; i++) {
        document.getElementById(
          "City"
        ).innerHTML += `<option value="${EgyptCities[i][1]}">${EgyptCities[i][0]}</option>`;
      }
    }
    if (CountryValue == "KSA") {
      document.getElementById("City").innerHTML = "";
      for (let i = 0; i <= KSACityIndex; i++) {
        document.getElementById(
          "City"
        ).innerHTML += `<option value="${KSACities[i][1]}">${KSACities[i][0]}</option>`;
      }
    }
    if (CountryValue == "UAE") {
      document.getElementById("City").innerHTML = "";
      for (let i = 0; i <= UAECityIndex; i++) {
        document.getElementById(
          "City"
        ).innerHTML += `<option value="${UAECities[i][1]}">${UAECities[i][0]}</option>`;
      }
    }
  }
  GetCity();
  

  //Other

  function Loading(x){

    if(x == true){
      document.getElementById("Loading").style.visibility = "visible"
      document.getElementById("Scrn").style.opacity = "0.2"
      document.getElementById("nav").style.opacity = "0.2"
      document.getElementById("header").style.opacity = "0.2"
      document.getElementById("Choose").style.opacity = "0.2"
      document.getElementById("footer").style.opacity="0.2"
      document.getElementById("About").style.opacity="0.2"
    
    }
    if(x == false){
      document.getElementById("Loading").style.visibility = "hidden"
      document.getElementById("Scrn").style.opacity = "1"
      document.getElementById("nav").style.opacity = "1"
      document.getElementById("header").style.opacity = "1"
      document.getElementById("Choose").style.opacity = "1"
      document.getElementById("footer").style.opacity="1"
      document.getElementById("About").style.opacity="1"
    }
    }
    