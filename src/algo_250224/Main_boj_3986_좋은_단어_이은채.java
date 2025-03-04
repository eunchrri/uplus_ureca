package algo_250224;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.Buffer;
import java.util.Scanner;
import java.util.Stack;
import java.util.StringTokenizer;

public class Main_boj_3986_좋은_단어_이은채 {
	/*
	 * 한 단어에서 같은 글자끼리 이어 쌍을 지을 때
	 * 선끼리 교차하지 않으면서 각 글자를 정확히 한 개의 다른 위치에 있는
	 * 같은 글자와 짝 지을 수 있다면, 그 단어는 좋은단어
	 * 
	 * 입: 단어의 수 N
	 * 출: 좋은 단어의 수 출력
	 * 
	 * 1. 각 단어에 대한 스택 형성
	 * 2. 각 문자를 순서대로 스택에 넣는다
	 * 3. 스택이 비어있으면 현재 문자를 스택에 넣는다.
	 * 	  스택이 비어있지 않으면, 스택의 맨 위 문자와 현재 문자가 같다면 스택에서 제거한다.
	 * 	  다르면 현재 문자를 스택에 추가한다.
	 * 4. 단어를 모두 처리한 후 스태깅 비어 있으면 해당 단어는 좋은 단어
	 * */
	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int N = Integer.parseInt(br.readLine());
		int goodWordCount = 0;		// 좋은 단어의 개수
		
		for (int i = 0; i < N; i++) {
			String word = br.readLine();
			if (isGoodWord(word)) {
				goodWordCount++;
			}
		}
		System.out.println(goodWordCount);
	}
	
	static boolean isGoodWord(String word) {
		Stack<Character> stack = new Stack<>();
		
		for (Character ch : word.toCharArray()) {
			if (!stack.isEmpty() && stack.peek() == ch) {
				stack.pop();	// 같은 문자가 연속되면 제거
			} else {
				stack.push(ch);
			}
		}
		// 스택 비어있으면 제거
		return stack.isEmpty();
	}

}
