import BundleItem from "./resusables/BundleItem"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Bundles(){
    const offers = useSelector((state) => state.modal.data);
    const [bundleOffers, setBundleOffers] = useState([])

    useEffect(() => {
        const bundles = offers.filter((data) => data.type === 'DATA')
        setBundleOffers(bundles)
    }, [offers])


    const bundlesItem = bundleOffers.map((bundle) => <BundleItem
        key={bundle._id}
        title={bundle.name}
        price={bundle.price}
    />)

    return <section className="ml-20 mt-10 sm:mx-4">
        <p className="font-[400] font-poppins text-[32px]">Bundles</p>

        <div className="pt-4 flex flex-wrap sm:flex-col">{bundlesItem}</div>
    </section>
}