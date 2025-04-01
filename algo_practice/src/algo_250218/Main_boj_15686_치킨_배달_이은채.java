package algo_250218;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.StringTokenizer;

public class Main_boj_15686_치킨_배달_이은채 {
	/*
	 * 입:
	 * 	N, M 입력받기
	 * 	city 배열 입력받기
	 * 	houses, chickens 리스트 초기화
	 * 		- 집 좌표를 houses 리스트에 저장
	 * 		- 치킨집 좌표를 chickens 리스트에 저장
	 * 	
	 * 최소 치킨 거리 = 초기화
	 * 모든 치킨집 조합 (M개 선택) 반복:
	 * 	현재 조합을 선택한 치킨집 리스트로 선정
	 * 	현재 조합의 도시 치킨 거리 계산:
	 * 		전체 치킨 거리 = 0
	 * 		모든 집에 대해:
	 * 			최소 거리 = 무한대
	 * 			선택된 치킨집들 중에서 가장 가까운 거리 찾기
	 * 			최소 거리 합산
	 * 		도시의 치킨 거리 갱신
	 * 	최소 치킨 거리 갱신 ( 현재 조합의 도시 치킨 거리와 비교 )
	 * 
	 * 출:
	 * 	최소 치킨 거리 출력
	 * */
	
	static int N, M;
	static int[][] city;
	static List<int[]> houses = new ArrayList<>(); 		// 집 정보
	static List<int[]> chickens = new ArrayList<>();	// 치킨 집 정보
	static int minChickenDistance = Integer.MAX_VALUE;	// 최소 치킨 거리
	static int[][] dist;								// 거리 계산 배열
	static int[] selected;								// 선택된 치킨집 인덱스 저장
	// 거리 가장 가까운 치킨집 조합 계산
//	static void combi(int depth, int start, int[] selected) {
//		if (depth==M) {
//			
//			return;
//		}
//		for (int i = start; i < ; i++) {
//			
//		}
//	}
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		N = Integer.parseInt(st.nextToken());
		M = Integer.parseInt(st.nextToken());
		
		// 도시 정보 저장
		city = new int[N][M];
		
		for (int i = 0; i < N; i++) {
			st = new StringTokenizer(br.readLine());
			for (int j = 0; j < N; j++) {
				city[i][j] = Integer.parseInt(st.nextToken());
				if (city[i][j] == 1) {
					houses.add(new int[]{i, j});
				} else if (city[i][j] == 2){
					chickens.add(new int[]{i, j});
				}
			}
		}
		br.close();
//		System.out.println(city);
//		System.out.println(houses);
//		System.out.println(chickens);
		
//		List<int[]> selectedC = new ArrayList<>();
		
		// 거리계산부터 하자
		int hSize = houses.size();		// 집의 개수
		int cSize = chickens.size();		// 치킨집의 개수
		dist = new int[hSize][cSize];
		
		for (int i = 0; i < hSize; i++) {
			int[] h = houses.get(i); // 집 하나 뽑기: i 번째 집 좌표 가져오기
			for (int j = 0; j < cSize; j++) {
				int[] c = chickens.get(j);
				// 치킨 거리: (|x1 - x2| + |y1 - y2|) 구해서 dist[][]에 저장
				dist[i][j] = Math.abs(h[0] - c[0]) + Math.abs(h[1] - c[1]);
			}
		}
		
		selected = new int[M];
//		combi(0,0);
//		System.out.println(min);

	}
}
