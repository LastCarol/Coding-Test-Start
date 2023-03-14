function solution(numbers) {
    let Add = 0;
    for (let i = 0 ; i < numbers.length; i++){
        Add = Add + numbers[i]
    }
    return (Add/numbers.length)
}