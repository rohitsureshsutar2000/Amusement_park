import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../css/Offers.css'
import Admin from '../images/admin3.jpg';
import { SaveOffers } from '../offers/OffersData';
import OfferServices from '../offers/OfferService'
import {getOffersData} from '../offers/OffersData'
import {getFeedbackData} from '../feedback/FeedbackData';
import {getCustomerData} from '../offers/Bookings';

function AdminDashboard() {
    let [offerState, cbOfferState] = useState({});
    let[offer,setOffer]=useState([]);
    let [feedback,setFeedback]=useState([]);
    let [booking,setBooking] = useState([]);

    let onChangeHandle = (event) => {
        cbOfferState({ ...offerState, [event.target.name]: event.target.value });
        console.log(offerState);
    }
    let total=0;
    booking.forEach(item=>{
        item.price=Number(item.price);
        total=total+item.price;
    })

    let [revenue,setRevenue]=useState();
    let [length,setLength]=useState();

    useEffect(()=>{
        setRevenue(total);
        setLength(booking.length);
    })

    useEffect(() => {
        getOffersData().then((response) => {
            setOffer(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }, []);

    useEffect(() => {
        getCustomerData().then((response) => {
            setBooking(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }, []);

    useEffect(() => {
        getFeedbackData().then((response) => {
            setFeedback(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }, []);


    let onCreateOffer = () => {
        SaveOffers(offerState);
        alert("New Offer has been Created");
        OfferServices.saveOfferData(offerState).then(res => {
        })

        // let name=document.getElementById("offerName");
        // let offer=document.getElementById("inputEmail4").value;
        // name.innerHTML=offer;

        // let price=document.getElementById("price");
        // let inputPrice=document.getElementById("inputPassword4").value;
        // price.innerHTML=inputPrice;

        // let info=document.getElementById("info");
        // let inputInfo=document.getElementById("inputAddress").value;
        // info.innerHTML=inputInfo;

    }

    return (
        <div className="row main-admin ">
            <div className=" dashboard">
                <div id="col-3 ">
                    <ul className="nav dash-list flex-column text-center">
                        <li className="nav-item">
                            <h2>Admin</h2>
                            <img className="admin-img" src={Admin} alt="Admin" />
                        </li>
                        <li className="nav-item">
                            <a href="#bookings">Bookings</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Create Offers</a>
                        </li>
                        <Link to='/'>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Log Out</a>
                            </li>
                        </Link>

                    </ul>
                </div>

            </div>
            <div className="col-9 m-1">
                <div className="row" id="bookings">
                    <div className="card revenue-card m-3" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h4 className="card-title">Total revenue</h4>
                            <h2 id='totalRevenue'>{revenue}</h2>
                        </div>
                    </div>


                    <div className="card order-card m-3 text-center" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h4 className="card-title">Total Orders</h4>
                            <h2 id='Orders'>{length}</h2>
                        </div>
                    </div>

                </div>
                <div className="create-offers border p-4">
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="inputEmail4">Offer Name</label>
                                <input type="text" className="form-control" onChange={onChangeHandle} name="name" id="inputEmail4" />
                            </div>
                            <div className="form-group col-md-3">
                                <label for="inputPassword4">Price</label>
                                <input type="number" className="form-control" onChange={onChangeHandle} name="price" id="inputPassword4" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="inputAddress">Offer info</label>
                            <input type="text" className="form-control" onChange={onChangeHandle} name="info" id="inputAddress" />
                        </div>

                        <button type="button" className="btn btn-success" onClick={onCreateOffer}>Create Offer</button>
                    </form>

                    {/* <label id='offerName'></label><br></br>
                    <label id='price'></label><br></br>
                    <label id="info"></label> */}

                </div>

                <div className='dataTables'>
                <h2 className='m-5'>List Of Offers</h2>
            <table class="table table-dark mb-5">
                <thead>
                    <tr>
                        <th scope="col"> </th>
                        <th scope="col">Name</th>
                        <th scope="col">info</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    { offer.map((item)=>
                    <tr>
                        <th scope="row">{item["offerId"]}</th>
                        <td>{item["name"]}</td>
                        <td>{item["info"]}</td>
                        <td>{item["price"]}</td>
                    </tr>
                    )}
                </tbody>
            </table>

            <hr/>
            <h2 className='m-5'>List Of Bookings</h2>
            <table class="table">
                <thead className='thead-dark'>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Pan Card</th>
                        <th scope="col">Address</th>

                        <th scope="col">Offer</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            booking.map((item)=>
                    <tr>
                        <th scope="row">{item["id"]}</th>
                        <td>{item["fname"]}</td>
                        <td>{item["pan_number"]}</td>
                        <td>{item["address"]}</td>
                        <td>{item["offer"]}</td>
                        <td>{item["price"]}</td>
                    </tr>
                           
                    ) }
                   
                </tbody>
            </table>

<hr></hr>

            <h2 className='m-5'>List Of Feedbacks</h2>
            <table class="table">
                <thead className='thead-dark'>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Pan Card</th>
                        <th scope="col">Feedback MSG</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            feedback.map((item)=>
                    <tr>
                        <th scope="row">{item["id"]}</th>
                        <td>{item["fname"]}</td>
                        <td>{item["lname"]}</td>
                        <td>{item["email"]}</td>
                        <td>{item["phone"]}</td>
                        <td>{item["pancard"]}</td>
                        <td>{item["feedback"]}</td>
                    </tr>
                           
                    ) }
                   
                </tbody>
            </table>
            </div>

            </div>

           

        </div>
    )
}

export default AdminDashboard
