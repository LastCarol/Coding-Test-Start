function solution(age) {
    let base = ['a','b','c','d','e','f','g','h','i','j'];
    let result = ""
    let parseAge = String(age)
    for(let i = 0; i < parseAge.length; i++){
        result += base[parseAge[i]]
    }
    return result;
}