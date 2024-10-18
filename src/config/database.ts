import { Pool } from 'pg';

export const database = new Pool({
  user: 'neondb_owner',
  host: 'ep-spring-cherry-a4x964tj-pooler.us-east-1.aws.neon.tech',
  database: 'neondb',
  password: 'uv89RpBfZDVK',
  port: 5432,
  ssl: {
    rejectUnauthorized: false,  // Aceitar certificados autoassinados
  },
});

// database.on('connect', (client) => {
//   client.query('SET timezone="America/Sao_Paulo"');
// });
