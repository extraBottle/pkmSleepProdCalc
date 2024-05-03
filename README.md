# 포슬립 계산기

포슬립 식재료 생산량 계산기. 추후 다양한 기능 추가 예정

**v0.0.1**
- github action test

**v1.0.0**
- 식재료 생산량 계산 기능 추가
- 목표 포켓몬 스펙 입력 기능 추가
- 좋은 캠프 티켓 사용 여부 선택 기능 추가
- 힐러 포켓몬 설정 (라이트/프로) 기능 추가
- 수면 시간 선택 기능 추가
- google analytics 연결
- 사이드바로 다른 웹페이지 연결 기능 추가
- 결과를 하루, 끼니당으로 분류하기 기능 추가
- 계산 결과 기력 그래프 출력 기능 추가

**v1.0.1**
- meta tag OG 추가

**v1.0.2**
- q-select dialog UI 개선
- 처음 로딩시 불러오는 이미지를 public에서 불러오게 수정
- quasar loading plugin으로 전부 변경
- 손가락 흔들기 스킬 계산에 반영
- 모바일에서 툴팁 클릭시 1초동안 사라지지 않게 수정
- 식재 스킬 발동으로 모은 식재량 text display 개선

**v1.0.3**
- 프로 버전에서 현재 설정 그대로 다시 계산하기 버튼 추가
- 계산 로딩 2분 timeout
- 계산 중 때때로 로딩 화면 안뜨는 오류 수정

**v1.0.4**
- 다시하기 누르면 포켓몬 목록 중첩되는 오류 수정

**v1.0.5**
- 계산 timeout 삭제
- 서브스킬 최대 5개까지 선택 제한
- 손가락흔들기에서 나오는 스킬 랜덤 확률 계산

**v1.0.6**
- analytics boot file execute now depends on cordova

**v1.1.0**
- 선택한 레벨에 맞춰 최대 선택 가능 서브 스킬 수 제한
- 포켓몬 개체값 측정기 추가
- 메인 화면에서 계산기를 선택할 수 있도록 변경
- aws lambda 연결
- 이브이 진화 추천 페이지 이전
- 이브이 진화 추천 알고리즘에서 레벨에 따른 서브 가감점 삭제
- 경험치 계산기 페이지 이전
- google tag manager 연결 및 vue-gtm 적용
- 서브 선택 개수를 선택한 레벨에 맞게 자동으로 설정
- cordova 관련 analytics 삭제
- 메인 화면에서 각 계산기에 대한 안내하는 카드 생성
- 포켓몬 비밀 도감 추가

**v1.1.1**
- exp 계산기 포켓몬 종에 따른 남은 경험치량 계산 오류 수정