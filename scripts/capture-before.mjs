import { chromium } from 'playwright';
const b=await chromium.launch(); const p=await b.newPage({viewport:{width:1440,height:1000}});await p.goto('http://127.0.0.1:4174'); await p.locator('#servicos').screenshot({path:'docs/qa/cards-before.png'});await p.goto('http://127.0.0.1:4174/favicon.svg');await p.screenshot({path:'docs/qa/favicon-before.png'});await b.close();
