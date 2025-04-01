package algo_250220;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Main_boj_10699_오늘_날짜_이은채 {
	// 서울의 오늘 날짜를 출력하는 프로그램을 작성하시오.
	// 출력 "YYYY-MM-DD"
	public static void main(String[] args) {
		// date 명령어 사용하기
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		Date today = new Date();
		String todayDate = sdf.format(today);
		System.out.println(todayDate);
	}

}
