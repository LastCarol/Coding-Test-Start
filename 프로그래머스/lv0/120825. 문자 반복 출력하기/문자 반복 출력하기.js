function solution(my_string, n) {
    let result = ""
    for (let i = 0 ; i < my_string.length; i++){
        for(let j = 0; j < n; j++){
            result += my_string[i]
        }
    }
    return result;
}