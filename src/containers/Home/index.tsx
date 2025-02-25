
const Home = () => {
    return (
        <div>
            <div>
                <div className="stricky-header stricked-menu main-menu">
                    <div className="sticky-header__content">
                    </div>
                </div>
                <section className="main-slider main-slider-one">
                    <div className="swiper-container thm-swiper__slider" data-swiper-options="{&quot;slidesPerView&quot;: 1, &quot;loop&quot;: true, &quot;effect&quot;: &quot;fade&quot;, &quot;pagination&quot;: {
  &quot;el&quot;: &quot;#main-slider-pagination&quot;,
  &quot;type&quot;: &quot;bullets&quot;,
  &quot;clickable&quot;: true
  },
  &quot;navigation&quot;: {
  &quot;nextEl&quot;: &quot;#main-slider__swiper-button-next&quot;,
  &quot;prevEl&quot;: &quot;#main-slider__swiper-button-prev&quot;
  },
  &quot;autoplay&quot;: {
  &quot;delay&quot;: 7000
  }}">
                        <div className="swiper-wrapper">
                         
                            <div className="swiper-slide">
                                <div className="shape1"><img src="assets/images/shapes/slider-v1-shape1.png" /></div>
                                <div className="shape2"><img src="assets/images/shapes/slider-v1-shape2.png" /></div>
                                <div className="image-layer" style={{ backgroundImage: 'url(assets/images/backgrounds/main-slider-v1-1.jpg)' }} />
                               
                                <div className="container">
                                    <div className="main-slider__content">
                                        <div className="main-slider__content-icon-one">
                                            <span className="icon-lamp" />
                                        </div>
                                        <div className="main-slider__content-icon-two">
                                            <span className="icon-human-resources" />
                                        </div>
                                        <div className="main-slider-one__round-box">
                                            <div className="main-slider-one__round-box-inner">
                                                <p>Professional <br />courses</p>
                                                <div className="icon">
                                                    <i className="fas fa-sort-up" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="main-slider__content-tagline">
                                            <h2>Ready to learn language?</h2>
                                        </div>
                                        <h2 className="main-slider__content-title">Learn new <br />things daily</h2>
                                        <p className="main-slider__content-text">Get free access to 6800+ different courses
                                            <br /> </p>
                                        <div className="main-slider__content-btn">
                                            <a href="#" className="thm-btn">Discover more</a>
                                        </div>
                                        <div className="main-slider-one__img">
                                            <img src="assets/images/backgrounds/main-slider-v1-img.png" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                          
                            <div className="swiper-slide">
                                <div className="shape1"><img src="assets/images/shapes/slider-v1-shape1.png" /></div>
                                <div className="shape2"><img src="assets/images/shapes/slider-v1-shape2.png" /></div>
                                <div className="image-layer" style={{ backgroundImage: 'url(assets/images/backgrounds/main-slider-v1-1.jpg)' }} />
                           
                                <div className="container">
                                    <div className="main-slider__content">
                                        <div className="main-slider__content-icon-one">
                                            <span className="icon-lamp" />
                                        </div>
                                        <div className="main-slider__content-icon-two">
                                            <span className="icon-human-resources" />
                                        </div>
                                        <div className="main-slider-one__round-box">
                                            <div className="main-slider-one__round-box-inner">
                                                <p>Professional <br />courses</p>
                                                <div className="icon">
                                                    <i className="fas fa-sort-up" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="main-slider__content-tagline">
                                            <h2>Ready to learn new language?</h2>
                                        </div>
                                        <h2 className="main-slider__content-title">Learn new <br />things daily</h2>
                                        <p className="main-slider__content-text">Get free access to 6800+ different courses
                                            <br /></p>
                                        <div className="main-slider__content-btn">
                                            <a href="#" className="thm-btn">Discover more</a>
                                        </div>
                                        <div className="main-slider-one__img">
                                            <img src="assets/images/backgrounds/main-slider-v1-img.png" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="swiper-slide">
                                <div className="shape1"><img src="assets/images/shapes/slider-v1-shape1.png" /></div>
                                <div className="shape2"><img src="assets/images/shapes/slider-v1-shape2.png" /></div>
                                <div className="image-layer" style={{ backgroundImage: 'url(assets/images/backgrounds/main-slider-v1-1.jpg)' }} />
                               
                                <div className="container">
                                    <div className="main-slider__content">
                                        <div className="main-slider__content-icon-one">
                                            <span className="icon-lamp" />
                                        </div>
                                        <div className="main-slider__content-icon-two">
                                            <span className="icon-human-resources" />
                                        </div>
                                        <div className="main-slider-one__round-box">
                                            <div className="main-slider-one__round-box-inner">
                                                <p>Professional <br />teachers</p>
                                                <div className="icon">
                                                    <i className="fas fa-sort-up" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="main-slider__content-tagline">
                                            <h2>Ready to learn?</h2>
                                        </div>
                                        <h2 className="main-slider__content-title">Learn new <br />things daily</h2>
                                        <p className="main-slider__content-text">Get free access to 6800+ different courses from
                                            <br /> 680 professional teachers</p>
                                        <div className="main-slider__content-btn">
                                            <a href="#" className="thm-btn">Discover more</a>
                                        </div>
                                        <div className="main-slider-one__img">
                                            <img src="assets/images/backgrounds/main-slider-v1-img.png" />
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                        </div>
                      
                        <div className="swiper-pagination" id="main-slider-pagination" />
                        <div className="main-slider__nav">
                            <div className="swiper-button-prev" id="main-slider__swiper-button-next">
                                <span className="icon-left" />
                            </div>
                            <div className="swiper-button-next" id="main-slider__swiper-button-prev">
                                <span className="icon-right" />
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="features-one">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="features-one__single">
                                    <div className="features-one__single-icon">
                                        <span className="icon-empowerment" />
                                    </div>
                                    <div className="features-one__single-text">
                                        <h4><a href="#">Learn Skills</a></h4>
                                        <p>with unlimited courses</p>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="features-one__single">
                                    <div className="features-one__single-icon">
                                        <span className="icon-human-resources-1" />
                                    </div>
                                    <div className="features-one__single-text">
                                        <h4><a href="#">Expert Teachers</a></h4>
                                        <p>best &amp; highly qualified</p>
                                    </div>
                                </div>
                            </div>
                       
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                                <div className="features-one__single">
                                    <div className="features-one__single-icon">
                                        <span className="icon-recruitment" />
                                    </div>
                                    <div className="features-one__single-text">
                                        <h4><a href="#">Certificates</a></h4>
                                        <p>value all over the world</p>
                                    </div>
                                </div>
                            </div>
                         
                        </div>
                    </div>
                </section>
               
                <section className="about-one clearfix">
                    <div className="container">
                        <div className="row">
                        
                            <div className="col-xl-6">
                                <div className="about-one__left">
                                    <ul className="about-one__left-img-box list-unstyled clearfix">
                                        <li className="about-one__left-single">
                                            <div className="about-one__left-img1">
                                                <img src="assets/images/about/about-v1-img1.jpg" />
                                            </div>
                                        </li>
                                        <li className="about-one__left-single">
                                            <div className="about-one__left-img2">
                                                <img src="assets/images/about/about-v1-img2.jpg" />
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="about-one__left-overlay">
                                        <div className="icon">
                                            <span className="icon-relationship" />
                                        </div>
                                        <div className="title">
                                            <h6>Trusted by<br /><span className="odometer" data-count={8800}>00</span> customers</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          
                            <div className="col-xl-6">
                                <div className="about-one__right">
                                    <div className="section-title">
                                        <span className="section-title__tagline">About Zilom Company</span>
                                        <h2 className="section-title__title">Welcome to the Online <br />Learning Center</h2>
                                    </div>
                                    <div className="about-one__right-inner">
                                        <p className="about-one__right-text">There are many variations of passages of lorem ipsum
                                            available but the majority have suffered  eration in some form by injected humour
                                            or randomised words which don't look.</p>
                                        <ul className="about-one__right-list list-unstyled">
                                            <li className="about-one__right-list-item">
                                                <div className="icon">
                                                    <span className="icon-confirmation" />
                                                </div>
                                                <div className="text">
                                                    <p>Get unlimited access to 66000+ of our top courses</p>
                                                </div>
                                            </li>
                                            <li className="about-one__right-list-item">
                                                <div className="icon">
                                                    <span className="icon-confirmation" />
                                                </div>
                                                <div className="text">
                                                    <p>Explore a variety of fresh educational topics</p>
                                                </div>
                                            </li>
                                            <li className="about-one__right-list-item">
                                                <div className="icon">
                                                    <span className="icon-confirmation" />
                                                </div>
                                                <div className="text">
                                                    <p>Find the best qualitfied teacher for you</p>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="about-one__btn">
                                            <a href="about.html" className="thm-btn">view all courses</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         
                        </div>
                    </div>
                </section>
              
                <section className="courses-one">
                    <div className="container">
                        <div className="section-title text-center">
                            <span className="section-title__tagline">Checkout New List</span>
                            <h2 className="section-title__title">Explore Courses</h2>
                        </div>
                        <div className="row">

                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="courses-one__single wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1000ms">
                                    <div className="courses-one__single-img">
                                        <img src="assets/images/resources/courses-v1-img1.jpg" />
                                        <div className="overlay-text">
                                            <p>Featured</p>
                                        </div>
                                    </div>
                                    <div className="courses-one__single-content">
                                        <div className="courses-one__single-content-overlay-img">
                                            <img src="assets/images/resources/courses-v1-overlay-img1.png" />
                                        </div>
                                        <h6 className="courses-one__single-content-name">Kevin Martin</h6>
                                        <h4 className="courses-one__single-content-title"><a href="course-details.html">Become a
                                            React Developer</a></h4>
                                        <div className="courses-one__single-content-review-box">
                                            <ul className="list-unstyled">
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                            </ul>
                                            <div className="rateing-box">
                                                <span>(4)</span>
                                            </div>
                                        </div>
                                        <p className="courses-one__single-content-price">$30.00</p>
                                        <ul className="courses-one__single-content-courses-info list-unstyled">
                                            <li>2 Lessons</li>
                                            <li>10 Hours</li>
                                            <li>Beginner</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                     
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="courses-one__single wow fadeInLeft" data-wow-delay="100ms" data-wow-duration="1000ms">
                                    <div className="courses-one__single-img">
                                        <img src="assets/images/resources/courses-v1-img2.jpg" />
                                        <div className="overlay-text">
                                            <p>free</p>
                                        </div>
                                    </div>
                                    <div className="courses-one__single-content">
                                        <div className="courses-one__single-content-overlay-img">
                                            <img src="assets/images/resources/courses-v1-overlay-img2.png" />
                                        </div>
                                        <h6 className="courses-one__single-content-name">Christine Eve</h6>
                                        <h4 className="courses-one__single-content-title"><a href="course-details.html">Become a
                                            React Developer</a></h4>
                                        <div className="courses-one__single-content-review-box">
                                            <ul className="list-unstyled">
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                            </ul>
                                            <div className="rateing-box">
                                                <span>(4)</span>
                                            </div>
                                        </div>
                                        <p className="courses-one__single-content-price">$30.00</p>
                                        <ul className="courses-one__single-content-courses-info list-unstyled">
                                            <li>2 Lessons</li>
                                            <li>10 Hours</li>
                                            <li>Beginner</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                      
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="courses-one__single wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1000ms">
                                    <div className="courses-one__single-img">
                                        <img src="assets/images/resources/courses-v1-img3.jpg" />
                                        <div className="overlay-text">
                                            <p>Featured</p>
                                        </div>
                                    </div>
                                    <div className="courses-one__single-content">
                                        <div className="courses-one__single-content-overlay-img">
                                            <img src="assets/images/resources/courses-v1-overlay-img3.png" />
                                        </div>
                                        <h6 className="courses-one__single-content-name">David Cooper</h6>
                                        <h4 className="courses-one__single-content-title"><a href="course-details.html">Become a
                                            React Developer</a></h4>
                                        <div className="courses-one__single-content-review-box">
                                            <ul className="list-unstyled">
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                            </ul>
                                            <div className="rateing-box">
                                                <span>(4)</span>
                                            </div>
                                        </div>
                                        <p className="courses-one__single-content-price">$30.00</p>
                                        <ul className="courses-one__single-content-courses-info list-unstyled">
                                            <li>2 Lessons</li>
                                            <li>10 Hours</li>
                                            <li>Beginner</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*End Single Courses One*/}
                            {/*Start Single Courses One*/}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="courses-one__single wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1000ms">
                                    <div className="courses-one__single-img">
                                        <img src="assets/images/resources/courses-v1-img4.jpg" />
                                    </div>
                                    <div className="courses-one__single-content">
                                        <div className="courses-one__single-content-overlay-img">
                                            <img src="assets/images/resources/courses-v1-overlay-img4.png" />
                                        </div>
                                        <h6 className="courses-one__single-content-name">Sarah Albert</h6>
                                        <h4 className="courses-one__single-content-title"><a href="course-details.html">Become a
                                            React Developer</a></h4>
                                        <div className="courses-one__single-content-review-box">
                                            <ul className="list-unstyled">
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                            </ul>
                                            <div className="rateing-box">
                                                <span>(4)</span>
                                            </div>
                                        </div>
                                        <p className="courses-one__single-content-price">$30.00</p>
                                        <ul className="courses-one__single-content-courses-info list-unstyled">
                                            <li>2 Lessons</li>
                                            <li>10 Hours</li>
                                            <li>Beginner</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*End Single Courses One*/}
                            {/*Start Single Courses One*/}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="courses-one__single wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1000ms">
                                    <div className="courses-one__single-img">
                                        <img src="assets/images/resources/courses-v1-img5.jpg" />
                                    </div>
                                    <div className="courses-one__single-content">
                                        <div className="courses-one__single-content-overlay-img">
                                            <img src="assets/images/resources/courses-v1-overlay-img5.png" />
                                        </div>
                                        <h6 className="courses-one__single-content-name">Sarah Albert</h6>
                                        <h4 className="courses-one__single-content-title"><a href="course-details.html">Become a
                                            React Developer</a></h4>
                                        <div className="courses-one__single-content-review-box">
                                            <ul className="list-unstyled">
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                            </ul>
                                            <div className="rateing-box">
                                                <span>(4)</span>
                                            </div>
                                        </div>
                                        <p className="courses-one__single-content-price">$30.00</p>
                                        <ul className="courses-one__single-content-courses-info list-unstyled">
                                            <li>2 Lessons</li>
                                            <li>10 Hours</li>
                                            <li>Beginner</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*End Single Courses One*/}
                            {/*Start Single Courses One*/}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="courses-one__single wow fadeInLeft" data-wow-delay="100ms" data-wow-duration="1000ms">
                                    <div className="courses-one__single-img">
                                        <img src="assets/images/resources/courses-v1-img6.jpg" />
                                        <div className="overlay-text">
                                            <p>Featured</p>
                                        </div>
                                    </div>
                                    <div className="courses-one__single-content">
                                        <div className="courses-one__single-content-overlay-img">
                                            <img src="assets/images/resources/courses-v1-overlay-img6.png" />
                                        </div>
                                        <h6 className="courses-one__single-content-name">Kevin Martin</h6>
                                        <h4 className="courses-one__single-content-title"><a href="course-details.html">Become a
                                            React Developer</a></h4>
                                        <div className="courses-one__single-content-review-box">
                                            <ul className="list-unstyled">
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                            </ul>
                                            <div className="rateing-box">
                                                <span>(4)</span>
                                            </div>
                                        </div>
                                        <p className="courses-one__single-content-price">$30.00</p>
                                        <ul className="courses-one__single-content-courses-info list-unstyled">
                                            <li>2 Lessons</li>
                                            <li>10 Hours</li>
                                            <li>Beginner</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*End Single Courses One*/}
                            {/*Start Single Courses One*/}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="courses-one__single wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1000ms">
                                    <div className="courses-one__single-img">
                                        <img src="assets/images/resources/courses-v1-img7.jpg" />
                                    </div>
                                    <div className="courses-one__single-content">
                                        <div className="courses-one__single-content-overlay-img">
                                            <img src="assets/images/resources/courses-v1-overlay-img7.png" />
                                        </div>
                                        <h6 className="courses-one__single-content-name">Christine Eve</h6>
                                        <h4 className="courses-one__single-content-title"><a href="course-details.html">Become a
                                            React Developer</a></h4>
                                        <div className="courses-one__single-content-review-box">
                                            <ul className="list-unstyled">
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                            </ul>
                                            <div className="rateing-box">
                                                <span>(4)</span>
                                            </div>
                                        </div>
                                        <p className="courses-one__single-content-price">$30.00</p>
                                        <ul className="courses-one__single-content-courses-info list-unstyled">
                                            <li>2 Lessons</li>
                                            <li>10 Hours</li>
                                            <li>Beginner</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*End Single Courses One*/}
                            {/*Start Single Courses One*/}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="courses-one__single wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1000ms">
                                    <div className="courses-one__single-img">
                                        <img src="assets/images/resources/courses-v1-img8.jpg" />
                                        <div className="overlay-text">
                                            <p>free</p>
                                        </div>
                                    </div>
                                    <div className="courses-one__single-content">
                                        <div className="courses-one__single-content-overlay-img">
                                            <img src="assets/images/resources/courses-v1-overlay-img8.png" />
                                        </div>
                                        <h6 className="courses-one__single-content-name">David Cooper</h6>
                                        <h4 className="courses-one__single-content-title"><a href="course-details.html">Become a
                                            React Developer</a></h4>
                                        <div className="courses-one__single-content-review-box">
                                            <ul className="list-unstyled">
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                            </ul>
                                            <div className="rateing-box">
                                                <span>(4)</span>
                                            </div>
                                        </div>
                                        <p className="courses-one__single-content-price">$30.00</p>
                                        <ul className="courses-one__single-content-courses-info list-unstyled">
                                            <li>2 Lessons</li>
                                            <li>10 Hours</li>
                                            <li>Beginner</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*End Single Courses One*/}
                        </div>
                    </div>
                </section>
                {/*Courses One End*/}
                {/*Registration One Start*/}
                <section className="registration-one jarallax" data-jarallax data-speed="0.2" data-imgposition="50% 0%">
                    <div className="registration-one__bg" style={{ backgroundImage: 'url(assets/images/resources/registration-one-bg.jpg)' }} />
                    <div className="container">
                        <div className="row">
                            {/*Start Registration One Left*/}
                            <div className="col-xl-7 col-lg-7">
                                <div className="registration-one__left">
                                    <div className="section-title">
                                        <span className="section-title__tagline">Get Free Registration</span>
                                        <h2 className="section-title__title">Register your Account<br /> Get free Access to <span className="odometer" data-count={66000}>00</span> <br />Online Courses</h2>
                                    </div>
                                    <p className="registration-one__left-text">There are many variations of passages of lorem ipsum
                                        available but the majority have suffered  eration in some form.</p>
                                    <div className="registration-one__left-transform-box">
                                        <div className="registration-one__left-transform-box-icon">
                                            <span className="icon-online-course" />
                                        </div>
                                        <div className="registration-one__left-transform-box-text">
                                            <h3><a href="#">Transform Access To Education</a></h3>
                                            <p>Discover creative projects limited editions of 100 <br />from artists, designers,
                                                and more.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*End Registration One Left*/}
                            {/*Start Registration One Right*/}
                            <div className="col-xl-5 col-lg-5">
                                <div className="registration-one__right wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
                                    <div className="registration-one__right-form">
                                        <div className="title-box">
                                            <h4>Fill your Registration</h4>
                                        </div>
                                        <div className="form-box">
                                            <form method="post" action="https://pixydrops.com/zilom/index.html">
                                                <div className="form-group">
                                                    <input type="text" name="username" placeholder="Your Name" required />
                                                </div>
                                                <div className="form-group">
                                                    <input type="email" name="email" placeholder="Email Address" required />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" name="phone" placeholder="Phone" required />
                                                </div>
                                                <div className="form-group">
                                                    <textarea placeholder="Comment" defaultValue={""} />
                                                </div>
                                                <button className="registration-one__right-form-btn" type="submit" name="submit-form">
                                                    <span className="thm-btn">apply for it</span>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*End Registration One Right*/}
                        </div>
                    </div>
                </section>
                {/*Registration One End*/}
                {/*Categories One Start*/}
                <section className="categories-one">
                    <div className="container">
                        <div className="section-title text-center">
                            <span className="section-title__tagline">Checkout New List</span>
                            <h2 className="section-title__title">Top Categories</h2>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="categories-one__wrapper">
                                    <div className="row">
                                        {/*Start Single Categories One*/}
                                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                            <div className="categories-one__single">
                                                <div className="categories-one__single-img">
                                                    <img src="assets/images/resources/categories-v1-img1.jpg" />
                                                    <div className="categories-one__single-overlay">
                                                        <div className="categories-one__single-overlay-text1">
                                                            <p>30 full courses</p>
                                                        </div>
                                                        <div className="categories-one__single-overlay-text2">
                                                            <h4>Art &amp; Design</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*End Single Categories One*/}
                                        {/*Start Single Categories One*/}
                                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                            <div className="categories-one__single">
                                                <div className="categories-one__single-img">
                                                    <img src="assets/images/resources/categories-v1-img2.jpg" />
                                                    <div className="categories-one__single-overlay">
                                                        <div className="categories-one__single-overlay-text1">
                                                            <p>30 full courses</p>
                                                        </div>
                                                        <div className="categories-one__single-overlay-text2">
                                                            <h4>Art &amp; Design</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*End Single Categories One*/}
                                        {/*Start Single Categories One*/}
                                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                                            <div className="categories-one__single">
                                                <div className="categories-one__single-img">
                                                    <img src="assets/images/resources/categories-v1-img3.jpg" />
                                                    <div className="categories-one__single-overlay">
                                                        <div className="categories-one__single-overlay-text1">
                                                            <p>30 full courses</p>
                                                        </div>
                                                        <div className="categories-one__single-overlay-text2">
                                                            <h4>Art &amp; Design</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*End Single Categories One*/}
                                        {/*Start Single Categories One*/}
                                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                                            <div className="categories-one__single">
                                                <div className="categories-one__single-img">
                                                    <img src="assets/images/resources/categories-v1-img4.jpg" />
                                                    <div className="categories-one__single-overlay">
                                                        <div className="categories-one__single-overlay-text1">
                                                            <p>30 full courses</p>
                                                        </div>
                                                        <div className="categories-one__single-overlay-text2">
                                                            <h4>Art &amp; Design</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*End Single Categories One*/}
                                    </div>
                                </div>
                                <div className="categories-one__btn text-center">
                                    <a href="#" className="thm-btn">view all courses</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Categories One End*/}
                {/*Testimonials One Start*/}
                <section className="testimonials-one clearfix">
                    <div className="auto-container">
                        <div className="section-title text-center">
                            <span className="section-title__tagline">Our Testimonials</span>
                            <h2 className="section-title__title">What They Say?</h2>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="testimonials-one__wrapper">
                                    <div className="testimonials-one__pattern"><img src="assets/images/pattern/testimonials-one-left-pattern.png" /></div>
                                    <div className="shape1"><img src="assets/images/shapes/thm-shape3.png" /></div>
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="testimonials-one__carousel owl-carousel owl-theme owl-dot-type1">
                                                {/*Start Single Testimonials One */}
                                                <div className="testimonials-one__single wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                                    <div className="testimonials-one__single-inner">
                                                        <h4 className="testimonials-one__single-title">Amazing Courses</h4>
                                                        <p className="testimonials-one__single-text">Lorem ipsum is simply free text
                                                            dolor sit amet, consectetur notted adipisicing elit sed do eiusmod
                                                            tempor incididunt ut labore et dolore magna aliqua.</p>
                                                        <div className="testimonials-one__single-client-info">
                                                            <div className="testimonials-one__single-client-info-img">
                                                                <img src="assets/images/testimonial/testimonials-v1-client-info-img1.png" />
                                                            </div>
                                                            <div className="testimonials-one__single-client-info-text">
                                                                <h5>Kevin Martin</h5>
                                                                <p>Developer</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*End Single Testimonials One */}
                                                {/*Start Single Testimonials One */}
                                                <div className="testimonials-one__single wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                                                    <div className="testimonials-one__single-inner">
                                                        <h4 className="testimonials-one__single-title">Amazing Courses</h4>
                                                        <p className="testimonials-one__single-text">Lorem ipsum is simply free text
                                                            dolor sit amet, consectetur notted adipisicing elit sed do eiusmod
                                                            tempor incididunt ut labore et dolore magna aliqua.</p>
                                                        <div className="testimonials-one__single-client-info">
                                                            <div className="testimonials-one__single-client-info-img">
                                                                <img src="assets/images/testimonial/testimonials-v1-client-info-img2.png" />
                                                            </div>
                                                            <div className="testimonials-one__single-client-info-text">
                                                                <h5>Christine Eve</h5>
                                                                <p>Developer</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*End Single Testimonials One */}
                                                {/*Start Single Testimonials One */}
                                                <div className="testimonials-one__single wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                                    <div className="testimonials-one__single-inner">
                                                        <h4 className="testimonials-one__single-title">Amazing Courses</h4>
                                                        <p className="testimonials-one__single-text">Lorem ipsum is simply free text
                                                            dolor sit amet, consectetur notted adipisicing elit sed do eiusmod
                                                            tempor incididunt ut labore et dolore magna aliqua.</p>
                                                        <div className="testimonials-one__single-client-info">
                                                            <div className="testimonials-one__single-client-info-img">
                                                                <img src="assets/images/testimonial/testimonials-v1-client-info-img3.png" />
                                                            </div>
                                                            <div className="testimonials-one__single-client-info-text">
                                                                <h5>David Cooper</h5>
                                                                <p>Developer</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*End Single Testimonials One */}
                                                {/*Start Single Testimonials One */}
                                                <div className="testimonials-one__single wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                                    <div className="testimonials-one__single-inner">
                                                        <h4 className="testimonials-one__single-title">Amazing Courses</h4>
                                                        <p className="testimonials-one__single-text">Lorem ipsum is simply free text
                                                            dolor sit amet, consectetur notted adipisicing elit sed do eiusmod
                                                            tempor incididunt ut labore et dolore magna aliqua.</p>
                                                        <div className="testimonials-one__single-client-info">
                                                            <div className="testimonials-one__single-client-info-img">
                                                                <img src="assets/images/testimonial/testimonials-v1-client-info-img1.png" />
                                                            </div>
                                                            <div className="testimonials-one__single-client-info-text">
                                                                <h5>Kevin Martin</h5>
                                                                <p>Developer</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*End Single Testimonials One */}
                                                {/*Start Single Testimonials One */}
                                                <div className="testimonials-one__single wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                                                    <div className="testimonials-one__single-inner">
                                                        <h4 className="testimonials-one__single-title">Amazing Courses</h4>
                                                        <p className="testimonials-one__single-text">Lorem ipsum is simply free text
                                                            dolor sit amet, consectetur notted adipisicing elit sed do eiusmod
                                                            tempor incididunt ut labore et dolore magna aliqua.</p>
                                                        <div className="testimonials-one__single-client-info">
                                                            <div className="testimonials-one__single-client-info-img">
                                                                <img src="assets/images/testimonial/testimonials-v1-client-info-img2.png" />
                                                            </div>
                                                            <div className="testimonials-one__single-client-info-text">
                                                                <h5>Christine Eve</h5>
                                                                <p>Developer</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*End Single Testimonials One */}
                                                {/*Start Single Testimonials One */}
                                                <div className="testimonials-one__single wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                                    <div className="testimonials-one__single-inner">
                                                        <h4 className="testimonials-one__single-title">Amazing Courses</h4>
                                                        <p className="testimonials-one__single-text">Lorem ipsum is simply free text
                                                            dolor sit amet, consectetur notted adipisicing elit sed do eiusmod
                                                            tempor incididunt ut labore et dolore magna aliqua.</p>
                                                        <div className="testimonials-one__single-client-info">
                                                            <div className="testimonials-one__single-client-info-img">
                                                                <img src="assets/images/testimonial/testimonials-v1-client-info-img3.png" />
                                                            </div>
                                                            <div className="testimonials-one__single-client-info-text">
                                                                <h5>David Cooper</h5>
                                                                <p>Developer</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*End Single Testimonials One */}
                                                {/*Start Single Testimonials One */}
                                                <div className="testimonials-one__single wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                                    <div className="testimonials-one__single-inner">
                                                        <h4 className="testimonials-one__single-title">Amazing Courses</h4>
                                                        <p className="testimonials-one__single-text">Lorem ipsum is simply free text
                                                            dolor sit amet, consectetur notted adipisicing elit sed do eiusmod
                                                            tempor incididunt ut labore et dolore magna aliqua.</p>
                                                        <div className="testimonials-one__single-client-info">
                                                            <div className="testimonials-one__single-client-info-img">
                                                                <img src="assets/images/testimonial/testimonials-v1-client-info-img1.png" />
                                                            </div>
                                                            <div className="testimonials-one__single-client-info-text">
                                                                <h5>Kevin Martin</h5>
                                                                <p>Developer</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*End Single Testimonials One */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Testimonials One End*/}
                {/*Company Logos One Start*/}
                <section className="company-logos-one">
                    <div className="container">
                        <div className="company-logos-one__title text-center">
                            <h6>Who Will You Learn With?</h6>
                        </div>
                        <div className="thm-swiper__slider swiper-container" data-swiper-options="{&quot;spaceBetween&quot;: 100, &quot;slidesPerView&quot;: 5, &quot;autoplay&quot;: { &quot;delay&quot;: 5000 }, &quot;breakpoints&quot;: {
          &quot;0&quot;: {
              &quot;spaceBetween&quot;: 30,
              &quot;slidesPerView&quot;: 2
          },
          &quot;375&quot;: {
              &quot;spaceBetween&quot;: 30,
              &quot;slidesPerView&quot;: 2
          },
          &quot;575&quot;: {
              &quot;spaceBetween&quot;: 30,
              &quot;slidesPerView&quot;: 3
          },
          &quot;767&quot;: {
              &quot;spaceBetween&quot;: 50,
              &quot;slidesPerView&quot;: 4
          },
          &quot;991&quot;: {
              &quot;spaceBetween&quot;: 50,
              &quot;slidesPerView&quot;: 5
          },
          &quot;1199&quot;: {
              &quot;spaceBetween&quot;: 100,
              &quot;slidesPerView&quot;: 5
          }
      }}">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <img src="assets/images/resources/Company-Logos-v1-logo1.png" />
                                </div>{/* /.swiper-slide */}
                                <div className="swiper-slide">
                                    <img src="assets/images/resources/Company-Logos-v1-logo1.png" />
                                </div>{/* /.swiper-slide */}
                                <div className="swiper-slide">
                                    <img src="assets/images/resources/Company-Logos-v1-logo1.png" />
                                </div>{/* /.swiper-slide */}
                                <div className="swiper-slide">
                                    <img src="assets/images/resources/Company-Logos-v1-logo1.png" />
                                </div>{/* /.swiper-slide */}
                                <div className="swiper-slide">
                                    <img src="assets/images/resources/Company-Logos-v1-logo1.png" />
                                </div>{/* /.swiper-slide */}
                                <div className="swiper-slide">
                                    <img src="assets/images/resources/Company-Logos-v1-logo1.png" />
                                </div>{/* /.swiper-slide */}
                                <div className="swiper-slide">
                                    <img src="assets/images/resources/Company-Logos-v1-logo1.png" />
                                </div>{/* /.swiper-slide */}
                                <div className="swiper-slide">
                                    <img src="assets/images/resources/Company-Logos-v1-logo1.png" />
                                </div>{/* /.swiper-slide */}
                                <div className="swiper-slide">
                                    <img src="assets/images/resources/Company-Logos-v1-logo1.png" />
                                </div>{/* /.swiper-slide */}
                                <div className="swiper-slide">
                                    <img src="assets/images/resources/Company-Logos-v1-logo1.png" />
                                </div>{/* /.swiper-slide */}
                            </div>
                        </div>
                    </div>
                </section>
                {/*Company Logos One End*/}
                {/*Why Choose One Start*/}
                <section className="why-choose-one">
                    <div className="container">
                        <div className="row">
                            {/*Start Why Choose One Left*/}
                            <div className="col-xl-6 col-lg-6">
                                <div className="why-choose-one__left">
                                    <div className="section-title">
                                        <span className="section-title__tagline">Why Choose Us?</span>
                                        <h2 className="section-title__title">Benefits of Learning <br />from Zilom</h2>
                                    </div>
                                    <p className="why-choose-one__left-text">There cursus massa at urnaaculis estie. Sed
                                        aliquamellus vitae ultrs condmentum leo massa mollis estiegittis miristum nulla sed medy
                                        fringilla vitae.</p>
                                    <div className="why-choose-one__left-learning-box">
                                        <div className="icon">
                                            <span className="icon-professor" />
                                        </div>
                                        <div className="text">
                                            <h4>Start learning from our experts and <br />enhance your skills</h4>
                                        </div>
                                    </div>
                                    <div className="why-choose-one__left-list">
                                        <ul className="list-unstyled">
                                            <li className="why-choose-one__left-list-single">
                                                <div className="icon">
                                                    <span className="icon-confirmation" />
                                                </div>
                                                <div className="text">
                                                    <p>Making this the first true on the Internet</p>
                                                </div>
                                            </li>
                                            <li className="why-choose-one__left-list-single">
                                                <div className="icon">
                                                    <span className="icon-confirmation" />
                                                </div>
                                                <div className="text">
                                                    <p>Lorem Ipsum is not simply random text</p>
                                                </div>
                                            </li>
                                            <li className="why-choose-one__left-list-single">
                                                <div className="icon">
                                                    <span className="icon-confirmation" />
                                                </div>
                                                <div className="text">
                                                    <p> If you are going to use a passage</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*End Why Choose One Left*/}
                            {/*Start Why Choose One Right*/}
                            <div className="col-xl-6 col-lg-6">
                                <div className="why-choose-one__right wow slideInRight animated clearfix" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div className="why-choose-one__right-img clearfix">
                                        <img src="assets/images/resources/why-choose-v1-img.jpg" />
                                        <div className="why-choose-one__right-img-overlay">
                                            <p>We’re the best institution</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*End Why Choose One Right*/}
                        </div>
                    </div>
                </section>
                {/*Why Choose One End*/}
                {/*Blog One Start*/}
                <section className="blog-one">
                    <div className="container">
                        <div className="section-title text-center">
                            <span className="section-title__tagline">Directly from the Blog</span>
                            <h2 className="section-title__title">Latest Articles</h2>
                        </div>
                        <div className="row">
                            {/*Start Single Blog One*/}
                            <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="blog-one__single">
                                    <div className="blog-one__single-img">
                                        <img src="assets/images/blog/blog-v1-img1.jpg" />
                                    </div>
                                    <div className="blog-one__single-content">
                                        <div className="blog-one__single-content-overlay-mata-info">
                                            <ul className="list-unstyled">
                                                <li><a href="#"><span className="icon-clock" />20 June</a></li>
                                                <li><a href="#"><span className="icon-user" />Admin </a></li>
                                                <li><a href="#"><span className="icon-chat" /> Comments</a></li>
                                            </ul>
                                        </div>
                                        <h2 className="blog-one__single-content-title"><a href="news-details.html">Helping Answers
                                            Stand out in Discussions</a></h2>
                                        <p className="blog-one__single-content-text">Lorem ipsum is simply free text on used by
                                            copytyping refreshing the whole area.</p>
                                    </div>
                                </div>
                            </div>
                            {/*End Single Blog One*/}
                            {/*Start Single Blog One*/}
                            <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="blog-one__single">
                                    <div className="blog-one__single-img">
                                        <img src="assets/images/blog/blog-v1-img2.jpg" />
                                    </div>
                                    <div className="blog-one__single-content">
                                        <div className="blog-one__single-content-overlay-mata-info">
                                            <ul className="list-unstyled">
                                                <li><a href="#"><span className="icon-clock" />20 June</a></li>
                                                <li><a href="#"><span className="icon-user" />Admin </a></li>
                                                <li><a href="#"><span className="icon-chat" /> Comments</a></li>
                                            </ul>
                                        </div>
                                        <h2 className="blog-one__single-content-title"><a href="news-details.html">Helping Answers
                                            Stand out in Discussions</a></h2>
                                        <p className="blog-one__single-content-text">Lorem ipsum is simply free text on used by
                                            copytyping refreshing the whole area.</p>
                                    </div>
                                </div>
                            </div>
                            {/*End Single Blog One*/}
                            {/*Start Single Blog One*/}
                            <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="blog-one__single">
                                    <div className="blog-one__single-img">
                                        <img src="assets/images/blog/blog-v1-img3.jpg" />
                                    </div>
                                    <div className="blog-one__single-content">
                                        <div className="blog-one__single-content-overlay-mata-info">
                                            <ul className="list-unstyled">
                                                <li><a href="#"><span className="icon-clock" />20 June</a></li>
                                                <li><a href="#"><span className="icon-user" />Admin </a></li>
                                                <li><a href="#"><span className="icon-chat" /> Comments</a></li>
                                            </ul>
                                        </div>
                                        <h2 className="blog-one__single-content-title"><a href="news-details.html">Helping Answers
                                            Stand out in Discussions</a></h2>
                                        <p className="blog-one__single-content-text">Lorem ipsum is simply free text on used by
                                            copytyping refreshing the whole area.</p>
                                    </div>
                                </div>
                            </div>
                            {/*End Single Blog One*/}
                        </div>
                    </div>
                </section>
                {/*Blog One End*/}
                {/*Start Newsletter One*/}
                <section className="newsletter-one">
                    <div className="container">
                        <div className="row">
                            {/*Start Newsletter One Left*/}
                            <div className="col-xl-6 col-lg-6">
                                <div className="newsletter-one__left">
                                    <div className="section-title">
                                        <h2 className="section-title__title">Subscribe to Our <br />Newsletter to Get Daily
                                            <br />Content!</h2>
                                    </div>
                                </div>
                            </div>
                            {/*End Newsletter One Left*/}
                            {/*Start Newsletter One Right*/}
                            <div className="col-xl-6 col-lg-6">
                                <div className="newsletter-one__right">
                                    <div className="shape1 zoom-fade"><img src="assets/images/shapes/thm-shape2.png" /></div>
                                    <div className="shape2 wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms"><img src="assets/images/shapes/thm-shape3.png" /></div>
                                    <div className="newsletter-form wow slideInDown" data-wow-delay="100ms" data-wow-duration="1500ms">
                                        <form action="#">
                                            <input type="text" name="email" placeholder="Enter your email" />
                                            <button type="submit"><span className="icon-paper-plane" /></button>
                                        </form>
                                        <div className="newsletter-one__right-checkbox">
                                            <input type="checkbox" name="agree " id="agree" defaultChecked />
                                            <label htmlFor="agree"><span />I agree to all terms and policies of the
                                                company</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*End Newsletter One Right*/}
                        </div>
                    </div>
                </section>
                {/*End Newsletter One*/}
            </div>

        </div>
    )
}

export default Home
