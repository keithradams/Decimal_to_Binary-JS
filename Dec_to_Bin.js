 //Dec to Bin

    let input = Number(prompt("Decimal to Binary Converter, enter a number"));

 // The isNaN() function determines whether a value is an illegal number (Not-a-Number).

    if (Number.isNaN(input))
   {
    alert("Invalid input, please enter a number.");
    return false;
      }
    else
   {
    alert("Binary = " +
               input.toString(2));
    return true;
      }
