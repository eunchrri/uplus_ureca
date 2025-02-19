package algo_250218;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main_1062_G4_가르침 {
	static int max;
	static char[][] words;		//단어를 저장할 배열
	static int N;				//읽을 단어
	static int K;				//배울 문자 개수
//	static boolean[] letters= {	 true,false,true
//								,false,false,false
//								,false,false,true
//								,false,false,false
//								,false,true,false
//								,false,false,false
//								,false,true,false
//								,false,false,false
//								,false,false
//								};
	static boolean[] letters=new boolean[26];
	public static void main(String[] args) throws Exception{
		BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st= new StringTokenizer(in.readLine(), " ");
		N = Integer.parseInt(st.nextToken());
		K = Integer.parseInt(st.nextToken());
		words = new char[N][];
		letters['a' - 'a'] = true;
		letters['c' - 'a'] = true;
		letters['i' - 'a'] = true;
		letters['n' - 'a'] = true;
		letters['t' - 'a'] = true;
		for (int i = 0; i <N; i++) {
			words[i] = in.readLine().toCharArray();
		}
		combi('b', 5);
		System.out.println(max);
	}
	private static void combi(int c, int cnt) {
		if(cnt == K) {
			check();
			return;
		}
		if(c >'z') return;
		combi(c+1, cnt);    //c문자를 안배울 경우
		
		//배울 경우 
		if(!letters[c-'a']) {	  //안 배운 문자면 
			letters[c-'a'] = true;
			combi(c+1,cnt+1);
			letters[c-'a'] = false;
		}
	}
	private static void check() {
		int count =0;
		for (int i = 0; i <N; i++) {
			boolean isRead=true;
			for (int j = 0, size= words[i].length; j <size; j++) {
				int l = words[i][j]-'a';
				if(!letters[l]) {
					isRead = false;
					break;
				}
			}
			if(isRead) {
				count++;
			}
		}
		max = Math.max(count, max);
	}
}
