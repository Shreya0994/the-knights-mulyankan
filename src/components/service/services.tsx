import { ServiceItem, Services } from "@/library/types";
import Description from "../shared/description";
import Heading from "../shared/heading";
import Divider from "../shared/divider";
import Service from "./service";

const Services = (props: Services) => {
  return (
    <section className="section service gray-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            <div className="section-title">
              <Heading title={props.title} />
              <Divider />
              <Description description={props.description} />
            </div>
          </div>
        </div>

        <div className="row">
          {props.serviceItems.map((service: ServiceItem, index: number) => (
            <Service
              serviceName={service.serviceName}
              serviceDescription={service.serviceDescription}
              serviceIconClass={service.serviceIconClass}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
