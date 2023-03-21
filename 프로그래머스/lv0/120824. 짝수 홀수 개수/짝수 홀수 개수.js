function solution(num_list) {
    let result = [];
    let add = num_list.filter((it) => it % 2 === 0)
    result.push(add.length)
    let odd = num_list.filter((it) => it % 2 !==0)
    result.push(odd.length)
    return result
}