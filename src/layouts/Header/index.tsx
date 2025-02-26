
const Header = () => {
    return (

        <header className="main-header main-header--one  clearfix">
            <div className="main-header--one__top clearfix">
                <div className="container">
                    <div className="main-header--one__top-inner clearfix">
                        <div className="main-header--one__top-left">
                            <div className="main-header--one__top-logo">
                                <a href="index-2.html">
                                    <img src="assets/images/logo-web-client.png" alt="" />
                                </a>
                            </div>
                        </div>

                        <div className="main-header--one__top-right clearfix">

                            <div className="main-header--one__top-contact-info clearfix">
                                <ul className="main-header--one__top-contact-info-list list-unstyled">
                                    <li className="main-header--one__top-contact-info-list-item">
                                        <div className="icon">
                                            <span className="icon-phone-call-1"></span>
                                        </div>
                                        <div className="text">
                                            <h6>Contact</h6>
                                            <p><a href="tel:8386 8386">+84 8386 8386</a></p>
                                        </div>
                                    </li>
                                    <li className="main-header--one__top-contact-info-list-item">
                                        <div className="icon">
                                            <span className="icon-message"></span>
                                        </div>
                                        <div className="text">
                                            <h6>Email</h6>
                                            <p><a href="mailto:learnease@gmail.com">learneaseswd@gmail.com</a></p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div className="main-header-one__bottom clearfix">
                <div className="container">
                    <div className="main-header-one__bottom-inner clearfix">
                        <nav className="main-menu main-menu--1">
                            <div className="main-menu__inner">
                                <a href="#" className="mobile-nav__toggler"><i className="fa fa-bars"></i></a>

                                <div className="left">
                                    <ul className="main-menu__list">
                                        <li className="dropdown current">
                                            <a href="/">Home</a>
                                        </li>
                                        <li><a href="#">About</a></li>
                                        <li className="dropdown">
                                            <a href="#">Courses</a>
                                            <ul>
                                                <li><a href="courses.html">Courses</a></li>
                                                <li><a href="course-details.html">Course Details</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <a href="#">News</a>
                                            <ul>
                                                <li><a href="news.html">News</a></li>
                                                <li><a href="news-details.html">News Details</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </div>

                                <div className="right">
                                    <div className="main-menu__right">
                                        <div className="main-menu__right-login-register">
                                            <ul className="list-unstyled">
                                                <li><a href="/login">Login</a></li>
                                                <li><a href="#">Register</a></li>
                                            </ul>
                                        </div>
                                        <div className="main-menu__right-cart-search">
                                            <div className="main-menu__right-search-box">
                                                <a href="#" className="thm-btn search-toggler">Download App</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </nav>

                    </div>
                </div>
            </div>

        </header>


    )
}

export default Header
