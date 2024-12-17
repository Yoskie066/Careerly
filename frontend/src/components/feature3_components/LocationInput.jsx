import React, { useState } from "react";
import { Search, MapPin, X } from "lucide-react";

const LocationInput = ({ onLocationSelect, value }) => {
  const [searchTerm, setSearchTerm] = useState(value || "");
  const [locationOptions, setLocationOptions] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const TOMTOM_API_KEY = "3lbb2kIWl16v3M0MOcEmKkZeEtGeg0RY";

  const handleSearch = async (term) => {
    setSearchTerm(term);

    if (!term.trim()) {
      setLocationOptions([]);
      setShowDropdown(false);
      return;
    }

    setIsSearching(true);

    try {
      const response = await fetch(
        `https://api.tomtom.com/search/2/search/${encodeURIComponent(
          term
        )}.json?key=${TOMTOM_API_KEY}&language=en-GB&limit=5`
      );

      const data = await response.json();

      // Parse and format results
      const filteredLocations = data.results.map((result) => ({
        id: result.id,
        name: result.address.freeformAddress || "Unknown Location",
        type: result.type,
      }));

      setLocationOptions(filteredLocations);
      setShowDropdown(filteredLocations.length > 0);
    } catch (error) {
      console.error("Error fetching location data:", error);
      setLocationOptions([]);
    } finally {
      setIsSearching(false);
    }
  };

  const handleLocationSelect = (location) => {
    const locationParts = location.name.split(", ");
    const selectResult = {
      type: "Geography",
      address: {
        municipality: locationParts[0],
        countrySubdivisionName: locationParts[1] || "",
        country: locationParts[locationParts.length - 1],
      },
    };

    setSearchTerm(location.name);
    onLocationSelect(selectResult);
    setShowDropdown(false);
  };

  return (
    <div className="relative w-full">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for your location (e.g., Cebu)"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => {
            if (searchTerm && locationOptions.length > 0) {
              setShowDropdown(true);
            }
          }}
          className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#019A63]"
        />
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={20}
        />
        {searchTerm && (
          <button
            onClick={() => {
              setSearchTerm("");
              setLocationOptions([]);
              setShowDropdown(false);
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            <X size={20} className="text-gray-400 hover:text-gray-600" />
          </button>
        )}
      </div>

      {showDropdown && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {locationOptions.map((location) => (
            <div
              key={location.id}
              onClick={() => handleLocationSelect(location)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
            >
              <MapPin size={20} className="mr-2 text-[#019A63]" />
              <div>
                <p className="font-semibold">{location.name}</p>
                <p className="text-xs text-gray-500">{location.type}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationInput;
