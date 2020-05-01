// from data.js
var tableData = data;

// YOUR CODE HERE!
// Put table on page
var tbody = d3.select("tbody");

tableData.forEach((entry) => {
    var row = tbody.append("tr");
    Object.entries(entry).forEach(([key,value])=>{
        row.append("td").text(value);
    });
});

//update table with button
var form = d3.select("#form");
var filterButton = d3.select("#filter-btn");
filterButton.on('click', updateTable);
form.on("submit",updateTable);

function updateTable() {
    d3.event.preventDefault();
    tableData = data;

    //get data
    var userDate = d3.select("#datetime").property("value");
    if(userDate != ""){
        tableData = tableData.filter(tableData => tableData.datetime === userDate)
    };
    
    var userCity = d3.select("#city").property("value");
    if(userCity != ""){
        tableData = tableData.filter(tableData => tableData.city === userCity)
    };
    
    var userState = d3.select("#state").property("value");
    if(userState != ""){
        tableData = tableData.filter(tableData => tableData.state === userState)
    };
    
    var userCountry = d3.select("#country").property("value");
    if(userCountry != ""){
        tableData = tableData.filter(tableData => tableData.country === userCountry)
    };
    
    var userShape = d3.select("#shape").property("value");
    if(userShape != ""){
        tableData = tableData.filter(tableData => tableData.shape === userShape)
    };

    //clear table
    tbody.selectAll("tr").remove();

    //insert new table
    tableData.forEach((entry) => {
        var row = tbody.append("tr");
        Object.entries(entry).forEach(([key,value])=>{
            row.append("td").text(value);
        });
    });
}

