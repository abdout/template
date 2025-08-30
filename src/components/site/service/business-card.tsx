import React from "react";
import MainLayoutCard from "./layout-card";


function Header() {
  return (
    <div>
      Questions?
      <br /> Let&apos;s talk
    </div>
  );
}

export default function BusinessCard() {
  return (
    <MainLayoutCard
      title={Header}
      description="Contact us through our 24/7 live chat. We're always happy to help!"
      rightSideImageUrl="/site/wallet.gif"
    />
  );
}

