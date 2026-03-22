// Quick test: verify env loading works
process.env.NODE_ENV = 'development';
try {
  const env = require('./config/env');
  console.log('✅ ENV loaded successfully:', env);
  console.log('DATABASE_URL present:', !!process.env.DATABASE_URL);
  console.log('JWT_SECRET present:', !!process.env.JWT_SECRET);
  console.log('ENCRYPTION_KEY present:', !!process.env.ENCRYPTION_KEY);
  process.exit(0);
} catch (err) {
  console.error('❌ ENV loading failed:', err.message);
  process.exit(1);
}
