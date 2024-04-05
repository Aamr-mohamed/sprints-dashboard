import { toast } from "react-toastify";
const styles = {
	position: "top-right",
	autoClose: 1000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: "dark",
};

export const customToast = (type, message) => toast[type](message, styles);


// Simply call custom toast and give it type (success or error,etc) 
// and give it the message ex: customToast("success","logged in successfully")
