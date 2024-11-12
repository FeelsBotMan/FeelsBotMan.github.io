# KeyboardStore 🎹

키보드 전문 쇼핑몰 프로젝트입니다. React, TypeScript, Vite를 기반으로 제작되었습니다.

## 기술 스택

- **Frontend Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** CSS Modules
- **Routing:** React Router v6
- **Code Quality:** ESLint, TypeScript ESLint

## 주요 기능

- 🛍️ 카테고리별 상품 목록
- 🔍 상품 검색 및 필터링
- 🛒 장바구니 기능
- 💳 결제 프로세스
- 📱 반응형 디자인

## 프로젝트 구조

```
src/
├── assets/
│   └── styles/
│       ├── base/
│       │   ├── reset.css
│       │   ├── typography.css
│       │   └── variables.css
│       ├── components/
│       ├── layouts/
│       └── pages/
├── components/
│   ├── Layout/
│   └── common/
├── pages/
├── services/
└── types/
```

## 시작하기

### 필수 조건

- Node.js 18.0.0 이상
- npm 9.0.0 이상

### 설치

```bash
# 저장소 클론
git clone https://github.com/yourusername/keyboard-store.git

# 디렉토리 이동
cd keyboard-store

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

### 빌드

```bash
# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

## 개발 가이드

### 코드 스타일

- ESLint와 TypeScript ESLint 규칙을 따릅니다.
- 컴포넌트는 함수형 컴포넌트로 작성합니다.
- CSS 클래스명은 BEM 방식을 따릅니다.

### 브랜치 전략

- `main`: 프로덕션 브랜치
- `develop`: 개발 브랜치
- `feature/*`: 기능 개발 브랜치
- `hotfix/*`: 긴급 수정 브랜치

## 라이센스

MIT License

## 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 연락처

프로젝트 관리자 - [@yourusername](https://github.com/yourusername)

프로젝트 링크: [https://github.com/yourusername/keyboard-store](https://github.com/yourusername/keyboard-store)
