async function fetchAPI(country1,country2,country3){
    try{
        const res1 = await fetch(`https://restcountries.com/v3.1/name/${country1}`)
        const res2 = await fetch(`https://restcountries.com/v3.1/name/${country2}`)
        const res3 = await fetch(`https://restcountries.com/v3.1/name/${country3}`)
        
        const data1 = await res1.json()
        const data2 = await res2.json()
        const data3 = await res3.json()
        console.log(data1[0].capital[0]);
        console.log(data2[0].capital[0]);
        console.log(data3[0].capital[0]);
        return "Done with fetchAPI"
    } catch(err){
        console.log(err);
        throw new Error("Custom Error")
    }
}


fetchAPI("canada", "germany", "russia")