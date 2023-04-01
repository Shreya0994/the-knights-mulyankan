import CardItem from '@/components/carditem'


const HomeCard = () => {
    const titles = ["Online Appoinment", "Working Hours", "1-800-700-6200"]
    const CardContent = [
        {
            id: 1,
            subheading: '24 Hours Service',
            title: 'Online Appoinment',
            description: 'Get All time support for emergency.We have introduced the principle of family medicine.',
            cta: '#',
            ctatext: 'Make a appoinment',
            icons: 'icofont-surgeon-alt'
        },
        {
            id: 2,
            subheading: 'Timing schedule',
            title: 'Working Hours',
            description: '<ul class="w-hours list-unstyled"><li class="d-flex justify-content-between">Sun - Wed : <span>8:00 - 17:00</span></li><li class="d-flex justify-content-between">Thu - Fri : <span>9:00 - 17:00</span></li><li class="d-flex justify-content-between">Sat - sun : <span>10:00 - 17:00</span></li>     </ul>',
            cta: '',
            ctatext: '',
            icons: 'icofont-ui-clock'
        },
        {
            id: 3,
            subheading: 'Emegency Cases',
            title: '1-800-700-6200',
            description: 'Get All time support for emergency.We have introduced the principle of family medicine.Get Conneted with us for any urgency .',
            cta: '',
            ctatext: '',
            icons: 'icofont-support'
        },
      ]
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="feature-block d-lg-flex">
                            {CardContent.map( card => ( 
                                <CardItem icons={card.icons} title={card.title} subheading={card.subheading} description={card.description} cta={card.cta} ctatext={card.ctatext}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};  

export default HomeCard;