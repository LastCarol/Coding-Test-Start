#include <iostream>
#include <algorithm>
using namespace std;

int N, W;
int cost[2][10004];
int a[10004], b[10004], c[10004];
void expand() {
	if (cost[0][0] + cost[1][0] <= W) {
		a[0] = b[0] = c[0] = 1;
	}
	else {
		a[0] = 2;
		b[0] = c[0] = 1;
	}
	for (int i = 1; i < N; i++) {
		// i번째 칸에 놓는 방법을 해결한다.
		// i-1까지의 값은 최신임을 보장한다.

		//기존 열에서 두개 그대로 놓는 경우
		a[i] = a[i - 1] + 2;

		//하나만 달랑 놓는 경우
		b[i] = c[i] = a[i - 1] + 1;

		//위로 가로 하나 놓는 경우
		if (cost[0][i] + cost[0][i - 1] <= W) {
			b[i] = min(b[i], c[i - 1] + 1);
		}

		//아래로 가로 하나 놓는 경우
		if (cost[1][i] + cost[1][i - 1] <= W) {
			c[i] = min(c[i], b[i - 1] + 1);
		}

		//하나만 달랑 다시 놓는 경우
		a[i] = min(a[i], b[i] + 1);
		a[i] = min(a[i], c[i] + 1);
		
		//세로로 놓는 경우
		if (cost[0][i] + cost[1][i] <= W) {
			a[i] = min(a[i], a[i - 1] + 1);
		}
		//가로로 두개 놓는 경우
		if (cost[0][i] + cost[0][i - 1] <= W && cost[1][i] + cost[1][i - 1] <= W) {
			if (i >= 2)
				a[i] = min(a[i], a[i - 2] + 2);
			else
				a[i] = min(a[i], 2);
		}
	}

}
void solve() {
	cin >> N >> W;
	for (int i = 0; i < 2; i++) {
		for (int j = 0; j < N; j++) {
			cin >> cost[i][j];
		}
	}
	int ans;

	expand();
	//cout << "교차 없는 경우 : ";
	ans = a[N - 1];
	//cout << a[N - 1] << endl;

	if (N > 1) {
		//아래쪽 라인 교차 있는 경우
		if (cost[1][0] + cost[1][N - 1] <= W) { 
			int tmp1 = cost[1][0];
			int tmp2 = cost[1][N - 1];
			cost[1][0] = cost[1][N - 1] = W;
			expand();
			//cout << "아래 교차있는 경우 : ";
			//cout << b[N - 1] << endl;
			ans = min(ans, b[N - 1]);
			cost[1][0] = tmp1;
			cost[1][N - 1] = tmp2;
		}
		if (cost[0][0] + cost[0][N - 1] <= W) {
			int tmp1 = cost[0][0];
			int tmp2 = cost[0][N - 1];
			cost[0][0] = cost[0][N - 1] = W;
			expand();
			//cout << "위 교차 있는 경우 : ";
			//cout << a[N - 1] << endl;
			ans = min(ans, c[N - 1]);
			cost[0][0] = tmp1;
			cost[0][N - 1] = tmp2;
		}
		if (cost[0][0] + cost[0][N - 1] <= W && cost[1][0] + cost[1][N - 1] <= W) {
			int tmp1 = cost[0][0];
			int tmp2 = cost[0][N - 1];
			int tmp3 = cost[1][0];
			int tmp4 = cost[1][N - 1];
			cost[1][0] = cost[1][N - 1] = W;
			cost[0][0] = cost[0][N - 1] = W;
			expand();
			//cout << "위 아래 둘다 교차 있는 경우 : ";
			//cout << a[N - 2] << endl;
			ans = min(ans, a[N - 2]);
			cost[0][0] = tmp1;
			cost[0][N - 1] = tmp2;
			cost[1][0] = tmp3;
			cost[1][N - 1] = tmp4;

		}
	}
	cout << ans << endl;

}
int main() {
	int tc; cin >> tc;
	while (tc--) {
		solve();
	}
}