package algo_250218;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class Main_2961_S1_도영이가만든맛있는음식_bit{

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		ArrayList<Taste> materials = new ArrayList<>();
		
		int N = Integer.parseInt(br.readLine());
		for (int i = 0; i < N; i++) {
			st = new StringTokenizer(br.readLine());
			int sour = Integer.parseInt(st.nextToken());
			int bitter = Integer.parseInt(st.nextToken());
			materials.add(new Taste(sour, bitter));
		}
		
		int min = Integer.MAX_VALUE;
		
		// 비트마스킹으로 부분 집합 구하기
		// 공집합을 제외해야하기 때문에 1부터 시작
		for (int i = 1; i < 1 << materials.size(); i++) {
			// 0을 곱하면 0이 되기때문에 1로 초기화
			int sourSum = 1;
			int bitterSum = 0;
			
			for (int j = 0; j < materials.size(); j++) {
				// 해당 재료가 선택되었으면 곱하고, 더해준다.
				if ((i & 1 << j) != 0) {
					sourSum *= materials.get(j).sour;
					bitterSum += materials.get(j).bitter;
				}
			}
			// 신맛과 쓴맛의 차이값이 최소인 것을 찾아낸다.
			min = Math.min(min, Math.abs(sourSum - bitterSum));
		}
		System.out.println(min);
	}
}

class Taste {
	int sour;
	int bitter;
	
	Taste (int sour, int bitter) {
		this.sour = sour;
		this.bitter = bitter;
	}
}
