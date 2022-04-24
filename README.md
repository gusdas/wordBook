# 항해99 심화반 1주차 과제

# 이번주 진행 내용
> 와이어 프레임을 보고 디자인 후 redux를 이용하여 상태 관리하고 redux-thunk 미들웨어로 firebase와 통신하여 데이터를 CRUD 한다.

# 내가 배운 내용
> 데이터 구조를 생각하여 뷰, redux, 서버, 미들웨어간의 데이터를 주고 받는 흐름을 통해 redux,redux-thunk의 역할에 대해 배웠다.

> 간단하게 설명하자면 우리가 애플리케이션을 만들 때 데이터 구조를 먼저 생각 후 Redux를 통해 상태관리를 하고 middleWare를 통해 서버와 통신하고 Redux에 변경된 상태를 넣어준다.

![](https://velog.velcdn.com/images/hongdol/post/f80d93b7-61fc-44f2-a164-798af56c65ff/image.png)




1. 컴포넌트에서 MiddleWare로 dispatch를 한다.

2. 그리고 서버 여기서는 Firebase로 API를 보낸다.

3. 서버(Firebase)에서 받아온 값을 통해 Redux에 dispatch한다.

4. Redux에서 Action이 이뤄지며 State가 바뀐다.

5. State가 바뀌면 구독하고 있던 컴포넌트가 알아채고 값이 바뀐다.

(내 생각에는 컴포넌트가 Redux의 해당 State값을 바라보고 있다가 바뀌면 알아채고 바뀐 값을 가져온다고 이해했다. 이게 내가 생각하는 구독의 개념같다.)

[완성 페이지 보러가기](https://react-basic-3f3e9.firebaseapp.com/)
