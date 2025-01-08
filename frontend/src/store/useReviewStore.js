import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useReviewStore = create((set) => ({
  reviews: null,
  isPostingReview: false,
  isGettingReview: false,

  getReviews: async (barberId) => {
    set({ isGettingReview: true });
    try {
      const res = await axiosInstance.get(`/review/get/${barberId}`);
      set({ reviews: res.data });  
    } catch (error) {
      console.log("error in getting review:", error);
    } finally {
      set({ isGettingReview: false });
    }
  },

     postReview: async (data) => {
    set({ isPostingReview: true });
    try {
      const res = await axiosInstance.post(`/review/post`,data);
      toast.success("Done thanks for Review !");
    } catch (error) {
      console.log("error in posting review:", error);
      toast.error(error.response.data.message);
    } finally {
      set({ isPostingReview: false });
    }
  },


}));
