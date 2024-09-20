function mergeSort(array){
    if (array.length == 1){
           return array;
    }
    
    let divideAt = Math.round(array.length / 2);
    let rightHalf = mergeSort(array.slice(divideAt));
    let leftHalf = mergeSort(array.slice(0 , divideAt));    
    // console.log([...leftHalf, ...rightHalf]);
    return backTogether(leftHalf, rightHalf);

}


function backTogether(leftHalf, rightHalf){
    if (leftHalf.length===0){
        return rightHalf;
    }
    if (rightHalf.length===0){
        return leftHalf;
    }
    
    if (leftHalf[0] < rightHalf[0]){
        return [leftHalf[0], ...backTogether(leftHalf.slice(1),rightHalf)];
    }
    else {
        return [rightHalf[0], ...backTogether(leftHalf, rightHalf.slice(1))];
    }
    
}


// mergeSort([0,3,2,8,5])

console.log(mergeSort([7,2,1,6,8,5,3,4]))
