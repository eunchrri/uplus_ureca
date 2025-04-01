package algo_250217;

import java.util.Iterator;
import java.util.Scanner;

public class Main_boj_10808_알파벳_개수_이은채 {
	/*
	 * 알파벳 소문자로만 이루어진 단어 S가 주어진다.
	 * 각 알파벳이 단어에 몇 개가 포함되어 있는지 구하는 프로그램 작성하기.
	 * 
	 * 출력: 단어에 포함되어 있는 a, b, c, .. 의 개수를 공백으로 구분해서 출력하자.
	 * 
	 * 아스키코드 값 이용하기.
	 * char		a: 97, b: 98, c: 99
	 * 
	 * charAt() 메서드
	 * 	char charAt(int index);
	 * */
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String word = sc.next();
		int[] alpha = new int[26];
		sc.close();
		
		for (int i = 0; i < alpha.length; i++) {
			char c = word.charAt(i);
			alpha[c - 97]++;
			System.out.print(alpha[i]+" ");
		}
		
	}

}
