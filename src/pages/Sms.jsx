import SmsItem from "./resusables/SmsItem"

const smsOffers = [
    {
        id: Math.floor(Math.random() * 100000000),
        title: '20sms for 24hrs',
        price: 5
    },
    {
        id: Math.floor(Math.random() * 100000000),
        title: '200 sms for 24hrs',
        price: 10
    },
    {
        id: Math.floor(Math.random() * 100000000),
        title: '100 sms for 7 days',
        price: 21
    },
    {
        id: Math.floor(Math.random() * 100000000),
        title: '1000 sms for 7day',
        price: 30
    },
    {
        id: Math.floor(Math.random() * 100000000),
        title: '1500 sms for 30 days',
        price: 100
    },
    {
        id: Math.floor(Math.random() * 100000000),
        title: '50 min until midnight',
        price: 51
    },
]

export default function Sms(){

    const smsItem = smsOffers.map((sms) => <SmsItem
        key={sms.id}
        title={sms.title}
        price={sms.price}
    />)

    return <section className="mx-20 mt-10 sm:mx-4">
        <p className="font-[400] font-poppins text-[32px]">Sms</p>

        <div className="pt-4 flex justify-between flex-wrap sm:flex-col">{smsItem}</div>
    </section>
}