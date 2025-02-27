function solution(schedules, timelogs, startday) {
    let answer = 0;
    for (let i = 0; i < schedules.length; i = i + 1) {
        let goal = schedules[i] + 10;
        if (goal % 100 >= 60) {
            goal += 100;
            goal -= 60;
        }

        let cnt = 0;
        for (let j = 0; j < 7; j = j + 1) {
            let ref = j + startday;
            if (ref % 7 === 0 || ref % 7 === 6) {
                continue;
            }
            if (goal < timelogs[i][j]) {
                break;
            }
            ++cnt;
        }

        if (cnt === 5) {
            ++answer;
        }
    }

    return answer;
}