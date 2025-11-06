# Vercel PostgreSQL 설정 가이드

## 1단계: 패키지 설치
```bash
npm install
```

## 2단계: Vercel에서 PostgreSQL 데이터베이스 생성

1. [Vercel Dashboard](https://vercel.com/dashboard) 접속
2. 프로젝트 선택 → **Storage** 탭
3. **Create Database** → **Postgres** 선택
4. 데이터베이스 생성 완료

자동으로 환경 변수가 생성됩니다:
- `POSTGRES_PRISMA_URL`
- `POSTGRES_URL_NON_POOLING`
- `POSTGRES_URL`
- `POSTGRES_USER`
- `POSTGRES_PASSWORD`
- `POSTGRES_HOST`
- `POSTGRES_DATABASE`

## 3단계: 로컬에서 테이블 생성

```bash
# 환경 변수 설정 (Vercel Dashboard에서 복사한 값)
# .env.local 파일 생성:
POSTGRES_URL="postgresql://user:password@host:5432/database"

# 또는 Vercel CLI 사용 (권장)
npx vercel env pull
```

## 4단계: 데이터베이스 초기화

```bash
# TypeScript 환경에서 직접 실행하거나
npx ts-node scripts/init-db.ts

# 또는 수동으로 Vercel Dashboard의 SQL Editor에서:
CREATE TABLE IF NOT EXISTS subscriptions (
  id SERIAL PRIMARY KEY,
  company VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  teamSize VARCHAR(50) NOT NULL,
  bank VARCHAR(100) NOT NULL,
  accountNumber VARCHAR(50) NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 5단계: 로컬에서 테스트

```bash
npm run dev
```

1. `http://localhost:3000`에 접속
2. "지금 구독하기" 클릭
3. 모든 필드 입력 후 "구독 시작하기" 클릭
4. 성공 메시지 확인

## 6단계: 데이터 조회 (관리용)

API 엔드포인트: `GET /api/subscribe`

```bash
curl https://your-domain.vercel.app/api/subscribe
```

응답 예시:
```json
{
  "total": 2,
  "subscriptions": [
    {
      "id": 1,
      "company": "회사명",
      "email": "email@example.com",
      "teamSize": "10",
      "bank": "국민은행",
      "accountNumber": "123456789",
      "createdAt": "2025-11-15T10:30:00.000Z"
    }
  ]
}
```

## 7단계: 프로덕션 배포

```bash
git push
```

Vercel이 자동으로 배포합니다.

## 문제 해결

### "subscriptions table does not exist" 에러
→ 3단계에서 테이블을 생성하지 않았습니다.

### 환경 변수 누락
```bash
# Vercel Dashboard에서 환경 변수 확인
# Settings → Environment Variables
```

### 로컬 테스트 시 연결 오류
```bash
# .env.local 확인
# DATABASE_URL이 올바른지 확인
```

