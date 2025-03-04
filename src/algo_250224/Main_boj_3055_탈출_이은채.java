package algo_250224;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class Main_boj_3055_탈출_이은채 {
	
	static class Point {
		int x, y, time;
		char type;
		
		public Point (int x, int y, int time, char type) {
			this.x = x;
			this.y = y;
			this.time = time;
			this.type = type;
		}
	}
	
	static int R, C;
	static int[][] forest;
	static boolean[][] visited;
	static int[] dr = {-1,1,0,0};
	static int[] dc = {0,0,-1,1};
	
	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		R = Integer.parseInt(st.nextToken());
		C = Integer.parseInt(st.nextToken());
		
		forest = new int[R][C];
		visited = new boolean[R][C];
		
		Queue<Point> queue = new LinkedList<>();
		
		int startX = 0, startY = 0;
		
		for (int i = 0; i < R; i++) {
			String line = br.readLine();
			for (int j = 0; j < C; j++) {
				forest[i][j] = line.charAt(j);
				// 물 먼저 넣기
				if (forest[i][j] == '*') {
					queue.offer(new Point(i,j,0,'*'));
				} else if(forest[i][j] == 'S') {
					startX = i;
					startY = j;
				}
			}
		}
		
		// 고슴도치 다음 큐에 넣기
		queue.offer(new Point(startX, startY, 0, 'S'));
		visited[startX][startY] = true;
		
		int result = bfs(queue);
		
		System.out.println(result == -1?"KAKTUS":result);
	}
	
	static int bfs(Queue<Point> queue) {
		while(!queue.isEmpty()) {
			Point p = queue.poll();
			// s가 d에 도착했다면 시간 반환
			if (p.type == 'S' && forest[p.x][p.y] == 'D') {
				return p.time;
			}
			
			// 상하좌우 탐색
			for (int dir = 0; dir < 4; dir++) {
				int nx = p.x + dr[dir];
				int ny = p.y + dc[dir];
				
				if (nx >= 0 && nx < R && ny >= 0 && ny < C) {
					if (p.type == '*') {
						if (forest[nx][ny] == '.') {
							forest[nx][ny] = '*';
							queue.offer(new Point(nx, ny, p.time+1, '*'));
						}
					} else if (p.type == 'S') {
						if ((forest[nx][ny] == 'D'||forest[nx][ny] == '.') && !visited[nx][ny]) {
							visited[nx][ny] = true;
							queue.offer(new Point(nx, ny, p.time+1, 'S'));
						}
					}
				}
			}
			
		}
		return -1;
	}

}
