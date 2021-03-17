
import { Menu } from "../components/Menu";
import "../styles/global.css";

function MyApp({ Component, pageProps, router }) {

    return (
        <>
            <Menu url={router.pathname} />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
