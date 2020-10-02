/*******************************************************************************
* ---- Namespacing and object literal pettern -------
* So this is rather interesting and make a ton of sense. Name collisions will
* occur somewhere down the line, so you can group like functions within a
* object. The functions become methods of the object and you avoid naming
* colissions since you need to use the dot opperator to access the method.
* Almost creating your own namespace or mini library.  
* calculateTax() is a pretty generic name and could be used in other parts of a 
* program especially one that is used for a point of sale system. 
*******************************************************************************/



const carPurchase = 
{
    calculateTax(carPrice, tax)
    {
        return carPrice * tax;
    },

    addWarranty(warranty)
    {
        if(warranty)
        {
            grandTotal += carPrice * .02;
        }
    },

};

let carTotal = carPurchase.calculateTax(10000, .08);

/*******************************************************************************
* ---- JSON -------
* This makes much more sense since I have practiced PHP. In cs 213 I was
* confused about how it read the object, and un-did the object. Ah the
* softening lense of time. It litterally turns the object into a string with
* special characters within the string, you do this by using
* JSON.stringify(objectName); 
* When parsing a JSON string and it hits a special character such as
*  " or , or : the parser knows to create a new attribute and a value.
*
* My question is how does the parser know that an attribute is a nested object?
*******************************************************************************/


/*******************************************************************************
* ---- Function that generates a random number between two values (1, 12) -------
* 1- we take the high range and minus the low range = 11
* 2- calculate random decimal using random = .5 (for simplicity sake)
* 3- 11 * .5 = 5.5
* 4- 5.5 + 1 (we do this incase we have a 0.00000 as random to ensure its within the min range)
* 5- use floor method to round down to the nearest whole number Math.floor(6.5) = 6
* 6- return the random number. 
*******************************************************************************/

function randomRange(beginNumber, endNumber)
{
    return Math.floor(Math.random() * (endNumber - beginNumber) + beginNumber);
}