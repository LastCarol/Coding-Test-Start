function solution(x, n) {
    let answer = [];
    let firstKey = x;
    for(let i = 1; i <= n; i++){
        answer.push(firstKey);
        firstKey += x;
    }
    return answer;
}