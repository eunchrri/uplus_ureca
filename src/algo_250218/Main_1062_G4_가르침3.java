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

public class Main_1062_G4_가르침3 {
	static int max;
	static int[] words;			//단어를 저장할 배열
	static int N;				//읽을 단어
	static int K;				//배울 문자 개수
	static int letters;			//배울 문자를 비트마스킹한다. 
	public static void main(String[] args) throws Exception{
		BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st= new StringTokenizer(in.readLine(), " ");
		N = Integer.parseInt(st.nextToken());
		K = Integer.parseInt(st.nextToken());
		words = new int[N];
		//          t     n    i     c a
//		letters = 0b10000010000100000101;
		letters |= 1<<'a'-'a';
		letters |= 1<<'c'-'a';
		letters |= 1<<'i'-'a';
		letters |= 1<<'n'-'a';
		letters |= 1<<'t'-'a';
		int len, bword;
		String word;
		for (int i = 0; i <N; i++) {
			word = in.readLine();
			len = word.length();
			bword = letters;				//  anta    tica에 대한 마스크 
			for (int j = 4; j <len-4; j++) {
				bword |= (1 <<(word.charAt(j)-'a'));
			}
			words[i] = bword;
		}
		
		combi(1,letters, 5);
		System.out.println(max);
	}
	private static void combi(int c, int mask, int cnt) {
		if(cnt == K) {
			check(mask);
			return;
		}
		if(c >25) return;
		
		//문자를 배우지 않을 경우
		combi(c+1, mask, cnt);     
		
		//문자를 배울 경우
		if((mask & (1<< c))  ==0) {	  //안 배운 문자면 
			mask |= (1<< c);
			combi(c+1, mask, cnt+1);
		}
	}
	private static void check(int mask) {
		int count = 0;
		for (int word : words) {
			if ((mask | word) == mask) {
				count++;
			}
		}
		max = Math.max(count, max);
	}
}
