import Image from 'next/image';
import { ClientItem , Client } from "@/library/types";
import Heading from '../shared/heading';
import Divider from '../shared/divider';
import Description from '../shared/description';

const Clients = (props: Client) => {
    return (
        <>
            <section className="section clients">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="section-title text-center">
                                <Heading title={props.title} />
                                <Divider />
                                <Description description={props.description} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row clients-logo">
                        {props.clientItems.map(
                            (item: ClientItem, index: number) => (
                                <>
                                    <div className="col-lg-2">
                                        <div className="client-thumb">
                                            <Image src={item.clientLogo} alt="" className="img-fluid" width={160} height={83} />
                                        </div>
                                    </div>
                                </>
                            )
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Clients