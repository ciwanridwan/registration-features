import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import './style.css';
import * as Yup from 'yup';

class FormRegistration extends Component {
    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    }
    render() {
        console.log(this.props);
        return (
            <Formik
                initialValues={{
                    username: '',
                    email: '',
                    gender: '',
                    phoneNumber: ''
                }}
                validationSchema={Yup.object({
                    username: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    gender: Yup.string()
                        .required('Required'),
                    phoneNumber: Yup.string()
                        .max(15, 'Phone Number must be 15 digits or less')
                        .required('Required')
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {formik => (
                    <div className="container">
                        <h1>This is validation use formik and yup, and concept made redux</h1>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="username">Username</label>
                                    <input className="col-75"
                                        id="username"
                                        name="username"
                                        type="text"
                                        {...formik.getFieldProps('username')}
                                    />
                                    {formik.touched.username && formik.errors.username ? (
                                        <div>{formik.errors.username}</div>
                                    ) : null}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="email">Email Address</label>
                                    <input className="col-75" id="email" type="email" name="email" {...formik.getFieldProps('email')} />
                                    {formik.touched.email && formik.errors.email ? (
                                        <div>{formik.errors.email}</div>
                                    ) : null}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="gender">Gender</label>
                                    <select className="col-75" id="gender" name="gender" className="form" {...formik.getFieldProps('gender')}>
                                        <option value="">Pilih Gender</option>
                                        <option value="Pria">Pria</option>
                                        <option value="Wanita">Wanita</option>
                                    </select>
                                    {formik.touched.gender && formik.errors.gender ? (
                                        <div>{formik.errors.gender}</div>
                                    ) : null}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="phoneNumber" className="">Phone Number</label>
                                    <input className="col-75"
                                        id="phoneNumber"
                                        type="number"
                                        name="phoneNumber"
                                        {...formik.getFieldProps('phoneNumber')}
                                    />
                                    {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                                        <div>{formik.errors.phoneNumber}</div>
                                    ) : null}
                                </div>
                            </div>

                            <button type="submit" className="button">Submit</button>
                        </form>
                    </div>
                )}
            </Formik>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.username,
        email: state.email,
        gender: state.gender,
        phoneNumber: state.phoneNumber
    }
}
export default connect(mapStateToProps)(FormRegistration);