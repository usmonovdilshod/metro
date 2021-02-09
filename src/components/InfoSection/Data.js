import ReactLo from "../../images/about.svg";
import ReactLo2 from "../../images/undraw.svg";
import Signup from "../../images/signup.svg";

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Metro Team",
  headline: "The Best Team",
  description: "Get more information about our workers",
  buttonLabel: "About us",
  imgStart: false,
  img: ReactLo,
  alt: "Car",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Metro Tashkent",
  headline: "Discover one of the world’s most stunning subway",
  description: "The Complete Guide to visit Uzbekistan’s Stunning Subway ",
  buttonLabel: "Learn More",
  imgStart: true,
  img: ReactLo2,
  alt: "Piggybank",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: "signup",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Metro Tashkent",
  headline: "Buy railway tickets online",
  description:
    "You can book railway tickets online. Just fill the form and send us the request",
  buttonLabel: "Sign Up",
  imgStart: false,
  img: Signup,
  alt: "paper",
  dark: false,
  primary: false,
  darkText: true,
};
