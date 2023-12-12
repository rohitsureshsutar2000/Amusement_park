import axios from "axios";

const Save_Feedback = 'http://localhost:4646/feedback/save';

class FeedbackServices {

    saveFeedbackData(feedback){
        return axios.post(Save_Feedback,feedback);
    }

}


export default new FeedbackServices();