function solution(s) {
    let result = (s.split(" ").map((e) => parseInt(e))).sort((a,b) => a-b )
    return (String(result[0]) + " " + String(result[result.length-1]))
}