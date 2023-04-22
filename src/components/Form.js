import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import "./styles/reservationsContent.css";

const schema = yup.object({
  name: yup.string().required("Full name is required!"),
  email: yup
    .string()
    .required("Email is required!")
    .email("Email is not valid!"),
  telephone: yup
    .string()
    .required("Telephone number is required!")
    .matches(
      /^\d{3}\s\d{3}\s\d{4}$/,
      "Phone number must match the form XXX XXX XXXX"
    ),
  guests: yup
    .string()
    .min(1, "There must be at least 1 guest")
    .required("Please specify number of guests per table!"),
  date: yup.string().required("Please select date & time!"),
});

const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  console.log(errors);

  const formSubmit = (data) => {
    alert("Your booking is confirmed");
    console.table(data);
  };

  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <fieldset>
        <div className="field">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            placeholder="John Doe"
            name="name"
            {...register("name")}
          />
          <span className="error-message">{errors.name?.message}</span>
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="example@email.com"
            name="email"
            {...register("email")}
          />
          <span className="error-message">{errors.email?.message}</span>
        </div>

        <div className="field">
          <label htmlFor="telephone">Telephone</label>
          <input
            type="tel"
            placeholder="XXX XXX XXXX"
            name="telephone"
            {...register("telephone")}
          />
          <span className="error-message">{errors.telephone?.message}</span>
        </div>

        <div className="field occasion">
          <label htmlFor="occasion">Occasion (optional)</label>
          <div className="options">
            <select name="occasion" {...register("occasion")}>
              <option value="select">Select Occasion</option>
              <option value="birthday">Birthday</option>
              <option value="engagement">Engagement</option>
              <option value="anniversary">Anniversary</option>
            </select>
          </div>
        </div>

        <div className="field guest">
          <label htmlFor="guests">Guests</label>
          <input
            type="number"
            placeholder="2"
            name="guests"
            {...register("guests")}
          />
          <span className="error-message">{errors.guests?.message}</span>
        </div>

        <div className="field">
          <label htmlFor="date">Date & Time</label>
          <input type="datetime-local" name="date" {...register("date")} />
          <span className="error-message">{errors.date?.message}</span>
        </div>

        <button className="reserve-btn" type="submit">
          Book Now
        </button>
      </fieldset>
    </form>
  );
};

export default Form;
