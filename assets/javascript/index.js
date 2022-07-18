function produceReport(){

    event.preventDefault();

    let data = [];

     data[0] = data["shed_A"] = parseInt(document.getElementById("shed_A").value);
     data[1] = data["shed_B"] = parseInt(document.getElementById("shed_B").value);
     data[2] = data["shed_C"] = parseInt(document.getElementById("shed_C").value);
     data[3] = data["shed_D"] = parseInt(document.getElementById("shed_D").value);


    let sumData = data.shed_A + data.shed_B + data.shed_C + data.shed_D;

    document.getElementById("daily").innerHTML += "<Br>"

    document.getElementById("daily").innerHTML += "<p>Your production in shed A is " + data.shed_A + " litres per day</p>";
    document.getElementById("daily").innerHTML += "<p>Your production in shed B is " + data.shed_B + " litres per day</p>";
    document.getElementById("daily").innerHTML += "<p>Your production in shed C is " + data.shed_C + " litres per day</p>";
    document.getElementById("daily").innerHTML += "<p>Your production in shed D is " + data.shed_D + " litres per day</p>";

    document.getElementById("daily").innerHTML += "<p>TOTAL PRODUCTION IN A ONE DAY is " + sumData + " litres per day</p>";
    
   

    dailyIncome = sumData * 45;


    document.getElementById("income-daily").innerHTML += "<hr>"

    document.getElementById("income-daily").innerHTML += "<p>Your total daily income is Ksh. " + dailyIncome + " </p>";

    document.getElementById("income-daily").innerHTML += "<hr>"

    weeklyIncome = dailyIncome * 7;

    document.getElementById("weekly").innerHTML += "<p>Your total weekly income is Ksh. " + weeklyIncome + " </p>";

    document.getElementById("weekly").innerHTML += "<hr>"

    document.getElementById("weekly").innerHTML += "<Br>"


    incomeJanuary = dailyIncome * 31;
    incomeFebruary = dailyIncome * 29;
    incomeMarch = dailyIncome * 31;
    incomeApril = dailyIncome * 30;
    incomeMay = dailyIncome * 31;
    incomeJune = dailyIncome * 30;
    incomeJuly = dailyIncome * 31;
    incomeAugust = dailyIncome * 31;
    incomeSeptember = dailyIncome * 30;
    incomeOctober = dailyIncome * 31;
    incomeNovember = dailyIncome * 30;
    incomeDecember = dailyIncome * 31;

     
    document.getElementById("monthly").innerHTML += "<p>  January is Ksh.: " + incomeJanuary + " </p>"
    document.getElementById("monthly").innerHTML += "<p>  February is Ksh.: " + incomeFebruary + " </p>"
    document.getElementById("monthly").innerHTML += "<p> March is Ksh. " + incomeMarch + " </p>"
    document.getElementById("monthly").innerHTML += "<p>  April is Ksh. " + incomeApril + " </p>"
    document.getElementById("monthly").innerHTML += "<p>  for May is Ksh. " + incomeMay + " </p>"
    document.getElementById("monthly").innerHTML += "<p>  June is Ksh. " + incomeJune + " </p>"
    document.getElementById("monthly2").innerHTML += "<p> July is Ksh. " + incomeJuly + " </p>"
    document.getElementById("monthly2").innerHTML += "<p>  August is Ksh. " + incomeAugust + " </p>"
    document.getElementById("monthly2").innerHTML += "<p> September is Ksh. " + incomeSeptember + " </p>"
    document.getElementById("monthly2").innerHTML += "<p>  October is Ksh. " + incomeOctober + " </p>"
    document.getElementById("monthly2").innerHTML += "<p> November is Ksh. " + incomeNovember + " </p>"
    document.getElementById("monthly2").innerHTML += "<p>  December is Ksh. " + incomeDecember + " </p>"


    document.getElementById("monthly").innerHTML += "<Br>"

    document.getElementById("monthly").innerHTML += "<hr>"
   
   


    incomeInLeapYear = dailyIncome * 366;
    document.getElementById("leap").innerHTML += "<p>Your total income in a leap year is Ksh. " + incomeInLeapYear + " </p>";

    document.getElementById("leap").innerHTML += "<hr>"

    document.getElementById("leap").innerHTML += "<Br>"


};

// RESET FUNCTION
function resetPage(){

    document.getElementById("daily").remove("innerHTML");
    location.reload();

};



