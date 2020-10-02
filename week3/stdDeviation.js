
var dataSet = [];

/*let data = document.getElementById("data");
wage.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) //checks whether the pressed key is "Enter"
    {   
        validate(e)
    }
}); */

function validateNumber()
{
    let input = document.getElementById("data").value;
    parseFloat(input);
    dataSet.push(input);
    //alert(`added ${input}`);
   
    console.log(dataSet[0]);
    console.log(dataSet[1]);
    

    
    
}

function mean()
{
    let dataLength = dataSet.length();
    const sum = dataSet.reduce((a, b) => a + b, 0);
    const avg = (sum / dataLength);
    console.log(`The sum is: ${sum}. The average is: ${avg}.`);
}

 function removeData()
      {
        if(Array.isArray(dataset) && array.length)
        {
          dataSet.pop();
        }
        else
        {
          alert("No data to remove");
        }
      }

function showDataSet()
      {   
        const length = dataSet.length();
        for(let i =0; i < length; i++)
        {
          console.log(`${dataSet[i]}`);
        }
      }   

/*function stdDeviation(...args)
{
    const setLength = args.length;
    const mean = mean(args);
    let deviation = getDeviation(args);


    function mean(...values)
    {
        let total = 0;
        for(const value of values)
        {
            total += value;
        }
        return total/setLength;
    }

    
    //manipulates args index-mean^2
    for(let index = 0; index < setLength; i++)
    {
        args[i] = Math.pow((args[i] - mean), 2);
    }

    //adds manipulated elements and averages
    function getDeviation(...values)
    {
        for(const value of values)
        {
        total += value;
        let deviation = total / setLength;
        }
        return deviation;
    }

    let finalTotal = Math.sqrt(deviation);

}*/
