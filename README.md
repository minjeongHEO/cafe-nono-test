# 🌃⏱ cafe-nono-test 

### 필수 요구 사항
엘리베이터 3대가 존재합니다.  
사용자는 1층부터 15층까지 갈 수 있는 호출 버튼을 클릭할 수 있습니다.  
이때 같은 층수의 버튼을 여러 번 클릭하더라도 해당 층수에 관한 동작은 한 번만 적용됩니다.  
3대의 모든 엘리베이터가 운행 중이라면, 전체 호출 버튼은 비활성화됩니다.  
미운행 중인 엘리베이터가 존재하는 순간 전체 호출 버튼은 활성화됩니다.  
엘리베이터는 기본적으로 좌측부터 운행됩니다.  
1초에 한 층을 운행할 수 있으며, 해당 층 수를 나타내며 이동합니다.  
운행 중일 때는 빨간색으로 표시되며, 운행이 종료되면 검은색으로 표시됩니다.  

### 추가 사항
- 오프라인에서의 엘레베이터의 경험  

  3대의 엘레베이터가 같은 층수에 멈춰있다면, 기본적으로 좌측부터 선 운행이 되지만,  
  사용자가 호출한 층수가 몇층인지에 따라서 가장 빨리 도착할 수 있는 엘레베이터가 먼저 운행이 된다.  

  미운행중인 엘레베이터가 존재하더라도,   
  운행종료시간까지 고려해서 더 빨리 도착할 수 있는 엘레베이터가 있는지를 계산해서 동작하게 한다.  

  호출을 취소할 경우 해당 엘레베이터는 동작을 멈춘다.  

- 스타일을 좀 더 완성도 있게  

  운행 방향을 각 엘레베이터에 표시한다.   
  호출 버튼을 클릭하면 화면에 몇번 엘레베이터를 이용하라는 알림 표시(여의도 파크원 빌딩 엘레베이터)  