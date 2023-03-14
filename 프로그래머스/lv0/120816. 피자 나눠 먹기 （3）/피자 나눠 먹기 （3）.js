function solution(slice, n) {
    let result = 1
    while(true){
        if(result * slice >= n ) {
            break;
        }
        result += 1
    }
    return result
}