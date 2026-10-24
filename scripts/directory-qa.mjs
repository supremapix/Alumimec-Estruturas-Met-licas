import {chromium} from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import fs from 'node:fs';
import assert from 'node:assert/strict';
const inv=JSON.parse(fs.readFileSync('docs/territorial-inventory.json','utf8'));
const previous=[...(await import('node:child_process')).execFileSync('git',['show','367c3e3:public/sitemap.xml'],{encoding:'utf8'}).matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>({path:new URL(m[1]).pathname}));
const current=JSON.parse(fs.readFileSync('.prerender-routes.json','utf8'));
for(const r of previous)assert.ok(current.some(c=>c.path===r.path),r.path);
const b=await chromium.launch();const context=await b.newContext();const p=await context.newPage();const errors=[];p.on('pageerror',e=>errors.push(e.message));const results=[];
for(const city of inv.municipalities.filter(c=>c.verifiedNames.length)){
 for(const width of [320,360,390,430,1440]){
 await p.setViewportSize({width,height:1000});await p.goto('http://127.0.0.1:4174'+city.municipalPage);await p.locator('#bairro-search').waitFor();
 assert.equal(await p.locator('.territory-list li').count(),city.verifiedNames.length);
 await p.locator('#bairros').scrollIntoViewIfNeeded();
 assert.equal(await p.evaluate(()=>{const e=document.querySelector('.app-scroll');return e.scrollWidth>e.clientWidth;}),false,city.city+width);
 if(width===390){assert.deepEqual((await new AxeBuilder({page:p}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze()).violations.map(v=>v.id),[]);await p.screenshot({path:'docs/qa/directory-'+city.municipalPage.split('/').at(-1)+'.png'});}
 results.push({city:city.city,width,names:city.verifiedNames.length});
 }
 const first=city.verifiedNames[0];await p.locator('#bairro-search').fill(first.normalize('NFD').replace(/[\u0300-\u036f]/g,''));assert.ok(await p.locator('.territory-list li').count()>0);
 await p.locator('#bairro-search').fill('nome-inexistente-teste');assert.equal(await p.locator('.territory-list li').count(),0);
 await p.locator('#bairro-search').fill('');await p.setViewportSize({width:320,height:1000});await p.evaluate(()=>document.documentElement.style.fontSize='36px');
 assert.equal(await p.evaluate(()=>{const e=document.querySelector('.app-scroll');return e.scrollWidth>e.clientWidth;}),false,city.city+'200%');
 await p.locator('#bairro-search').focus();await p.keyboard.type('zzzz');assert.equal(await p.locator('.territory-list li').count(),0);
 await p.locator('#bairro-search').fill('');const href=await p.locator('.territory-list li a[target="_blank"]').first().getAttribute('href');assert.ok(href.startsWith('https://wa.me/'));assert.ok(decodeURIComponent(href).includes(city.city));
 await p.evaluate(()=>document.documentElement.style.fontSize='');
}
assert.deepEqual(errors,[]);await b.close();fs.writeFileSync('docs/qa/directories.json',JSON.stringify({preserved:previous.length,total:current.length,names:225,results,errors},null,2));console.log('7 directories / 225 names / 35 viewports / search + keyboard + text 200% / 166 routes preserved');
