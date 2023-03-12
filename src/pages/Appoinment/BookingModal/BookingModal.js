import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ appoinment, selectedDate }) => {
    const { name, slots } = appoinment;
    const date = format(selectedDate, "PP")
    const handelModal = event => {
        event.preventDefault()
        const form = event.target
        const date = form.date.value;
        const slot = form.slot.value;
        const name = form.name.value;
        const number = form.number.value;
        const email = form.email.value;
        form.reset()
        console.log(date, slot, name, number, email)
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">x</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handelModal} className='my-6'>
                        <input type="text" name='date' value={date} disabled className="input my-2 input-bordered w-full " />
                        <select name="slot" className="select select-bordered w-full my-2">
                            {
                                slots.map(slot => <option value={slot} >{slot}</option>)
                            }
                        </select>
                        <input name="name" type="text" placeholder="Full name" className="input input-bordered w-full my-2" />
                        <input name="number" type="number" placeholder="Phone Number" className="input input-bordered w-full my-2" />
                        <input name="email" type="email" placeholder="Email" className="input input-bordered w-full my-2" />
                        <br />
                        <input type="submit" className='btn btn-neutral w-full' value="submit" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;