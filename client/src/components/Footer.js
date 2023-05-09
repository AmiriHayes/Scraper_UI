function Footer() {
  return (<>
    <nav className = "row my-3 background">
      <div className = "col-1"></div>
      <div className = "col-10 header p-3 text-light rounded">
        <span className = "d-flex justify-content-center">
          <button className = "p-3 th-light rounded mx-1">
            <p className = "th-dark lh-sm my-auto">last page</p>
          </button>
          <button className = "p-3 th-light rounded mx-1">
            <p className = "th-dark lh-sm my-auto">next page</p>
          </button>
          <button className = "p-3 th-light rounded mx-1">
            <p className = "th-dark lh-sm my-auto">see github</p>
          </button>
        </span>
      </div>
    </nav>
  </>)
}

export default Footer;