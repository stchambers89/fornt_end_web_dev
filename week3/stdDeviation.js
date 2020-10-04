
var dataSet = [];
let dataSetAvg = [];

/*let data = document.getElementById("data");
wage.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) //checks whether the pressed key is "Enter"
    {   
        validate(e)
    }
}); */

function validateNumber()
{
    let input = parseFloat(document.getElementById("data").value);
    parseFloat(input);
    dataSet.push(input);
}

//function works with a pre-filled array.  will need to replace inside standard dev()


//function works removes last element
function removeData()
{
    if(Array.isArray(dataSet) && dataSet.length)
    {
        dataSet.pop();
        //showDataSet();
    }
    else
    {
        alert("No data to remove");
    }
}

function stdDeviation()
{
    //gather data from array
    const setLength = dataSet.length;
    let setMean = mean(); //works correctly. 
    let totalVariance = getVariance();
    let variance = squareVariance();
    

    //done and good
    //Part 1 Find mean of data set
    function mean()
    {
        let sum = dataSet.reduce((acc, val) => acc + val, 0);
        const avg = (sum / setLength);
        return avg;
    }

    function getVariance()
    {
    //manipulate each data point (Xi - U)^2
        for(let i = 0; i < setLength; i++)
        {
        //Math.pow(base, exponent)
            dataSetAvg[i] = Math.pow((dataSet[i] - setMean), 2);
            console.log(`Array element ${i} after set Averages and squared: ${dataSetAvg[i]}`)
        }

        //total data
        let total = 0;
        for(let j = 0; j < setLength; j++)
        {
            total += dataSetAvg[j];
        
        }
        return total;
    }

    //individual deviations / # of dataSet elements
    function squareVariance()
    {
        let calculation = (1/setLength) * totalVariance;
        /*let total = dataSetAvg.reduce((acc, val) => acc + val, 0);
        let total = 0;
        for(let i = 0; i < setLength; i++)
        {
            total += dataSet[i];
        }
        
        let variance = total//(1/setLength) * total;*/
        return calculation;
    }

    console.log(`calculated mean: ${setMean}`);
    console.log(`varaince : ${variance}`);
    let standardDev = Math.sqrt(variance);



    console.log(`Standard deviation of population: ${standardDev}`);

}
