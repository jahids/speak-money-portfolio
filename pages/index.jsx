import Banner from "../components/Banner/Banner";
import BannerContent from "../components/BannerContent/BannerContent";
import BusinessExpert from "../components/BusinessExpert/BusinessExpert";
import ChoosePricingPlan from "../components/ChoosePricingPlan/ChoosePricingPlan";
import Start from "../components/BusinessPartner/BusinessPartner";
import StopLeaving from "../components/StopLeaving/StopLeaving";



export default function Home() {
  return (
    <>
    <Banner/>
    <BannerContent/>
    {/* <Start/> */}
    <BusinessExpert/>
    {/* <StopLeaving/> */}
    <ChoosePricingPlan/>
    </>
  );
}
