"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

export function LayoutGridDemo() {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div className=""style={{ fontFamily: 'Poppins, sans-serif' }}>
      <p className="font-bold md:text-4xl text-xl text-white">
      Cozy Cabin
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      A warm and inviting cabin in the woods, perfect for a romantic getaway.
      </p>
      <span className="text-white"><h4>Rate</h4>$150/night</span>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div className=""style={{ fontFamily: 'Poppins, sans-serif' }} >
      <p className="font-bold md:text-4xl text-xl text-white">
      Sky View Suite
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Surrounded by lush greenery, this room offers a serene escape into nature.
      </p>
      <span className="text-white"><h4>Rate</h4>$200/night</span>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div className=""style={{ fontFamily: 'Poppins, sans-serif' }} >
      <p className="font-bold md:text-4xl text-xl text-white">
      Garden Retreat
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Enjoy the soothing sounds of the river from this charming bungalow
      </p>
      <span className="text-white"><h4>Rate</h4>$180/night</span>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div className=""style={{ fontFamily: 'Poppins, sans-serif' }} >
      <p className="font-bold md:text-4xl text-xl text-white">
      Riverside Bungalow
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Experience breathtaking views from this luxurious suite high above the clouds.
      </p>
      <span className="text-white"><h4>Rate</h4>$120/night</span>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://imgs.search.brave.com/_A1RJij9xb_Y72OobhrcAtVNyRpY9gsVyTuLIKEyLoU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzk4Lzc2LzE2/LzM2MF9GXzk4NzYx/NjQ4X3VMb2dOblNs/Q2ZWUzBSbXNWbFhm/N0RMYXUzbVMwdkdr/LmpwZw",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://imgs.search.brave.com/-lJNQ7RKfYdkWI01qR_5yZXzDHcFnV9U3-d88767u0E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzQ4LzA1LzY3/LzM2MF9GXzQ4MDU2/NzcyXzR4ekdRZXJS/N2xXODJ6N01QVE44/QXVsTXJhTklPWkVK/LmpwZw",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://imgs.search.brave.com/9AOCYLSNsKkYVweYE8igdq_afE8kbTdvHG-Ibs-rNLw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5jbnRyYXZlbGVy/LmNvbS9waG90b3Mv/NTNkYTVhNjY2ZGVj/NjI3YjE0OWU0ZjZi/L21hc3Rlci93XzMy/MCxjX2xpbWl0L2hv/dGVsLWJlbC1haXIt/cHJlc2lkZW50aWFs/LXN1aXRlLXBvb2wu/anBn",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://imgs.search.brave.com/e9BUleIlBZbb-QBocPXe_P81G7jEYuT_LjgOzaL1BQY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5jbnRyYXZlbGVy/LmNvbS9waG90b3Mv/NTNkYTVhOTI2ZGVj/NjI3YjE0OWU1MDFm/L21hc3Rlci93XzMy/MCxjX2xpbWl0L2hv/dGVsLWJyaXN0b2wt/dmllbm5hLXN1aXRl/LTQuanBn",
  },
];
