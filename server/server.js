const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

app.use(express.json());
app.use(cors());
app.set('json spaces', 2)
port = process.env.PORT || 4040;

// spin up server if connected to database
require('dotenv').config();
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => app.listen(port, () => console.log(`DB connected, server listening: port ${port}`)))
  .catch((err) => console.log(err))

// import webscraper and schema
const webscrape = require('./scraper/scraper')
const Posting = require('./models/posting')

// link: api/find?site=indeed.com&title=software_engineer&action=add
app.get('/api/find', (req, res) => {
  let newPost = {}
  let postings = [] 
  const site_name = req.query.site
  const title_name = req.query.title

  let default_res = {"site": site_name, "title": title_name, "jobList": ['empty']}
  if (!site_name || !title_name) return res.json(default_res)
  
  webscrape(site_name, title_name)
    .then((scrape_list) => {
      for (i = 0; i < scrape_list.length; i++) {
        try {
          newPost = new Posting({...scrape_list[i]}) 
          newPost.save()
          postings.push(newPost)
        } catch (error) {
          console.log(`Request #${i} failed, moving on`)
          scrape_list.splice(scrape_list[i], 1)
        }
      }
      res.json({
        site:site_name, 
        title:title_name, 
        "jobList": postings,
      })
    })
    .catch((err) => {
      if (err === 'invalid site') res.json({default_res})
      else console.log(err)
    })
});