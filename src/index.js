// import './css/styles.css';
// import Notiflix from 'notiflix';
// import debounce from 'lodash.debounce';
// // import CountriesApiService from './js/rest-countries';
// const DEBOUNCE_DELAY = 300;
// const input = document.querySelector('#search-box');
// const list = document.querySelector('.country-list');
// const countryInfo = document.querySelector('.country-info');
// // const countriesApiService = new CountriesApiService();

const { divide } = require("lodash");

// input.addEventListener('input', debounce(onSearch, 300));

// function onSearch(e) {
//   e.preventDefault();
//   const countryName = e.target.value.trim();

//   fetchCountries(countryName)
//     .then(data => createMarkup(data))
//     .catch(err => createErrorMessage(err));
// }

// function fetchCountries(country) {
//   const BASE_URL = 'https://restcountries.com/v3.1';
//   const endpoint = 'name';
//   const fields = 'fields=name,capital,population,flags,languages';

//   return fetch(`${BASE_URL}/${endpoint}/${country}?${fields}`).then(
//     response => {
//       if (!response.ok) {
//         throw new Error(response.statusText);
//       }
//       return response.json();
//     }
//   );
// }

// function createMarkup(name) {
//   const markup = name.map(
//     ({ name: countryName, capital, population, flags: { svg }, languages }) =>
//       `<li>
//         <img src="${svg}" alt="${countryName} width="50px"/>
//         <h2>${countryName}</h2>
//         <span>Capital: ${capital}</span>
//         <span>Population: ${population}</span>
//         <span>Languages: ${languages}</span>
//       </li>`
//   );
//   list.innerHTML = markup.join('');
//   // countryInfo.innerHTML = '';

//   // if (name.length === 1) {
//   //   countryInfo.innerHTML = info.join(' ');
//   //   list.innerHTML = '';
//   // } else if (name.length > 1 && name.length <= 10) {
//   //   list.innerHTML = markup.join(' ');
//   //   countryInfo.innerHTML = '';
//   // }
//   // if (name.length > 10) {
//   //   list.innerHTML = '';
//   //   Notify.success(
//   //     'Too many matches found. Please enter a more specific name.'
//   //   );
//   // }
// }

// function createErrorMessage(err) {
//   const fail = Notiflix.Notify.failure(
//     'Oops, there is no country with that name'
//   );
//   list.innerHTML = fail;
// }
// //  const url =
// //     'https://restcountries.com/v3.1/name/{country}?fields=name,capital,population,flags,languages'

function calculateTaxes(income) {
  if (income <= 1000) {
    return income * 0.02;
  }
  if (income >= 1001 && income <= 10000) {
    return income * 0.03;
  }
  if (income > 10000) {
    return income * 0.05;
  }
}

const filter = function (array, test) {
  const filteredArray = [];

  for (const el of array) {
    const passed = test(el);

    if (passed) {
      filteredArray.push(el);
    }
  }
  return filteredArray;
};

const callback = function (value) {
  return value >= 3;
};
console.log(filter([1, 2, 3, 4, 5, 6], callback));

const Car = function ({ brand, model, price } = {}) {
  // ф-я вызывается в контексте созданного обьекта, то есть в this записывается ссылка на него
  this.brand = brand;
  this.model = model
  this.price = price
  
}
// 1. Если ф-я вызывается через new, создается пустой обьект
const myCar = new Car({
  brand: 'Audi',
  model: 'Q3',
  price:35000
})
console.log(myCar)

const myCar2 = new Car({
  brand: 'BMW',
  model: 'X6',
  price:50000
})
console.log(myCar2)
Car.prototype.sayHi = function () {
  console.log('Hello')
}
myCar.sayHi()
Car.prototype.changePrice = function (newPrice) {
  this.price = newPrice
}
myCar.changePrice(10000)

class Hero {
  constructor(name = 'hero', xp = 0) {
    this.name = name
    this.xp = xp
  }

  gainXp(amount) {
    console.log(`${this.name} получает {amount} опыта`);
    this.xp += amount;
  }
}

class Warrior extends Hero{
  constructor(name, xp, weapon) {
    super(name, xp);
    this.weapon = weapon;
  }
}

const mango = new Warrior('mango', 1000, 'alebarda')
console.log(mango)

