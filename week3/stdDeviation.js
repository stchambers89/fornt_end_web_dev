function stdDeviation(...args)
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

}
