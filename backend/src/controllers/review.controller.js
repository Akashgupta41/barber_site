import Barber from "../models/barber.model.js";
import Review from "../models/review.model.js";


export const postReview = async (req, res) => {
  const { name, rating, comment, barberId } = req.body;
  console.log(name);
  
  try {
    const review = new Review({
      name,
      rating,
      comment,
      barber: barberId,
    });

    await review.save();

    res.status(201).json({ message: "Review posted successfully", review });
  } catch (error) {
    console.log("Error in posting review", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


export const getBarberReview = async (req, res) => {
  const { barberId } = req.params;

  try {
    const reviews = await Review.find({ barber: barberId });
    res.status(200).json(reviews);
  } catch (error) {
    console.log("Error in review controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
