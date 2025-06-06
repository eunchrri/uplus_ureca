package chapter06;

import java.util.Objects;

public class Employee implements Comparable<Employee>{
	private String empno;
	private String name;
	private int salary;
	public Employee() {}
	public Employee(String empno, String name, int salary) {
		this.empno = empno;
		this.name = name;
		this.salary = salary;
	}
	
	/*
	 * 오름 차순 정렬
	 * 비교할 값이 비교 대상 보다 크면 양수, 같으면 0, 작으면 음수를 리턴한다.
	 * 
	 * 내림 차순 정렬
	 * 비교할 값이 비교 대상 보다 크면 음수, 같으면 0, 작으면 양수를 리턴한다.
	 * 
	 * ==> 다만 오버플로우 주의
	 * 오름 차순 : 현재 객체 - 인자로 전달된 객체 
	 * 내림 차순 : 인자로 전달된 객체 - 현재 객체 
	 */
	public int compareTo(Employee o) {
		// 오름차순 정렬
//		if (salary>o.salary) return 1;
//		else if (salary == o.salary) return 0;
//		else return -1;
		
//		return salary - o.salary;			// 내꺼 - 인자 = 오름차순, 내꺼가 음수일 때를 주의
//		return Integer.compare(salary, o.salary);
		
		// 내림차순 정렬
//		if (salary>o.salary) return -1;
//		else if (salary == o.salary) return 0;
//		else return 1;
		
//		return o.salary - salary;			// 인자 - 내꺼 = 내림차순
		return Integer.compare(o.salary, salary);
	}
	public String getEmpno() {
		return empno;
	}
	public void setEmpno(String empno) {
		this.empno = empno;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getSalary() {
		return salary;
	}
	public void setSalary(int salary) {
		this.salary = salary;
	}

	public String toString() {
		StringBuilder builder = new StringBuilder(50);
		builder.append("empno=").append(empno).append(", name=").append(name).append(", salary=")
				.append(salary);
		return builder.toString();
	}
	
	@Override
	public int hashCode() {
		return Objects.hash(empno, name, salary);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Employee other = (Employee) obj;
		return Objects.equals(empno, other.empno) && Objects.equals(name, other.name) && salary == other.salary;
	}
	
	
}










