"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card as CarouselCard } from "@/components/ui/apple-cards-carousel";

type Card = {
  category: string;
  title: string;
  src: string;
  content: string; 
};

// Sample data for the carousel
const data: Card[] = [
    {
        category: "Luxury Accommodation",
        title: "Experience Unmatched Comfort.",
        src: "https://imgs.search.brave.com/OVP8qXVVDcH_cphBdkH2PVcesgFQN9Ub7l_Y9_VZebg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA4LzAwLzc0Lzg3/LzM2MF9GXzgwMDc0/ODcwOV9IYlAyVHBn/ek40NTEwUXdqaWJ1/QUxnSmhFakV4T0Fs/YS5qcGc",
        content: "Indulge in our elegantly designed rooms that offer a serene retreat with stunning views."
      },
      {
        category: "Gourmet Dining",
        title: "Savor Culinary Excellence.",
        src: "https://imgs.search.brave.com/DI7-RsxpqUjtkAp6g9Cujn0V2Wuq-A-r6_Qq5qidqEM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzMwLzA2LzY0/LzM2MF9GXzgzMDA2/NjQ0MF85ZTN0d0o0/bjQ1U01uUnBBSXJ2/bGpUUFl6bEtMdUVJ/Ui5qcGc",
        content: "Delight your taste buds with a variety of dishes prepared by our world-class chefs."
      },
      {
        category: "Wellness & Spa",
        title: "Rejuvenate Your Senses.",
        src: "https://imgs.search.brave.com/bGhUWFrisdoF47TXQK32MC1hcGr2u5JQItz5Tmk5HhM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8w/My8yOC8wOS8zNC9i/ZWRyb29tLTEyODUx/NTZfMTI4MC5qcGc",
        content: "Relax and unwind with our luxurious spa services designed to pamper and refresh you."
      },
      {
        category: "Unique Experiences",
        title: "Create Unforgettable Memories.",
        src:"https://imgs.search.brave.com/tPRAC4_YoRhdGKp3kwo31Jtb1AnsUpDgzbtzS__BH0A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzQ5Lzg5LzAz/LzM2MF9GXzI0OTg5/MDM5NV9GNEVtUG9x/aHN0OXFPc0hlOGoy/d1EyRXM3eWxrVEJv/WS5qcGc",
        content: "Participate in exclusive activities and excursions that showcase the beauty of our location."
      },
      {
        category: "Business Facilities",
        title: "Host Your Events with Style.",
        src: "https://imgs.search.brave.com/03E5XZjfbY8qNmcBXrt-LtzxsvGev7wIRpg2CTDGS9Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOC8w/Mi8yNC8xNy8xNy93/aW5kb3ctMzE3ODY2/Nl82NDAuanBn",
        content: "Utilize our state-of-the-art conference rooms equipped with the latest technology."
      },
      {
        category: "Sustainability",
        title: "Committed to Eco-Friendly Practices.",
        src: "https://imgs.search.brave.com/uYri6pssPHBjiBp2uqo6aRZklX17Q3Bk-IBbIopgTdQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jbGVhbi10aWR5/LWhvdGVsLXJvb21z/XzE0OTE5Ny04NC5q/cGc_c2l6ZT02MjYm/ZXh0PWpwZw",
        content: "Discover our initiatives aimed at promoting sustainability and protecting the environment."
      },
];

// Carousel demo component
export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <CarouselCard key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 m-1 ml-0">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold font-sans">
        From Vision to Reality
      </h2>
      <Carousel items={cards} />
    </div>
  );
}
