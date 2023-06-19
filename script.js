"use strict";

const seattle = {
    storeName: "Seattle",
    minCust: 23,
    maxCust: 65,
    avgSales: 6.3,
    customersEachHour: [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    cookiesEachHour: [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    cookiesDaily: 0,
};

console.log(seattle);

function generate(location){
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
}
