import React from "react";
import "./Reviews.css"; // Import the CSS file

const Reviews = () => {
  const testimonials = [
    {
      name: "Refreshing & Effective",

      image:
        "https://media.istockphoto.com/id/1473711199/photo/face-portrait-student-and-man-in-university-ready-for-back-to-school-learning-goals-or.jpg?s=612x612&w=0&k=20&c=Xrwp5ePvm6RjixgAjJo-OAw9oXkLt_HcmT3bdlLZUdw=",
      content:
        "This energy drink is amazing! It gives me a quick boost without the jitters, and the flavor is super refreshing. Perfect for long workdays or workouts!",
    },
    {
      name: "My Go-To Energy Boost",

      image:
        "https://img.freepik.com/free-photo/closeup-young-hispanic-man-casuals-studio_662251-600.jpg",
      content:
        "I've tried many energy drinks, but this one stands out. It’s not too sweet, provides a smooth energy boost, and keeps me feeling great throughout the day!",
    },
    {
      name: "Long-Lasting Energy",

      image:
        "http://media.istockphoto.com/id/1272815911/photo/young-indian-female-university-student-stock-photo.jpg?s=612x612&w=0&k=20&c=Iwdc08GR3pw8_Qg3_nabNJUQYTo52EU3dvW4tsth1tE=",
      content:
        "I love how this drink keeps me focused and alert for hours! Perfect for studying or working late. Plus, it doesn’t have that artificial aftertaste.",
    },
    {
      name: "Tastes Great & Works Well",

      image:
        "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg",
      content:
        "Unlike other energy drinks, this one actually tastes great! It gives me the right amount of energy without being overpowering. Definitely my new favorite!",
    },
  ];

  return (
    <section className="reviews-section">
      <div className="reviews-container">
        <h2 className="reviews-title">
         Taste the power, Read the Truth
        </h2>
        <div className="reviews-scroll-container">
          <div className="reviews-scroll">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={index} className="review-card">
                <div className="card">
                  <div className="card-body">
                    <div className="avatar">
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                    <h3 className="review-name">{testimonial.name}</h3>
                    <p className="review-content">{testimonial.content}</p>
                 
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
