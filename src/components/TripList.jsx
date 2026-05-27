import TripCard from "./TripCard";

function TripList({
  trips,
  handleDeleteTrip,
  handleStatusChange,
}) {
  return (
    <div className="trip-list">
      {trips.map((trip) => (
        <TripCard
          key={trip.id}
          trip={trip}
          handleDeleteTrip={handleDeleteTrip}
          handleStatusChange={handleStatusChange}
        />
      ))}
    </div>
  );
}

export default TripList;