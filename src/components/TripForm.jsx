function TripForm({
  handleAddTrip,
  tripName,
  setTripName,
  budget,
  setBudget,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  notes,
  setNotes,
  destinations,
  setDestinations,
  status,
  setStatus,
  handleImageUpload,
}) {
  return (
    <form
      className="trip-form"
      onSubmit={handleAddTrip}
    >
      <input
        type="text"
        placeholder="Trip Name"
        value={tripName}
        onChange={(e) =>
          setTripName(e.target.value)
        }
      />

      <input
        type="number"
        placeholder="Budget (SEK)"
        value={budget}
        onChange={(e) =>
          setBudget(e.target.value)
        }
      />

      <input
        type="date"
        value={startDate}
        onChange={(e) =>
          setStartDate(e.target.value)
        }
      />

      <input
        type="date"
        value={endDate}
        onChange={(e) =>
          setEndDate(e.target.value)
        }
      />

      <textarea
        placeholder="Notes"
        value={notes}
        onChange={(e) =>
          setNotes(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Destinations (comma separated)"
        value={destinations}
        onChange={(e) =>
          setDestinations(
            e.target.value
          )
        }
      />

      <select
        value={status}
        onChange={(e) =>
          setStatus(e.target.value)
        }
      >
        <option>Planned</option>

        <option>Ongoing</option>

        <option>Completed</option>
      </select>

      <label>Image 1</label>

      <input
        type="file"
        accept="image/*"
        onChange={(e) =>
          handleImageUpload(e, 0)
        }
      />

      <label>Image 2</label>

      <input
        type="file"
        accept="image/*"
        onChange={(e) =>
          handleImageUpload(e, 1)
        }
      />

      <label>Image 3</label>

      <input
        type="file"
        accept="image/*"
        onChange={(e) =>
          handleImageUpload(e, 2)
        }
      />

      <label>Image 4</label>

      <input
        type="file"
        accept="image/*"
        onChange={(e) =>
          handleImageUpload(e, 3)
        }
      />

      <button type="submit">
        Add Trip
      </button>
    </form>
  );
}

export default TripForm;