package algo_250224;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

import javax.naming.spi.DirStateFactory.Result;

public class Main_boj_1987_알파벳_이은채 {
	/*
	 * 최소 & 가중치 x => BFS
	 * 최대? => 
	 * 알파벳 방문배열 생성
	 * result 최대 26 => 26이면 더이상 안가도 된다.
	 * 
	 * (0,0)부터 시작해서 상하좌우로 이동을 하는 좌표에서 이전에 지나온 알파벳은 지나갈 수 없다.
	 * map 배열에 [R][C]크기의 알파벳을 입력하여 2차원 배열을 생성
	 * (0,0)부터 DFS로 map 전체를 탐색하면서 visit 배열을 1차원 배열로 선언하여 중복 알파벳을 방문 하였는지 판단
	 * 중복된 알파벳을 발견하였다면 이동거리 갱신하고 리턴
	 * 다른 루트로 DFS 탐색하기 위해서 visit 배열 방문하지 않은 상태로 초기화
	 * 
	 * */
	static int R, C;
	static int result = 0;
	static char map[][];
	static boolean visited[];
	static int dr[] = {-1,1,0,0};
	static int dc[] = {0,0,-1,1};
	
	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		R = Integer.parseInt(st.nextToken());
		C = Integer.parseInt(st.nextToken());
		
		map = new char[R][C];
		visited = new boolean[26]; // abcd ... xyz : 알파벳 방문 여부 체크 총 26개
		
		for (int i = 0; i < R; i++) {
			String line = br.readLine();
			for (int j = 0; j < C; j++) {
				map[i][j] = line.charAt(j);
			}
		}
		visited[map[0][0] - 'A'] = true;		// 시작 위치 방문처리
		
		dfs(0,0,1);
		System.out.println(result);
		
	}
	
	static void dfs(int r, int c, int depth) {
		result = Math.max(result, depth);		// 최대 경로 길이 갱신
		
		for (int d = 0; d < 4; d++) {
			/*
			 * 다음 탐색할 위치 계산 => 현재 좌표 r, c에서 dr, dc 값을 더해
			 * 다음으로 이동할 좌표 nr, nc를 계산
			 * d == 0: 위로 이동 (r-1, c)
			 * d == 1: 아래로 이동 (r+1, c)
			 * d == 2: 왼쪽으로 이동 (r, c-1)
			 * d == 3: 오른쪽으로 이동 (r, c+1)
			 * */
			int nr = r + dr[d];
			int nc = c + dc[d];
			
			// 경계검사: 행의 유효범위 & 열의 유효범위
			if (nr >= 0 && nr < R && nc >= 0 && nc < C) {
				// 방문하지 않은 알파벳이라면
				if (!visited[map[nr][nc] - 'A']) {
					visited[map[nr][nc] - 'A'] = true;	// 방문처리 후 재귀 호출로 다음칸 이동
					dfs(nr, nc, depth+1);
					visited[map[nr][nc] - 'A'] = false;	// 백트래킹 처리
				}
			}
		}
	}

}
