import axios from "axios";

const Save_Offer = 'http://localhost:4646/offers/save';

class OfferServices {

    saveOfferData(offer){
        return axios.post(Save_Offer,offer);
    }

}


export default new OfferServices();