import React from 'react'
import '../home/home.css'
import s3 from '../images/slider3.jpg';
import s4 from '../images/slider4.jpg';
import s2 from '../images/slider2.jpg';
import offer from '../images/Offer.jpg';
import ride from '../images/Ride.jpg';
import rapido from '../images/rapido.jpeg';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div>
      <div className="text-center home-hedding">Universal’s Volcano Bay Water Theme Park</div>
      <div className="carousel mr-1 ml-1">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src={s3} alt="First slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={s4} alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={s2} alt="Third slide" />
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      {/* <hr style={{border:"2px solid yellow,margin:0px"}} /> */}
      <div className="home-info mb-5 m-5">
        <h1>Make Waves.</h1>
        <p className="">An interesting and fun water park in India, Wonderla is a favourite among young kids as well as older
          people for the variety of rides they offer. The park has both a water park and theme park, but unlike
          most combined parks, there hasn't been a cut in the number of rides of both types. Many find it
          difficult to finish all the rides in one day but come out having the best time. The park has
          extremely high thrill rides for daredevils and people who like to test their limits. Entry fare:
          Changes according to the season. Must try rides: Wavy and vertical fall, Equinox , Insanity,
          Y-Scream and all other high thrill rides.</p>
        <Link to="/offers"> 
        <h3 className="mb-5">Explore More Offers....</h3>
        </Link>
      </div>

      <div className='newCards'>
        <div class="card m-3 p-3" style={{ width: 22 + "rem" }}>

        <h2 class="card-title text-center mb-3 ">Rides</h2>
          <img src={ride} class="card-img-top" alt="..."></img>
          <div class="card-body">
            
            <p class="card-text">42 of the biggest, wettest, wildest slides and attractions</p>
            <Link to="/LearnMore"><a href="#" class="btn btn-warning">Learn More</a></Link>
          </div>
        </div>

        <div class="card m-3 p-3" style={{ width: 22 + "rem" }}>
        <h2 class="card-title text-center mb-3">Events & Offers</h2>

            <img src={offer} class="card-img-top" alt="..."></img>
            <div class="card-body">
              
              <p class="card-text">Purchase Your Season Pass Today!!</p>
              <a href="#" class="btn btn-warning">Bye Now</a>
            </div>
          </div>

          <div class="card m-3 p-3" style={{ width: 22 + "rem" }}>
        <h2 class="card-title text-center mb-3">Groups</h2>

            <img src={rapido} class="card-img-top" alt="..."></img>
            <div class="card-body">
              
              <p class="card-text">Enjoy big savings and catered, all-you-can-eat private picnics, just steps away from thrilling rides..</p>
              <a href="#" class="btn btn-warning">Learn More</a>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Home
