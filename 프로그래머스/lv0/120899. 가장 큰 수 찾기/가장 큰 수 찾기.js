function solution(array) {
    
    let bigNum = Math.max(...array);
    let bigNumIndex = array.indexOf(Math.max(...array));

    
    let answer = [bigNum, bigNumIndex];
    
    return answer;
}