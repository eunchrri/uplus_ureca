package algo_250213;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main_11382_꼬마_정민_이은채 {
	// a + b + c를 구하여라
	/*
	 * 공백 사이로 세 개의 수를 입력받아
	 * a+b+c 하자
	 * */

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		long a = Long.parseLong(st.nextToken());
		long b = Long.parseLong(st.nextToken());
		long c = Long.parseLong(st.nextToken());
		br.close();
		
		System.out.println(a+b+c);
	}

}
