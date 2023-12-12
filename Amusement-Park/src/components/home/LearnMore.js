import React from 'react'
import '../home/home.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import baby from '../images/baby-blue-3.jpg';
import big from '../images/big-red-3.jpg';
import thunder from '../images/big-thunder-1.jpg';
import black from '../images/black-thunder-2.jpg';
import body from '../images/body-blasters.jpg';
import brain from '../images/brain-drain-1.jpg';
import flow from '../images/flowrider.jpg';
import old from '../images/old-yellar-2.jpg';
function LearnMore() {
    return (
        <div>
            <div className='thrill' >
                <h1 className='text-center'>THRILL RIDES</h1>
                <div className='learnCards'>
                    <div class="card m-3 p-3 text-center border-0" style={{ width: 30 + "rem",height:50 + "rem"  }}>
                        <img src={thunder} class="card-img-top" alt="..."></img>
                        <h2 className='m-3'>Big Thunder</h2>
                        <div class="card-body">

                            <p class="card-text mb-3">You hear the screams from the distance as riders take sharp turns through a dark tunnel before the rumble of a full 45° drop that accelerates the multi-person raft into the immense funnel.</p>
                            <a href="#" class="btn btn-primary m-2">Learn More</a>
                        </div>
                    </div>

                    <div class="card m-3 p-3 text-center border-0" style={{ width: 30 + "rem",height:50 + "rem"  }}>
                        <img src={black} class="card-img-top" alt="..."></img>
                        <h2 className='m-3'>Black Thunder</h2>
                        <div class="card-body">

                            <p class="card-text mb-3">This ride literally screams excitement when a 2-person raft takes you through twists and turns in total darkness before dropping you into a dark vortex funnel for the ride of your life.This ride literally screams excitement when a 2-person raft takes you through twists and turns in total darkness before dropping you into a dark vortex funnel for the ride of your life.</p>
                            <a href="#" class="btn btn-primary m-2">Learn More</a>
                        </div>
                    </div>
                    </div>
                    <div className='learnCards'>
                    <div class="card m-3 p-3 text-center border-0" style={{ width: 30 + "rem",height:50 + "rem"  }}>
                        <img src={brain} class="card-img-top" alt="..."></img>
                        <h2 className='m-3'>Brain Drain</h2>
                        <div class="card-body">

                            <p class="card-text mb-3">Get ready for a spine-tingling, heart-pounding, brain-draining vertical plunge. The Brain Drain features two 70-ft. high enclosed flume waterslides. Each slide is uniquely designed with different slide patterns but are simultaneously launched at the same time.</p>
                            <a href="#" class="btn btn-primary m-2">Learn More</a>
                        </div>
                    </div>

                    <div class="card m-3 p-3 text-center border-0" style={{ width: 30 + "rem",height:50 + "rem"  }}>
                        <img src={flow} class="card-img-top" alt="..."></img>
                        <h2 className='m-3'>FlowRider</h2>
                        <div class="card-body">

                            <p class="card-text mb-3">The FlowRider double brings the surf inland for some non-stop body board action. The constant, single location waves give riders a chance to show off their boarding moves.</p>
                            <a href="#" class="btn btn-primary m-2">Learn More</a>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>

<hr/>
            <div className='family' >
                <h1 className='text-center'>FAMILY RIDES</h1>
                <div className='learnCards'>
                    <div class="card m-3 p-3 text-center border-0" style={{ width: 30 + "rem" , height:50 + "rem" }}>
                        <img src={baby} class="card-img-top" alt="..."></img>
                        <h2 className='m-3'>Baby Blue</h2>
                        <div class="card-body">

                            <p class="card-text mb-3">A tubeless, single rider, high-energy ride that starts out in an enclosed dark chute before entering the bowl at full speed. After multiple high speed spins around the perimeter, a gradual deceleration moves the rider towards the exit at the bowl’s center and into a splash drop landing.</p>
                            <a href="#" class="btn btn-primary m-2">Learn More</a>
                        </div>
                    </div>

                    <div class="card m-3 p-3 text-center border-0" style={{ width: 30 + "rem",height:50 + "rem"  }}>
                        <img src={big} class="card-img-top" alt="..."></img>
                        <h2 className='m-3'>Big Red</h2>
                        <div class="card-body">

                            <p class="card-text mb-3">A single or double rider, high-energy tube ride that starts out in an enclosed dark chute before entering the bowl at full speed. After multiple high speed spins around the outer perimeter, a gradual deceleration moves riders towards the exit at the bowl’s center.</p>
                            <a href="#" class="btn btn-primary m-2">Learn More</a>
                        </div>
                    </div>
                    </div>

                    <div className='learnCards'>
                    <div class="card m-3 p-3 text-center border-0" style={{ width: 30 + "rem",height:50 + "rem"  }}>
                        <img src={body} class="card-img-top" alt="..."></img>
                        <h2 className='m-3'>Body Blasters</h2>
                        <div class="card-body">

                            <p class="card-text mb-3">No mats, no tubes – just you! Soar through heart-pounding drops and pulse-racing dips and curves as you blast through 1,000 feet on an enclosed flume.</p>
                            <a href="#" class="btn btn-primary m-2">Learn More</a>
                        </div>
                    </div>

                    <div class="card m-3 p-3 text-center border-0" style={{ width: 30 + "rem",height:50 + "rem"  }}>
                        <img src={old} class="card-img-top" alt="..."></img>
                        <h2 className='m-3'>Old Yellar</h2>
                        <div class="card-body">

                            <p class="card-text mb-3">The 4 flumes that started it all! These 4 spiraling slides are still an all time park favorite sending riders plunging down 1600 feet of twists and turns. Ride each one of them for a different experience.</p>
                            <a href="#" class="btn btn-primary m-2">Learn More</a>
                        </div>
                    </div>
                    </div>

            </div>
        </div>
    )
}

export default LearnMore