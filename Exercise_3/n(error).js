/**
 * Here stands what was written for
 /* To addition of numbers in CLI */

try{
    let add = 0, singleNumber = 0;

    //As first two place are with the node, position and then starts the numbers in the array.
    for (let i = 2; i < process.argv.length; i++){
        singleNumber = Number(process.argv[i]);


        // Instead of NaN shows with the messgae
        if (isNaN(singleNumber)){
            throw "its not a number";
        }

        add += singleNumber;
    }

    console.log(add);
} catch(err) {
    console.log(err);
}
