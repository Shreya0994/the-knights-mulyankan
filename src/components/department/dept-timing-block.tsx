

const TimingSchedule = () => {
    return (
        <div className="col-lg-4">
            <div className="sidebar-widget schedule-widget mt-5">
                <h5 className="mb-4">Time Schedule</h5>

                <ul className="list-unstyled">
                    <li className="d-flex justify-content-between align-items-center">
                        <a href="#">Monday - Friday</a>
                        <span>9:00 - 17:00</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center">
                        <a href="#">Saturday</a>
                        <span>9:00 - 16:00</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center">
                        <a href="#">Sunday</a>
                        <span>Closed</span>
                    </li>
                </ul>

                <div className="sidebar-contatct-info mt-4">
                    <p className="mb-0">Need Urgent Help?</p>
                    <h3>+23-4565-65768</h3>
                </div>
            </div>
        </div>
    )
}

export default TimingSchedule;