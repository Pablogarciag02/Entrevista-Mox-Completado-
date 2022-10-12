//Definining Api key
const apiKey = "c9fj7jqad3iampagitu0"

//Individual api requests defined to their respective variables.
const apple = "https://finnhub.io/api/v1/quote?symbol=AAPL&token=" + apiKey;
const tesla = "https://finnhub.io/api/v1/quote?symbol=TSLA&token=" + apiKey;
const nvidia = "https://finnhub.io/api/v1/quote?symbol=NVDA&token=" + apiKey;
const walmart = "https://finnhub.io/api/v1/quote?symbol=WMT&token=" + apiKey;


//Fetching apple and adding it to "APPL element"
fetch(apple)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data.c)

        let appleCurrentPrice = data.c

        document.getElementById("AAPL").innerHTML = appleCurrentPrice
    })
//

//Fetching tesla and adding it to "TSLA" element"
fetch(tesla)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data.c)

        let teslaCurrentPrice = data.c

        document.getElementById("TSLA").innerHTML = teslaCurrentPrice
    })
//

//Fetching walmart and adding it to "WMT" element"
fetch(walmart)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data.c)

        let walmartCurrentPrice = data.c

        document.getElementById("WMT").innerHTML = walmartCurrentPrice
    })
//

//Fetching Nvidia and adding it to "NVDA" element"
fetch(nvidia)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data.c)

        let nvidiaCurrentPrice = data.c

        document.getElementById("NVDA").innerHTML = nvidiaCurrentPrice
    })



