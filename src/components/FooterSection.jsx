import React from 'react';
import './FooterSection.css';  // Ensure the CSS file is imported

const FooterSection = () => {
  return (
    <div className="container-fluid bg-light mt-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-12 text-center mb-4">
            <h2>Your Hobby, Your Community...</h2>
            <button className="btn btn-primary mt-3">Get started</button>
          </div>
          <div className="col-md-12 text-center mb-5">
            <img src="./assets/illustration2.png" alt="Community" className="img-fluid" />
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-3 mb-3">
            <h5>Hobbycue</h5>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Our Services</li>
              <li>Work with Us</li>
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col-md-3 mb-3">
            <h5>How Do I</h5>
            <ul className="list-unstyled">
              <li>Sign Up</li>
              <li>Add a Listing</li>
              <li>Claim Listing</li>
              <li>Post a Query</li>
              <li>Add a Blog Post</li>
              <li>Other Queries</li>
            </ul>
          </div>
          <div className="col-md-3 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>Listings</li>
              <li>Blog Posts</li>
              <li>Shop / Store</li>
              <li>Community</li>
            </ul>
          </div>
          <div className="col-md-3 mb-3">
            <h5>Social Media</h5>
            <ul className="list-unstyled d-flex justify-content-center">
              <li className="mr-3 "><i className="fab fa-facebook-f"></i></li>
              <li className="mr-3"><i className="fab fa-twitter"></i></li>
              <li className="mr-3"><i className="fab fa-instagram"></i></li>
              <li className="mr-3"><i className="fab fa-pinterest"></i></li>
              <li className="mr-3"><i className="fab fa-youtube"></i></li>
              <li className="mr-3"><i className="fab fa-telegram"></i></li>
              <li><i className="fas fa-envelope"></i></li>
            </ul>
            <div className="mt-3">
              <input type="email" className="form-control" placeholder="Email ID" />
              <button className="btn btn-primary mt-2">Invite</button>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12 text-center">
            <p>© Purple Cues Private Limited</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
