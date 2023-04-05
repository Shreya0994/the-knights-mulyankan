import React from "react";
import { useState, useEffect } from "react";
import { IServiceCardInformation } from "@/library/servicecard";
import Image from "next/image";

const ServiceCards = () => {

    const [data, setData] = useState<IServiceCardInformation[] | null>(null);

    useEffect(() => {
        fetch("/api/servicecard-information")
            .then((res) => res.json())
            .then((data) => {
                setData(data);

            });
    }, []);

    return (
        <>
            <section className="section service-2">
                <div className="container">
                    <div className="row">
                        {
                            !data && <span>Data is laoding</span>
                        }
                        {
                            data && data.map((serviceitem, index) => (
                                <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                                    <div className="service-block mb-5">
                                        {data && serviceitem.image && <Image src={serviceitem.image} alt="" className="img-fluid" key={index} width={320} height={230} />}
                                        <div className="content">
                                            <h4 className="mt-4 mb-2 title-color">{serviceitem?.title}</h4>
                                            <p className="mb-4">{serviceitem?.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceCards;

function LoadingSpinner() {
    return (
        <div className="spinner-container">
            <div className="loading-spinner">
                Data is loading....
            </div>
        </div>
    );
}