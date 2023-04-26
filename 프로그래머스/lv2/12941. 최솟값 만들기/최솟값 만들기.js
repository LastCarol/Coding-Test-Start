function solution(A,B){
    let A1 = A.sort((a,b) => a-b)
    let B1 = B.sort((a,b) => b-a)
    let result = 0
    let ADD = 0;
    
    for(let i = 0; i< A1.length; i++){
        ADD = A1[i] * B1[i]
        result += ADD
    }
    
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log(result)

    return result

}