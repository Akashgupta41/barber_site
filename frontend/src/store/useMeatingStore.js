import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useMeatingStore = create((set) => ({
  meetings: null,
  isUpdatingMeating: false,
  isSchedulingMeating: false,
  isGettingMeating: false,

  getMeatings: async (isBarber) => {
    set({ isUpdatingProfile: true });
    try {
      const res = await axiosInstance.get(
        isBarber ? `service/barber` : `service/user`
      );
      console.log(res);

      set({ meetings: res.data.scheduledServices });
    } catch (error) {
      console.log("error in update profile:", error);
      toast.error(error.response.data.message);
    } finally {
      set({ isUpdatingProfile: false });
    }
  },

  updateMeatings: async (data, meatingId) => {
    set({ isUpdatingMeating: true });
    try {
      const res = await axiosInstance.put(`/service/update/${meatingId}`, data);
      toast.success("Meating updated successfully");
    } catch (error) {
      console.log("error in scheduling meating:", error);
      toast.error(error.response.data.message);
    } finally {
      set({ isUpdatingMeating: false });
    }
  },

  scheduleMeating: async (data, barberId) => {
    set({ isSchedulingMeating: true });
    try {
      const res = await axiosInstance.post(
        `/service/schedule/${barberId}`,
        data
      );
      toast.success("Meating scheduled successfully");
    } catch (error) {
      console.log("error in scheduling meating:", error);
      toast.error(error.response.data.message);
    } finally {
      set({ isSchedulingMeating: false });
    }
  },
}));
