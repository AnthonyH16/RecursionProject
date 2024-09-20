function fibonacci(n){
    let fibArray = [] ;
    for( let i=0 ; i < n ; i++){
        if(i == 0){
        fibArray.push(i)
        }
        // else if (i > 0 && fibArray.length < 2){
        else if (i ===1){
            fibArray.push(i);            
        }
        else{
            fibArray.push(fibArray[i-1] + fibArray[i-2]);
        }
    }
    console.log(fibArray);
    return fibArray ;
    
}

function fibonacciRecursion(n){
    console.log("This was printed recursively");

    if (n === 0 ){
        return [];
    }
    if (n=== 1){
        return [0];
    }
    else if (n===2){
        return [0, 1];
    }
    else{
        let fibArray = fibonacciRecursion(n -1);
        fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
        console.log(fibArray)
        return fibArray
    }
}

fibonacci(8);
fibonacciRecursion(9);

