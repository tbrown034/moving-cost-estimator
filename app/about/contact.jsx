import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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

    if (!formData.name) {
      errors.name = "This field is required";
    }

    if (!formData.email || !validateEmail(formData.email)) {
      errors.email = "Entered value does not match email format";
    }

    if (!formData.message) {
      errors.message = "This field is required";
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
            Contact <span className=" text-emerald-600">Us</span>
          </h2>
          <div className="flex items-center gap-x-11">
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

          <div className="flex items-center gap-x-12">
            <label htmlFor="email" className="font-bold">
              Email:
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white rounded-lg focus:outline-none"
            />
            {formErrors.email && (
              <p className="text-red-500">{formErrors.email}</p>
            )}
          </div>

          <div className="flex items-center gap-x-4">
            <label htmlFor="message" className="font-bold">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Leave your message (limited to 400 characters) here!"
              value={formData.message}
              onChange={handleChange}
              className="block w-full h-24 px-4 py-2 mt-2 text-gray-700 bg-white rounded-lg focus:outline-none"
              maxlength="400"
            />
            {formErrors.message && (
              <p className="text-red-500">{formErrors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="block w-full px-4 py-2 mt-2 text-white rounded-lg bg-emerald-800 hover:bg-emerald-600 focus:outline-none focus:ring-emerald-600"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
