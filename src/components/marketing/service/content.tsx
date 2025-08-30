import BusinessCard from "./business-card";
import GIF from "./design";
import Branding from "./branding";
import Creative from "./creative";

export default function ServiceContent() {
  return (
    <div className="flex w-full flex-col py-14 mt-18 items-center">
      <h1>Service</h1>
      <BusinessCard />
      <GIF />
      <Branding />
      <Creative />
    </div>
  );
}