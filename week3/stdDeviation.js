
let dataSet = [];

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
    function squareVariance()
    {
        let calculation = (1/setLength) * totalVariance;
        return calculation;
    }

    //console.log(`calculated mean: ${setMean}`);
    //console.log(`varaince : ${variance}`);
    let standardDev = Math.sqrt(variance);
    //console.log(`Standard deviation of population: ${standardDev}`);

    //Send it to the internet!
    document.getElementById("size").innerHTML =`Your group size is: ${setLength}`;
    document.getElementById("mean").innerHTML =`Your mean is: ${setMean}`;
    document.getElementById("popSD").innerHTML =`Your standard Deviation of a population is: ${standardDev}`;

}
