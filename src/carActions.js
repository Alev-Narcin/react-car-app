import axios from "axios";


const getAllCars = () => {
    return axios.get(`http://localhost:8080/api/cars`);
}

const getCar = (id) => {
    return axios.get(`http://localhost:8080/api/cars/${id}`);
}
const saveCar = (car) => {
    return axios.post(`http://localhost:8080/api/cars`, car);
}

const deleteCar = (id) => {
    return axios.delete(`http://localhost:8080/api/cars/${id}`);
}


export default {getAllCars, getCar, saveCar, deleteCar};
