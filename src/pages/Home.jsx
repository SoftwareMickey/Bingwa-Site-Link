import Bundles from "./Bundles";
import PurchaseModal from "./modal/PurchaseModal";
import Sms from "./Sms";
import Minutes from "./Minutes";

export default function Home(){

    return <section>
        <PurchaseModal/>
        <Bundles/>
        <Sms/>
        <Minutes/>
    </section>
}