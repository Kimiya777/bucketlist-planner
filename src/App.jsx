import {
  useState,
  useEffect,
} from "react";

import TripForm from "./components/TripForm";
import TripList from "./components/TripList";

const demoTrips = [
  {
    id: 1,
    isDemo: true,
    name: "Russia",
    budget: 40000,
    startDate: "2025-06-22",
    endDate: "2025-07-21",
    status: "Completed",
    notes:
      "Solo traveled to Russia, got a birthday surprise from people I had just met in Moscow, traveled along the Trans-Siberian route and went camping in the wilderness of Kamchatka in the 'Dead Forest'.",
    destinations: [
      "Saint Petersburg",
      "Moscow",
      "Irkutsk",
      "Vladivostok",
      "Kamchatka",
    ],
    images: [
      "/images/spb.JPG",
      "/images/moscow.jpeg",
      "/images/kamchatka.jpg",
      "/images/volcano.jpeg",
    ],
  },

  {
    id: 2,
    isDemo: true,
    name: "Mongolia",
    budget: 18000,
    startDate: "2025-07-21",
    endDate: "2025-08-05",
    status: "Completed",
    notes:
      "Solo explored the capital Ulaanbaatar and lived with a nomad family in the vast Gobi Desert.",
    destinations: [
      "Ulaanbaatar",
      "Gobi Desert",
    ],
    images: [
      "/images/mongolian-children.jpg",
      "/images/nomad3.jpg",
      "/images/gobi-stars.jpeg",
      "/images/gobi3.jpg",
    ],
  },

  {
    id: 3,
    isDemo: true,
    name: "China",
    budget: 10000,
    startDate: "2025-08-05",
    endDate: "2025-08-12",
    status: "Completed",
    notes:
      "Solo traveled to Beijing and Shanghai and explored the Great Wall and the Forbidden City.",
    destinations: ["Beijing", "Shanghai"],
    images: [
      "/images/beijing2.jpg",
      "/images/shanghai3.jpg",
      "/images/great-wall2.jpg",
      "/images/forbidden-city.jpeg",
    ],
  },

  {
    id: 4,
    isDemo: true,
    name: "Japan",
    budget: 25000,
    startDate: "2025-08-12",
    endDate: "2025-08-25",
    status: "Completed",
    notes:
      "Solo traveled through Japan, visited Nara Deer Park, explored street food culture, climbed Mount Fuji and discovered Tokyo’s underground JDM car scene.",
    destinations: [
      "Osaka",
      "Kyoto",
      "Tokyo",
    ],
    images: [
      "/images/tokyo3.jpg",
      "/images/fuji.jpeg",
      "/images/deer.jpg",
      "/images/kyoto.JPG",
    ],
  },

  {
    id: 5,
    isDemo: true,
    name: "Nepal",
    budget: 25000,
    startDate: "2025-08-25",
    endDate: "2025-09-10",
    status: "Completed",
    notes:
      "Solo traveled to Nepal, visited Kathmandu and Pokhara and trekked through the Annapurna region in the Himalayas.",
    destinations: [
      "Kathmandu",
      "Pokhara",
      "Annapurna",
    ],
    images: [
      "/images/everest4.jpg",
      "/images/nepal-child.jpeg",
      "/images/yak.jpeg",
      "/images/old-man.jpeg",
    ],
  },

  {
    id: 6,
    isDemo: true,
    name: "South America",
    budget: 40000,
    startDate: "",
    endDate: "",
    status: "Planned",
    notes:
      "Planning another solo trip.",
    destinations: [
      "",
    ],
    images: [
      "/images/coming-soon2.png",
    ],
  },
];

function App() {
  const [tripName, setTripName] =
    useState("");

  const [budget, setBudget] =
    useState("");

  const [startDate, setStartDate] =
    useState("");

  const [endDate, setEndDate] =
    useState("");

  const [notes, setNotes] =
    useState("");

  const [status, setStatus] =
    useState("Planned");

  const [destinations, setDestinations] =
    useState("");

  const [images, setImages] =
    useState([]);

  const [formKey, setFormKey] =
    useState(0);

  const [trips, setTrips] = useState(() => {
    const savedTrips =
      localStorage.getItem("trips");

    const userTrips = savedTrips
      ? JSON.parse(savedTrips)
      : [];

    return [...demoTrips, ...userTrips];
  });

  useEffect(() => {
    const userTrips = trips.filter(
      (trip) => !trip.isDemo
    );

    localStorage.setItem(
      "trips",
      JSON.stringify(userTrips)
    );
  }, [trips]);

  function handleAddTrip(e) {
    e.preventDefault();

    if (tripName.trim() === "") return;

    const newTrip = {
      id: Date.now(),

      isDemo: false,

      name: tripName,

      budget,

      startDate,

      endDate,

      notes,

      status,

      images: images.filter(Boolean),

      destinations: destinations
        .split(",")
        .map((destination) =>
          destination.trim()
        ),
    };

    setTrips([...trips, newTrip]);

    setTripName("");

    setBudget("");

    setStartDate("");

    setEndDate("");

    setNotes("");

    setStatus("Planned");

    setDestinations("");

    setImages([]);

    setFormKey((prev) => prev + 1);
  }

  function handleDeleteTrip(id) {
    const updatedTrips = trips.filter(
      (trip) => trip.id !== id
    );

    setTrips(updatedTrips);
  }

  function handleStatusChange(
    id,
    newStatus
  ) {
    const updatedTrips = trips.map(
      (trip) =>
        trip.id === id
          ? {
              ...trip,
              status: newStatus,
            }
          : trip
    );

    setTrips(updatedTrips);
  }

  function handleImageUpload(
    e,
    imageIndex
  ) {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      const updatedImages = [...images];

      updatedImages[imageIndex] =
        reader.result;

      setImages(updatedImages);
    };

    reader.readAsDataURL(file);
  }

  return (
    <div className="app">
      <nav className="navbar">
        <h1>
          Bucketlist Planner
        </h1>

        <p>
          Plan • Explore • Remember
        </p>
      </nav>

      <TripForm
        key={formKey}
        handleAddTrip={
          handleAddTrip
        }
        tripName={tripName}
        setTripName={setTripName}
        budget={budget}
        setBudget={setBudget}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        notes={notes}
        setNotes={setNotes}
        destinations={destinations}
        setDestinations={
          setDestinations
        }
        status={status}
        setStatus={setStatus}
        handleImageUpload={
          handleImageUpload
        }
      />

      <TripList
        trips={trips}
        handleDeleteTrip={
          handleDeleteTrip
        }
        handleStatusChange={
          handleStatusChange
        }
      />
    </div>
  );
}

export default App;