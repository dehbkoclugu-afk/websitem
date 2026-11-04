import{readFileSync,existsSync,readdirSync}from'node:fs';import{resolve,dirname}from'node:path';
const walk=p=>readdirSync(p,{withFileTypes:true}).flatMap(d=>d.isDirectory()?walk(p+'/'+d.name):[p+'/'+d.name]);let checked=0;
for(const path of walk('dist').filter(p=>p.endsWith('.html'))){
 const html=readFileSync(path,'utf8');
 if(!html.includes('lang="tr"')||!html.includes('<h1>'))throw Error(`Missing document structure: ${path}`);
 if(/[—–]/.test(html))throw Error(`Em/en dash in visible copy: ${path}`);
 for(const [,url]of html.matchAll(/(?:src|href)="([^"]+)"/g)){if(/^(https?:|mailto:|#)/.test(url))continue;let t=url.split('#')[0];if(!t)continue;t=t.startsWith('/')?resolve('dist','.'+t):resolve(dirname(path),t);if(!existsSync(t))throw Error(`Broken reference: ${path} -> ${url}`);checked++;}
}
const {live,upcoming}=JSON.parse(readFileSync('data/apps.json','utf8'));const all=[...live,...upcoming];
if(new Set(all.map(a=>a.slug)).size!==all.length)throw Error('Duplicate app slug');
for(const a of live)for(let i=1;i<=a.shots;i++)if(!existsSync(`dist/assets/play/${a.slug}/shot-${i}.webp`))throw Error(`Missing screenshot ${a.slug} ${i}`);
console.log(`Passed: ${live.length} live + ${upcoming.length} upcoming apps; ${checked} local links/assets verified.`);
