import BundleItem from "./resusables/BundleItem"

const bundleOffers = [
    {
        id: Math.floor(Math.random() * 100000000),
        title: '1.5GB for 3hrs',
        price: 50
    },
    {
        id: Math.floor(Math.random() * 100000000),
        title: '350MB for 7 days',
        price: 49
    },
    {
        id: Math.floor(Math.random() * 100000000),
        title: '250MB for 24hrs',
        price: 20
    },
    {
        id: Math.floor(Math.random() * 100000000),
        title: '2.5GB for 7 days',
        price: 300
    },
    {
        id: Math.floor(Math.random() * 100000000),
        title: '6GB for 7 days',
        price: 700
    },
    {
        id: Math.floor(Math.random() * 100000000),
        title: '1GB for 1hr',
        price: 19
    },
    {
        id: Math.floor(Math.random() * 100000000),
        title: '1.25GB until midnight',
        price: 55
    },
]

export default function Bundles(){

    const bundlesItem = bundleOffers.map((bundle) => <BundleItem
        key={bundle.id}
        title={bundle.title}
        price={bundle.price}
    />)

    return <section className="mx-20 mt-10 sm:mx-4">
        <p className="font-[400] font-poppins text-[32px]">Bundles</p>

        <div className="pt-4 flex justify-between flex-wrap sm:flex-col">{bundlesItem}</div>
    </section>
}