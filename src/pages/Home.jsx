import Bundles from "./Bundles";
import PurchaseModal from "./modal/PurchaseModal";
import Sms from "./Sms";

export default function Home(){
    return <section>
        <PurchaseModal/>
        <Bundles/>
        <Sms/>
    </section>
}