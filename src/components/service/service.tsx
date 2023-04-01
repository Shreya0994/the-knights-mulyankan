import { ServiceItem } from "@/library/types";

const Service = (props: ServiceItem) => {
  const iconClass = `${props.serviceIconClass} text-lg`;
  return (
    <div className="col-lg-4 col-md-6 col-sm-6">
      <div className="service-item mb-4">
        <div className="icon d-flex align-items-center">
          <i className={iconClass}></i>
          <h4 className="mt-3 mb-3">{props.serviceName}</h4>
        </div>

        <div className="content">
          <p className="mb-4">{props.serviceDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
