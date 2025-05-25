import dotenv from 'dotenv';
dotenv.config({ path: './.env.development' });

let env = process.env.hello
console.log(env);