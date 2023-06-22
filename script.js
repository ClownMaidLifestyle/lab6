"use strict";
const table = document.getElementById("salesTable");
function Location(storeName, minCust, maxCust, avgSales, customersEachHour, cookiesEachHour, cookiesDaily){
    this.storeName = storeName;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgSales = avgSales;
    this.customersEachHour = customersEachHour;
    this.cookiesEachHour = cookiesEachHour;
    this.cookiesDaily = this.generatecookiesDaily();
    this.render();
}

Location.prototype.generatecookiesDaily = function(){
    for (let i = 0; i < this.cookiesEachHour.length; i++){
        this.cookiesEachHour[i] = parseInt(Math.random() * (this.maxCust - this.minCust) + this.minCust);
        this.cookiesEachHour[i] = parseInt(this.cookiesEachHour[i] * this.avgSales);
    }
}

Location.prototype.render = function(){
    console.log(table);
    const locationRow = document.createElement("tr");
    console.log(locationRow);
    table.appendChild(locationRow);
    locationRow.setAttribute("id",`${this.storeName}`);

    const storeHeader = document.createElement("th");
    storeHeader.textContent = `${this.storeName}`;
    locationRow.appendChild(storeHeader);

    let totaldaily = 0;
    for (let i = 0; i < this.cookiesEachHour.length; i++){
        let td = document.createElement("td");
        this.cookiesEachHour[i] = parseInt(Math.random() * (this.maxCust - this.minCust) + this.minCust);
        this.cookiesEachHour[i] = parseInt(this.cookiesEachHour[i] * this.avgSales);
        totaldaily = totaldaily + this.cookiesEachHour[i];
        td.textContent = `${this.cookiesEachHour[i]} cookies`;
        locationRow.appendChild(td);
    }
    let total = document.createElement("td");
    total.textContent = `${totaldaily} cookies`;
    locationRow.appendChild(total);

}

const newLocationForm = document.getElementById("form");

newLocationForm.addEventListener("submit", function (event){
    event.preventDefault();
    const locName = event.target.locName.value;
    const maxCust = event.target.maxCust.value;
    const minCust = event.target.minCust.value;
    const avgSales = event.target.minCust.value;

    const newKitten = new Location(locName, maxCust, minCust, avgSales, [0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
});

const Seattle = new Location("Seattle", 23, 65, 6.3, [0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
const Tokyo = new Location("Tokyo", 2, 24, 1.3, [0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
const Dubai = new Location("Dubai", 11, 38, 3.7, [0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
const Paris = new Location("Paris", 20, 38, 2.3, [0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
const Lima = new Location("Lima", 2, 16, 4.6, [0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0]);


/*function generate(location){
    const salesContainer=document.getElementById("salesContainer");
    console.log("bestie...");

    const article = document.createElement("article");
    salesContainer.appendChild(article);

    const h3 = document.createElement("h3");
    h3.textContent = location.storeName;
    article.appendChild(h3);

    const ul = document.createElement("ul");
    article.appendChild(ul);

    for (let i = 0; i < location.cookiesEachHour.length; i++){
        let li = document.createElement("li");
        let suffix = "am";
        let time = i + 6;
        location.cookiesEachHour[i] = parseInt(Math.random() * (location.maxCust - location.minCust) + location.minCust);
        location.cookiesEachHour[i] = parseInt(location.cookiesEachHour[i] * location.avgSales);
        console.log(li);
        if (time > 12){
            suffix = "pm";
            time = time - 12;
        }
        li.textContent = `${time}${suffix}: ${location.cookiesEachHour[i]} cookies`
        ul.appendChild(li);
    }
}*/
