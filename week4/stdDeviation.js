
let dataSet = [];
const dataInput = document.querySelector("#data");

dataInput.addEventListener('keypress', function (e) 
{
    if (e.key === 'Enter') {
        addNumber();
      }
  });

//Add's number to data set, clears old info, and refocuses for new info
function addNumber()
{
    let input = parseFloat(document.getElementById("data").value);    
    dataSet.push(input);
    for(item in dataSet)
    {
        document.getElementById("numberList").innerHTML = `${dataSet}`;
        document.getElementById('data').value = '';
        document.getElementById("data").focus();
    }
}

//function works removes last element
function removeData()
{
    if(Array.isArray(dataSet) && dataSet.length)
    {
        dataSet.pop();
        for(item in dataSet)
        {
            document.getElementById("numberList").innerHTML = `${dataSet}`;
        }
    }
    else
    {
        document.getElementById("numberList").innerHTML = ``;
        alert("No data to remove"); 
    }
}

function stdDeviation()
{
    //gather data from array
    const setLength = dataSet.length;
    let setMean = mean(); //works correctly. 
    let totalVariance = getVariance();
    let populationSD = populationVariance();
    let sampleSD = sampleVariance();
    
    //Part 1 Find mean of data set
    function mean()
    {
        let sum = dataSet.reduce((acc, val) => acc + val, 0);
        const avg = (sum / setLength);
        return avg;
    }

    function getVariance()
    {
        let total = 0;
        //manipulate each data point (Xi - U)^2
        for(let i = 0; i < setLength; i++)
        {
            let variance = Math.pow((dataSet[i] - setMean), 2);
            total += variance;
        }
        
        return total;
    }

    //individual deviations / # of dataSet elements
    function populationVariance()
    {
        let calculation = (1/setLength) * totalVariance;
        let squaredPopulation = Math.sqrt(calculation)
        return squaredPopulation;
    }

    function sampleVariance()
    {
        let calculation = (1/(setLength - 1)) * totalVariance;
        let squaredSample = Math.sqrt(calculation)
        return squaredSample;
    }

    //console.log(`calculated mean: ${setMean}`);
    //console.log(`varaince : ${variance}`);
    //let standardDev = Math.sqrt(variance);
    //console.log(`Standard deviation of population: ${standardDev}`);

    //Send it to the internet!
    document.getElementById("size").innerHTML =`Your group size is: ${setLength}`;
    document.getElementById("mean").innerHTML =`Your mean is: ${setMean}`;
    document.getElementById("popSD").innerHTML =`Your standard Deviation of a population is: ${populationSD}`;
    document.getElementById("sampleSD").innerHTML =`Your estimated standard Deviation of a sample size is: ${sampleSD}`;

}
