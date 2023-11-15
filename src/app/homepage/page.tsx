import Banner from "../Component/Banner";
import Header from "../Component/Header";
import HouseListing from "../Component/HouseListing";

export default function Home() {
  return (
    <main className="relative min-h-screen h-full bg-white overflow-x-hidden text-black">
      <Header />
      <Banner />
      <HouseListing />
    </main>
  );
}
  