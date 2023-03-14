function solution(numer1, denom1, numer2, denom2) {
    const get = (a,b) => {
        if(b === 0 ) return a 
        return get(b, a%b)
    }
    let donom = denom1 * denom2;
    let numer = (numer1 * denom2) + (numer2 * denom1)
    let devide = get(donom, numer)
    return [numer/devide,donom/devide]
}