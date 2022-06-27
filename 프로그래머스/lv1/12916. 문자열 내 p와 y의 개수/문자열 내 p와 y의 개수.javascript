function solution(s){
    var answer = true;
    let a = s.toUpperCase();
    let pCount = 0;
    let yCount = 0;
    for(let i = 0; i < a.length; i++){
        if(a[i] === 'P'){
            pCount += 1;
        }else if(a[i] === 'Y'){
            yCount += 1;
        }
    }
    if(pCount === yCount){
        return true;
    }else{
        return false;
    }
}