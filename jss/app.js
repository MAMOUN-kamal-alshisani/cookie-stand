'use strict';

const OpenHours = ["6 am","7 am","8 am","9 am","10 am","11 am","12 pm","1 pm","2 pm","3 pm","4 pam","5 pam","6 pm","7 pm",];
let places=[];
function randomiser(max,min){
return Math.floor(Math.random() *( max-min + 1) + min);
}


function placeName(Location , MinCustomers , MaxCustomers , CookiesAvg ){

this.Location = Location;
this.MinCustomers = MinCustomers;
this.MaxCustomers = MaxCustomers;
this.CookiesAvg = CookiesAvg;


this.CookiesEveryHour=[];
this.CustomersPerHour=[];

this.CookiesEveryDay= 0;
console.log(this);
places.push(this);
}


placeName.prototype.calcCustomersPerHour =function(){

for (let i=0; i<OpenHours.length;i++){

this.CustomersPerHour.push(randomiser(this.MaxCustomers,this.MinCustomers));
}
}


placeName.prototype.calcCookiesEveryHour =function(){
for (let i=0; i<OpenHours.length; i++){
this.CookiesEveryHour.push(Math.floor(this.CookiesAvg * this.CustomersPerHour[i]));

this.CookiesEveryDay += this.CookiesEveryHour[i];

}



}

let seattle=new placeName('seattle',23,65,6.3);
let tokyo=new placeName('tokyo',3,24,1.2);
let Dubai=new placeName('Dubai',11,38,3.7);
let Paris=new placeName('Paris',20,38,2.3);
let lima=new placeName('lima',2,16,4.6);
seattle.calcCustomersPerHour();
seattle.calcCookiesEveryHour();

tokyo.calcCustomersPerHour();
tokyo.calcCookiesEveryHour();

Dubai.calcCustomersPerHour();
Dubai.calcCookiesEveryHour();

Paris.calcCustomersPerHour();
Paris.calcCookiesEveryHour();

lima.calcCustomersPerHour();
lima.calcCookiesEveryHour();




let parent = document.getElementById('parent');
let table=document.createElement('table');
parent.appendChild(table);


console.log(parent);

function header()
{let copycat=["6 am","7 am","8 am","9 am","10 am","11 am","12 pm","1 pm","2 pm","3 pm","4 pam","5 pam","6 pm","7 pm","daily location total"];
let headers= document.createElement('tr');
table.appendChild(headers);
let th1=document.createElement('th');
headers.appendChild(th1);

th1.textContent ='xxx';

for(let i=0;i<=copycat.length;i++){
let tableth=document.createElement('th');
headers.appendChild(tableth);
tableth.textContent=copycat[i];
}

}
  
header();


placeName.prototype.render=function(){

let Raws = document.createElement('tr');
table.appendChild(Raws); 

let data=document.createElement('td');
Raws.appendChild(data);

data.textContent =this.Location;

let copycat=["6 am","7 am","8 am","9 am","10 am","11 am","12 pm","1 pm","2 pm","3 pm","4 pam","5 pam","6 pm","7 pm"];

for(let i=0;i<copycat.length;i++){
    let newtdElements=document.createElement('td');
    Raws.appendChild(newtdElements);
    newtdElements.textContent=this.CookiesEveryHour[i]


}
let locationtotal=document.createElement('td');
Raws.appendChild(locationtotal);

locationtotal.textContent=this.CookiesEveryDay;
}



for(let i=0;i<places.length;i++){
places[i].render();}






function thelastraw(){
  
    let lastRow =document.createElement('tr');
table.appendChild(lastRow);

let lastTh=document.createElement('th');
lastRow.appendChild(lastTh);
lastTh.textContent='totals';

let copycat=["6 am","7 am","8 am","9 am","10 am","11 am","12 pm","1 pm","2 pm","3 pm","4 pam","5 pam","6 pm","7 pm","111"];

for (let i =0; i<copycat.length;i++){
let totalperhour=0;
for(let x=0;x<places.length;x++){
    totalperhour +=places[x].CookiesEveryHour[i];}


    let lastThtotal=document.createElement('th');

    lastRow.appendChild(lastThtotal);
    lastThtotal.textContent=totalperhour;

}
}

thelastraw();






//places[i].calcCustomersPerHour();
//places[i].calcCookiesEveryHour();


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
