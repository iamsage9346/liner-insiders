import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export const dynamic = 'force-dynamic';

type SubscriptionData = {
  company: string;
  email: string;
  teamSize: string;
  bank: string;
  accountNumber: string;
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    const { company, email, teamSize, bank, accountNumber } = body;

    // 필수 필드 검증
    if (!company || !email || !teamSize || !bank || !accountNumber) {
      return NextResponse.json(
        { error: '모든 필드를 입력해주세요.' },
        { status: 400 }
      );
    }

    // PostgreSQL에 저장
    const result = await sql`
      INSERT INTO subscriptions (company, email, teamSize, bank, accountNumber)
      VALUES (${company}, ${email}, ${teamSize}, ${bank}, ${accountNumber})
      RETURNING id, company, email, teamSize, bank, accountNumber, createdAt;
    `;

    const savedData = result.rows[0];

    console.log('New subscription saved:', savedData);

    return NextResponse.json(
      { 
        success: true,
        message: '환급 신청이 완료되었습니다!',
        data: savedData
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: '요청 처리 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

// GET - 모든 구독 조회 (관리용)
export async function GET() {
  try {
    const result = await sql`
      SELECT id, company, email, teamSize, bank, accountNumber, createdAt
      FROM subscriptions
      ORDER BY createdAt DESC;
    `;

    return NextResponse.json({
      total: result.rows.length,
      subscriptions: result.rows
    });
  } catch (error) {
    console.error('Get subscriptions error:', error);
    return NextResponse.json(
      { error: '데이터를 조회할 수 없습니다.' },
      { status: 500 }
    );
  }
}

