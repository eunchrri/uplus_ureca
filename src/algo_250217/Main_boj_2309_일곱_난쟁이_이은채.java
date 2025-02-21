package algo_250217;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main_boj_2309_일곱_난쟁이_이은채 {
	static int heights[] = new int[9];
	static int numbers7[] = new int[7];
	static boolean isFind = false;
	/**
	 * 
	 * @param depth   뽑은 수를 저장할 index 위치
	 * @param start 뽑을 수의 index 위치
	 */
	static void combi(int depth, int start) {
		if (isFind==true) {
			return;
		}
		if (depth==7) {
			int sum = 0;
			for (int num : numbers7) {
				sum += num;
			}
			if (sum == 100) {
				Arrays.sort(numbers7);
				for (int num : numbers7) {
					System.out.println(num);
				}
				isFind = true;
			}
			return;
		}
		for (int i = start; i < 9; i++) {
			numbers7[depth] = heights[i];
			combi(depth+1, i+1);
		}
		
	}
	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		for (int i = 0; i < 9; i++) {
			heights[i] = Integer.parseInt(br.readLine());
		}
		
		combi(0,0);

	}

}
