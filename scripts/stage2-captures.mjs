import {chromium} from 'playwright';
const b=await chromium.launch();const p=await b.newPage();
for(const width of [320,1440]){await p.setViewportSize({width,height:1000});await p.goto('http://127.0.0.1:4174/cidade/pinhais');await p.locator('#bairro-search').scrollIntoViewIfNeeded();await p.screenshot({path:`docs/qa/directory-search-${width}.png`});await p.goto('http://127.0.0.1:4174/bairro/piraquara/guarituba-central');await p.locator('.local-art').scrollIntoViewIfNeeded();await p.screenshot({path:`docs/qa/local-art-stage2-${width}.png`});}await b.close();
