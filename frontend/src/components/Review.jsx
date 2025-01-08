import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useReviewStore } from "../store/useReviewStore";
import { useParams } from "react-router-dom";
import { useUserAuthStore } from "../store/useUserAuthStore";

const Review = ({ name, rating, comment }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-sm font-semibold">{name}</h4>
      </div>
      <div className="flex items-center mb-2">
        {Array.from({ length: rating }, (_, index) => (
          <FaStar key={index} className="w-5 h-5 text-yellow-500" />
        ))}
      </div>
      <p className="text-gray-600 text-sm">{comment}</p>
    </div>
  );
};

const Reviews = () => {
  
  const { postReview, getReviews, reviews } = useReviewStore();
  const { authUser } = useUserAuthStore();
  const { barberId } = useParams();

  

  const [newReview, setNewReview] = useState({
    rating: 1,
    comment: "",
  });

  useEffect(() => {
    getReviews(barberId);
  }, [barberId, getReviews]);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevReview) => ({ ...prevReview, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data ={
      rating:newReview.rating,
      comment:newReview.comment,
      barberId:barberId,
      name:authUser?.fullName
    }
    postReview(data)
    setNewReview({ name: `${authUser.fullName}`, rating: 1, comment: "" });
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Add a Review</h2>
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Rating</label>
          <div className="flex items-center">
            {Array.from({ length: 5 }, (_, index) => (
              <FaStar
                key={index}
                className={`cursor-pointer w-5 h-5 ${
                  newReview.rating > index ? "text-yellow-500" : "text-gray-300"
                }`}
                onClick={() =>
                  setNewReview({ ...newReview, rating: index + 1 })
                }
              />
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Comment</label>
          <textarea
            name="comment"
            value={newReview.comment}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Submit
        </button>
      </form>
      {reviews?.map((review, index) => (
        <Review
          key={index}
          name={review.name}
          rating={review.rating}
          comment={review.comment}
        />
      ))}
    </div>
  );
};

export default Reviews;
