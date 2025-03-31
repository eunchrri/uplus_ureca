package algo_250311;

import java.io.*;
import java.util.*;
import java.util.stream.Stream;

public class Solution_programmers_크레인_인형_뽑기_이은채 {
    private static final BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    private static final BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

    public static void main(String[] args) throws IOException {
        //Solution solution = new Solution();

        String arr = br.readLine();

        int[] phoneNumberList = Stream.of(arr
                        .split("\\[|\\]|\\,|\"|"))
                        .filter(c -> !Objects.equals(c, "") & !Objects.equals(c, " "))
                        .mapToInt(Integer::parseInt).toArray();

        //bw.write(solution.solution(phoneNumberList) + "");
        bw.close();
    }

    /*static class Solution {
        public int solution(int[][] board, int[] moves) {
			// 1. 배열을 스택에 넣기
	        Stack<Integer> basket = new Stack<>();
	        int answer = 0;
	        int col = 0;
	        
	        for (Integer move : moves) {
				col = move - 1;
				// 2. move 배열 순서대로 각 번호의 스택 peek() 해서 배열 arr에 넣기
				for (int row = 0; row < board.length; row++) {
					if (board[row][col] != 0) {
						int doll = board[row][col];
						board[row][col] = 0;	
						
						// 3. 순서대로 넣다가 같은 번호가 연속되면 기존 배열 pop하고 answer+2 하기
						if (!basket.isEmpty() && basket.peek() == doll) {
							basket.pop();
							answer += 2;
						}
					}
				}
				// 4. answer 리턴하기
				return answer;
			}
	        
        }
    }*/
}
