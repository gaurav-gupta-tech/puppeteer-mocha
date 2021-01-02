const { assert, expect } = require('chai');
const puppeteer = require('puppeteer');

let browser;

describe('Sample Example', () => {

  it('Google search page', async () => { 
    
    browser=await puppeteer.launch({headless:false,slowMo:100});
    const page = await browser.newPage();
    await page
    .goto("http://google.com")
    const title= await page.title();
    console.log('Title is -- ' + title);
    expect(title).to.eql("Goole")
    
  });

  after(async () => {
    await browser.close();
  });

});
