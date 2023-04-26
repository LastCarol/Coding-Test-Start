function solution(arr, divisor) {
    let result = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % divisor === 0) {
            result.push(arr[i])
        }
    }
    result.sort((a,b) => {return a-b})
    if(result.length === 0) {
        return [-1]
    }else {
        return result 
    }
}