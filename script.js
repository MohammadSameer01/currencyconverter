let exchangeRate,
  fromCurrency,
  toCurrency,
  fromCurrencyElement,
  toCurrencyElement;
//
fromCurrencyElement = document.querySelector("#fromDropdown");
toCurrencyElement = document.querySelector("#toDropdown");
//
let convertButton = document.querySelector(".convertButton");
//
let usdExchangeRate;
//
let dropdowns = document.querySelectorAll(".dropdownCnt select");
dropdowns.forEach((dropdown) => {
  let fragment = document.createDocumentFragment(); // Temporary storage

  for (let item of currenciesArray) {
    let option = document.createElement("option");
    option.value = item.code;
    option.textContent = `${item.code} - ${item.name}`;
    option.selected =
      (dropdown.name === "from" && item.code === "USD") ||
      (dropdown.name === "to" && item.code === "INR");

    fragment.appendChild(option);
  }

  dropdown.appendChild(fragment); // Append all at once
  updateFlag(dropdown);

  dropdown.addEventListener("change", (event) => {
    updateFlag(event.target);
    handleApiData();
  });
});

function updateFlag(element) {
  let currencyCode = element.value;

  let currencyObj = currenciesArray.find(
    (currency) => currency.code === currencyCode
  );

  if (currencyObj) {
    let country = currencyObj.countryCode; // Properly declare the variable
    let flag = element.parentElement.querySelector("img");
    let newSrc = `https://flagsapi.com/${country}/flat/64.png`;

    flag.src = newSrc;
  } else {
    console.warn("Currency not found");
  }
}
//
//
//
//
//
async function apiFetchFunction() {
  let apiUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@`;
  //
  //
  //
  let getDate = dateFunction();
  getDate = getDate.split(",");
  let todayDate = getDate[0];
  let yesterdayDate = getDate[1];
  //
  //
  //
  let fromCurr = fromCurrencyElement.value.toLowerCase();
  //
  //
  //
  let todayRequestUrl = `${apiUrl}${todayDate}/v1/currencies/${fromCurr}.json`;
  let yesterdayRequestUrl = `${apiUrl}${yesterdayDate}/v1/currencies/${fromCurr}.json`;
  let response, responseJSON;
  //
  //
  //
  try {
    response = await fetch(todayRequestUrl);
    if (!response.ok) {
      throw new Error("Today's data is not available");
    }
    responseJSON = await response.json();

    if (responseJSON.usd) {
      usdExchangeRate = responseJSON.usd;
      dollarSectionBoxes();
    }

    return responseJSON;
  } catch (e) {
    console.log("Error fetching today's data:", e.message);
  }
  //
  //
  //
  // If today's data fails, try yesterday's data
  try {
    let response = await fetch(yesterdayRequestUrl);

    if (!response.ok) {
      throw new Error("Yesterday's data not available");
    }

    let responseJSON = await response.json();

    if (responseJSON.usd) {
      usdExchangeRate = responseJSON.usd;
      dollarSectionBoxes();
    }

    return responseJSON; // Return if successful
  } catch (e) {
    console.log("Error fetching yesterday's data:", e.message);
  }
  //
  //
  //
}

function dateFunction() {
  let date = new Date();
  let fYear = date.getFullYear();
  let fMonth = date.getMonth() + 1;
  let fDate = date.getDate();

  let formattedTodayDate = `${fYear}.${fMonth}.${fDate}`;
  let formattedYesterdayDate = `${fYear}.${fMonth}.${fDate - 1}`;

  return `${formattedTodayDate},${formattedYesterdayDate}`;
}
//
//
//
async function handleApiData() {
  let currencyData = await apiFetchFunction();

  if (currencyData) {
    //
    //
    let displayDate = currencyData.date;
    displayDate = displayDate.split("-");
    formattedDisplayDate = `${displayDate[2]}-${displayDate[1]}-${displayDate[0]}`;
    //
    //
    fromCurrency = fromCurrencyElement.value.toLowerCase();
    toCurrency = toCurrencyElement.value.toLowerCase();
    exchangeRate = currencyData[fromCurrency][toCurrency];
    //
    //
    //
    updateValuesOfElements(exchangeRate, formattedDisplayDate);
    updateTablesContent(exchangeRate);
    //
    //
    //to updateDate in the dollar section
    let dollarCntDate = document.querySelector(".dollarCntDate");
    dollarCntDate.textContent = formatDateToCustomString(displayDate);
    //
    //
    convertButton.textContent = `Convert ${fromCurrency.toUpperCase()} to ${toCurrency.toUpperCase()}`;
    //
    //
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  } else {
    console.log("No data received.");
  }
}
function updateValuesOfElements(exchangeRate, formattedDisplayDate) {
  let resultsFontSmall = document.querySelector(".resultsFontSmall");
  let totalResultValue = document.querySelector(".totalResultValue");
  let toCurrencyNameDisplayer = document.querySelector(
    ".toCurrencyNameDisplayer"
  );
  let valueOfFromCurrency = document.querySelector(".valueOfFromCurrency");
  let valueOfToCurrency = document.querySelector(".valueOfToCurrency");
  let updatedTimeElement = document.querySelector(".updatedTime span");
  let userInput = document.querySelector("#userInput").value;
  //
  //
  const fromCountryArray = currenciesArray.find(
    (curr) => curr.code === fromCurrency.toUpperCase()
  );
  let fromCurrencyFullName = fromCountryArray.name;
  resultsFontSmall.innerHTML = `${userInput} ${fromCurrencyFullName}`;
  //
  //
  let realER = exchangeRate.toFixed(6);
  totalResultValue.textContent = userInput * realER;
  //
  //
  const toCountryArray = currenciesArray.find(
    (curr) => curr.code === toCurrency.toUpperCase()
  );
  let toCurrencyFullName = toCountryArray.name;
  toCurrencyNameDisplayer.textContent = toCurrencyFullName;
  //
  //
  let toTOFromCurrER = exchangeRate.toFixed(6);
  valueOfFromCurrency.innerHTML = `1 ${fromCurrency.toUpperCase()} = ${toTOFromCurrER} ${toCurrency.toUpperCase()} `;
  let fromToToCurrER = 1 / exchangeRate;
  fromToToCurrER = fromToToCurrER.toFixed(6);
  valueOfToCurrency.innerHTML = `1 ${toCurrency.toUpperCase()} = ${fromToToCurrER} ${fromCurrency.toUpperCase()}`;
  //
  //
  let inputISOCode = document.querySelector(".inputISOCode");
  inputISOCode.textContent = fromCountryArray.symbol;
  let inputEle = document.querySelector("#userInput");
  inputEle.style.paddingLeft = `${inputISOCode.clientWidth}px`;
  //
  //
  updatedTimeElement.textContent = formattedDisplayDate;
}
convertButton.addEventListener("click", handleApiData);
window.onload = handleApiData();

//
//
//
function dollarSectionBoxes() {
  let dollarRateContainer = document.querySelector(".dollarRateContainer");

  for (let item of dollarRateArray) {
    //
    let itemArray = currenciesArray.find((currency) => currency.code === item);
    //
    let _ToDollarContainer = document.createElement("div");
    _ToDollarContainer.setAttribute("class", "_ToDollarContainer");
    _ToDollarContainer.style.backgroundImage = `
    linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), 
    url(assets/flags/${itemArray.countryCode}.svg)
  `;
    //
    //
    let ul = document.createElement("ul");
    //
    let currencyCode = document.createElement("li");
    currencyCode.setAttribute("class", "currencyCode");
    currencyCode.textContent = itemArray.code;
    //
    let currencyName = document.createElement("li");
    currencyName.setAttribute("class", "currencyName");
    currencyName.textContent = itemArray.name;
    //
    let currencyValueToUSD = document.createElement("li");
    currencyValueToUSD.setAttribute("class", "currencyValueToUSD");
    currencyValueToUSD.textContent =
      usdExchangeRate[item.toLowerCase()].toFixed(3);
    //
    //
    let currencyCountry = document.createElement("li");
    currencyCountry.setAttribute("class", "currencyCountry");
    currencyCountry.textContent = `${itemArray.country}, ${itemArray.countryCode}`;
    //
    //
    let currencySymbol = document.createElement("div");
    currencySymbol.setAttribute("class", "currencySymbol");
    if (itemArray.symbol.length <= 2) {
      currencySymbol.textContent = itemArray.symbol;
      if (itemArray.symbol.length === 2) {
        currencySymbol.style.fontSize = "2.5em";
      }
    } else {
      currencySymbol.style.display = "none";
    }
    //
    //
    //
    //
    ul.append(
      currencyCode,
      currencyName,
      currencyValueToUSD,
      currencyCountry,
      currencySymbol
    );
    _ToDollarContainer.appendChild(ul);
    dollarRateContainer.appendChild(_ToDollarContainer);
  }
}

function updateTablesContent(fromCurrExchangeRate) {
  //
  let fromCurrenciesTableContainer = document.querySelector(
    ".fromCurrenciesTableContainer"
  );
  let toCurrenciesTableContainer = document.querySelector(
    ".toCurrenciesTableContainer"
  );
  //
  //
  let fromCurr = fromCurrency.toUpperCase();
  let toCurr = toCurrency.toUpperCase();
  //
  //
  let fromCurrH3 = document.querySelector(".fromCurrH3");
  let toCurrH3 = document.querySelector(".toCurrH3");
  fromCurrH3.textContent = `Convert ${fromCurr} to ${toCurr}`;
  toCurrH3.textContent = `Convert ${toCurr} to ${fromCurr}`;
  //
  //
  let fromCurrTableHeads = document.querySelectorAll(".fromCurrTableHead");
  fromCurrTableHeads.forEach((ele) => {
    ele.textContent = fromCurr;
  });
  let toCurrTableHeads = document.querySelectorAll(".toCurrTableHead");
  toCurrTableHeads.forEach((ele) => {
    ele.textContent = toCurr;
  });
  //
  //
  let tbodyLeft = document.querySelector("#fromCurrTableID tbody");
  let tbodyRight = document.querySelector("#toCurrTableID tbody");
  tbodyLeft.innerHTML = "";
  tbodyRight.innerHTML = "";
  //
  //
  let displayValues = [1, 5, 10, 15, 25, 50, 100, 500, 1000, 5000, 10000];
  displayValues.forEach((value) => {
    let tr = document.createElement("tr");
    let tdLeft = document.createElement("td");
    let tdRight = document.createElement("td");
    //
    tdLeft.textContent = `${value} ${fromCurr}`;
    tdRight.textContent = `${(value * fromCurrExchangeRate).toFixed(
      3
    )} ${toCurr}`;
    //
    tr.append(tdLeft, tdRight);
    //
    tbodyLeft.appendChild(tr);
  });
  //
  //
  //
  displayValues.forEach((value) => {
    let tr = document.createElement("tr");
    let tdLeft = document.createElement("td");
    let tdRight = document.createElement("td");
    //
    tdLeft.textContent = `${value} ${toCurr}`;
    tdRight.textContent = `${(value * (1 / fromCurrExchangeRate)).toFixed(
      3
    )} ${fromCurr}`;
    //
    tr.append(tdLeft, tdRight);
    //
    tbodyRight.appendChild(tr);
  });
  //
  //
  //
}
//
//
//
function formatDateToCustomString(date) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let d = new Date(date);
  let month = months[d.getMonth()];
  let day = String(d.getDate()).padStart(2, "0");
  let year = d.getFullYear();

  return `${month} ${day}, ${year}`;
}

document.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;

  let metaThemeTag = document.querySelector('meta[name="theme-color"]');

  if (scrollPosition >= 300) {
    metaThemeTag.setAttribute("content", "#ffff"); // Change to white
  } else {
    metaThemeTag.setAttribute("content", "#040f43"); // Default color (change as needed)
  }
});

// code to auto run the handleApiData when user type
let userInput = document.querySelector("#userInput");
let typingTimer;
userInput.addEventListener("input", () => {
  clearTimeout(typingTimer);

  if (userInput.value.trim() !== "") {
    typingTimer = setTimeout(() => {
      handleApiData();
    }, 600);
  }
});
// to move to input to top on page on focus
userInput.addEventListener("focus", () => {
  let offset = 36; // Distance from the top
  let elementTop = userInput.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top: elementTop - offset, behavior: "smooth" });
});
