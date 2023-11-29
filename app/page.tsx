import CarList from "./components/Home/CarList";
import Hero from "./components/Home/Hero";

export default function Home() {
  return (
    <div className="flex-1">
      <Hero />
      <CarList />
    </div>
  );
}
