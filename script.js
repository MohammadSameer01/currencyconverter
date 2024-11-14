let dropdowns = document.querySelectorAll(".dropdownsContainer select");
let convertButton = document.querySelector(".convertButton");
let fromCurrency = document.querySelector("#fromDropdown");
let toCurrency = document.querySelector("#toDropdown");
let resultDisplayer = document.querySelector(".resultDisplayer");
let errorDisplayerCnt = document.querySelector(".errorDisplayerCnt");

convertButton.addEventListener('click', () => {
  
  navigator.vibrate(50);
  
});

for (select of dropdowns) {
  for (currencyCode in countryList) {
    let option = document.createElement("option");
    option.innerHTML = `${currencyCode}`;
    option.value = currencyCode;
    select.append(option);

    if (select.name === "from" && currencyCode === "USD") {
      option.selected = "selected";
    } else if (select.name === "to" && currencyCode === "INR") {
      option.selected = "selected";
    }
  }
  select.addEventListener("change", (event) => {
    updateFlag(event.target);
    exchangeRate();
    isoCodeChanger();
    navigator.vibrate(50)
  });
}

function updateFlag(element) {
  let currencyCode = element.value;
  let country = countryList[currencyCode];

  let flag = element.parentElement.querySelector("img");
  let newSrc = `https://flagsapi.com/${country}/flat/64.png`;

  flag.src = newSrc;

  convertButton.innerText = `Convert ${fromCurrency.value} to ${toCurrency.value}`;
}

const exchangeRate = async () => {
  let backupApiUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies`;

  let apiUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@`;

  let userInput = document.querySelector("#userInput").value;

  userInputApiRequest = `${apiUrl}${todayDate}/v1/currencies/${fromCurrency.value.toLowerCase()}.json`;
  backupApiUrlRequest = `${backupApiUrl}/${fromCurrency.value.toLowerCase()}.json`;

  let apiResponse;

  try {
    apiResponse = await fetch(userInputApiRequest);
    if (!apiResponse.ok) {
      errorDisplayerCnt.innerText =
        "Failed to fetch Primary API,You can still continue with our backup API";
      errorDisplayerCnt.setAttribute("class", "newErrorClass");

      throw new Error("Primary API request failed");
    }
  } catch (error) {
    console.error("Error fetching from primary API:", error);

    try {
      apiResponse = await fetch(backupApiUrlRequest);
      if (!apiResponse.ok) {
        throw new Error("Backup URL request failed");
      }
    } catch (backupError) {
      console.error("Error fetching from backup API:", backupError);
      errorDisplayerCnt.innerText = `Failed to fetch both API's`;
      errorDisplayerCnt.setAttribute("class", "newErrorClass");

      return;
    }
  }

  let apiResponseJson = await apiResponse.json();

  let rate =
    apiResponseJson[fromCurrency.value.toLowerCase()][
      toCurrency.value.toLowerCase()
    ];

  rate = rate.toFixed(6);

  let exchangeRateOfToCurrencytoFromCurrency = 1 / rate;
  exchangeRateOfToCurrencytoFromCurrency =
    exchangeRateOfToCurrencytoFromCurrency.toFixed(6);

  let finalResult = userInput * rate;

  let fromCurrencyNameInFull = currencyNames[fromCurrency.value];
  let toCurrencyNameInFull = currencyNames[toCurrency.value];

  if (fromCurrencyNameInFull === undefined) {
    fromCurrencyNameInFull = fromCurrency.value;
  }
  if (toCurrencyNameInFull === undefined) {
    toCurrencyNameInFull = toCurrency.value;
  }

  resultDisplayer.innerHTML = `
  <div class='mainResult'><div class='resultsFontSmall'>${userInput} <span class='lineBreak'>${fromCurrencyNameInFull}</span>  = </div> 
  ${finalResult} <span class='lineBreak'>${toCurrencyNameInFull}</span></div>
  <div class = 'valueOfFromCurrency'>1 ${fromCurrency.value} = ${rate} ${toCurrency.value}</div>
  <div  class = 'valueOfToCurrency'>1 ${toCurrency.value} = ${exchangeRateOfToCurrencytoFromCurrency} ${fromCurrency.value}</div>`;

  let converterInnerDateDisplyer = document.querySelector(".updatedTime span");
  converterInnerDateDisplyer.innerText = apiResponseJson.date;

  updateTables(rate, 1 / rate);

  errorDisplayerCnt.innerText = "";
  errorDisplayerCnt.setAttribute("class", "errorDisplayerCnt");
};

