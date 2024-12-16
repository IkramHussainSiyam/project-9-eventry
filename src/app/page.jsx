import Search from "@/components/ui/Search";
import getAllEvents from "@/lib/api/getAllEvents";
import EventCard from "./_components/EventCard";

export default async function Home() {
  const events = await getAllEvents();
  console.log(events);

  return (
    <section className="container py-8">
      <div className="flex justify-between">
        <h1 className="font-bold text-3xl">Discover Events</h1>
        <Search />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </section>
  );
}
