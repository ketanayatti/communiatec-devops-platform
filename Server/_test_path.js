process.env.NODE_ENV = 'development';
const path = require('path');
const fs = require('fs');
const envFile = '.env.development';
const envPath = path.resolve(__dirname, 'config', '..', envFile);
console.log('envPath:', envPath);
console.log('exists:', fs.existsSync(envPath));

// Also try direct
const envPath2 = path.resolve(__dirname, envFile);
console.log('envPath2:', envPath2);
console.log('exists2:', fs.existsSync(envPath2));
