import React from 'react'


const features = [
    { id: '01', text: 'Minimal Corporate & no income tax, what you earn is yours.' },
    { id: '02', text: 'No public or online registration.' },
    { id: '03', text: 'Possibility to invoice anywhere in the world.' },
    { id: '04', text: 'Possibility to repatriate all capital and profits.' },
    { id: '05', text: '100% shareholder of your company.' },
    { id: '06', text: '2-Year residence visa for share-holders and employees.' },
    { id: '07', text: 'Possibility to sponsor dependent visa.' },
    { id: '08', text: 'Shareholders’ presence isn’t required to start incorporation.' },
    { id: '09', text: 'Annual audit may be required, depending on selected zone/activity.' },
];

const Advantages = () => {
    return (
        <>
            <section className='bg-[#F6F6F6] py-16'>
                <div className='container-1200 px-5'>
                    <div className='grid grid-cols-2 gap-12 items-center'>
                        <div>
                            <span className='text-black font-bold text-lg capitalize'>Freezone Company</span>
                            <h2 className='text-black font-extrabold leading-16 text-[56px] pt-8'>Advantages of a Freezone Company </h2>
                        </div>
                        <p className='font-[350] text-base text-black'>A Freezone company is a business registered in a designated UAE Free Zone area. It allows 100% foreign ownership, offers tax advantages, and provides simplified licensing and visa services. It’s ideal for international trade, startups, and companies needing flexible office options.</p>
                    </div>
                    {/* advantages */}
                    <div className="grid grid-cols-1 md:grid-cols-3 mt-16">
                        {features.map((feature) => (
                            <div
                                key={feature.id}
                                className={`
                p-5 flex flex-col justify-start
                border-[#D9DBDF]
                
                /* Mobile Borders (1 Column): Bottom borders for all except the very last item */
                border-b last:border-b-0
                
                /* Desktop Borders (3 Columns): 
                   1. Add right borders, but remove them for every 3rd item (end of row)
                   2. Add bottom borders, but remove them for the last 3 items (bottom row) */
                md:border-b md:border-r
                md:nth-[3n]:border-r-0
                md:nth-last-[-n+3]:border-b-0
              `}
                            >
                                <span className="text-[#ABAEB2] font-extrabold text-lg">
                                    {feature.id}
                                </span>
                                <p className="text-black font-extrabold text-[22px]  pt-6 ">
                                    {feature.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Advantages