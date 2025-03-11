function solution(n, w, num) {
    let map = [];
    let temp = [];
    let direction = true;
    for (let i = 1; i <= n; ++i) {
        if (direction) {
            temp.push(i);
        } else {
            temp.unshift(i);
        }
        if (i === n) {
            map.push(temp);
            break;
        }
        if (parseInt(i % w) === 0) {
            map.push(temp);
            temp = [];
            direction = !direction;
        }
    }

    if (map[map.length - 1].length !== w) {
        let itemCnt = map[map.length - 1].length;

        if (direction) {
            let newLine = map[map.length - 1].concat(Array(w - itemCnt).fill(0));
            map[map.length - 1] = newLine;
        } else {
            let newLine = Array(w - itemCnt)
                .fill(0)
                .concat([...map[map.length - 1]]);
            map[map.length - 1] = newLine;
        }
    }

    let answer = 0;

    let row = 0,
        column = 0;
    for (let r = 0; r < map.length; ++r) {
        for (let c = 0; c < w; ++c) {
            if (map[r][c] === num) {
                row = r;
                column = c;
            }
        }
    }

    while (1) {
        if (map[row] && map[row][column]) {
            ++answer;
            ++row;
        } else {
            break;
        }
    }

    return answer;
}