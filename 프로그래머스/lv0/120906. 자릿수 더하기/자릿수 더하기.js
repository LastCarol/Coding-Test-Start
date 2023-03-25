function solution(n) {
    let result = 0;
    let m = String(n)
    for(let i = 0; i < m.length; i++){
        result += parseInt(m[i])
    }
    return result 
    
}