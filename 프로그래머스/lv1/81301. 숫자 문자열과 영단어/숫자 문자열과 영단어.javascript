function solution(s) {
    let number = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let result = s
    for(let i = 0; i < number.length; i++) {
    let arr = result.split(number[i]);
    result = arr.join(i);
    }
    
    return Number(result);
}