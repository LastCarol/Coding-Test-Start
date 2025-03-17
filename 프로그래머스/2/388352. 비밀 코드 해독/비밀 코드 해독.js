function solution(n, q, ans) {
    let count = 0;
    const dfs = (idx, arr) => {
        if (arr.length === 5) {
            for (let i = 0; i < q.length; i++) {
                const matchCount = q[i].filter(num => arr.includes(num)).length;
                if (matchCount !== ans[i]) return; // 조건 불일치 -> 조기 종료
            }
            count++; // 모든 조건 만족하면 카운트 증가
            return;
        }
        
        for (let i = idx; i <= n; i++) {
            dfs(i + 1, [...arr, i])
        }
    }
    dfs(1, []);
    return count;
}