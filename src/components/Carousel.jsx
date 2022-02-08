function Carousel() {
    return ( 
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="25000">
    <iframe class="d-block w-100 slides" src="https://www.youtube.com/embed/nHo_sp0v0vE?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div class="carousel-caption d-none d-md-block">
        <h5>Trailer</h5>
        <p>Check out this epic trailer for Tuscan</p>
      </div>
    </div>
    <div class="carousel-item">
    <img src="images/orc-angry.jpeg" class="d-block w-100 slides" alt="" />
      <div class="carousel-caption d-none d-md-block">
        <h5>Adventure RPG</h5>
        <p>Experience the adventure</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="images/slide3.png" class="d-block w-100 slides" alt="" />
      <div class="carousel-caption d-none d-md-block">
        <h5>Available now on Google Play</h5>
        <p><a href="https://play.google.com/store/apps/details?id=com.wTuscan_15043636" class="slide-download" target="_blank" rel="noopener noreferrer"><i class="fab fa-google-play"></i> GET IT NOW</a></p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    )
}

export default Carousel;