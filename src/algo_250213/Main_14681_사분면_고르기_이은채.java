package algo_250213;

import java.util.Scanner;

public class Main_14681_사분면_고르기_이은채 {
	/*
	 * 점의 좌표를 입력받아 그 점이 어느 사분면에 속하는지 알아내는 프로그램
	 * x, y좌표는 모두 양수나 음수라고 가정
	 * 입: 첫 줄에 정수 x를
	 * 	  다음 줄에 정수 y를 입력받는다.
	 * 출: 점(x,y)의 사분면 번호를 출력한다.
	 * */
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int x = sc.nextInt();
		int y = sc.nextInt();
		
		if (x>0 && y>0) System.out.println(1);
		else if (x<0 && y>0) System.out.println(2);
		else if (x<0 && y<0) System.out.println(3);
		else System.out.println(4);

	}

}
