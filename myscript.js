var btc = document.getElementById("bitcoin");
var lit = document.getElementById("litecoin");
var dge = document.getElementById("dogecoin");



var settings ={
    "async": true,
    "crossDomain":true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cdogecoin&vs_currencies=usd", 
    "method":"GET",
    "headers":{} 
}

$.ajax(settings).done(function(response){

     btc.innerHTML = response.bitcoin.usd;
     lit.innerHTML = response.litecoin.usd;
     dge.innerHTML = response.dogecoin.usd;
     userVal.innerHTML = response.dogecoin.usd;


});
function greetings(form){
    
    var TestVar = form.inputbox.value.toLowerCase();

    if(TestVar == "dogecoin" || TestVar == "litecoin" || TestVar == "shitcoin" || TestVar == "ethereum" ||TestVar == "matic-network" || TestVar == "bitcoin"){
        //To Show Alerts
        alert ("Your Currency: " + TestVar);
        var ad = form.inputbox.value.toLowerCase();
        //document.getElementById("userInp").innerText = ad;
        
        //To append table
        
        var table = document.getElementById("myTable");
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = ad;  
        
        
        // To Show userCoin logo
        if(ad == "bitcoin")
           //document.getElementById("img4").src ="https://i.pinimg.com/474x/6c/87/c2/6c87c20c313ed8bff1b0378780dd7dc6.jpg";
           cell2.innerHTML = "<img src = 'https://i.pinimg.com/474x/6c/87/c2/6c87c20c313ed8bff1b0378780dd7dc6.jpg'>" ;
           
        if(ad == "dogecoin")
           //document.getElementById("img4").src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9duQxRa6WDtUgU0qQ2UbG3T84Dehx3sq6xWmv-4D85TPFijgNLdY3bNlFHP7YqdOVjKQ&usqp=CAU";
           cell2.innerHTML = "<img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9duQxRa6WDtUgU0qQ2UbG3T84Dehx3sq6xWmv-4D85TPFijgNLdY3bNlFHP7YqdOVjKQ&usqp=CAU'>" ;
        if(ad == "litecoin")
           //document.getElementById("img4").src ="https://imageio.forbes.com/specials-images/dam/imageserve/1019684371/960x0.jpg?format=jpg&width=960";
           cell2.innerHTML = "<img src = 'https://imageio.forbes.com/specials-images/dam/imageserve/1019684371/960x0.jpg?format=jpg&width=960'>" ;
        if(ad == "shitcoin")
           //document.getElementById("img4").src ="https://image.shutterstock.com/image-illustration/shit-smell-golden-digital-coin-260nw-1019085889.jpg";
           cell2.innerHTML = "<img src = 'https://image.shutterstock.com/image-illustration/shit-smell-golden-digital-coin-260nw-1019085889.jpg'>" ;
        if(ad == "ethereum")
           //document.getElementById("img4").src ="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1257px-Ethereum_logo_2014.svg.png";
           cell2.innerHTML = "<img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1257px-Ethereum_logo_2014.svg.png'>" ;
        if(ad == "matic-network")
           //document.getElementById("img4").src ="https://s3.coinmarketcap.com/static/img/portraits/621c22097aafe46422aa1161.png";
           cell2.innerHTML = "<img src = 'https://s3.coinmarketcap.com/static/img/portraits/621c22097aafe46422aa1161.png'>" ;
        // To Show userCoin price

        var userVal = document.getElementById("userCoin");
        var settings ={
            "async": true,
            "crossDomain":true,
            "url": "https:/api.coingecko.com/api/v3/simple/price?ids=shitcoin%2Cdogecoin%2Clitecoin%2Cbitcoin%2Cethereum%2Cmatic-network&vs_currencies=usd", 
            "method":"GET",
            "headers":{} 
        }
        
        $.ajax(settings).done(function(response){
        
            //userVal.innerHTML = response[ad].usd;
            cell3.innerHTML = "$ "+ response[ad].usd;
        
      });
    }
    else
        alert("Please Enter a valid Crypto 🥲");
}



