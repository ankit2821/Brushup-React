import axios from "axios";
const serviceUrl = "http://localhost:3001/persons";

const getAll = () => axios.get(serviceUrl);

const createPerson = (newObj) => axios.post(serviceUrl, newObj);

const deletePerson = (id) => axios.delete(`${serviceUrl}/${id}`);

const updatePerson = (id, newObj) => axios.put(`${serviceUrl}/${id}`, newObj);

export { getAll, createPerson, deletePerson, updatePerson };
