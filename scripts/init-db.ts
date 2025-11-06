import { sql } from '@vercel/postgres';

async function initDatabase() {
  try {
    // subscriptions 테이블 생성
    await sql`
      CREATE TABLE IF NOT EXISTS subscriptions (
        id SERIAL PRIMARY KEY,
        company VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        teamSize VARCHAR(50) NOT NULL,
        bank VARCHAR(100) NOT NULL,
        accountNumber VARCHAR(50) NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    console.log('✅ Database initialized successfully!');
    console.log('✅ subscriptions table created');
  } catch (error) {
    console.error('❌ Database initialization failed:', error);
    process.exit(1);
  }
}

initDatabase();

