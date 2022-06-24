function solution(numbers) {
    let answer = [];
    for(let i = 0; i < numbers.length; i++){
        for(let j = i+1; j < numbers.length; j++){
            answer.push(numbers[i] + numbers[j])
        }
    }
    let result = answer.filter((e, i) => answer.indexOf(e) === i);
    return result.sort(function (a,b){
        return a-b;
    });
}