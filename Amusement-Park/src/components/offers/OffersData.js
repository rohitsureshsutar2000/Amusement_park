
import axios from 'axios';



let offersData={};
//     // {   
//     //     "id":0,
//     //     "name":"Roller Coster",
//     //     "price":"3000",
//     //     "info":"Roller coster info will come over Here"
//     // }
//     // // ,
//     // // {   "id":1,
//     // //     "name":"Adventure Park",
//     // //     "price":"2999",
//     // //     "info":"Adventure Park info will come over Here"
//     // // },
//     // // {   "id":2,
//     // //     "name":"Water Park",
//     // //     "price":"1999",
//     // //     "info":"Water info will come over Here"
//     // // }
// ];

const Offer_Base_URL='http://localhost:4646/offers/getoffer';
const Save_Offer = 'http://localhost:4646/offers/save';

let SaveOffers = (offer) =>{
    try {
        offer.prevenDefault();
        console.clear();
        console.log("Data = " + JSON.stringify(offer, null, 3));
        offersData.push(offer);
        return axios.post(Save_Offer,offer);
    }
    catch (exception) {
        console.log("rootURL is not correct");
    }
}

function getOffersData(){
    return axios.get(Offer_Base_URL);
}

export {getOffersData , SaveOffers};