import axios from "axios";


const Save_Booking = 'http://localhost:4646/bookings/save';

class BookingService{
    saveBookingData(booking){
        return axios.post(Save_Booking,booking);
    }

}

export default new BookingService();