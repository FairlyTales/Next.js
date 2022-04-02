export const getAllEvents = async () => {
  const response = await fetch(
    "https://next-js-project-54511-default-rtdb.firebaseio.com/events.json"
  );
  const events = await response.json();

  return Object.values(events).map((event) => ({
    ...event,
  }));
};

export const getFeaturedEvents = async () => {
  const allEvents = await getAllEvents();

  return allEvents.filter((event) => event.isFeatured);
};

export const getEventById = async (eventId) => {
  const allEvents = await getAllEvents();

  return allEvents.find((event) => event.id === eventId);
};

export const getFilteredEvents = async (dateFilter) => {
  const { year, month } = dateFilter;

  const events = await getAllEvents();
	return events.filter((event) => {
		const eventDate = new Date(event.date);
		return (
			eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
		);
	});
};
