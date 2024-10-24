import { SignupFormDemo } from "@/components/Contact";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import { OurStory } from "@/components/OurStory";
import { Rooms } from "@/components/Rooms";

export default function Page() {
  return (
    <>
    <Home/>
    <Navbar/>
    <Rooms/>
    <OurStory/>
    <SignupFormDemo/>
    </>
  );
}
