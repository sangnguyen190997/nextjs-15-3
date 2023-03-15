import React from "react";
import Image from "next/image";

export default function Intro() {
  return (
    <div className="relative top-0 left-0 w-full h-screen ">
      <Image
        fill
        alt="intro Image"
        src="/images/intro.jpg"
        className="brightness-75"
      />
      {/* <img src="/images/sports.jpg" alt="" /> */}
    </div>
  );
}
