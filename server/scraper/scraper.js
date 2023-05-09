const puppeteer = require("puppeteer")

async function webscrape (site, title) {
  switch (site) {
    case 'indeed.com':
      return scrapeIndeed(title);
    case 'openquant.co':
      return console.log('openquant.co')
    case 'git_repository':
      return console.log('git_repository')
    default:
      let error = 'invalid site'
      throw error;
  }
}

async function scrapeIndeed(title) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  console.log('opened browser')
  // await page.goto(`https://www.indeed.com/jobs?q=software+engineer+intern&l=california&start=10`);
  await page.goto('https://amirihayes.github.io/YearOfTheSenior/')
  console.log('opened website')
  await page.waitForSelector('.interest')
  const element = await page.$('.interest') || 'nothing';
  console.log(element) 

  // await page.waitForSelector('.mosaic-provider-jobcards');
  // console.log('opened css 1')
  // const jobListings = await page.$$('.mosaic-provider-jobcards');
  // console.log('opened css 2')
  
  // // Loop through job listings and extract the job titles and URLs
  // const jobTitles = [];
  // const jobUrls = [];
  // for (const jobListing of jobListings) {
  //   const title_ = await jobListing.$eval('.title', el => el.innerText);
  //   const url = await jobListing.$eval('.title > a', el => el.href);
  //   jobTitles.push(title_);
  //   jobUrls.push(url);
  // }

  // console.log('indeed.com', jobTitles, jobUrls)
  await browser.close();
}


module.exports = webscrape