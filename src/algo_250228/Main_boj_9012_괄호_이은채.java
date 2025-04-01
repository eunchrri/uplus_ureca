package algo_250228;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;
import java.util.StringTokenizer;

public class Main_boj_9012_괄호_이은채 {
	/*
	 * 괄호문자열은 "(" , ")" 만으로 구성되어 있는 문자열
	 * 괄호의 모양이 바르게 구성된 문자열을 vps라 부른다.
	 * 입력으로 주어진 괄호 문자열이 vps 인지 안인지를 판단하여 그 결과를 YES, NO로 나타내자.
	 * 
	 * 입:
	 * 	첫: 입력 데이터의 수(테스트 케이스)를 나타내는 정수 T
	 * 	이후 T줄에서 각 테스트 케이스가 주어진다.
	 * 
	 * 출:
	 * 	출력은 표준 출력를 사용. vps이면 YES를, 아니면 NO를 한줄에 하나씩 출력해야 한다.
	 * */
	public static void main(String[] args) throws IOException{
		// TODO Auto-generated method stub
		// 1. tc 개수 t를 입력받는다.
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int t = Integer.parseInt(br.readLine());
//		Stack<String>[] stacks = new Stack[t];		// 여러 개의 Stack을 저장할 배열
		
		// 3. 결과값을 출력한다.
		for (int i = 0; i < t; i++) {
			String input = br.readLine();
			// 3.1. stack에 아무것도 남아있지 않으면 YES를 출력하고
			if (isVPS(input)) {
				System.out.println("YES");
			
			// 3.2. stack에 요소가 있으면 NO를 출력한다.
			} else {
				System.out.println("NO");
			}
			
		}
	}
	// VPS 여부를 확인하는 함수 만들기 isVPS()
	public static boolean isVPS(String str) {
		// 2. stack 생성
		Stack<Character> stack = new Stack<>();
		// 2.1. 입력받은 괄호 문자열 str을 문자 배열로 변환해서
		for (char ch : str.toCharArray()) {
			// 2.2. 문자열이 "("이면 요소를 stack에 저장하고
			if (ch == '(') {
				stack.push(ch);
			// 2.3. 문자열로 ")"가 들어오면 마지막 요소를 stack에서 뺀다.
			} else if (ch == ')') {
				// 스택이 비어있다면, 닫는 괄호가 먼저 나왔다는 뜻이므로 VPS가 될 수 없고 false 리턴.
				if (stack.isEmpty()) {
					return false;
				}
				stack.pop();
			}
		}
		// VPS라면 true 를 VPS가 아니라면 스택에 뭔가 남아있으므로 false 를 리턴
		return stack.isEmpty();
	}

}