function updateTables(fromCurr, toCurr) {
  fromCurr = Math.round(fromCurr * 1000) / 1000;
  toCurr = Math.round(toCurr * 1000) / 1000;
  let fromCurrCode = fromCurrency.value;
  let toCurrCode = toCurrency.value;

  let displayValues = [1, 5, 10, 15, 25, 50, 100, 500, 1000, 5000, 10000];

  let fromDisplayValues = [];
  let toDisplayValues = [];

  for (i = 0; i < displayValues.length; i++) {
    fromDisplayValues.push(`${displayValues[i] * fromCurr} ${toCurrCode}`);
    toDisplayValues.push(`${displayValues[i] * toCurr} ${fromCurrCode}`);
  }

  let fromCurrTable = document.querySelector("#fromCurrTableID tbody");
  let toCurrTable = document.querySelector("#toCurrTableID tbody");

  {
    let fromCurrTableHead = document.querySelectorAll(".fromCurrTableHead");
    let fromCurrH3 = document.querySelector(".fromCurrH3");

    fromCurrH3.innerText = `Convert ${fromCurrCode} to ${toCurrCode}`;

    for (thead of fromCurrTableHead) {
      thead.innerHTML = `${fromCurrCode}`;
    }

    fromCurrTable.innerHTML = "";

    const length = Math.min(displayValues.length, fromDisplayValues.length);

    for (let i = 0; i < length; i++) {
      const row = document.createElement("tr");

      const cellDisplayValue = document.createElement("td");
      cellDisplayValue.textContent = `${displayValues[i]} ${fromCurrCode}`;
      row.appendChild(cellDisplayValue);

      const cellFromDisplayValue = document.createElement("td");
      cellFromDisplayValue.textContent = fromDisplayValues[i];
      row.appendChild(cellFromDisplayValue);

      fromCurrTable.appendChild(row);
    }
  }
  {
    let toCurrTableHead = document.querySelectorAll(".toCurrTableHead");
    let toCurrH3 = document.querySelector(".toCurrH3");

    toCurrH3.innerText = `Convert ${toCurrCode} to ${fromCurrCode}`;

    for (thead of toCurrTableHead) {
      thead.innerHTML = `${toCurrCode}`;
    }

    toCurrTable.innerHTML = "";

    const length = Math.min(displayValues.length, toDisplayValues.length);

    for (let i = 0; i < length; i++) {
      const row = document.createElement("tr");

      const cellDisplayValue = document.createElement("td");
      cellDisplayValue.textContent = `${displayValues[i]} ${toCurrCode}`;
      row.appendChild(cellDisplayValue);

      const cellFromDisplayValue = document.createElement("td");
      cellFromDisplayValue.textContent = toDisplayValues[i];
      row.appendChild(cellFromDisplayValue);

      toCurrTable.appendChild(row);
    }
  }
}

function isoCodeChanger() {
  let isoCodeDisplayer = document.querySelector(".inputISOCode");

  let fromCurrencyISOCode = currencySymbols[fromCurrency.value];

  if (fromCurrencyISOCode == undefined) {
    isoCodeDisplayer.innerText = "";
    document.querySelector("#userInput").style.paddingLeft = "8px";
  } else {
    isoCodeDisplayer.innerText = fromCurrencyISOCode;
    document.querySelector("#userInput").style.paddingLeft = "";
  }
}

convertButton.addEventListener("click", () => {
  exchangeRate();
});
