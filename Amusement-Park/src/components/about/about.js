import React from 'react';
import '../about/About.css';
import i1 from '../images/aboutimg1.jpg'
import i2 from '../images/aboutimg2.jpg'
import i3 from '../images/aboutimg3.jpg'

const About= ()=>{
    return(
       
        <div className="container"> 
            <center>
       <h1 className="m-2">About us</h1>
       <hr className="border border-dark bg-dark"/>
       </center>
        <div className="row">
                <img className=" col imgs m-3" src={i1} alt="load img"/>
                <div className="col mt-5">
                     <p>Amusement parks, as we know it today, have not always been about riveting roller coasters. The history of amusement parks takes us back to the 19th century when people flocked to periodic fairs for family-friendly entertainment. The sheer concept of an amusement parks was born out of a combination of three early traditions: traveling fairs, pleasure gardens, and world fair exhibits. Slowly the three came together and formed the modern amusement park, inviting all age groups.
        
                     </p>
                </div>
            </div>
            <div className="row">
            <img className="col imgs m-3  border rounded"  src={i2}  alt="load img"/>
                <div className="col mt-5">
                     <p>One of the best and year-round family amusement park near Mumbai and Pune is Magic Mountain Amusement Park. Featuring 31 international rides for kids and adults, this amusement park in Lonavala is the ultimate weekend getaway for thrill-seekers. What sets Magic Mountain apart from other parks is the many, many world class attractions and multi-cuisine chain of restaurants within the park that are perfect for all-day enjoyment for the whole family or group or friends.
                     </p>
                </div>
              </div>
            <div className="row">
            
                <img className="col imgs m-3" src={i3} alt="load img"/>
                <div className="col mt-5">
                     <p>Amusement parks have been around for a very long time and are definitely here to stay. It is the best way to enjoy some outdoor fun with the maximum number of activities to indulge in. Today, with the help of advanced equipment and modern technology, amusement parks have become even more enlivening for families and thrill-seekers alike!
                     </p>
                </div>
               </div>
               <hr className="border border-dark bg-dark"/>
        </div>
        
    );
}

export default About;