package algo_250218;

/**
3 16
antarctica
antahellotica
antacartica
 */
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main_1062_G4_가르침4 {
	static int max;
	static int[] words; // 단어를 저장할 배열
	static int N; // 읽을 단어
	static int K; // 배울 문자 개수
	static int letters; // 배울 문자를 비트마스킹한다.

	public static void main(String[] args) throws Exception {
		BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st= new StringTokenizer(in.readLine(), " ");
		N = Integer.parseInt(st.nextToken());
		K = Integer.parseInt(st.nextToken());
		words = new int[N];

//          t     n    i     c a
//		letters = 0b10000010000100000101;
		letters |= 1 << 'a' - 'a';
		letters |= 1 << 'c' - 'a';
		letters |= 1 << 'i' - 'a';
		letters |= 1 << 'n' - 'a';
		letters |= 1 << 't' - 'a';
		int len, bword;
		String word;
		for (int i = 0; i < N; i++) {
			word = in.readLine();
			len = word.length();
			bword = letters; // anta tica에 대한 마스크
			for (int j = 4; j < len - 4; j++) {
				bword |= (1 << (word.charAt(j) - 'a'));
			}
			words[i] = bword;
		}
		combi(5, 1, letters);// combine하여 나오는 경우의 수 분석 진행

		System.out.println(max); // 출력
	}

	static void combi(int cnt, int start, int mask) {
		if (cnt == K) {
			check(mask);
			return;
		}
		for (int i = start ; i <26; i++) { // 0 ~ 26
//			if(i == 'a'-'a') continue;
//			if(i == 'n'-'a') continue;
//			if(i == 't'-'a') continue;
//			if(i == 'i'-'a') continue;
//			if(i == 'c'-'a') continue;
			if((mask & (1<< i))  !=0) 	  //배운 문자면
				continue;
			combi(cnt + 1, i+1, mask | (1 << i));
			
		}
	}

	static void check(int mask) {
		int count = 0;
		for (int word : words) {
			if ((mask | word) == mask) { //(mask & word) == word
				count++;
			}
		}
		max = Math.max(count, max);
	}

}
