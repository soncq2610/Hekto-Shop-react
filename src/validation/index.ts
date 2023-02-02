import * as yup from "yup";

 const emailSchema = {
  email: yup.string().email("Enter a valid email!").required("Email is required!"),
};

const firstNameSchema = {
  firstName: yup.string().required("First name information is required!"),

}

const lastNameSchema ={
  lastName: yup.string().required("Last name information is required!"),

}

const passwordSchema ={
  password: yup.string().min(6,"Password more than 6").max(16,"Less than 16").required(),

}

const addressSchema ={
  address:yup.string().max(100).required("Address information is required!"),

}
const apartmentSchema ={
  apartment:yup.string().max(100).required("Apartment information is required!"),

}
const citySchema ={
  city:yup.string().max(100).required("City information is required!"),

}
const  postalCodeSchema ={
  postalCode:yup.string().max(100).required("Postal Code information is required!"),

}

export {emailSchema,
  passwordSchema,
  firstNameSchema,
  lastNameSchema,
  addressSchema,
  apartmentSchema,
  citySchema,
  postalCodeSchema
}