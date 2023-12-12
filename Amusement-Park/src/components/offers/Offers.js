import React, { useState, useEffect } from 'react';
import { getCustomerData, SaveCustomer } from './Bookings';

import { getOffersData } from '../offers/OffersData';
import '../css/Offers.css';
import { Link } from 'react-router-dom';
import PayPal from './PayPal';
import BookingService from './BookingService';

function Offers() {
    let [costomerOffer, setOffer] = useState([]);
    let [selectedRowState, cbSelectedRow] = useState({});

   
    useEffect(() => {
        getOffersData().then((response) => {
            setOffer(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }, []);

    let onBookTicketClick = (event) => {
        cbSelectedRow(costomerOffer[event.target.id]);
        console.log(costomerOffer);
    }
    let ticketStatus = () => {
        let status = document.getElementById("statusDiv");
        status.style.display = "block";
        onSaveCustomer();
    }

    let [custemerData, setCustomerData] = useState([]);
    let onChangeHandle = (event) => {
        setCustomerData({ ...custemerData, [event.target.name]: event.target.value });
        console.log(custemerData);
    }
    let onSaveCustomer = () => {
        SaveCustomer(custemerData);
        BookingService.saveBookingData(custemerData).then(res=>{
            alert("Booking has complited");
        });
    }

    return (
        <>
            <div className="container">

            {/* <div>{costomerOffer.map((item,index)=>
                    <><h5 className>{item["price"]}</h5>

                    <h5 className>{item["name"]}</h5></>
                    )}</div> */}

                <h1 className="text-center m-5 hedding" >Letest Offers</h1>
                <div className="offer-data p-5">
                    <h1 className="text-center mb-5">Things to know Before You Bye</h1>
                    <div className="row">
                        <div className="col-6 p-4">
                            <h3>Visit a Few and Save</h3>
                            <p>The longer you play, the more you save per day. With three awesome parks, a multi-day ticket will let you see more.</p>
                        </div>
                        <div className="col-6 p-4">
                            <h3>Get Park-to-Park Access</h3>
                            <p>Access the HogwartsTM Express to ride between both lands of The Wizarding World of Harry PotterTM.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 p-4">
                            <h3>Experience Universal’s Hotels</h3>
                            <p>Walk or take complimentary transportation to the parks, as well as other great benefits, when you stay at our hotels.</p>
                        </div>
                        <div className="col-6 p-4">
                            <h3>Upgrade to Express Pass</h3>
                            <p>Skip the regular lines in Universal Studios and Islands of Adventure.  Valid theme park admission is required.</p>
                        </div>
                    </div>
                </div>
                <div className="offer-div m-3 p-3 row mb-5 border border-dark">
                    {costomerOffer.map((item, index) =>
                        <div className="card col-5 card-h m-2 ml-5 text-center ">
                            <div className="card-body">
                                <h5 className="card-title">{item["name"]}</h5>
                                <p className="card-text">{item["info"]}</p>
                                <a href="#" className="btn btn-primary m-2">Rs.{item["price"]}</a>
                                <a href="#bookTicket" className="btn btn-success m-2" id={index} onClick={onBookTicketClick}>Book Ticket</a>
                            </div>
                        </div>
                    )}
                    
                </div>
            </div>

            <div id="bookTicket" className="mb-5">
                <center>
                    <h1 className="m-3 hedding">Book Tickets at Great Offers</h1>
                    <div class="alert alert-success mb-5 w-50" style={{ display: 'none' }} id="statusDiv" role="alert">
                        Ticket Booked Successfully!!
                    </div>
                    <div className="container mt-5 mb-1 border border-primary p-3 w-50">
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label >Full Name</label>
                                    <input type="text" onChange={onChangeHandle} id='fname' name="fname" className="form-control" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Pan card</label>
                                    <input type="text" onChange={onChangeHandle} id='pan_number' name="pan_number" className="form-control"  />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label >Selected Offer</label>
                                    <input type="text" onChange={onChangeHandle} id='offer' name="offer" className="form-control"  />
                                </div>
                                <div className="form-group col-md-6">
                                    <label >Price</label>
                                    <input type="number" onChange={onChangeHandle} id='price' name="price" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label >Address</label>
                                <input type="text" onChange={onChangeHandle} id='address' name="address" className="form-control"  placeholder="1234 Main St " />
                            </div>
                           
                                <button type="button" className="btn btn-success m-5 col-6" onClick={ticketStatus}>Pay Online</button>
                        </form>
                    </div>

                </center>
                
            </div>

        </>
    )
}

export default Offers;
