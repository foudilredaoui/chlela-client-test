import axios from "axios"
import { config } from "../config"

// function that create the api service
const create = async (baseURL = config.apiURL) => {
//Optional add response interceptor for intercepting 401 and 403 errors
    axios.interceptors.response.use(
        function (response) {
            // Any status code that lie within the range of 2xx cause this function to trigger
            return response
        },
        function (error) {
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            const { status } = error.response
            if (status == (401 || 403))
                console.log("redirect to 404 page  or login if exist");   
            return Promise.reject(error)
        }
    )


    // STEP 01: create the functions that call the api endpoints
    const PostIMG = (ImgObj) => axios.post(`${baseURL}/mergeImages`, ImgObj)


 // STEP 02: Return back a collection of functions that we would consider our interface

 return {
    PostIMG,
 }

}
export default {
    create,
}
