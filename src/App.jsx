import { useState } from 'react'
import './App.css'
import Carousel from 'react-bootstrap/Carousel';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="static\image\c1.webp"
            alt="First slide"
          />
          <Carousel.Caption style={{ marginBottom: '100px' }}>
            <h1 className='text-white'>Welcome to Jingle Holiday Bazar Pvt Ltd.</h1>
            <button className='btn btn-primary c_btn'>Contact</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="static\image\c2.webp"
            alt="Second slide"
          />
          <Carousel.Caption style={{ marginBottom: '100px' }}>
            <h1 className='text-white'>Welcome to Jingle Holiday Bazar Pvt Ltd.</h1>
            <button className='btn btn-primary c_btn'>Contact</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="static\image\c3.webp"
            alt="Third slide"
          />
          <Carousel.Caption style={{ marginBottom: '100px' }}>
            <h1 className='text-white'>Welcome to Jingle Holiday Bazar Pvt Ltd.</h1>
            <button className='btn btn-primary c_btn '>Contact</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* ----------service section------------ */}
      <section className='service'>
        <h1 className='mb-4'>Our Services</h1>
        <p className='text-italic'>
          At Jingle Holiday Bazar, we are committed to ensuring that you save on every trip and every holiday
          booking you make with us by bringing to you the best price deals; be it flights, tours or hotels. Our unique budget
        </p>


      </section>

      <div className="container c_container">
        <div className="row" style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <div className="col-lg-3 col-sm-8 s_card">
            <ScrollAnimation animateIn="flipInY" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="green" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
              </svg>
              <h5>Jingle Holiday Bazar Homestays</h5>
              <b>Book Villas, Apartments
                and Resorts</b>
              <p>Jingle Holiday Bazar.com ventured into Homestays in India in 2015, and is providing great homestay experiences to its customers as well as benefits to its hosts. If you are looking for a holiday with a difference, want to closely savour the local flavours of a place, and prefer the</p>
              <button className='btn btn-primary'> Read More</button>
            </ScrollAnimation>
          </div>
          <div className="col-lg-3 col-sm-8 s_card">
            <ScrollAnimation animateIn="flipInY" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="green" class="bi bi-person-wheelchair" viewBox="0 0 16 16">
                <path d="M12 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-.663 2.146a1.5 1.5 0 0 0-.47-2.115l-2.5-1.508a1.5 1.5 0 0 0-1.676.086l-2.329 1.75a.866.866 0 0 0 1.051 1.375L7.361 3.37l.922.71-2.038 2.445A4.73 4.73 0 0 0 2.628 7.67l1.064 1.065a3.25 3.25 0 0 1 4.574 4.574l1.064 1.063a4.73 4.73 0 0 0 1.09-3.998l1.043-.292-.187 2.991a.872.872 0 1 0 1.741.098l.206-4.121A1 1 0 0 0 12.224 8h-2.79zM3.023 9.48a3.25 3.25 0 0 0 4.496 4.496l1.077 1.077a4.75 4.75 0 0 1-6.65-6.65z" />
              </svg>
              <h5>Jingle Holiday Bazar Hotels</h5>
              <b>Book Hotels with Jingle Holiday Bazar.com</b>
              <p>We are back in the post-pandemic world with a bouquet of hotels across Indian cities ranging from leisure to business ones with a new outlook. Jingle Holiday Bazar who has always been on the forefront of assuring a comfortable stay which is a bang for your bucks, is offering you online</p>
              <button className='btn btn-primary'> Read More</button>
            </ScrollAnimation>
          </div>
          <div className="col-lg-3 col-sm-8 s_card">
            <ScrollAnimation animateIn="flipInY" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="green" class="bi bi-airplane-fill" viewBox="0 0 16 16">
                <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849" />
              </svg>
              <h5>Jingle Holiday Bazar flights</h5>
              <b>Why to book Flights Online with Jingle Holiday Bazar.com</b>
              <p>Purchasing flight tickets and confirming your flight booking is the key aspect of planning a trip. Now whether you are travelling for business or on leisure, you cannot make an itinerary until you have first and foremost booked your flights. Procuring an air ticket is a mandatory first step</p>
              <button className='btn btn-primary'> Read More</button>
            </ScrollAnimation>
          </div>
        </div>
      </div>


      {/* -----------destination----------- */}
      <section className='service'>
        <h1 className='mb-4'>POPULAR DESTINATION IN INDIA</h1>
        <p className='text-italic'>

          India is a vibrant land of startling contrasts where both the traditional and modern worlds meet.
          The world's seventh largest nation by area and the second largest in terms of population, India boasts a rich
          heritage that's the result of centuries of different cultures and religions leaving their mark
        </p>
      </section>
      {/* -----photo------ */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="l_img">
              <img src="static\image\img1.webp" alt="" width='100%' />
            </div>
          </div>
          <div className="col-md-6">
            <div className="r_img">
              <img src="static\image\img2.webp" alt="" />
            </div>
            <div className="r_img">
              <img src="static\image\img3.webp" alt="" />
            </div>
          </div>
        </div>
      </div>


      {/* ----------popular destination- international--------- */}
      <section className='service'>
        <h1 className='mb-4'>POPULAR DESTINATION INTERNATIONAL</h1>
        <p className='text-italic'>
          Mother Earth along with mankind have co-created some of the most spectacular places on this planet.
          From sprawling cities to spectacular national parks, it is hard to keep your bucket list stagnant. Keeping in mind
          iconic attractions, culture, food and ease of travel, these are the best places in the world to visit!
        </p>
      </section>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="l_img">
              <img src="static\image\img4.webp" alt="" width='100%' />
            </div>
          </div>
          <div className="col-md-6">
            <div className="r_img">
              <img src="static\image\img5.webp" alt="" />
            </div>
            <div className="r_img">
              <img src="static\image\img6.webp" alt="" />
            </div>
          </div>
        </div>
        <div className="dfjcac">
          <button className='btn_destination'>All Destination</button>
        </div>
      </div>
      {/* ------------feature destination--------- */}
      <section className='service'>
        <h1 className='mb-4'>FEATURED TOURS IN INDIA</h1>
        <p className='text-italic'>
          India is a vibrant land of startling contrasts where both the traditional and modern worlds meet. The world's seventh
          largest tourist nation by area and the second largest in terms of population  </p>
      </section>

      <div className="container-fluid p-4">
        <div className="row">
          <div className="col-lg-5 col-md-10">
            <ScrollAnimation animateIn="zoomIn" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <img src="static\image\w1.webp" alt="" width='100%' />
            </ScrollAnimation>
            <div className="dc p-4">
              <h2><a href="">Week At Thiksey Monastery</a></h2>
              <p style={{fontSize:'1.2rem'}}>This 12-storey complex hosts over 500 monks and is considered to be one of the most beautiful Buddhist monasteries in all of Ladakh. For Ladakh sightseeing, Thiksey Gompa will enlighten you with knowledge about some of the Buddhist culture, lifestyle, scriptures, statues and even paintings.</p>
              <p><a href="">Whatsapp now More Details</a></p>
            </div>
          </div>
          <div className="col-lg-7 col-md-10 dc">
            <div className='dfjcac'>
              <ScrollAnimation animateIn="zoomIn" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <img src="static\image\w2.webp" alt="" width='100%' />
              </ScrollAnimation>
              <div style={{ flexBasis: '70%', padding: '1vw' }}>
                <h3><a href="">Week At Solang Valley, Manali</a></h3>
                <p style={{fontSize:'1.2rem'}}>A mini valley located at about 8400 feet above sea level, Solang Nala is a short drive away from Manali. If you are looking for snow-based activities and sports, winters are the best time to visit</p>
                <a href=""> Contact</a>
              </div>
            </div>
            <div className='dfjcac'>
              <ScrollAnimation animateIn="zoomIn" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <img src="static\image\w3.webp" alt="" width='100%' />
              </ScrollAnimation>
              <div style={{ flexBasis: '70%', paddingLeft: '1vw' }}>
                <h3><a href="">Week At Beach in Goa</a></h3>
                <p style={{fontSize:'1.2rem'}}>
                  Goa is the smallest state in India, Goa is synonymous to many captivating things that are best showcase of a life without stress and worries. The multitude of beaches in Goa
                </p>
                <a href=""> Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* ---------galllery-------- */}
      <section className='service' style={{ background: '#eeeeee' }}>
        <h1 className='mb-4'>Gallery</h1>
        <p className='text-italic'>
          At Jingle Holiday Bazar All Over India Destination Gallery
        </p>
      </section>

      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home"> <span style={{ fontSize: '1.3rem' }}>North India</span></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1"><span style={{ fontSize: '1.3rem' }}>East India</span></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1"><span style={{ fontSize: '1.3rem' }}>West India</span></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1"><span style={{ fontSize: '1.3rem' }}>South India</span></Nav.Link>
        </Nav.Item>

      </Nav>


      <div className="container-fluid card2_container">
        <div className="row p-4">
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3 dr">
          <ScrollAnimation animateIn="zoomIn">
            <Card style={{ width: '18rem', padding: '10px' }}>
              <Card.Img variant="top" src="static\image\cd1.webp" height={300} />
              <Card.Body style={{ background: 'rgb(134, 188, 213)' }}>
                <Card.Title>
                  <h5 className="text-white text-center">
                    New Delhi
                  </h5>
                </Card.Title>

              </Card.Body>
            </Card>
            </ScrollAnimation>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 mb-3 dr">
          <ScrollAnimation animateIn="zoomIn">
            <Card style={{ width: '18rem', padding: '10px' }}>
              <Card.Img variant="top" src="static\image\cd2.webp" height={300} />
              <Card.Body style={{ background: 'rgb(134, 188, 213)' }}>
                <Card.Title>
                  <h5 className="text-white text-center">
                   Shimla
                  </h5>
                </Card.Title>

              </Card.Body>
            </Card>
            </ScrollAnimation>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 mb-3 dr">
          <ScrollAnimation animateIn="zoomIn">
            <Card style={{ width: '18rem', padding: '10px' }}>
              <Card.Img variant="top" src="static\image\cd3.webp" height={300} />
              <Card.Body style={{ background: 'rgb(134, 188, 213)' }}>
                <Card.Title>
                  <h5 className="text-white text-center">
                    Agra
                  </h5>
                </Card.Title>

              </Card.Body>
            </Card>
            </ScrollAnimation>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 mb-3 dr">
          <ScrollAnimation animateIn="zoomIn">
            <Card style={{ width: '18rem', padding: '10px' }}>
              <Card.Img variant="top" src="static\image\cd4.webp" height={300} />
              <Card.Body style={{ background: 'rgb(134, 188, 213)' }}>
                <Card.Title>
                  <h5 className="text-white text-center">
                    Kullu & Manali
                  </h5>
                </Card.Title>

              </Card.Body>
            </Card>
            </ScrollAnimation>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 mb-3 dr">
          <ScrollAnimation animateIn="zoomIn">
            <Card style={{ width: '18rem', padding: '10px' }}>
              <Card.Img variant="top" src="static\image\cd5.webp" height={300} />
              <Card.Body style={{ background: 'rgb(134, 188, 213)' }}>
                <Card.Title>
                  <h5 className="text-white text-center">
                    Mussoorie & Dehradun
                  </h5>
                </Card.Title>

              </Card.Body>
            </Card>
            </ScrollAnimation>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 mb-3 dr">
          <ScrollAnimation animateIn="zoomIn">
            <Card style={{ width: '18rem', padding: '10px' }}>
              <Card.Img variant="top" src="static\image\cd6.webp" height={300} />
              <Card.Body style={{ background: 'rgb(134, 188, 213)' }}>
                <Card.Title>
                  <h5 className="text-white text-center">
                    Dalhousie
                  </h5>
                </Card.Title>

              </Card.Body>
            </Card>
            </ScrollAnimation>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3 dr">
          <ScrollAnimation animateIn="zoomIn">
            <Card style={{ width: '18rem', padding: '10px' }}>
              <Card.Img variant="top" src="static\image\cd7.webp" height={300} />
              <Card.Body style={{ background: 'rgb(134, 188, 213)' }}>
                <Card.Title>
                  <h5 className="text-white text-center">
                    Jim Carbet National Park
                  </h5>
                </Card.Title>

              </Card.Body>
            </Card>
            </ScrollAnimation>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3 dr">
          <ScrollAnimation animateIn="zoomIn">
            <Card style={{ width: '18rem', padding: '10px' }}>
              <Card.Img variant="top" src="static\image\cd8.webp" height={300} />
              <Card.Body style={{ background: 'rgb(134, 188, 213)' }}>
                <Card.Title>
                  <h5 className="text-white text-center">
                    Amritsar
                  </h5>
                </Card.Title>

              </Card.Body>
            </Card>
            </ScrollAnimation>
          </div>
        
        </div>
      </div>


