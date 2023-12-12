import axios from "axios";

let Bookings=[
    {
        "fname":"Pooja Ajay Shinde",
        "pan_number":"DJOPM1234G",
        "offer":"Some",
        "price":"1000",
        "address":"Sai Appartment,Vishrambag sangli"
    }
]

const Booking_Url="http://localhost:4646/bookings/getbookings";
const Save_Booking='http://localhost:4646/bookings/save'

let SaveCustomer = (customer) =>{
    try {
        console.clear();
        console.log("Data = " + JSON.stringify(customer, null, 3));
        Bookings.push(customer);
        // return axios.post(Save_Booking,customer);
    }
    catch (exception) {
        console.log("rootURL is not correct");
    }
}

function getCustomerData(){
    return axios.get(Booking_Url);
}

export {getCustomerData , SaveCustomer};