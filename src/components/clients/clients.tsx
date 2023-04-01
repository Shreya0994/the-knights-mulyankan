import Image from 'next/image';
import { ClientItem } from "@/library/types";

type clientsProps = {
    clientItems: ClientItem[];
};

const Clients = (props: clientsProps) => {
    return (
        <>
            <section className="section clients">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="section-title text-center">
                                <h2>Partners who support us</h2>
                                <div className="divider mx-auto my-4"></div>
                                <p>Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.</p>
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