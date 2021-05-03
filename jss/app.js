'use strict';
//the work hours array
const workhours=['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// random function
function random(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const Seattle = {
    location: 'Seattle',
    minCustomers: 23,
    maxCustomers: 65,
    avgCookies: 6.3,
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

console.log(Seattle);
Seattle.calcCustomersPerHour();
Seattle.calcCookiesPerHour();
Seattle.renderfunction();





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


