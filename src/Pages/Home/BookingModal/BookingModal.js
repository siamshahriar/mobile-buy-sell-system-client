import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const BookingModal = ({ productItem, setProductItem }) => {
  const { user } = useContext(AuthContext);

  const {
    _id,
    img,
    productName,
    location,
    resalePrice,
    orginalPrice,
    yearsOfuse,
    time,
    description,
    phoneNumber,
    condition,
    sellerMail,
  } = productItem;

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const contact = form.phone.value;
    const location = form.location.value;

    const booking = {
      orginalProductId: _id,
      img,
      userName: name,
      email,
      productName,
      price: resalePrice,
      contact,
      location,
      paidStatus: false,
    };

    fetch("https://mobile-buy-sell-system-server.vercel.app/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          setProductItem(null);
          toast.success("Booking confirmed");
        } else {
          toast.error(data.message);
        }
      });
  };
  return (
    <>
      <input type="checkbox" id="bookingModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <label
            onClick={() => setProductItem(null)}
            htmlFor="bookingModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              disabled
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email Address"
              className="input w-full input-bordered"
            />
            <input
              name="itemName"
              type="text"
              defaultValue={productName}
              disabled
              placeholder="itemName"
              className="input w-full input-bordered"
            />
            <input
              name="price"
              type="text"
              defaultValue={resalePrice}
              disabled
              placeholder="price"
              className="input w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <input
              name="location"
              type="text"
              placeholder="Meeting Location"
              className="input w-full input-bordered"
            />
            <br />
            <div className="modal-action">
              <label htmlFor="bookingModal" className="w-full">
                <input
                  className="btn btn-accent w-full"
                  type="submit"
                  value="Submit"
                />
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
