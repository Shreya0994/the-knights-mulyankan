import { IAppointment } from "@/library/types";
import PageBanner from "@/components/pageBanner/pagebanner";

export async function getServerSideProps() {

	const res = await fetch('https://sample-apis.azurewebsites.net/api/open/appointments');
	const allAppointments = await res.json();
	return {
		props: { allAppointments  },
    
	}
}

const Appointment = ( props : { allAppointments :  IAppointment[] } ) => {
	return (
		<>
			<PageBanner subHeading="All Appointment" heading="All Appointment" />
			<div className="container">
				<br/>
				<table className="table" style={{ width: '100%' }}>
					<tr style={ { border: '1px solid #dddddd' }}>
						<th style={ { border: '1px solid #dddddd' }}>Doctor</th>
						<th style={ { border: '1px solid #dddddd' }}>Department</th>
						<th style={ { border: '1px solid #dddddd' }}>Patient Name</th>
						<th style={ { border: '1px solid #dddddd' }}>Patient Phone</th>
						<th style={ { border: '1px solid #dddddd' }}>Message</th>
						<th style={ { border: '1px solid #dddddd' }}>Appointment Date</th>
						<th style={ { border: '1px solid #dddddd' }}>Appointment Time</th>
					</tr>
					{props.allAppointments && props.allAppointments.map((app, index)=>
						<tr key={index} style={ { border: '1px solid #dddddd' }}>
							<td style={ { border: '1px solid #dddddd' }}>{app.doctor}</td>
							<td style={ { border: '1px solid #dddddd' }}>{app.department}</td>
							<td style={ { border: '1px solid #dddddd' }}>{app.full_name}</td>
							<td style={ { border: '1px solid #dddddd' }}>{app.phone_number}</td>
							<td style={ { border: '1px solid #dddddd' }}>{app.message}</td>
							<td style={ { border: '1px solid #dddddd' }}>{app.date}</td>
							<td style={ { border: '1px solid #dddddd' }}>{app.time}</td>
						</tr>
					)}
				</table>

			</div>
		</>
	)
}
export default Appointment