package algo_250220;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main_boj_10950_AplusBminus3_이은채 {
	/*
	 * 두 정수 A, B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
	 * 첫째줄에 tc의 개수 T
	 * 다음줄부터 각 줄에 A B가 주어진다.
	 * 각 tc 별로 A+B 출력하자.
	 * */
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int T = Integer.parseInt(br.readLine());
		for (int i = 0; i < T; i++) {
			StringTokenizer st = new StringTokenizer(br.readLine());
			int A = Integer.parseInt(st.nextToken());
			int B = Integer.parseInt(st.nextToken());
			
			System.out.println(A+B);
		}
	}

}
