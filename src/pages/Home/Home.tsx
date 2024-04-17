import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SectionFour from "./Sections/SectionFour/SectionFour";
import SectionOne from "./Sections/SectionOne/SectionOne";
import SectionThree from "./Sections/SectionThree/SectionThree";
import SectionTwo from "./Sections/SectionTwo/SectionTwo";



export default function Home() {
    return (
        <>
            <Header />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <Footer />
        </>
    )
}