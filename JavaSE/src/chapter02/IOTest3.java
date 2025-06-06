package chapter02;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.StringReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class IOTest3 {

	public static void main(String[] args) throws Exception{
		
		/*
		 * System.in은 기본적으로 keyboard 로 부터 입력받지만
		 * 다른 대사응로 부터 입력받을 경우 setIn(입력받을 대상) 함수로 설정한다.
		 * */
		
		
		BufferedReader br = new BufferedReader(new StringReader(input));
//		BufferedReader br  = new BufferedReader(new InputStreamReader(System.in));
		String line = br.readLine();
		
		/*
		 * split(구분자) : 구분자를 기준으로 데이터를 분리
		 * */
		String[] tokens = line.split("");		// 구분자를 제공하지 않았으므로 1개씩 조각낸다 
		System.out.println(Arrays.toString(tokens));
		
		String[] tokens2 = line.split(" ");
		System.out.println(Arrays.toString(tokens2));
		System.out.println(line);
		
		
		/*
		 * StringTokenizer(data, 구분자): 구분자를 기준으로 데이터를 분리 => 조금 더 빨라짐
		 * */
		
		StringTokenizer st = new StringTokenizer(line, " ");
		int n = 5;
		for (int i = 0; i < 5; i++) {
			System.out.println(Integer.parseInt(st.nextToken()));
		}
		
	}
	static String input = "10 9 8 11 5";
}

