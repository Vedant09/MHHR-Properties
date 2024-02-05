import httpClient from "./httpClient";

export const addProperty = (data) => {
  return httpClient({
    method: "POST",
    url: "/properties/add-property",
    data
  });
};

export const getAllProperties = () => {
  return httpClient({
    method: "GET",
    url: "/properties/get-all-properties",
  });
};

export const getPropertyDetailsById = (id) => {
  return httpClient({
    method: "GET",
    url: `/properties/get-details/${id}`,
  });
};
