"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    startingLocation: "",
    destination: "",
    weeksUntilMove: "",
    timeOfYear: "",
    itemsList: "",
    numAdults: "",
    numChildren: "",
    numPets: "",
    otherDetails: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const validateEmail = (email) => {
    var re = /^\S+@\S+$/i;
    return re.test(email);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let errors = {};

    if (!formData.email || !validateEmail(formData.email)) {
      errors.email = "Entered value does not match email format";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log(formData);
      // Form submission logic goes here
    }
  };

  return (
    <>
      <div className="flex flex-col items-center gap-6 py-10 text-xl px-14 min-h-vh bg-slate-200 text-emerald-800 ">
        <form
          onSubmit={handleSubmit}
          className="w-full p-10 space-y-4 border-2 rounded-lg shadow-lg border-emerald-800"
        >
          <h2 className="pb-4 text-4xl font-bold tracking-wide text-center sm:text-4xl">
            Enter Your
            <span className=" text-emerald-600"> Information</span>
          </h2>

          <div className="mb-4">
            <label htmlFor="name" className="font-bold">
              Name:
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white rounded-lg focus:outline-none"
            />
            {formErrors.name && (
              <p className="text-red-500">{formErrors.name}</p>
            )}
          </div>

          {/* Starting Location */}
          <div className="mb-4">
            <label htmlFor="startingLocation" className="font-bold">
              Starting Location (City, State):
            </label>
            <input
              id="startingLocation"
              type="text"
              name="startingLocation"
              placeholder="Example: Naperville, Illinois"
              value={formData.startingLocation}
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white rounded-lg focus:outline-none"
            />
            {formErrors.startingLocation && (
              <p className="text-red-500">{formErrors.startingLocation}</p>
            )}
          </div>

          {/* Destination */}
          <div className="mb-4">
            <label htmlFor="destination" className="font-bold">
              Destination (City, State):
            </label>
            <input
              id="destination"
              type="text"
              name="destination"
              placeholder="Example: Bloomington, Indiana"
              value={formData.destination}
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white rounded-lg focus:outline-none"
            />
            {formErrors.destination && (
              <p className="text-red-500">{formErrors.destination}</p>
            )}
          </div>

          {/* Weeks Until Move */}
          <div className="mb-4">
            <label htmlFor="weeksUntilMove" className="font-bold">
              Weeks Until Move:
            </label>
            <input
              id="weeksUntilMove"
              type="number"
              name="weeksUntilMove"
              placeholder="Weeks Until Move"
              value={formData.weeksUntilMove}
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white rounded-lg focus:outline-none"
            />
            {formErrors.weeksUntilMove && (
              <p className="text-red-500">{formErrors.weeksUntilMove}</p>
            )}
          </div>

          {/* Time of Year */}
          <div className="mb-4">
            <label htmlFor="timeOfYear" className="font-bold">
              Time of Year (Season):
            </label>
            <input
              id="timeOfYear"
              type="text"
              name="timeOfYear"
              placeholder="Time of Year"
              value={formData.timeOfYear}
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white rounded-lg focus:outline-none"
            />
            {formErrors.timeOfYear && (
              <p className="text-red-500">{formErrors.timeOfYear}</p>
            )}
          </div>

          {/* List of Items */}
          <div className="mb-4">
            <label htmlFor="itemsList" className="font-bold">
              List of Items to Move:
            </label>
            <textarea
              id="itemsList"
              name="itemsList"
              placeholder="Example: King bed (1), 4 x 4 x 2 boxes (8), bikes (2), dog kennel (1), vaccum cleaner, large bookshelf (2), ect.  "
              value={formData.itemsList}
              onChange={handleChange}
              className="block w-full h-24 px-4 py-2 mt-2 text-gray-700 bg-white rounded-lg focus:outline-none"
            />
            {formErrors.itemsList && (
              <p className="text-red-500">{formErrors.itemsList}</p>
            )}
          </div>

          {/* Number of Adults */}
          <div className="mb-4">
            <label htmlFor="numAdults" className="font-bold">
              Number of Adults:
            </label>
            <input
              id="numAdults"
              type="number"
              name="numAdults"
              placeholder="Number of Adults"
              value={formData.numAdults}
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white rounded-lg focus:outline-none"
            />
            {formErrors.numAdults && (
              <p className="text-red-500">{formErrors.numAdults}</p>
            )}
          </div>

          {/* Number of Children */}
          <div className="mb-4">
            <label htmlFor="numChildren" className="font-bold">
              Number of Children:
            </label>
            <input
              id="numChildren"
              type="number"
              name="numChildren"
              placeholder="Number of Children"
              value={formData.numChildren}
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white rounded-lg focus:outline-none"
            />
            {formErrors.numChildren && (
              <p className="text-red-500">{formErrors.numChildren}</p>
            )}
          </div>

          {/* Number of Pets */}
          <div className="mb-4">
            <label htmlFor="numPets" className="font-bold">
              Number of Pets:
            </label>
            <input
              id="numPets"
              type="number"
              name="numPets"
              placeholder="Number of Pets"
              value={formData.numPets}
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white rounded-lg focus:outline-none"
            />
            {formErrors.numPets && (
              <p className="text-red-500">{formErrors.numPets}</p>
            )}
          </div>

          {/* Other Details */}
          <div className="mb-4">
            <label htmlFor="otherDetails" className="font-bold">
              Other Details:
            </label>
            <textarea
              id="otherDetails"
              name="otherDetails"
              placeholder="Other Details"
              value={formData.otherDetails}
              onChange={handleChange}
              className="block w-full h-24 px-4 py-2 mt-2 text-gray-700 bg-white rounded-lg focus:outline-none"
            />
            {formErrors.otherDetails && (
              <p className="text-red-500">{formErrors.otherDetails}</p>
            )}
          </div>

          <button
            type="submit"
            className="block w-full px-4 py-2 mt-2 text-white rounded-lg bg-emerald-800 hover:bg-emerald-600 focus:outline-none focus:ring-emerald-600"
          >
            Get Your Estimate
          </button>
        </form>
      </div>
    </>
  );
}
