import { Outlet } from "foodhouse";
import Header from "../components/Header/Header"

const Root = () => {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <Outlet />
                </div>
            </main>
        </>
    )
}

export default Root;