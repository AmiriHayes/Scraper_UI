
let companies = [
  {
    "title": "Amazon",
    "position": "Software Engineering Intern",
    "location": "New York City",
    "link": "https://websitehere.com"
  },
  {
    "title": "Netflix",
    "position": "Backend Engineer (Intern)",
    "location": "New York City",
    "link": "https://websitehere.com"
  },
  {
    "title": "Databricks",
    "position": "Data Science Intern",
    "location": "New York City",
    "link": "https://websitehere.com"
  },
  {
    "title": "Amazon",
    "position": "Software Engineering Intern",
    "location": "New York City",
    "link": "https://websitehere.com"
  },
  {
    "title": "Netflix",
    "position": "Backend Engineer (Intern)",
    "location": "New York City",
    "link": "https://websitehere.com"
  },
  {
    "title": "Databricks",
    "position": "Data Science Intern",
    "location": "New York City",
    "link": "https://websitehere.com"
  }
]
let length = companies.length

function Data() {
  return (<div className = "row mt-2 m-auto center" >
    {
      companies.map((company, idx) => {
        return (<article className = "d-flex col-md-6 m-auto" key={idx}>
          <button 
            href = "{company.link}" 
            className = "m-2 p-2 th-black text-light rounded"
            style={{width: '100%', margin: '5% -2.5% 5% -2.5%', textAlign: 'center'}}
          >
            <span>{`${idx + 1}/${length}`}</span>
            <div className = "mt-2 mb-3">
              <div>{company.title}</div>
              <div>{`"${company.position}"`}</div>
              <div>{company.location}</div>
            </div>
          </button>
        </article>)
      })
    }
  </div>)
}

export default Data;