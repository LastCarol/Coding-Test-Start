function solution(money) {
    let Perchace = parseInt(money/5500)
    let changeMoney = money - (5500 * Perchace)
    
    return [Perchace, changeMoney]
}