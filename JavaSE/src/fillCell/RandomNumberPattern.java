package fillCell;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.Scanner;

/**
 * 가로, 세로의 길이가 N인 N x N 정사각 행렬이 있다. 
 * 이 행렬의 각각의 값으로서 0에서 9 사이의 수가 무작위로 넣어진다고 하자. 
 * 이 때 그 행렬 내에서 주위를 둘러싸고 있는 다른 모든 수들 보다 
 * 큰 수와 작은 수가 각각 몇 개인지를 구하는 프로그램을 작성하여라
 * 
 * [제한 조건]
 * 1. N은 3 이상 50 이하의 정수이다.
 * 2. 행렬의 가장자리에 있는 수는 8개의 수로 둘러싸여 있지 않으므로
 *    "주위를 둘러싸고 있는 다른 모든 수들보다 큰 수, 혹은 작은 수"가 될 수 없다.
 * [입력]
 * 입력은 다음과 같이 구성되어 있다.
 * 첫 번째 줄에는 테스트 케이스의 개수 T가 주어진다.
 * 그 다음 T 개의 테스트 케이스가 차례로 주어진다. 
 * 각 테스트 케이스는 다음과 같이 구성 되어 있다.
 *    첫 줄에 정 사각 행렬의 크기 N이 주어진다. 
 *    그 다음 N 줄에 걸쳐 정 사각 행렬의 각 행의 값이 순서대로 주어진다. 
 * [출력]
 * 각 줄은 #x로 시작하고 (x는 테스트 케이스 번호) 공백을 하나 둔 다음, 
 * 문제에서 요구한 큰 수의 개수, 
 * 그리고 작은 수의 개수를 공백을 두어 차례로 출력한다. 
 *
 * [결과]
 * #1 6 4
 * #2 1 1
 */
public class RandomNumberPattern {
	static int N, Answer1, Answer2;
	public static void main(String[] args) throws FileNotFoundException {
//	1. 파일에서 입력 읽기
//		1-1. 파일을 열어서 모든 줄을 읽어 리스트로 저장
		System.setIn(new FileInputStream("src/fillCell/RandomNumberPattern.txt"));
		Scanner sc = new Scanner(System.in);
//		1-2. 첫 번째 줄에서 테스트 케이스 개수 T를 가져옴
		int T = sc.nextInt();
		for (int test_case = 1; test_case <=T; test_case++) {
			N = sc.nextInt();
			
		//입력 처리
//		2. 테스트 케이스 반복 (T번 수행)
//			2-1. N 값을 읽고, 정사각 행렬을 저장할 리스트 초기화
			int matrix[][] = new int[N][N];
//			2-2. N개의 행을 읽어 리스트(행렬)로 변환하여 저장
			for (int i = 0; i < N; i++) {
				for (int j = 0; j <N; j++) {
					matrix[i][j] = sc.nextInt();
				}
			}
			
//		3. 큰 수와 작은 수 개수 계산
//			3-1. big = 0, small = 0 초기화
			int big=0;
			int small=0;
			int d = 8, nr=0, nc=0;
//			3-2. 8방향 이동을 위한 방향 벡터 설정 (상, 하, 좌, 우, 대각선 4방향)
			int[] dr = {-1, 1, 0, 0, -1, -1, 1, 1};
			int[] dc = {0, 0, -1, 1, -1, 1, -1, 1};
//			3-3. 행렬을 탐색하면서 가장자리를 제외한 내부 원소들 검사:
//			3-3-1. 현재 위치 (i, j)의 숫자를 가져오기
			for (int r = 1; r < N-1; r++) {
//			    3-3-2. 현재 숫자와 8방향의 이웃 숫자를 비교
				for (int c = 1; c < N-1; c++) {
					int count_big=0, count_small=0;
					for (int i = 0; i < d; i++) {
						nr = r+dr[i];
						nc = c+dc[i];
	//			      - 현재 숫자가 모든 이웃보다 크면 count_high 증가
						if(matrix[nr][nc] < matrix[r][c])
							count_big++;
	//			      - 현재 숫자가 모든 이웃보다 작으면 count_low 증가
						if(matrix[nr][nc] > matrix[r][c])
							count_small++;
					}
					//큰수라면
					if(count_big==8)
						big++;
					//작은수라면
					if(count_small==8)
						small++;
				}
				
			}

//			4. 결과 출력
//			   1. 각 테스트 케이스의 결과를 "#x Answer1 Answer2" 형식으로 저장
//			   2. 모든 결과를 출력
			System.out.println("#"+test_case+" "+big+" "+small);
		}
	}
}







