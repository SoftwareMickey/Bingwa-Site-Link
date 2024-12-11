import SmsItem from "./resusables/SmsItem"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Minutes(){

    const [mnsOffers, setBundleOffers] = useState([])

    const offers = useSelector((state) => state.modal.data);

    useEffect(() => {
        const bundles = offers.filter((data) => data.type === 'VOICE')
        setBundleOffers(bundles)
    }, [offers])


    const smsItem = mnsOffers.map((sms) => <SmsItem
        key={sms._id}
        title={sms.name}
        price={sms.price}
    />)

    return <section className="ml-20 mt-10 sm:mx-4">
        <p className="font-[400] font-poppins text-[32px]">Minutes</p>

        <div className="pt-4 flex flex-wrap sm:flex-col">{smsItem}</div>
    </section>
}