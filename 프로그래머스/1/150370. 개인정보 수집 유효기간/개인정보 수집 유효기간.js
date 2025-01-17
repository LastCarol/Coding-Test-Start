function solution(today, terms, privacies) {
    today = new Date(today.replace(/[.]/g,"-"))
    
    const convertedTerms = convertArrayToObject(terms)
 
    return privacies.reduce((acc,currentPrivacy,index) => {
        const expiryDate = getExpirationDate(currentPrivacy, convertedTerms)
        if(isExpired(expiryDate, today)) acc.push(index + 1)
        return acc
    },[])
}
 
function convertArrayToObject(terms) {
    return terms.reduce((acc, term) => {
        const [type, month] = term.split(" ")
        acc[type] = month
        return acc
    },{})
}
 
function getExpirationDate(currentPrivacy, convertedTerms) {
    const [date, type] = currentPrivacy.split(" ")
    const joinDate = new Date(date.replace(/[.]/g,"-"))
        joinDate.setMonth(joinDate.getMonth() + +convertedTerms[type])
        return joinDate
}
 
function isExpired(expiryDate, today) {
    return expiryDate <= today 
}