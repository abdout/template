import PricingHeader from "./pricing-header";
import PricingFAQs from "./pricing-faqs";
import EnterpriseSection from "./enterprise-section";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import PricingLoaderOverlay from "./loader-overlay";
import { PricingCards } from "./pricing-cards";
import { ComparePlans } from "./compare-plans";

export default function PricingContent() {
  // TODO: Uncomment when auth is implemented
  // const user = await currentUser();
  // let subscriptionPlan;
  // if (user && user.id) {
  //   subscriptionPlan = await getUserSubscriptionPlan(user.id);
  // }

  // Mock data for now - keeping UI intact
  const userId = undefined;
  const subscriptionPlan = undefined;
  const userRole = undefined;

  return (
    <div className="flex w-full flex-col py-14 mt-18 items-center">
      <PricingLoaderOverlay />
      <PricingHeader />
      <PricingCards userId={userId} subscriptionPlan={subscriptionPlan} userRole={userRole} />
      <ComparePlans />
      {/* <PricingFaq /> */}
      <PricingFAQs />
      <EnterpriseSection />
    </div>
  );
}
