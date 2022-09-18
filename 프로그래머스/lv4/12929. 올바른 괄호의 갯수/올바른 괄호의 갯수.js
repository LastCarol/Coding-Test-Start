function solution(n) {
    let answer = 0;
    let visited = Array(n * 2).fill(0);
    
    function isCorrect() {
        let stack = [];
        for (const x of visited) {
            if (x) stack.push(x);
            else if (stack.length) stack.pop();
            else return false;
        }
        
        return true;
    }    
    
    
    function dfs(L, start) {
        if (L === n) {
            answer += isCorrect() ? 1 : 0;
        }
        else {
            for (let i = start; i < n * 2; i++) {
                visited[i] = 1;
                dfs(L + 1, i + 1);
                visited[i] = 0;
            }
        }
    }
    dfs(0, 0);
    return answer;
}