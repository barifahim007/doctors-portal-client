import React from 'react';
import PrimaryButton from '../../../../components/PrimaryButton/PrimaryButton';
import appointment from '../../../../assets/images/appointment.png'

const ContactForm = () => {
    return (
        <section className='my-8'
            style={{ backgroundImage: `url(${appointment})` }}
        >
            <div className='text-center'>
                <h3 className='font-bold text-xl text-primary'>Contact us</h3>
                <h2 className='font-semibold text-3xl text-white'>Stay connected with us</h2>
            </div>
            <div>
                <div className="">
                    <div className="hero-content flex-col">

                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">

                                <div className="form-control">

                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="Your Email" required className="input input-bordered input-primary w-full max-w-xs" />
                                </div>
                                <div className='form-control'>
                                    <label className='label' >
                                        <span className="label-text">Subject</span>
                                    </label>
                                    <input type="text" required placeholder="Subject" className="input input-bordered input-primary w-full max-w-xs" />
                                </div>
                                <div className="form-control">
                                    <label className='label'>
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea className="textarea textarea-success" placeholder="Message" required></textarea>

                                </div>
                                <div className="form-control mt-6 text-center">
                                    <PrimaryButton>Submit</PrimaryButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;