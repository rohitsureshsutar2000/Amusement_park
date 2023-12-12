import React,{useState} from 'react'
import '../feedback/Feedback.css'
import { SaveFeedback} from '../feedback/FeedbackData';
import FeedbackService from './FeedbackService';
function Feedback() {


        let [feedbackState, cbFeedbackState]=useState({});
        let onChangeHandle=(event)=>{
            cbFeedbackState({...feedbackState,[event.target.name]:event.target.value});
            console.log(feedbackState);
        }
        let onSubmitForm=()=>{
            SaveFeedback(feedbackState);
            FeedbackService.saveFeedbackData(feedbackState).then(res=>{
                console.log(feedbackState);
            })
        }


    return (
        <div className="m-5 box">
            <h2 className="text-center mb-5">Feedback Form</h2>

            <div className ="main">
            <form className="row g-3 m-3">
                <div className="col-md-4">
                    <label for="validationDefault01" className="form-label">First name</label>
                    <input type="text" className="form-control" id="validationDefault01" onChange={onChangeHandle} required name ="fname"/>
                </div>

                <div className="col-md-4">
                    <label for="validationDefault02" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="validationDefault02" onChange={onChangeHandle} name ="lname" required/>
                </div>
            </form>

            <form className="row g-3 m-3">
                <div className="col-md-4">
                    <label for="validationDefaultUsername" className="form-label">Email Id</label>
                    <div className="input-group">
                        <span className="input-group-text" id="inputGroupPrepend2">@</span>
                        <input type="email" className="form-control" id="validationDefaultUsername" onChange={onChangeHandle} name = "email" aria-describedby="inputGroupPrepend2" required/>
                    </div>
                </div>
                <div className="col-md-4">
                    <label for="validationDefaultUsername" className="form-label">Mobile Number</label>
                    <div className="input-group">
                        <span className="input-group-text" id="inputGroupPrepend2">91</span>
                        <input type="text" max ="10" className="form-control" id="validationDefaultUsername" onChange={onChangeHandle} name = "mobile"  aria-describedby="inputGroupPrepend2" required/>
                    </div>
                </div>
            </form>

            <form className="row g-3 m-3">
                <div className="col-md-4">
                    <label for="validationDefaultUsername" className="form-label">Pan Number</label>
                    <div className="input-group">
                        <input type="text" className="form-control" id="validationDefaultUsername" onChange={onChangeHandle} name = "pancard" aria-describedby="inputGroupPrepend2" required/>
                    </div>
                </div>
                <div className="col-md-6">
                    <label for="validationDefault03" className="form-label">City</label>
                    <input type="text" className="form-control" id="validationDefault03" onChange={onChangeHandle} name ="city" required/>
                </div>
            </form>

            <form className="row g-3 m-3">
                <div className="col-md-6">
                    <label for="validationDefault05" className="form-label">Feedback</label>
                    <textarea className="form-control" aria-label="With textarea" onChange={onChangeHandle} name = "feedback"></textarea>
                </div>
            </form>

            <form className="row g-3 m-3">
                <div className="col-12">
                    <button className="btn btn-primary" type="button" onClick={onSubmitForm} >Submit form</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Feedback
