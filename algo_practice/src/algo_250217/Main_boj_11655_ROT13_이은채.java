package algo_250217;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main_boj_11655_ROT13_이은채 {
	/*
	 * ROT13은 카이사르 암호의 일종으로 영어 알파벳을 13글자씩 밀어서 만든다.
	 * 문자열이 주어졌을 때, 
	 * "ROT13"으로 암호화한 다음 출력하는 프로그램을 작성하시오.
	 * 
	 * 입: 첫째 줄에 알파벳 대문자, 소문자, 공백, 숫자로만 이루어진 문자열 S가 주어진다.
	 * 	  S의 길이는 100을 넘지 않는다.
	 * 
	 * 출: 첫째 줄에 S를 ROT13으로 암호화한 내용을 출력
	 * 
	 * */
	public static void main(String[] args) throws IOException{
		// TODO Auto-generated method stub
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String s = new String(br.readLine());
		StringBuilder sb = new StringBuilder();
		
		for (int i = 0; i < s.length(); i++) {
			char c = s.charAt(i);
			// 대문자 변환
			if (c >= 'A' && c <= 'Z') {
				c = (char)('A' + (c-'A'+13)%26);
			} else if (c >= 'a' && c <= 'z'){
				// 소문자 변환
				c = (char) ('a' + (c - 'a' + 13) % 26);
			}
			// 기타 문자 처리: 숫자, 공백은 변환하지 않고 그대로 유지
			sb.append(c);
		}
		
		// 출력
		System.out.println(sb.toString());
		
	}

}
