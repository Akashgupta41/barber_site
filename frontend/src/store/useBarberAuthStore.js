import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useBarberAuthStore = create((set) => ({
  isAddingShopInfo: false,
  authBarber: null,
  isgetBarbers: true,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isCheckingBarberAuth:true,
  barbers: [],
  fetchedBarber: null,

  checkBarberAuth: async () => {
    try {
      const res = await axiosInstance.get("/barber/profile");
      set({ authBarber: res.data });
    } catch (error) {
      console.log("error in checkAuth", error);
      set({ authBarber: null });
    } finally {
      set({ isCheckingBarberAuth: false });
    }
  },

  updateProfile: async (data) => {
    set({ isUpdatingProfile: true });
    try {
      const res = await axiosInstance.put("/barber/update-profile", data);
      set({ authBarber: res.data });
      toast.success("Profile updated successfully");
    } catch (error) {
      console.log("error in update profile:", error);
      toast.error(error.response.data.message);
    } finally {
      set({ isUpdatingProfile: false });
    }
  },

  getAllBarbers: async () => {
    try {
      const res = await axiosInstance.get("/barber/all");
      set({ barbers: res.data.barbers });
    } catch (error) {
      console.log("error in checkAuth", error);
      set({ barbers: null });
    }
  },
  barberSignUp: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/barber/signup", data);
      set({ authBarber: res.data });
      toast.success("Acount Created Successfully");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    } finally {
      set({ isSigningUp: false });
    }
  },

  barberLogin: async (data) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/barber/login", data);
      set({ authBarber: res.data });
      toast.success("LoggedIn Successfully");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    } finally {
      set({ isLoggingIn: false });
    }
  },

  barberLogout: async () => {
    try {
      await axiosInstance.post("/barber/logout");
      set({ authBarber: null });
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },

  addShopInfo: async (data) => {
    set({ isAddingShopInfo: true });
    try {
      const res = await axiosInstance.put("/barber/add/shop", data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(res);
      toast.success("Shop Info Added Successfully");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    } finally {
      set({ isAddingShopInfo: false });
    }
  }
,  

  fetchBarberDetails: async (barberId) => {
    try {
      const response = await axiosInstance.get(`/barber/${barberId}`);
      set({ fetchedBarber: response.data.barber });
    } catch (error) {
      console.error("Failed to fetch barber details:", error);
    }
  },
}));
