# 📋 기존 프로젝트 업데이트 방법

## 현재 상황
- 서버리스 함수로 분리된 새 파일들이 준비됨
- Git 자동 푸시에 문제가 있어 수동 업로드 필요

## 업데이트할 파일들

### 새로 추가된 파일:
- `api/test.js` - 환경변수 테스트 API
- `api/login.js` - 로그인 처리 API
- `SERVERLESS-DEPLOYMENT.md` - 배포 가이드
- `DEBUG-GUIDE.md` - 디버깅 가이드

### 수정된 파일:
- `vercel.json` - 개별 서버리스 함수 라우팅 설정
- `api/index.js` - 디버깅 로그 추가
- `api/db.js` - 환경변수 확인 로그 추가

## 수동 업데이트 방법

### 1. GitHub 저장소 접속
- 현재 Vercel 프로젝트와 연결된 GitHub 저장소로 이동

### 2. 파일 업로드/수정
다음 순서로 파일들을 업데이트하세요:

**A. 새 파일 생성:**
1. `api/test.js` 생성 후 내용 붙여넣기
2. `api/login.js` 생성 후 내용 붙여넣기

**B. 기존 파일 수정:**
1. `vercel.json` 파일 내용 교체
2. `api/index.js` 파일 내용 교체
3. `api/db.js` 파일 내용 교체

### 3. 커밋 및 푸시
- 커밋 메시지: "Fix: Convert to serverless functions for API stability"
- GitHub에서 직접 파일 편집하거나 로컬에서 푸시

### 4. Vercel 자동 재배포 대기
- GitHub 커밋 후 Vercel이 자동으로 재배포 시작
- 일반적으로 2-3분 소요

### 5. 배포 후 테스트
배포 완료 후 다음 URL 테스트:
- `https://your-domain.vercel.app/api/test` - 환경변수 확인
- 로그인 기능 테스트

## 빠른 해결 방법

만약 파일 업로드가 복잡하다면:
1. `WoodenA-serverless-fixed.tar.gz` 다운로드
2. 압축 해제
3. GitHub 저장소에 드래그 앤 드롭으로 업로드
4. 커밋 후 자동 배포 대기

현재 Vercel 프로젝트의 GitHub 저장소 URL을 알려주시면 더 구체적인 안내를 드릴 수 있습니다.