import { useState } from "react";

function TripCard({
  trip,
  handleDeleteTrip,
  handleStatusChange,
}) {
  const [currentImage, setCurrentImage] =
    useState(0);

  function nextImage() {
    setCurrentImage((prev) =>
      prev === trip.images.length - 1
        ? 0
        : prev + 1
    );
  }

  function previousImage() {
    setCurrentImage((prev) =>
      prev === 0
        ? trip.images.length - 1
        : prev - 1
    );
  }

  return (
    <div className="trip-card">
      {trip.images &&
        trip.images.length > 0 && (
          <div className="slideshow">
            <img
              src={
                trip.images[currentImage]
              }
              alt={trip.name}
              className="trip-image"
            />

            {trip.images.length > 1 && (
              <div className="slideshow-buttons">
                <button
                  onClick={
                    previousImage
                  }
                >
                  ←
                </button>

                <button
                  onClick={nextImage}
                >
                  →
                </button>
              </div>
            )}
          </div>
        )}

      <h2>{trip.name}</h2>

      <p>
        <strong>Budget:</strong>{" "}
        {trip.budget} SEK
      </p>

      <p>
        <strong>Dates:</strong>{" "}
        {trip.startDate} -{" "}
        {trip.endDate}
      </p>

      <div className="status-section">
        <strong>Status:</strong>

        <select
          value={trip.status}
          onChange={(e) =>
            handleStatusChange(
              trip.id,
              e.target.value
            )
          }
        >
          <option>Planned</option>

          <option>Ongoing</option>

          <option>Completed</option>
        </select>
      </div>

      <p>
        <strong>Notes:</strong>{" "}
        {trip.notes}
      </p>

      <div>
        <strong>Destinations:</strong>

        <ul>
          {trip.destinations.map(
            (destination, index) => (
              <li key={index}>
                {destination}
              </li>
            )
          )}
        </ul>
      </div>

      {!trip.isDemo && (
        <button
          onClick={() =>
            handleDeleteTrip(trip.id)
          }
        >
          Delete Trip
        </button>
      )}
    </div>
  );
}

export default TripCard;