function Header() {
  return (<>
    <nav className = "row mb-3">
      <div className = "col-1"></div>
      <div className = "col-md-10 header text-light rounded-bottom">
        <h1 className = "text-center display-5 pt-1 mt-3"><b>internship webscraper</b></h1>
        <div className = "d-sm-flex justify-content-center m-3"> 
          <div className = "p-2 th-light rounded m-2">
            <span className = "th-dark">scraping vals:</span>
          </div>
          <div className = "p-2 th-light rounded m-2">
            <span className = "text-dark">indeed.com</span>
          </div>
          <div className = "p-2 th-light rounded m-2">
            <span className = "text-dark">software engineer</span>
          </div>
        </div>
      </div>
    </nav>
  </>)
}

export default Header;