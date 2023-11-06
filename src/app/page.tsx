import Banner from "./Component/Banner";
import HouseListing from "./Component/HouseListing";
import Header from "./Component/Header";

export default function Home() {
  return (
    <main className="relative min-h-screen h-full bg-white overflow-x-hidden">
      <Header />
      <Banner />
      <HouseListing />
    </main>
  );
}
