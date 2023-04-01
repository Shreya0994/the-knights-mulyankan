import Link from "next/link";
import React, { useState } from "react";


type CopyRightProps = {
	copyRightText: string;

}

const SubscribeForm = ({ success }: { success: () => void }) => {
	// Handles the submit event on form submit.
	const handleSubmit = async (event: any) => {
		// Stop the form from submitting and refreshing the page.
		event.preventDefault()
		// Get data from the form.
		const data = {
			email: event.target.email.value
		}
		// Send the data to the server in JSON format.
		const JSONdata = JSON.stringify(data)
		// API endpoint where we send form data.
		const endpoint = 'https://sample-apis.azurewebsites.net/api/open/subscribe'
		// Form the request for sending data to the server.
		const options = {
			// The method is POST because we are sending data.
			method: 'POST',
			// Tell the server we're sending JSON.
			headers: {
				'Content-Type': 'application/json',
			},
			// Body of the request is the JSON data we created above.
			body: JSONdata,
		}
		// Send the form data to our forms API on Vercel and get a response.
		const response = await fetch(endpoint, options)
		console.log(response);
		// Get the response data from server as JSON.
		// If server returns the name submitted, that means the form works.
		// const result = await response.json()
		// console.log(response.statuscode)
		if (response.status === 201) {
			success();
		}
	}
	return (
		<form action="#" onSubmit={handleSubmit} className="subscribe">
			<input id="email" name="email" type="email" className="form-control" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="Your Email address" />
			<input className="btn btn-main-2 btn-round-full" type="submit" value="Subscribe" />
		</form>
	)
}

const CopyRight = (props: CopyRightProps) => {

	const [formSubmitted, setFormSubmitted] = useState(false)

	return (
		<>
			<div className="footer-btm py-4 mt-5">
				<div className="row align-items-center justify-content-between">
					<div className="col-lg-6">
						<div className="copyright" dangerouslySetInnerHTML={{ __html: props.copyRightText }}></div>
					</div>
					<div className="col-lg-6">
						{!formSubmitted && <div className="subscribe-form text-lg-right mt-5 mt-lg-0">
							<SubscribeForm success={() => { setFormSubmitted(true) }} />
						</div>}
						{formSubmitted && <h4>Thanks for subcribing...</h4>}
					</div>
				</div>

				<div className="row">
					<div className="col-lg-4">
						<a className="backtop js-scroll-trigger" href="#top">
							<i className="icofont-long-arrow-up"></i>
						</a>
					</div>
				</div>
			</div>
		</>
	);

};
export default CopyRight;