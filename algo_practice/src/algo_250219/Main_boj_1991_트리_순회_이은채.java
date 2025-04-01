package algo_250219;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

//import tree.CompleteBinaryTreeTest.Node;

public class Main_boj_1991_트리_순회_이은채 {
	/*
	 * 이진 트리 입력 받고 전위순회, 중위순회, 후위순회한 결과 출력하는 프로그램 작성하기
	 * 입: 부모노드 왼쪽자식 오른쪽자식
	 * 	  자식 노드가 없을 경우 .으로 표시한다.
	 * 
	 * 인접 리스트 사용
	 * arraylist
	 * */
	static class Node {
		// 각 노드는 data, left, right 을 가진다.
		char data;
		Node left;
		Node right;
		
		// 자식 노드는 Node 객체로 참조된다.
		Node(char data) {
			this.data = data;
		}
	}
	
	public static void main(String[] args) throws IOException {
//		1. 입력 받기
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int N = Integer.parseInt(br.readLine());
		StringTokenizer st = new StringTokenizer(null);
		for (int i = 0; i < N; i++) {
			// 입력에서 주어지는 대문자 알파벳 - 'A': 0 ~ 숫자
			int p = st.nextToken().charAt(0)-'A';		// parent
			int left = st.nextToken().charAt(0)-'A';		// left child
			int right = st.nextToken().charAt(0)-'A';		// right child
			
			

		}
	}

}
