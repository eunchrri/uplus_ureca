package chapter01;

public class BitOperateTest {

	public static void main(String[] args) {
		
		int d = 10;			// 10진수
		int b = 0b1000;		// 2진수
		int o = 010;		// 8진수
		int h = 0x10;		// 16진수
		
		System.out.println(b);
		System.out.println(o);
		System.out.println(h);
		
		// &	and : 연산하려는 두 비트가 모두 1일 때 1이고 나머지는 0
		// 			: 특정 위치에 1이 있는지 체크 용도로 사용, data & 0 => 0으로 초기화 하는 효과
		int a1 = 0b1000;
		int b1 = 0b0010;
		int c1 = 0b1110;
		System.out.println(Integer.toBinaryString(a1&b1));
		System.out.println(Integer.toBinaryString(a1&c1));
		System.out.println(Integer.toBinaryString(b1&c1));
		
		// 시간복잡도를 n으로 줄일 수 있다.
		// int는 최대 32개, long은 최대 64개 밖에 못쓰지만..
		// a b c d e f g
		int key	  = 0b1010010;
		int word1 = 0b1110010;
		int word2 = 0b1110100;
		
		System.out.println(Integer.toBinaryString(key&word1));
		System.out.println((key&word1) == key);
		System.out.println((key&word2) == key);
		
		
		// |	or 	: 두 비트가 모두 0일 때만 0, 나머지는 1
		// 			: 특정 위치에 1로 채우는 효과
		// 00000
		// k 번째에 1 추가 : 1<<k
		System.out.println(Integer.toBinaryString(a1|b1));
		System.out.println(Integer.toBinaryString(a1|c1));
		System.out.println(Integer.toBinaryString(b1|c1));
		
		
		/*
		 * shift : 비트를 이동시키는 연산자 
		 * data << 이동시킬 비트 수			지정한 수만큼 왼쪽으로 이동
		 * 								2^이동수 만큼 곱한 효과
		 * 
		 * data >> 이동시킬 비트 수			지정한 수만큼 오른쪽으로 이동
		 * 								2^이동수 만큼 나눈 효과
		 */
		
		System.out.println(b<<2);
		System.out.println(b>>2);
		
		// ^(xor) : 두 비트가 같으면 0 다르면 1 ==> 토글 효과
		
		int pw	 = 0b11001101;
		int salt = 0b10110011;
		int encoding = pw ^ salt;
		System.out.println(Integer.toBinaryString(encoding));
		System.out.println(Integer.toBinaryString(encoding^salt));
		
		// ~ : 비트 반전
		int p = 0b1100;									// 양수 12
		System.out.println(~p);
		System.out.println(Integer.toBinaryString(~p)); // 1의 보수
		
		int p2 = -12;
		System.out.println(Integer.toBinaryString(p2));	// 2의 보수 : 대부분의 컴퓨터는 1의보수+1 인 2의 보수를 사용한다.
		System.out.println(Integer.toBinaryString(~p2));
		

		//			     abcdefgh
		int checkbit = 0b00000000;
	}
}
