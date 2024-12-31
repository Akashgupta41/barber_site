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
  isCheckingBarberAuth: true,
  barbers: [],

  checkBarberAuth: async () => {
    try {
      const res = await axiosInstance.get("/barber/profile");
      set({ authBarber: res.data });
     
      
    } catch (error) {
      console.log("error in checkAuth", error);
      set({ authBarber: null });
    } finally {
      set({ isgetBarbers: false });
    }
  },

  getAllBarbers: async () => {
    try {
      const res = await axiosInstance.get("/barber/all");
      set({ barbers: res.data.barbers });
    } catch (error) {
      console.log("error in checkAuth", error);
      set({ barbers: null });
    } finally {
      set({ isCheckingBarberAuth: false });
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

  addShopInfo: async (data) => {
    set({ isAddingShopInfo: true });
    try {
      const res = await axiosInstance.put("/barber/add/shop", data);
      toast.success("Shop  Info Added Successfully");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    } finally {
      set({ isAddingShopInfo: false });
    }
  },
}));
