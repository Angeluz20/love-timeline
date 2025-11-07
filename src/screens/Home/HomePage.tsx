import { Container } from "./HomeStyle";
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import RelationshipTimerComp from "../../components/RelationshipTimer/RelationshipTimer";
import FloatingMusicPlayer from "../../components/FloationPlayerMusic/FloationPlayerMusic";
import OurStorySection from "../../components/OurStorySection/OurStorySection";
import ProposalGift from "../../components/Proposal/Proposal";

const Home = () => {
    return(
        
    <Container>
        <Header/>
        <Slider/>
        <RelationshipTimerComp/>
        <OurStorySection/>
        <ProposalGift/>
        <FloatingMusicPlayer/>
    </Container>
    )
}

export default Home;