{/* ------------Popular Hotel----------- */}
      <section className='service' style={{ background: '#eeeeee' }}>
        <h1 className='mb-4'>POPULAR HOTELS</h1>
        <p className='text-italic'>
        At Jingle Holiday Bazar Brovide Best Hotel facilty National And International
        </p>
      </section>


      <div className="container-fluid">
        <div className="row">
        <div className="col-lg-7 col-md-10 dc">
            <div className='dfjcac mb-3'>
              <ScrollAnimation animateIn="zoomIn" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <img src="static\image\h1.webp" alt="" width='100%' />
              </ScrollAnimation>
              <div style={{ flexBasis: '70%', padding: '1vw' }}>
                <h3>Taj Aravali Resort & Spa</h3>
                <p style={{fontSize:'1.2rem'}}>Prices for Taj Aravali Resort and Spa one of the best hotels in India, starts at ₹ 12999+ per night</p>
              </div>
            </div>
            <div className='dfjcac'>
              <ScrollAnimation animateIn="zoomIn" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <img src="static\image\h2.webp" alt="" width='90%' />
              </ScrollAnimation>
              <div style={{ flexBasis: '70%', paddingLeft: '1vw' }}>
                <p style={{fontSize:'1.2rem'}}>
                Set in Manāli Hotel Mountain face by Snow City Hotels offers accommodation with a restaurant, free private parking, a shared lounge and a garden.₹ 1,440+ per night

                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-10">
            <ScrollAnimation animateIn="zoomIn" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <img src="static\image\h3.webp" alt="" width='100%' />
            </ScrollAnimation>
            <div className="dc p-4">
              <h2>Hideout Premiere</h2>
              <p style={{fontSize:'1.2rem', paddingRight:'5px'}}>Hideout Resorts is a collection of elegantly designed hotels and resorts in Goa that aim to give our guests the opportunity to enjoy Goa in all her glory. Whether it’s the beaches ₹ 4499+</p>
            </div>
          </div>
         
        </div>
      </div>
    </>
  )
}

export default App
