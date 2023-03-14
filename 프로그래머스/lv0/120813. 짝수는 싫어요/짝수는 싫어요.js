function solution(n) {
    let count = 0
    let result = [];
    for (let i = 0; i <= n; i++){
        result.push(count)
        count ++
    }
    
    return result.filter((it) => it%2 !== 0);
}