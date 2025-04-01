// export default는 모듈을 내보낼 대상은 단 한개이고 이름은 지정하지 않는다.
// 한 번에 객체 하나로 딱 받아야 한다. 원하는 것만 받는 구조 분해 할당은 할 수 없다.

export default {
  title: "계산기 모듈",
  add(i, j) {
    return i + j;
  },
  sub(i, j) {
    return i - j;
  },
};
