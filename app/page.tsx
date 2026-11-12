import { Suspense } from "react";
import Banner from "./component/Home page/Banner";
import Library from "./component/Home page/Library/Library";

export default function Home() {
    return (
        <div className="bg-slate-950">
            <Banner></Banner>
            <Suspense fallback={<p>loadding...</p>}>
                <Library></Library>
            </Suspense>
        </div>
    );
}
