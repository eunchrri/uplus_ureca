package algo_250217;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main_boj_3040_백설공주와일곱난쟁이_이은채 {
	/*
	 * 일곱 난쟁이의 키의 합은 100
	 * 아홉 난쟁이 중 일곱 난쟁이를 찾는 프로그램을 작성하시오.
	 * 
	 * */
	static int numbers[] = new int[7]; // 7명을 저장할 배열
	static int heights[] = new int[9]; // 9명을 저장할 배열
	
	static void combi(int depth, int start) {
		if (depth==7) {
			int sum = 0;
			for (int num : numbers) sum += num;
			
			if (sum==100) {
				for (int num : numbers) {
					System.out.println(num);
				}
			}
			return;
		}
		for (int i = start; i < 9; i++) {
			numbers[depth] = heights[i];
			combi(depth+1, i+1);
		}
	}
	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		heights = new int[9];
		for (int i = 0; i < 9; i++) {
			heights[i] = Integer.parseInt(br.readLine());
		}
		
//		System.out.println(Arrays.toString(height));
		combi(0,0);
	}
}
