"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";

export function Home() {
  const images = [
    "https://imgs.search.brave.com/OZSco0To6XcppV1d1n_iEy4eWViNFwqLzbnltQwtv5s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMz/MzI1NzkzMi9waG90/by9kaWdpdGFsbHkt/Z2VuZXJhdGVkLWlt/YWdlLW9mLXRoZS1s/dXh1cmlvdXMtaG90/ZWwtbG9iYnkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUtR/YjZ4dnJ1TVRJZU1z/c0xNem9vb3ZLZXVL/c1pHM1BvR3pkMUx5/RG1PODQ9",
    "https://imgs.search.brave.com/6Ckr-evCqp6DOmbeE3eoG0uhq83e3OLDpUmvEHt3a1c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIw/NDgxMTg2NS9waG90/by9iZWRzLWluLWhv/dGVsLXJvb20tYXQt/dG91cmlzdC1yZXNv/cnQuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPU9FTHBVdFNy/Um5IMUw2bFg5dkcz/UW14ZFI4LXBfYkhX/RjUxYjFEZzRseHM9",
    "https://imgs.search.brave.com/jNJOFV_Z8gRkeP01BlnyV3e_df7lvpPnL4cCCW7Mdmo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA3/NzExMTYwNi9waG90/by9sdXh1cnktZml2/ZS1zdGFycy1ob3Rl/bHMtbG9iYnkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW13/cGVTYUJXVHJlMldF/R0dkNHViTFFWQlJW/YWxTbDQwZzRrczA0/bktqbkk9",
    "https://imgs.search.brave.com/TWTz8RqIaPTBB5dChmddJ4CNqKqE1biXrtwWwb9pRYw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8w/OS8yMS8wOS81My92/aWxsYS1jb3J0aW5l/LXBhbGFjZS05NDk1/NDdfNjQwLmpwZw",
    "https://imgs.search.brave.com/ZM2V--59N-1cMl6UdwF8gV_GtS6mbZ-Ku74vyMSNjhg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMz/MzI1NzkzNC9waG90/by8zZC1yZW5kZXIt/b2YtYS1ob3RlbC13/YWl0aW5nLWxvdW5n/ZS13aXRoLXNvZmEt/YW5kLWFybWNoYWly/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1fZWFMcWRMenVE/RTgtOTIxVkdaWTZv/dWpuZXY1Tk5pZU5N/aUgwbWxQbzhnPQ",
  ];
  return (
    <section id="home" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
        Luxury Awaits <br />Your Dream Vacation Starts Here
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Book Your's Room -{">"}</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
    </section>
  );
}
export default Home;