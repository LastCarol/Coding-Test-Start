function solution(arr) {
    let add = 0;
    for(let i = 0; i < arr.length; i++){
        add += arr[i];
    }
    return add / arr.length;
}