import React, { useState } from 'react';
import { FaSearch, FaBookmark } from 'react-icons/fa';
import { MdOutlineExplore, MdStars } from 'react-icons/md';
import { IoNotifications } from 'react-icons/io5';
import { RiArrowDropDownLine } from 'react-icons/ri';
import './LandingPage.css'; // For any custom styles

const LandingPage = () => {
  const [isJoinIn, setIsJoinIn] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);

  return (
    <div className="d-flex flex-column min-vh-100 bg-white">
      <header className="d-flex align-items-center justify-content-between p-4 border-bottom">
        <div className="d-flex align-items-center">
          <div className="fs-4 fw-bold text-purple">hobbycue</div>
        </div>
        <nav className="d-flex align-items-center gap-4">
          <div className="position-relative">
            <input
              type="text"
              placeholder="Search here..."
              className="form-control ps-5"
            />
            <FaSearch className="position-absolute top-50 translate-middle-y ms-3 text-muted" />
          </div>
          <div className="dropdown">
            <div className="d-flex align-items-center gap-2 position-relative">
              <MdOutlineExplore
                className="custom-rounded-icon"
                size={24}
              />
              <button
                className="btn btn-link text-dark dropdown-toggle"
                type="button"
                id="exploreDropdown"
                onClick={() => setExploreOpen(!exploreOpen)}
                aria-expanded={exploreOpen}
              >
                Explore <RiArrowDropDownLine />
              </button>
              {exploreOpen && (
                <ul
                  className="dropdown-menu show"
                  aria-labelledby="exploreDropdown"
                >
                  <li>
                    <a href="#" className="dropdown-item">
                      People - Community
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Places - Venues
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Programs - Events
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Products - Store
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Blogs
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="d-flex align-items-center gap-2">
            <MdStars className="custom-rounded-icon" size={24} />
            <button className="btn btn-link text-dark">Hobbies</button>
          </div>
          <FaBookmark className="text-purple" size={24} />
          <IoNotifications className="text-purple" size={24} />
          <button className="btn btn-outline-primary px-4 py-1 rounded">
            Sign In
          </button>
        </nav>
      </header>

      <main className="d-flex flex-grow-1 p-4 bg-light">
        <div className="main-content">
          <h1 className="display-4 fw-bold text-dark mb-4">
            Explore your <span className="text-purple">hobby</span> or{' '}
            <span className="text-purple">passion</span>
          </h1>
          <p className="text-muted mb-4">
            Sign-in to interact with a community of fellow hobbyists and an
            eco-system of experts, teachers, suppliers, classes, workshops, and
            places to practice, participate or perform. Your hobby may be about
            visual or performing arts, sports, games, gardening, model making,
            cooking, indoor or outdoor activities...
          </p>
          <p className="text-muted mb-4">
            If you are an expert or a seller, you can Add your Listing and
            promote yourself, your students, products, services or events. Hop
            on your hobbyhorse and enjoy the ride.
          </p>
          <img
            src="/assets/illustration1.png"
            alt="Illustration"
            className="img-fluid"
          />
        </div>

        <div className="side-content bg-white p-4 rounded shadow-sm custom-height">
          <div className="d-flex justify-content-between mb-4">
            <button
              className={`btn ${
                !isJoinIn ? 'btn-link text-dark fw-bold' : 'btn-link text-muted'
              }`}
              onClick={() => setIsJoinIn(false)}
            >
              Sign In
            </button>
            <button
              className={`btn ${
                isJoinIn ? 'btn-link text-dark fw-bold' : 'btn-link text-muted'
              }`}
              onClick={() => setIsJoinIn(true)}
            >
              Join In
            </button>
          </div>
          <div className="d-flex flex-column gap-3">
            <button className="btn btn-outline-dark w-100 py-2 ">
              <img
                src="/assets/google.png"
                alt="Google"
                className="me-2"
              />{' '}
              {isJoinIn ? 'Continue with Google' : 'Continue with Google'}
            </button>
            <button className="btn btn-outline-dark w-100 py-2">
              <img
                src="/assets/facebook.png"
                alt="Facebook"
                className="me-2"
              />{' '}
              {isJoinIn ? 'Continue with Facebook' : 'Continue with Facebook'}
            </button>
            <div className="text-center text-muted">Or connect with</div>
            <input type="email" placeholder="Email" className="form-control mb-2" />
            <input
              type="password"
              placeholder="Password"
              className="form-control mb-2"
            />
            <div className="d-flex justify-content-between mb-2">
              <label className="d-flex align-items-center gap-1">
                <input type="checkbox" className="form-check-input" />
                <span className="text-muted">Remember me</span>
              </label>
              <a href="#" className="text-primary">
                Forgot password?
              </a>
            </div>
            <button className="btn btn-primary w-100 py-2">
              {isJoinIn ? 'Agree and Continue' : 'Continue'}
            </button>
          </div>
          {isJoinIn && (
            <div className="text-center text-muted mt-3">
              By continuing, you agree to our{' '}
              <a href="#" className="text-primary">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-primary">
                Privacy Policy
              </a>
              .
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
