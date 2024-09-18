![스크린샷 2024-09-16 181008](https://github.com/user-attachments/assets/3851aef1-70cd-418d-9261-5f04d3564ed1)# :seedling: SeSAC 2차 프로젝트 Smile Hub
<br/>

## <img src="https://github.com/user-attachments/assets/d32dab93-440f-413f-b380-d70518a612ca" alt="Smile Hub" width="30"/> 프로젝트 소개


* 주제 : **새상품** 정보를 알 수 있는 중고거래 사이트
* 기획 의도 : 중고상품 구매 시 새상품 가격 비교를 위한 다른 사이트 방문의 번거움을 줄이고자 함.
* 기간 : 2024.08.26 ~ 2024.09.12
* Test ID: admin@admin.com
* Test Password: Admin12@1

<br>

## :raising_hand: Developers

#### 석원준(팀장-백엔드) [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/ymind14563)

#### 유예진(팀원-백엔드) [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/yjyoo6831)

#### 이유나(팀원-프론트엔드) [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/youna99)

<br>

## 내가 맡은 역할
#### 백엔드
  - 유저 CRUD - 회원가입, 회원정보수정, 회원조회, 회원삭제
  - 리뷰 CRUD - 리뷰등록, 리뷰수정, 리뷰확인, 리뷰삭제
  - 채팅 기능 (채팅방 CR, 메세지 CR / Socket.IO)
    - 소켓을 활용하여 채팅방 생성, 메세지 전송
    - 상품을 기준으로 판매자와 구매자 1:1 채팅방 생성
    - 권한있는 사용자만 채팅방에 입장가능
    - 메세지 전송
    - 메세지 발송정보 DB에 저장
  - 로그인, 로그아웃 기능
  - 주소 서비스 (Location) - depth 1~4 로 나눠 시도, 시군구, 읍면동으로 구분하여 DB 저장 
  - 판매자 온도 계산 - 구매자 댓글에 등록한 온도에 따라 판매자 전체 온도 계산
  - 개인 프로필 사진 업로드 - S3-multer 사용으로 개인 프로필 사진 업로드, 재업로드시 자동 삭제 후 재등록(수정) 
  - 권한(JWT) - isAdmin, isActive로 관리자권한과 활동상태(활동중, 활동정지) 부여
  - 비밀번호 암호화(bcrypt)
#### 프론트엔드
  - 채팅 페이지 - Hook, Socket.io-client,Redux 활용
    - 채팅리스트 - 채팅방 목록 표시, 메세지 도착 시 상단으로 재배열
    - 채팅룸 - 메시지 전달 공간
  - 관리자 페이지
    - 관리자 전용 페이지, 토큰으로 확인, 한 페이지내 UserTab, ProductTab으로 나눔, Redux 활용
    - 회원목록조회(UserTab) - 회원목록조회, 활동상태(활동중/활동정지) 변경, 강퇴 기능
    - 상품목록조회(ProductTab) - 상품목록조회, 상품상태(판매, 배송, 거래완료 등) 확인, 삭제 기능
      
#### 서버배포(AWS)
  - EC2, S3, RDS(MySQL) - AWS활용, S3로 이미지, RDS로 MySQL 사용
  - NGINX

<br>


## 🧰 Architecture

![image](https://github.com/user-attachments/assets/4a0ad14c-6ad8-4474-bd85-784a399e79ff)


## ❓ 주요 기술 채택 이유

- **JWT** (JSON Web Token) : 보안 및 서버의 부하를 줄이고, 확장성을 높이기 위해 채택
- **Socket.io** : 채팅 기능을 위해 실시간 양방향 통신이 가능하고, 다양한 이벤트를 쉽게 처리하기 위해 채택
- **Multer-S3** : AWS 서버에 파일을 업로드하여 서버의 저장 공간 절약 및 파일 관리의 용이성과 파일 형식 및 크기 제한을 위해 채택
- **Sequelize**: Node.js 환경에 최적화 되어있어 비동기 프로그래밍에 적합하고, 복잡한 쿼리문 대신 ORM을 사용하여 데이터 추출을 위해 채택
- **AWS** : 현재 클라우드 시장에서 가장 큰 점유율을 차지하고 있으며, EC2, S3, RDS 등 다양한 서비스를 지원하고, 자원을 확대/축소 하는 등 유연성의 이점으로 인해 채택
- **React** : 강력한 생태계와 컴포넌트 재사용성이 뛰어나며, 상태 관리의 유연성이 더 적합하여 채택택
- **Redux Toolkit** : 복잡한 Redux 설정을 간소화하고 더 직관적인 API와 유틸리티를 제공하여 상태 관리를 효율적으로 하기 위해 채택
- **React-router** : 불필요한 API를 줄여 SPA(Single Page Application)에서의 효율적인 라우팅 관리와 동적 페이지 전환을 쉽게 구현하기 위해 채택

<br>

## 📂 프로젝트 구조
- 프론트
```
├── /public
│   ├── images
│   ├── index.html
│   └── favicon.ico
├── /src
│   ├── /app                    # 애플리케이션의 전역 상태 관리, 라우팅
│   │   ├── ProtectedRouter.js
│   │   ├── rootReducer.js
│   │   ├── rootRouter.js
│   │   └── rootStore.js
│   ├── /features               # Container Component (상태와 비즈니스 로직을 관리)
│   │   ├── Adimin
│   │   ├── Chat
│   │   ├── Product
│   │   └── User
│   ├── /pages                  # Presentational Component (UI, 화면 렌더링 역할)
│   │   ├── Adimin
│   │   ├── Chat
│   │   ├── Product
│   │   └── User
│   ├── /shared                 # 공통 Component 분리
│   │   ├── Header.js
│   │   ├── input.js
│   │   ├── Modal.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
├── .eslintrc.js
├── .gitignore
├── .prettierrc
├── package-lock.json
├── package.json
├── README.md
├── postcss.config.js
└── tailwind.config.js
```

- 백엔드
```
├─config               # 설정 파일 관리 폴더
│  ├─config.js
│  └─s3config.js
├─controller           # 요청 처리 컨트롤러 폴더
│  ├─product
│  └─user
├─middleware           # 미들웨어 관리 폴더
├─models               # 데이터베이스 모델 폴더
│  ├─product
│  └─user
├─routes               # 라우터 파일 폴더
├─service              # 비즈니스 로직 파일 폴더
├─utils                # 유틸리티 함수 파일 폴더
├─views                # s3, socket.io 테스트용 ejs 폴더
├─app.js               # 메인 애플리케이션 파일
└─swagger.js           # Swagger 설정 파일 (API 문서화)

```
<br>

## :bulb: 요구사항정의서
![사용자요구사항정의서](https://github.com/user-attachments/assets/076ef774-8051-4e41-9333-3c4385420113)

<br>

## :bulb: API 명세서
![swagger](https://github.com/user-attachments/assets/627e1382-e28e-4fed-988d-ea07462c9e29)
![swagger_1](https://github.com/user-attachments/assets/8e968c1e-ec2d-4c8e-8029-dab646df8dfd)

<br>

## 📚 데이터베이스 ERD
![ERD](https://github.com/user-attachments/assets/a0ee8efe-93e5-4a2e-a266-2585f84f65aa)

<br>


## :clipboard: 주요 페이지

### 로그인 / 회원가입
- 이메일, 닉네임 중복 검사 필수로 수행
<img src="https://github.com/user-attachments/assets/d156b0f9-4834-4a89-bf9a-25987a6e4d6d" style="width: 40%">
<img src="https://github.com/user-attachments/assets/ecf49708-907c-4190-a6eb-3aac30c53de7" style="width: 40%">

### 마이페이지
- 회원정보 수정, 탈퇴, 프로필 업로드 / 찜, 판매, 구매 내역 / 머니 충전
- 판매자, 구매자의 버튼 선택에 따른 배송 현황
<img src="https://github.com/user-attachments/assets/4193cb5e-1c3d-4758-b6e8-78b73249617f" style="width: 45%">
<img src="https://github.com/user-attachments/assets/dffbda73-ab22-4fc1-8829-658d749942b0" style="width: 45%">
<img src="https://github.com/user-attachments/assets/b246fd9c-1d18-4e43-9490-97b581597154" style="width: 50%">

### 채팅
- 구매자와 판매자의 양방향 소통 가능
<img src="https://github.com/user-attachments/assets/282b21cb-7244-4e43-a649-94326adc64fa" style="width: 70%">

### 메인, 검색
- 무한스크롤, 키워드로 검색
<img src="https://github.com/user-attachments/assets/0e38c8d2-684d-44b9-a692-d3a5a9f1097d" style="width: 45%">
<img src="https://github.com/user-attachments/assets/3d6bb75e-3722-4e1f-8a25-f15217a620e5" style="width: 45%">


### 상세
- 상품 이미지 swiper, 배송 현황, 채팅/안전거래, 해당 상품의 최저가 목록(네이버 API)
<img src="https://github.com/user-attachments/assets/414f9b4e-c813-451a-8611-49698965606e" style="width: 45%">
<img src="https://github.com/user-attachments/assets/910de93f-b7a7-420a-b5c5-8b105349b291" style="width: 45%">

### 결제, 충전
- 금액 확인 후 결제 가능, money 충전을 통한 결제 구현
<img src="https://github.com/user-attachments/assets/73ba0d71-3d27-4357-a4b8-aae86d4fabdf" style="width: 40%">
<img src="https://github.com/user-attachments/assets/c2863f4f-8fe4-4038-a0ae-277b3d55c135" style="width: 40%">

### 상품 작성 및 수정, 삭제 
- 이미지 업로드 및 수정, 상품 삭제
<img src="https://github.com/user-attachments/assets/efe6a07b-a524-409d-8904-13fdf21ec20a" style="width: 50%">

### 관리자
- 회원 관리, 상품 관리 가능
<img src="https://github.com/user-attachments/assets/de6cd8cf-3ec0-43ae-8db5-220b117553e3" style="width: 50%">


