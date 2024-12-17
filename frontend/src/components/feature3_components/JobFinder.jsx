import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { X, Loader2, Briefcase, MapPin, ArrowLeft, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LocationInput from "./LocationInput";

const JobApplicationForm = () => {
  const navigate = useNavigate();
  const viewMainMenu = () => navigate("/main-menu");

  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleLocationSelect = (result) => {
    if (result.type === "Geography") {
      const address = result.address;
      const location =
        address.municipality +
        ", " +
        address.countrySubdivisionName +
        ", " +
        address.country;
      setValue("location", location);
    } else {
      console.error("Invalid location selection");
    }
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    getValues,
  } = useForm({
    defaultValues: {
      preferredJobTitle: "",
      skills: [],
      experienceLevel: "",
      salaryRange: [10000, 100000],
      location: "",
    },
  });

  const skills = watch("skills");

  const onSubmit = async (data) => {
    setIsSearching(true);

    // location processing logic
    const locationParts = data.location.split(", ");
    const country = locationParts[locationParts.length - 1];
    const countryParts = country.split(" ");
    let countryCode;
    if (countryParts.length > 1) {
      countryCode =
        countryParts[0][0].toLowerCase() + countryParts[1][0].toLowerCase();
    } else {
      countryCode = country.slice(0, 2).toLowerCase();
    }

    // API call remains the same
    const myHeaders = new Headers();
    myHeaders.append("X-API-KEY", "5310467310a1ddbab81933ea839dfbb341e36d37");
    myHeaders.append("Content-Type", "application/json");

    const jobTitle = data.preferredJobTitle;
    const experience = data.experienceLevel;
    const skillsList = data.skills.join(", ");
    const location = data.location;
    const salary = `$${data.salaryRange[0].toLocaleString()} - $${data.salaryRange[1].toLocaleString()}`;
    const prompt = `Job title: ${jobTitle}, Experience: ${experience}, Skills: ${skillsList}, Location: ${location}, Salary: ${salary}, Country Code: ${location}`;

    const raw = JSON.stringify({
      q: prompt,
      location: data.location,
      gl: countryCode,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://google.serper.dev/search",
        requestOptions
      );
      const result = await response.json();
      setSearchResults(result.organic || []);
    } catch (error) {
      alert("Failed to fetch job listings. Please try again.");
    } finally {
      setIsSearching(false);
    }
  };

  const handleAddSkill = (event) => {
    if (event.key === "Enter" && event.target.value) {
      event.preventDefault();
      const newSkill = event.target.value.trim();
      if (!skills.includes(newSkill)) {
        setValue("skills", [...skills, newSkill]);
        event.target.value = "";
      }
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setValue(
      "skills",
      skills.filter((skill) => skill !== skillToRemove)
    );
  };

  return (
    <>
      <header className="bg-[#000300] text-[#00df9a] p-4 font-staat">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center w-1/2">
            <button
              className="hover:text-white text-base sm:text-2xl font-normal flex items-center"
              onClick={viewMainMenu}
            >
              <ArrowLeft />
              <span className="ml-2">Main Menu</span>
            </button>
          </div>
          <div className="w-1/2 flex justify-end">
            <div className="flex items-center font-normal text-base sm:text-2xl">
              Tailored Job Finder
              <span className="ml-2">
                <Search />
              </span>
            </div>
          </div>
        </div>
      </header>
      <div className="min-h-screen bg-[#F0F0F0] p-8 font-poppins">
        <div className="mx-auto max-w-2xl rounded-xl bg-white p-8 shadow-sm border-2 border-gray-500">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-semibold text-[#019A63]">
              Job Finder Preferences Form
            </h1>
            <p className="mt-2 text-black border-b pb-5">
              Please provide your professional information and preferences to
              help us find the best opportunities for you.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-2">
              <label className="text-sm text-black font-medium">
                Preferred Job Title
              </label>
              <Controller
                name="preferredJobTitle"
                control={control}
                rules={{ required: "This field is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    placeholder="Enter your preferred job title"
                    autoComplete="off"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#019A63]"
                  />
                )}
              />
              {errors.preferredJobTitle && (
                <p className="text-sm text-red-500">
                  {errors.preferredJobTitle.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Skills</label>
              <div className="flex flex-wrap gap-2 mb-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-[#019A63] text-white px-2 py-1 rounded-md text-sm flex items-center"
                  >
                    {skill}
                    <button
                      type="button"
                      onClick={() => handleRemoveSkill(skill)}
                      className="ml-2"
                    >
                      <X size={14} />
                    </button>
                  </span>
                ))}
              </div>
              <input
                placeholder="Type a skill and press Enter"
                onKeyDown={handleAddSkill}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#019A63]"
              />
              {errors.skills && (
                <p className="text-sm text-red-500">{errors.skills.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Experience Level</label>
              <Controller
                name="experienceLevel"
                control={control}
                rules={{ required: "Please select an experience level" }}
                render={({ field }) => (
                  <select
                    {...field}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#019A63]"
                  >
                    <option value="">Select experience level</option>
                    <option value="entry">Entry Level</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="senior">Senior</option>
                    <option value="expert">Expert</option>
                  </select>
                )}
              />
              {errors.experienceLevel && (
                <p className="text-sm text-red-500">
                  {errors.experienceLevel.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Salary Range (₱)</label>
              <Controller
                name="salaryRange"
                control={control}
                render={({ field }) => (
                  <div className="space-y-4">
                    <input
                      type="range"
                      min={10000}
                      max={500000}
                      step={5000}
                      value={field.value[1]}
                      onChange={(e) =>
                        field.onChange([
                          field.value[0],
                          parseInt(e.target.value),
                        ])
                      }
                      className="w-full"
                      style={{
                        accentColor: "#019A63",
                      }}
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>₱{field.value[0].toLocaleString()}</span>
                      <span>₱{field.value[1].toLocaleString()}</span>
                    </div>
                  </div>
                )}
              />
            </div>

            <div className="space-y-2">
              <Controller
                name="location"
                control={control}
                rules={{ required: "Please select a location" }}
                render={({ field }) => (
                  <LocationInput
                    onLocationSelect={handleLocationSelect}
                    value={field.value}
                    onChange={(value) => setValue("location", value)}
                  />
                )}
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 bg-[#019A63] text-white rounded-md hover:bg-transparent hover:text-[#019A63]"
            >
              {isSearching ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin inline-block" />
                  Searching...
                </>
              ) : (
                "Search Jobs"
              )}
            </button>
          </form>
        </div>

        {searchResults.length > 0 && (
          <div className="mt-8 space-y-4">
            <h2 className="text-2xl font-bold text-[black] mb-4">
              Job Search Results:
            </h2>
            {searchResults.map((job, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-500 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold">{job.title}</h3>
                <p className="text-gray-500 mb-2">{job.snippet}</p>
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                  <Briefcase className="h-4 w-4 text-[#019A63]" />
                  <span>{job.source}</span>
                  <MapPin className="h-4 w-4 ml-2 text-[#019A63]" />
                  <span>{getValues("location")}</span>
                </div>
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#019A63] text-white rounded-md hover:bg-[#017C4E] inline-block"
                >
                  View Job
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default JobApplicationForm;
