import { strict } from "assert";
import { link } from "fs";
import Link from "next/link";
import { ReactElement } from "react";

type Cardprops = {
    title: string
    subheading: string,
    description: string,
    cta: string,
    ctatext: string,
    icons: string
};

const CardItem = (props: Cardprops) => {
    return(
        <>
            <div className="feature-item mb-5 mb-lg-0">
                <div className="feature-icon mb-4">
                    <i className={props.icons}></i>
                </div>
                <span>{props.subheading}</span>
                <h4 className="mb-3">{props.title}</h4>
                <p className="mb-4" dangerouslySetInnerHTML={{__html: props.description}}></p>
                { props.cta && <Link href={props.cta} className="btn btn-main btn-round-full">{props.ctatext}</Link>}
            </div>
        </>
    )
};

export default CardItem;