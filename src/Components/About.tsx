import Image from "next/image"
import Link from "next/link"
import Navbar from "./Navbar"
import HeroSection from "./HeroSection"

const About = () => {
  return (
    <div className="container pt-32">
        <h2 className="text-4xl md:text-5xl">About Us</h2>
        <p className="text gray-500 pt-4 text-justify">
        "Paras Restaurant is a charming Italian restaurant nestled in the heart of downtown. The ambiance is warm and inviting, with soft lighting and rustic decor that transports you to a cozy trattoria in Karachi. The menu features a delightful array of traditional dishes, including handmade pasta and wood-fired pizzas, with plenty of vegetarian options. The staff is friendly and knowledgeable, providing excellent service without being intrusive. Prices are reasonable considering the generous portion sizes, making it a favorite among locals and tourists alike. Whether you're looking for a romantic dinner or a family gathering, Paras Restaurant offers a memorable dining experience."
        </p>
  
    </div>
  )
}

export default About;
