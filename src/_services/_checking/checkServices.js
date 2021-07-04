import Axios from "axios";
import { apiUrl} from "../../_helps";
export const checkServices = {
    check
}
function check(number) {
    const requestOptions = {
        headers: {
            'Access-Control-Allow-Origin':'*'
        }
    };
    return Axios.get(`${apiUrl()}/check/${number}`,requestOptions)
        .then((response) => {
            return response;
        });
}