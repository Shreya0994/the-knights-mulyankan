import React, { useState } from 'react'

const AppointmentForm = ({ success }: { success: () => void }) => {
	// Handles the submit event on form submit.
	const handleSubmit = async (event: any) => {
		// Stop the form from submitting and refreshing the page.
		event.preventDefault()
		// Get data from the form.
		const data = {
			department: event.target.department.value,
			doctor: event.target.doctor.value,
			date: event.target.date.value,
			time: event.target.time.value,
			full_name: event.target.full_name.value,
			phone_number: event.target.phone_number.value,
			message: event.target.message.value
		}
		// Send the data to the server in JSON format.
		const JSONdata = JSON.stringify(data)
		// API endpoint where we send form data.
		const endpoint = 'https://sample-apis.azurewebsites.net/api/open/appointments'
		// Form the request for sending data to the server.
		const options = {
			// The method is POST because we are sending data.
			method: 'POST',
			// Tell the server we're sending JSON.
			headers: {
				'Content-Type': 'application/json',
				'accept': 'application/json'
			},
			// Body of the request is the JSON data we created above.
			body: JSONdata,
		}
		// Send the form data to our forms API on Vercel and get a response.
		const response = await fetch(endpoint, options)
		console.log(response);
		// Get the response data from server as JSON.
		// If server returns the name submitted, that means the form works.
		if (response.status === 201) {
			success();
		}
	}
	return (
		<section className="appoinment section">
			<div className="container">
				<div className="row">
				<div className="col-lg-4">
					<div className="mt-3">
						<div className="feature-icon mb-3">
						<i className="icofont-support text-lg"></i>
						</div>
						<span className="h3">Call for an Emergency Service!</span>
						<h2 className="text-color mt-3">+84 789 1256 </h2>
					</div>
				</div>

					<div className="col-lg-8">
						<div className="appoinment-wrap mt-5 mt-lg-0 pl-lg-5">
							<h2 className="mb-2 title-color">Book an appoinment</h2>
							<form action="#" onSubmit={handleSubmit} className="appoinment-form">
								<div className="row">
									<div className="col-lg-6">
										<div className="form-group">
											<select className="form-control" id="department">
											<option>Choose Department</option>
											<option>Software Design</option>
											<option>Development cycle</option>
											<option>Software Development</option>
											<option>Maintenance</option>
											<option>Process Query</option>
											<option>Cost and Duration</option>
											<option>Modal Delivery</option>
											</select>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="form-group">
											<select className="form-control" id="doctor">
											<option>Select Doctors</option>
											<option>Software Design</option>
											<option>Development cycle</option>
											<option>Software Development</option>
											<option>Maintenance</option>
											<option>Process Query</option>
											<option>Cost and Duration</option>
											<option>Modal Delivery</option>
											</select>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="form-group">
											<input  name="date" id="date" type="text" className="form-control" placeholder="dd/mm/yyyy" />
										</div>
									</div>
									<div className="col-lg-6">
											<div className="form-group">
												<input name="time" id="time" type="text" className="form-control" placeholder="Time" />
											</div>
									</div>
									<div className="col-lg-6">
										<div className="form-group">
											<input name="full_name" id="full_name" type="text" className="form-control" placeholder="Full Name" />
										</div>
									</div>

									<div className="col-lg-6">
										<div className="form-group">
											<input name="phone_number" id="phone_number" type="Number" className="form-control" placeholder="Your Phone number" />
										</div>
									</div>
									<div className="col-lg-12">
										<div className="form-group-2 mb-4">
											<textarea name="message" id="message" className="form-control" rows={6} placeholder="Your Message"></textarea>
										</div>
									</div>
								</div>
								<input className="btn btn-main btn-round-full" type="submit" value="Make Appoinment" />
							</form>	
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}


export const Appoinment = ({}) => {

	const [formSubmitted, setFormSubmitted] = useState(false)
	
	return (
		<>
			{!formSubmitted && <div className="appoinment-form mt-5 mt-lg-0">
				<AppointmentForm success={() => { setFormSubmitted(true) }} />
			</div>}
			{formSubmitted && 
				<section className="section confirmation">
					<div className="container">
						<div className="row justify-content-center">
						<div className="col-lg-8">
							<div className="confirmation-content text-center">
								<i className="icofont-check-circled text-lg text-color-2"></i>
								<h2 className="mt-3 mb-4">Thank you for your appoinment</h2>
								<p>We will contact with you soon.</p>
							</div>
						</div>
						</div>
					</div>
				</section>
			}
		</>
	)
}