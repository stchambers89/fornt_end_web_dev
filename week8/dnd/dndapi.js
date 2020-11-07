/*console.log('testing connection')


let firstFunction = function()
{
    return new Promise(function(resolve, reject)
    {
        resolve('this is working');
    })
    
}

let secondFunction = function(dataFromFirstFunction)
{
    return new Promise(function(resolve, reject)
    {
        resolve(dataFromFirstFunction + ' correctly');
    })
}

firstFunction().then(function(data)
{
    return secondFunction(data);
})
.then(function(data){
    console.log(data)
})
*/

/*fetch('https://www.dnd5eapi.co/api/spells')
    .then(function(response)
    {
        return (response.json());
    })
        .then(function(response)
        {
            console.log(response);
        });
*/
const coreURL = 'https://www.dnd5eapi.co/api/';
const spells = 'spells/'
const equipment = 'equipment/'
async function readApi(coreURL, enpoint)
{
    
    const response = await fetch(coreURL + enpoint);
    const data = await response.json();
    return data;
}

readApi(coreURL, spells).then(console.log);
readApi(coreURL, equipment).then(console.log);