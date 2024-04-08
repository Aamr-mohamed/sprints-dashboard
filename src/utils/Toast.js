import { toast } from "react-toastify";

export const customToast = (type, message, callback) => {
  // Define the toast configuration object here, inside the function,
  // so you can dynamically add the `onClose` handler based on the `callback` parameter.
  const config = {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    // Conditionally add the onClose function if a callback is provided
    ...(callback && {
      onclose: () => {
        callback();
      },
    }),
  };

  toast[type](message, config);
};
