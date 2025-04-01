package algo_250224;

import java.util.Scanner;

public class Main_boj_2609_최대공약수와_최소공배수_이은채 {

	/*
	 * 두 자연수 입력받고 
	 * 첫줄에는 최대 공약수, 다음 줄에는 최소 공배수 출력하기
	 * 
	 * */
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int a = sc.nextInt();
		int b = sc.nextInt();
		
		System.out.println(gcd(a, b));
		System.out.println((a*b)/gcd(a,b));
		
	}
	
	static int gcd(int a, int b) {
		while (b != 0) {
			int temp = b;
			b = a % b;
			a = temp;
		}
		return a;
	}

}
