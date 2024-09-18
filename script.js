let dropdowns = document.querySelectorAll(".dropdownsContainer select");
let convertButton = document.querySelector(".convertButton");
let fromCurrency = document.querySelector("#fromDropdown");
let toCurrency = document.querySelector("#toDropdown");
let resultDisplayer = document.querySelector(".resultDisplayer");

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
  let apiUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies`;
  let userInput = document.querySelector("#userInput").value;

  userInputApiRequest = `${apiUrl}/${fromCurrency.value.toLowerCase()}.json`;
  let apiResponse = await fetch(userInputApiRequest);
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

  resultDisplayer.innerHTML = `
  <div class='mainResult'><div class='resultsFontSmall'>${userInput} ${fromCurrency.value} = </div> 
  ${finalResult} ${toCurrency.value}</div>
  <div class = 'valueOfFromCurrency'>1 ${fromCurrency.value} = ${rate} ${toCurrency.value}</div>
  <div  class = 'valueOfToCurrency'>1 ${toCurrency.value} = ${exchangeRateOfToCurrencytoFromCurrency} ${fromCurrency.value}</div>`;
};

convertButton.addEventListener("click", () => {
  exchangeRate();
});
