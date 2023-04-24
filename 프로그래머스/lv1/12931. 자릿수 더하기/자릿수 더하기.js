function solution(n)
{
    let result = n.toString()
    let sum = 0;
    for(let i = 0; i < result.length; i++){
        sum += parseInt(result[i]);
    }
    return sum
}