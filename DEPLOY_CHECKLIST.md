# 배포 체크리스트

GitHub에 올리기 전에 확인하세요.

## ✅ 로컬 테스트

- [ ] `npm install` 실행
- [ ] `npm run dev` 로컬 서버 시작
- [ ] `http://localhost:3000` 접속 가능
- [ ] 메인페이지 로딩 완료
- [ ] "지금 구독하기" 팝업 열기 가능
- [ ] 폼 4개 필드 모두 입력 후 "구독 시작하기" 클릭 가능
- [ ] 성공 알림 표시 및 "지금 결제하러 가기" 버튼 동작

## 📝 파일 확인

- [ ] `.gitignore` - `node_modules`, `.env*` 포함
- [ ] `README.md` - 배포 가이드 작성
- [ ] `package.json` - `@vercel/postgres` 포함
- [ ] `.env.example` 또는 가이드 문서
- [ ] `SETUP_DATABASE.md` - DB 설정 가이드

## 🔧 설정 파일

- [ ] `tsconfig.json` - 경로 별칭 (`@/*`) 설정됨
- [ ] `tailwind.config.ts` - 존재
- [ ] `postcss.config.js` - 존재
- [ ] `next.config.js` - 존재

## 📂 디렉토리 구조

- [ ] `app/page.tsx` - 메인 페이지
- [ ] `app/layout.tsx` - 레이아웃
- [ ] `app/styles.css` - 글로벌 스타일
- [ ] `app/api/subscribe/route.ts` - API 엔드포인트
- [ ] `scripts/init-db.ts` - DB 초기화 스크립트
- [ ] `components/` 디렉토리 없음 (필요 없으므로)
- [ ] `lib/` 디렉토리 없음 (필요 없으므로)

## 🚀 GitHub 푸시

```bash
# 1. Git 초기화 (이미 되어있으면 생략)
git init

# 2. 파일 추가
git add .

# 3. 커밋
git commit -m "Initial commit: LINER Teams landing page with PostgreSQL integration"

# 4. GitHub에 푸시
git push -u origin main
```

## 🔗 Vercel 배포

1. https://vercel.com/dashboard 접속
2. "Add New" → "Project"
3. GitHub 저장소 선택
4. Framework: **Next.js** (자동 선택됨)
5. Deploy 클릭

## 🗄️ PostgreSQL 설정

배포 후:

1. Vercel Dashboard → Storage
2. "Create Database" → Postgres
3. 생성 완료 후 자동으로 환경 변수 추가됨

## 📊 테이블 생성

Vercel Dashboard → Storage → SQL Editor:

```sql
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

## ✨ 배포 완료!

- [ ] 배포된 URL 확인
- [ ] 라이브 사이트에서 폼 테스트
- [ ] `/api/subscribe` 엔드포인트 테스트
- [ ] 데이터베이스에 데이터 저장 확인

---

**문제 발생 시:**
- Vercel Logs: `vercel logs`
- 로컬에서 재테스트: `npm run dev`
- 환경 변수 확인: Vercel Dashboard → Settings → Environment Variables

