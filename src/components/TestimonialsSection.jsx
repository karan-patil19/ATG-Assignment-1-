import React from 'react';

const TestimonialsSection = () => {
  return (
    <div className="container mt-5">
      <div className="card p-4">
        <div className="card-body">
          <h3 className="card-title">
            <i className="fas fa-quote-left text-primary mr-2"></i> Testimonials
          </h3>
          <p className="card-text">
            In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like-minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
          </p>
          <div className="d-flex align-items-center">
            <div className="mr-3">
              <audio controls className="w-100">
                <source src="audio/testimonial.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
            <div className="text-center">
              <img src="path-to-image" alt="Shubha Nagarajan" className="rounded-circle" width="50" height="50" />
              <p className="mb-0"><strong>Shubha Nagarajan</strong></p>
              <p className="text-muted">Classical Dancer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
