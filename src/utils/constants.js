import data from "../data.json";

const filterProducts = (text) => data.filter((product) => product.category === text);

export const headphones = filterProducts("headphones");
export const earphones = filterProducts("earphones");
export const speakers = filterProducts("speakers");