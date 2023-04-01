import React from "react";
import Cards from "../cards/cards";
import { Page } from "@/library/types";
import Heading from "../shared/heading";
import Divider from "../shared/divider";
import Description from "../shared/description";
import { deparmentPageComponent } from "@/data/department";

const DepartmentComponent = () => {
    
    return(
        <section className="section service-2">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 text-center">
                        <div className="section-title">
                            <Heading title={deparmentPageComponent.promo.title} />
                            <Divider />
                            <Description description={deparmentPageComponent.promo.description} />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <Cards cards={deparmentPageComponent.deparmentItems} page={Page.Deparment} />
                </div>
            </div>
        </section>
    )
}
export default DepartmentComponent;