package algo_250217;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main_boj_1159_농구_경기_이은채 {
	/*
	 * 다음 경기 선발 명단을 작성해야 한다.
	 * 성의 첫글자가 같은 선수 5명을 선발하려고 한다.
	 * 성의 첫글자가 같은 선수가 5명 보다 적다면 다음 경기를 기권하려고 한다.
	 * 
	 * 내일 경기를 위해 뽑을 수 있는 성의 첫 글자를 모두 구하여라.
	 * 입: 첫째 줄 선수의 수 N(1<=N<=150)
	 * 	  다음 줄부터 N개의 줄에 각 선수의 성이 주어짐.(알파벳 소문자로 구성됨, 성 최대 30글자)
	 * 
	 * 출: 기권 할 경우에 "PREDAJA" (따옴표 없이)를 출력
	 *    선발 가능한 경우 가능한 성의 첫 글자를 사전 순으로 공백 없이 모두 출력.
	 *    
	 * 선수들의 이름들 입력받을 때 첫 글자는
	 * char c = name.charAt(0)을 이용해서 구할 수 있다. 
	 * */
	public static void main(String[] args) throws IOException{
		// TODO Auto-generated method stub
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int N = Integer.parseInt(br.readLine());
		int[] arr = new int[26];

//		선수들의 이름들 입력받을 때 첫 글자는 char c = name.charAt(0)을 이용해서 구할 수 있다. 
		// 입력값의 0번재 인덱스 값만 배열에 저장
		for (int i = 0; i < N; i++) {
			String lname = br.readLine();
			char c = lname.charAt(0);
			arr[c - 97]++;
		}
		
		// 선발 가능한 성의 첫글자 찾기
		StringBuilder sb = new StringBuilder();
		for (int i = 0; i < arr.length; i++) {
			if (arr[i] >= 5) {
				sb.append((char)(i+'a'));		// char 변환 후 저장
			}
		}
		
		// 결과 출력
		if (sb.length() > 0) {
			System.out.println(sb);
		} else {
			System.out.println("PREDAJA");
		}
	}

}
