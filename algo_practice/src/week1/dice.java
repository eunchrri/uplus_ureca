package week1;

import java.util.Scanner;

public class dice {

	public static void main(String[] args) {
		// 1.입력
		Scanner sc = new Scanner(System.in);
		
		int a, b, c;
		a = sc.nextInt();
		b = sc.nextInt();
		c = sc.nextInt();
		sc.close(); // close();
		
		// 2.상금 계산 후 출력
		// 2-1. 같은 눈 없는 경우	=> 가장 큰 눈 * 100
		if(a!=b && b!=c && c!=a) {
			int max;
			if (a > b) {
				if (c > a) {	// c>a>b
					max = c;
				} else {		// a>(b,c)
					max = a;
				}
				
			} else {			// b>a
				if (c > b) {	// c>b>a
					max = c;
				} else {		// b>(a,c)
					max = b;
				}
			}
			System.out.println(max*100);
		}
		// 적어도 같은눈 두개 이상인 경우
		else {
			// 2-2. 같은 눈 3개인 경우	=> 10000 + 같은눈 * 1000
			if (a==b && a==c) {
				System.out.println(10000+a*1000);
			} else {
				// 2-3. 같은 눈 2개인 경우	=> 1000 + 같은눈 * 100
				if (a==b || a==c) {
					System.out.println(1000+a*100);
				} else {
					System.out.println(1000+b*100);
				}
			}
			
		}

	}

}
