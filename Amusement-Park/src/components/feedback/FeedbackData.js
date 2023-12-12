import axios from "axios";

let FeedbackData=[
    {   

        "fname":"Revati",
        "lname":"Joshi",
        "email":"revati1234@gmail.com",
        "mobile":"1234567890",
        "pancard":"df1368gh777",
        "city":"Pune",
        "feedback": "offers are good",
    }
];

const Feedback_Base_URL='http://localhost:4646/feedback/getfeedback';
const Save_Feedback = 'http://localhost:4646/feedback/save';


let SaveFeedback = (feedback) =>{
    try {
        feedback.preventDefault();
        console.clear();
        console.log("Data = " + JSON.stringify(feedback, null, 3));
        FeedbackData.push(feedback);
        return axios.post(Save_Feedback,feedback);
    }
    catch (exception) {
        console.log("rootURL is not correct");
    }
}

function getFeedbackData(){
    return axios.get(Feedback_Base_URL);
}

export {getFeedbackData , SaveFeedback};