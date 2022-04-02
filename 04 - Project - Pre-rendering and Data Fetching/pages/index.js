import { getFeaturedEvents } from "../utils/api";
import EventList from "../components/events/event-list";

const HomePage = ({ featuredEvents }) => {
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
};

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents,
    },
		revalidate: 1800
  };
};

export default HomePage;
