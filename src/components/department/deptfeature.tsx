import React from "react";

export const ServiceFeature = () => {
    return (
        <>
            <h3 className="mt-5 mb-4">Services features</h3>
            <div className="divider my-4"></div>
            <ul className="list-unstyled department-service">
                <li><i className="icofont-check mr-2"></i>International Drug Database</li>
                <li><i className="icofont-check mr-2"></i>Stretchers and Stretcher Accessories</li>
                <li><i className="icofont-check mr-2"></i>Cushions and Mattresses</li>
                <li><i className="icofont-check mr-2"></i>Cholesterol and lipid tests</li>
                <li><i className="icofont-check mr-2"></i>Critical Care Medicine Specialists</li>
                <li><i className="icofont-check mr-2"></i>Emergency Assistance</li>
            </ul>

            <a href="appoinment" className="btn btn-main-2 btn-round-full">Make an Appoinment<i className="icofont-simple-right ml-2  "></i></a>
        </>
    )
}
