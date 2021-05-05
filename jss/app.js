'use strict';

let workhours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//MAKE COLUMN HEADER AS GLOBAL
let column= ['Name ' , '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily Location Total'];

// //MAIN FUNCTION
function Random(min, max) {

  return Math.floor(Math.random() * (max - min + 1) + min);
}

//MAIN CONSTRUCTORS
function City( locationName , minCustomers , maxCustomers, avgCookies) {
  this.locationName =locationName;
  this.minCustomers =minCustomers ;
  this.maxCustomers = maxCustomers ;
  this.avgCookies = avgCookies;
  this.numOfCookiesArr = [];
  this.CustomerPerHour=[];
  this.total = 0;
  this.totalPerHour = 0;

  City.allCity.push(this);
}

City.allCity = [];

City.prototype.CalcCustomerPerhour=function(){
for (let i = 0; i < workhours.length; i++) {
  this.CustomerPerHour.push(Random(this.minCustomers, this.maxCustomers));

}
}

City.prototype.getNumOfCookies = function () {
  for (let i = 0; i < workhours.length; i++) {
    let cookiesNum = Math.floor(Random(this.minCustomers ,this.maxCustomers) * this.avgCookies);
    this.numOfCookiesArr.push(cookiesNum);

    
    this.total += cookiesNum;

  }
};

let parent = document.getElementById('parent')
 let table = document.createElement('table');
  parent.appendChild(table);
  
  function header(){
  
  let tr1 = document.createElement('tr');
  table.appendChild(tr1);
  for (let i = 0; i < column.length; i++) {

    let th1 = document.createElement('th');
    tr1.appendChild(th1);
    th1.textContent = column[i];
  }
}
header();


//PROTOTYPE FOR RENDER
City.prototype.render = function () {
  const dataRow = document.createElement('tr');

  table.appendChild(dataRow);
  const td1 = document.createElement('td');
  dataRow.appendChild(td1);
  td1.textContent = this.locationName;

  for (let i = 0; i < workhours.length; i++) {
    const td2 = document.createElement('td');
    dataRow.appendChild(td2);
    td2.textContent = this.numOfCookiesArr[i];
  }
  const td3 = document.createElement('td');
  dataRow.appendChild(td3);
  td3.textContent = this.total;
};


//SEATTLE CITY
const seattle = new City('Seattle', 23, 65, 6.3, []);
seattle.getNumOfCookies();
seattle.render();
//TOKYO CITY
const tokyo = new City('Tokyo', 3, 24, 1.2, []);
tokyo.getNumOfCookies();
tokyo.render();
//DUBAI CITY
const dubai = new City('Dubai', 11, 38, 3.7, []);
dubai.getNumOfCookies();
dubai.render();
//PARIS CITY
const paris = new City('Paris', 20, 38, 2.3, []);
paris.getNumOfCookies();
paris.render();
//LIMA CITY
const lima = new City('Lima', 2, 16, 4.6, []);
lima.getNumOfCookies();
lima.render();

console.log(City.allCity);









