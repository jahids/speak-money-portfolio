import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Demo = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true); // State to track email validity

  const handleEmailChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    // Check if the email is valid using a regular expression
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setIsEmailValid(emailPattern.test(inputEmail));
  };

  const showSuccessNotification = () => {
    toast.success("Email sent successfully", {
      position: "top-right",
      autoClose: 3000, // Close the notification after 3 seconds
    });
  };

  const handleSendEmail = () => {
    if (isEmailValid) {
      fetch("https://speak-money-backend-kvz8se62p-jahids.vercel.app/mailsend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userEmail: email }),
      })
        .then((response) => {
          if (response.ok) {
            // Handle a successful response and show the success notification
            showSuccessNotification();
            setEmail('')
          } else {
            // Handle errors
            console.error("Error sending email");
          }
        })
        .catch((error) => {
          // Handle network or other errors
          console.error("Error sending email:", error);
        });
    } else {
      console.log("Invalid email address");
    }
  };

  return (
    <div>
      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-4xl mt-20  font-bold text-gray-900 md:text-4xl">
              Ready to see it in  <span className="text-indigo-600">action? </span> Request a <span className="text-indigo-600">demo </span> now!
            </h2>

            {/* <p className="hidden text-gray-500 md:mt-4 md:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper
              eu enim et fermentum, augue. Aliquet amet volutpat quisque ut
              interdum tincidunt duis.
            </p> */}

            <div className="mt-4 md:mt-8 flex items-center justify-center gap-5">
              <div className="w-full py-10">
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={handleEmailChange}
                  className="w-full py-6 rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
                />
              </div>
              <div>
                <button
                  onClick={handleSendEmail}
                  disabled={!isEmailValid} // Disable the button if the email is not valid
                  className={`inline-block rounded bg-indigo-600 px-6 py-6 text-sm font-medium text-white transition hover:bg-indigo-900 focus:outline-none focus:ring focus:ring-yellow-400 ${
                    !isEmailValid && "cursor-not-allowed opacity-50"
                  }`}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default Demo;
