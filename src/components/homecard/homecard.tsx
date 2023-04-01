import CardItem from '@/components/homecard/carditem'
import { CardContent } from '@/data/home-page-card-data'


const HomePageCard = () => {
    
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="feature-block d-lg-flex">
                            {CardContent.map( (card, index) => ( 
                                <CardItem key={index}
                                    icons={card.icons} 
                                    title={card.title} 
                                    subheading={card.subheading} 
                                    description={card.description} 
                                    cta={card.cta} 
                                    ctatext={card.ctatext}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};  

export default HomePageCard;