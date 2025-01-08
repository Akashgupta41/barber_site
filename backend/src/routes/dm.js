
import Barber from "../models/barber.model.js";

const createDummyBarbers = async () => {
  const getRandomImage = (width, height) => `https://picsum.photos/${width}/${height}`;

  const barbers = [
    {
      email: "upbarber1@example.com",
      fullName: "Barber One",
      password: await Barber.hashPassword("password1"),
      profilePic: getRandomImage(50, 50),
      shop: {
        shopname: "Barber One's Shop",
        location: {
          state: "Uttar Pradesh",
          district: "Lucknow",
          city: "Lucknow",
          landmark: "Near ABC Road",
        },
        shopimages: [getRandomImage(400, 300)],
        services: [
          { name: "Haircut", price: 200 },
          { name: "Shave", price: 100 },
        ],
        opentime: "09:00 AM",
        closetime: "08:00 PM",
        whenopen: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      },
    },
    {
      email: "upbarber2@example.com",
      fullName: "Barber Two",
      password: await Barber.hashPassword("password2"),
      profilePic: getRandomImage(50, 50),
      shop: {
        shopname: "Barber Two's Shop",
        location: {
          state: "Uttar Pradesh",
          district: "Kanpur",
          city: "Kanpur",
          landmark: "Near XYZ Park",
        },
        shopimages: [getRandomImage(400, 300)],
        services: [
          { name: "Haircut", price: 250 },
          { name: "Hair Wash", price: 150 },
        ],
        opentime: "10:00 AM",
        closetime: "09:00 PM",
        whenopen: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      },
    },
    {
      email: "upbarber3@example.com",
      fullName: "Barber Three",
      password: await Barber.hashPassword("password3"),
      profilePic: getRandomImage(50, 50),
      shop: {
        shopname: "Barber Three's Shop",
        location: {
          state: "Uttar Pradesh",
          district: "Varanasi",
          city: "Varanasi",
          landmark: "Near DEF Street",
        },
        shopimages: [getRandomImage(400, 300)],
        services: [
          { name: "Haircut", price: 220 },
          { name: "Beard Trim", price: 120 },
        ],
        opentime: "08:00 AM",
        closetime: "07:00 PM",
        whenopen: ["Monday", "Wednesday", "Thursday", "Saturday"],
      },
    },
    {
      email: "upbarber4@example.com",
      fullName: "Barber Four",
      password: await Barber.hashPassword("password4"),
      profilePic: getRandomImage(50, 50),
      shop: {
        shopname: "Barber Four's Shop",
        location: {
          state: "Uttar Pradesh",
          district: "Agra",
          city: "Agra",
          landmark: "Near GHI Mall",
        },
        shopimages: [getRandomImage(400, 300)],
        services: [
          { name: "Haircut", price: 230 },
          { name: "Hair Coloring", price: 300 },
        ],
        opentime: "10:00 AM",
        closetime: "08:00 PM",
        whenopen: ["Monday", "Wednesday", "Friday", "Saturday"],
      },
    },
    {
      email: "upbarber5@example.com",
      fullName: "Barber Five",
      password: await Barber.hashPassword("password5"),
      profilePic: getRandomImage(50, 50),
      shop: {
        shopname: "Barber Five's Shop",
        location: {
          state: "Uttar Pradesh",
          district: "Ghaziabad",
          city: "Ghaziabad",
          landmark: "Near JKL Tower",
        },
        shopimages: [getRandomImage(400, 300)],
        services: [
          { name: "Haircut", price: 240 },
          { name: "Shave", price: 120 },
        ],
        opentime: "09:00 AM",
        closetime: "08:00 PM",
        whenopen: ["Tuesday", "Wednesday", "Friday", "Saturday", "Sunday"],
      },
    },
    {
      email: "upbarber6@example.com",
      fullName: "Barber Six",
      password: await Barber.hashPassword("password6"),
      profilePic: getRandomImage(50, 50),
      shop: {
        shopname: "Barber Six's Shop",
        location: {
          state: "Uttar Pradesh",
          district: "Meerut",
          city: "Meerut",
          landmark: "Near MNO Garden",
        },
        shopimages: [getRandomImage(400, 300)],
        services: [
          { name: "Haircut", price: 200 },
          { name: "Beard Trim", price: 130 },
        ],
        opentime: "08:00 AM",
        closetime: "07:00 PM",
        whenopen: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      },
    },
    {
      email: "upbarber7@example.com",
      fullName: "Barber Seven",
      password: await Barber.hashPassword("password7"),
      profilePic: getRandomImage(50, 50),
      shop: {
        shopname: "Barber Seven's Shop",
        location: {
          state: "Uttar Pradesh",
          district: "Noida",
          city: "Noida",
          landmark: "Near PQR Market",
        },
        shopimages: [getRandomImage(400, 300)],
        services: [
          { name: "Haircut", price: 180 },
          { name: "Facial", price: 200 },
        ],
        opentime: "09:00 AM",
        closetime: "08:00 PM",
        whenopen: ["Wednesday", "Thursday", "Friday", "Saturday"],
      },
    },
    {
      email: "upbarber8@example.com",
      fullName: "Barber Eight",
      password: await Barber.hashPassword("password8"),
      profilePic: getRandomImage(50, 50),
      shop: {
        shopname: "Barber Eight's Shop",
        location: {
          state: "Uttar Pradesh",
          district: "Aligarh",
          city: "Aligarh",
          landmark: "Near STU Circle",
        },
        shopimages: [getRandomImage(400, 300)],
        services: [
          { name: "Haircut", price: 210 },
          { name: "Shave", price: 110 },
        ],
        opentime: "10:00 AM",
        closetime: "09:00 PM",
        whenopen: ["Monday", "Tuesday", "Wednesday", "Friday", "Saturday"],
      },
    },
    {
      email: "upbarber9@example.com",
      fullName: "Barber Nine",
      password: await Barber.hashPassword("password9"),
      profilePic: getRandomImage(50, 50),
      shop: {
        shopname: "Barber Nine's Shop",
        location: {
          state: "Uttar Pradesh",
          district: "Bareilly",
          city: "Bareilly",
          landmark: "Near VWX Complex",
        },
        shopimages: [getRandomImage(400, 300)],
        services: [
          { name: "Haircut", price: 220 },
          { name: "Shave", price: 120 },
        ],
        opentime: "09:00 AM",
        closetime: "08:00 PM",
        whenopen: ["Tuesday", "Wednesday", "Thursday", "Saturday"],
      },
    },
    {
      email: "upbarber10@example.com",
      fullName: "Barber Ten",
      password: await Barber.hashPassword("password10"),
      profilePic: getRandomImage(50, 50),
      shop: {
        shopname: "Barber Ten's Shop",
        location: {
          state: "Uttar Pradesh",
          district: "Gorakhpur",
          city: "Gorakhpur",
          landmark: "Near YZ Park",
        },
        shopimages: [getRandomImage(400, 300)],
        services: [
          { name: "Haircut", price: 250 },
          { name: "Head Massage", price: 150 },
        ],
        opentime: "10:00 AM",
        closetime: "09:00 PM",
        whenopen: ["Monday", "Wednesday", "Thursday", "Friday"],
      },
    },
  ];

  try {
    await Barber.insertMany(barbers);
    console.log("Dummy barbers created successfully.");
  } catch (error) {
    console.error("Error creating dummy barbers:", error);
  }
};



export default createDummyBarbers
