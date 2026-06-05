import { writeFileSync } from 'fs';
const content = `export default (await import('./index.mjs')).default ?? (await import('./index.mjs'));
`;
writeFileSync('dist/server/server.js', content);
console.log('Created dist/server/server.js');
