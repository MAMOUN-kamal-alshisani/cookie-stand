'use strict';

const OpenHours = ["6 am","7 am","8 am","9 am","10 am","11 am","12 pm","1 pm","2 pm","3 pm","4 pam","5 pam","6 pm","7 pm",];

const arrywithtotal=[
    "6 am",
    "7 am",
    "8 am",
    "9 am",
    "10 am",
    "11 am",
    "12 pm",
    "1 pm",
    "2 pm",
    "3 pm",
    "4 pam",
    "5 pam",
    "6 pm",
   "7 pm",
"dailytotal",
];

let Newlocations= [];
//random function
function randomiser(max,min){
return Math.floor(Math.random() *( max-min + 1) + min);
}


let Totaloftotal = [];
//constructor
function placeName(Location , MinCustomers , MaxCustomers , CookiesAvg ){

this.Location = Location;
this.MinCustomers = MinCustomers;
this.MaxCustomers = MaxCustomers;
this.CookiesAvg = CookiesAvg;
Totaloftotal.push(this);
this.CookiesEveryHour=[];
this.CustomersPerHour=[];
this.CookiesEveryDay= 0;

console.log(this);
Newlocations.push(Location);
this.placestotal=0;
}


placeName.prototype.theCustomersPerHour =function(){

for (let i=0; i<OpenHours.length;i++){

this.CustomersPerHour.push(randomiser(this.MaxCustomers , this.MinCustomers));
}

}




//calculate cookies everyhour
placeName.prototype.theCookiesEveryHour =function(){
for (let i=0; i<OpenHours.length; i++){
this.CookiesEveryHour.push(Math.floor(this.CookiesAvg * this.CustomersPerHour[i]));

this.CookiesEveryDay += this.CookiesEveryHour[i];

}
console.log(this.CookiesEveryHour);
}



//the parent and creating table
 let parent = document.getElementById('parent');

 let table=document.createElement('table');

parent.appendChild(table);

console.log(parent);




function tableheads(){
let tableRow= document.createElement('tr');

table.appendChild(tableRow);

let thead1=document.createElement('th');

tableRow.appendChild(thead1);

thead1.textContent ='locaton data';




for (let i = 0; i < arrywithtotal.length; i++) {
    let tableheads=document.createElement('th');
    tableRow.appendChild(tableheads); 
    tableheads.textContent=arrywithtotal[i];
}
}

tableheads();

  
placeName.prototype.rendering = function(){
    this.theCustomersPerHour();
      this.theCookiesEveryHour();
  let row2=document.createElement('tr');
  table.appendChild(row2);

  let table1data =document.createElement('td');
  row2.appendChild(table1data);
  table1data.textContent =this.Location;
  
  for (let i = 0; i < OpenHours.length; i++) {
     let datarows=document.createElement('td');
      row2.appendChild(datarows);
      datarows.textContent=this.CookiesEveryHour[i];
  }
  let totalRow=document.createElement('td');
 row2.appendChild(totalRow);
 totalRow.textContent=this.CookiesEveryDay;
}

for (let i = 0; i < Newlocations.length; i++) {
   Newlocations[i].theCustomersPerHour();
    Newlocations[i].theCookiesEveryHour();
    
}




let Seattle = new placeName ('Seattle' , 23 , 65 , 6.3 );

Seattle.rendering();
let Tokyo = new placeName ('Tokyo' , 3 , 24 , 1.2 );
Tokyo.rendering();
let Dubai = new placeName ('Dubai' , 11 , 38 , 3.7);
Dubai.rendering();
let Paris = new placeName ( 'Paris' , 20 , 38 , 2.3);
Paris.rendering();
let Lima = new placeName ('Lima' , 2 , 16 ,4.6);
Lima.rendering();



function lastrowqe(){
  let row3=document.createElement('tr');
  table.appendChild(row3);

  let t2head=document.createElement('th');
  row3.appendChild(t2head);

  t2head.textContent ='Total';

   let perdaytotal= 0;

  
  for (let i = 0 ; i<OpenHours.length; i++){
let perhour=0;
    for (let j = 0 ; j <Totaloftotal.length ; j++){
        perhour += Totaloftotal[j].CookiesEveryHour[i];
        perdaytotal+=Totaloftotal[j].CookiesEveryHour[i];
       



    }
    let totaldata=document.createElement('th');
    row3.appendChild(totaldata);
    totaldata.textContent=perhour;
   
}
let totaldata=document.createElement('th');
    row3.appendChild(totaldata);
    totaldata.textContent=perdaytotal;

}
lastrowqe();


function erase() {
    let befRow = table.rows.length;
    document.getElementById('table').deleteRow(befRow - 1);
  }


let listenform =document.getElementById('FORM');
listenform.addEventListener('submit',newform);



function newform(event) {
    event.preventDefault();

let lName=event.target.lName.value;

let miniCustomer=Number(event.target.miniCustomer.value);

let maxCust=Number(event.target.maxCust.value);

let avgcCUStOMER=Number(event.target.avgcCUStOMER.value);


let YourNewLoction = new placeName ( lName , miniCustomer , maxCust , avgcCUStOMER );

listenform.reset();
YourNewLoction.rendering();



for (let i = 0; i <Newlocations.length ; i++) {

Newlocations.theCookiesEveryHour();
 Newlocations.rendering();

 

}



}








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