/*


function random(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const tokyo = {
    location: 'tokyo',
    minCustomers: 3,
    maxCustomers: 24,
    avgCookies: 1.2,
    customersPerHour: [],
    cookiesPerHour: [],
    dailyTotal: 0,

// calculate a random number of customers every hour :
calcCustomersPerHour: function(){
for (let i=0; i<workhours.length; i++){

this.customersPerHour[i]=(random(this.minCustomers, this.maxCustomers));
}
},
calcCookiesPerHour:function(){
   for (let i=0;i<workhours.length;i++){
this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avgCookies));
this.dailyTotal+=this.cookiesPerHour[i]
}
},
renderfunction:function(){
let theparent=document.getElementById('parent');
console.log(theparent);

let storeName=document.createElement('h2');

theparent.appendChild(storeName);

storeName.textContent=this.location;


let unorderedlist = document.createElement('ul');
theparent.appendChild(unorderedlist);

for (let i = 0; i < workhours.length; i++) {
   let  listItem=document.createElement('li');
   unorderedlist.appendChild(listItem);
   listItem.textContent = `${workhours[i]}: ${this.cookiesPerHour[i]} cookies.`
}
let totalItem=document.createElement('li');
unorderedlist.appendChild(totalItem);
totalItem.textContent=`total ${this.dailyTotal} cookies`
}

}

console.log(tokyo);
tokyo.calcCustomersPerHour();
tokyo.calcCookiesPerHour();
tokyo.renderfunction();






function random(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const Dubai= {
    location: 'DUBAI',
    minCustomers: 11,
    maxCustomers: 38,
    avgCookies: 3.7,
    customersPerHour: [],
    cookiesPerHour: [],
    dailyTotal: 0,

// calculate a random number of customers every hour :
calcCustomersPerHour: function(){
for (let i=0; i<workhours.length; i++){

this.customersPerHour[i]=(random(this.minCustomers, this.maxCustomers));
}
},
calcCookiesPerHour:function(){
   for (let i=0;i<workhours.length;i++){
this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avgCookies));
this.dailyTotal+=this.cookiesPerHour[i]
}
},
renderfunction:function(){
let theparent=document.getElementById('parent');
console.log(theparent);

let storeName=document.createElement('h2');

theparent.appendChild(storeName);

storeName.textContent=this.location;


let unorderedlist = document.createElement('ul');
theparent.appendChild(unorderedlist);

for (let i = 0; i < workhours.length; i++) {
   let  listItem=document.createElement('li');
   unorderedlist.appendChild(listItem);
   listItem.textContent = `${workhours[i]}: ${this.cookiesPerHour[i]} cookies.`
}
let totalItem=document.createElement('li');
unorderedlist.appendChild(totalItem);
totalItem.textContent=`total ${this.dailyTotal} cookies`
}

}

console.log(Dubai);
Dubai.calcCustomersPerHour();
Dubai.calcCookiesPerHour();
Dubai.renderfunction();






function random(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const Paris= {
    location: 'Paris',
    minCustomers: 22,
    maxCustomers: 38,
    avgCookies: 2.3,
    customersPerHour: [],
    cookiesPerHour: [],
    dailyTotal: 0,

// calculate a random number of customers every hour :
calcCustomersPerHour: function(){
for (let i=0; i<workhours.length; i++){

this.customersPerHour[i]=(random(this.minCustomers, this.maxCustomers));
}
},
calcCookiesPerHour:function(){
   for (let i=0;i<workhours.length;i++){
this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avgCookies));
this.dailyTotal+=this.cookiesPerHour[i]
}
},
renderfunction:function(){
let theparent=document.getElementById('parent');
console.log(theparent);

let storeName=document.createElement('h2');

theparent.appendChild(storeName);

storeName.textContent=this.location;


let unorderedlist = document.createElement('ul');
theparent.appendChild(unorderedlist);

for (let i = 0; i < workhours.length; i++) {
   let  listItem=document.createElement('li');
   unorderedlist.appendChild(listItem);
   listItem.textContent = `${workhours[i]}: ${this.cookiesPerHour[i]} cookies.`
}
let totalItem=document.createElement('li');
unorderedlist.appendChild(totalItem);
totalItem.textContent=`total ${this.dailyTotal} cookies`
}

}

console.log(Paris);
    Paris.calcCustomersPerHour();
    Paris.calcCookiesPerHour();
Paris.renderfunction();




function random(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const Lima= {
    location: 'Lima',
    minCustomers: 2,
    maxCustomers: 16,
    avgCookies: 4.6,
    customersPerHour: [],
    cookiesPerHour: [],
    dailyTotal: 0,

// calculate a random number of customers every hour :
calcCustomersPerHour: function(){
for (let i=0; i<workhours.length; i++){

this.customersPerHour[i]=(random(this.minCustomers, this.maxCustomers));
}
},
calcCookiesPerHour:function(){
   for (let i=0;i<workhours.length;i++){
this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avgCookies));
this.dailyTotal+=this.cookiesPerHour[i]
}
},
renderfunction:function(){
let theparent=document.getElementById('parent');
console.log(theparent);

let storeName=document.createElement('h2');

theparent.appendChild(storeName);

storeName.textContent=this.location;


let unorderedlist = document.createElement('ul');
theparent.appendChild(unorderedlist);

for (let i = 0; i < workhours.length; i++) {
   let  listItem=document.createElement('li');
   unorderedlist.appendChild(listItem);
   listItem.textContent = `${workhours[i]}: ${this.cookiesPerHour[i]} cookies.`
}
let totalItem=document.createElement('li');
unorderedlist.appendChild(totalItem);
totalItem.textContent=`total ${this.dailyTotal} cookies`
}

}

console.log(Lima);
Lima.calcCustomersPerHour();
Lima.calcCookiesPerHour();
Lima.renderfunction();


*/
