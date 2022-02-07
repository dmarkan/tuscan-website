function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
  <img src="images/diamond.png" alt="" width="30" height="24" class="d-inline-block align-text-top"></img>
    <a class="navbar-brand" href="#">Tuscan</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Characters</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">Download</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar;