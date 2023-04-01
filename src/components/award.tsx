import React from "react";
import { Awards, ClientItem } from "@/library/types";
import Image from "next/image";
import Divider from "./shared/divider";
import Heading from "./shared/heading";



const Award = (props: Awards) => {
    return(
            <section className="section awards">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <Heading className="title-color" title={props.title} />
                        <Divider />
                    </div>

                    <div className="col-lg-8">
                        <div className="row">
                            {
                                props.clientItems.map((client: ClientItem, index: number) =>
                                <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="award-img">
                                        <Image src={client.clientLogo} alt="" className="img-fluid" width={130} height={78}/>
                                    </div>
                            </div>)
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
)
}

export default Award;