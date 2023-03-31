import { PopupModal } from "../../molecules/Popup";
import { Slider } from "../../molecules/Slider";
import { Cards } from "../../organisms/Cards";
import { CardsPartners } from "../../organisms/CardsPartnerships";
import { Disclosure } from "../../organisms/Disclosures/Index";
import { Footer } from "../../organisms/Footer";
import { HeaderIndex } from "../../organisms/header";
import { HomeInfo } from "../../organisms/Info";
import { NewsLetter } from "../../organisms/NewsLetter";
import { Shelf } from "../../organisms/Shelf";

export const HomeTemplate = () => (
  <>
    <PopupModal />
    <HeaderIndex />
    <Slider />
    <Cards />
    <CardsPartners />
    <Shelf />
    <HomeInfo />
    <NewsLetter />
    <Disclosure />
    <Footer />
  </>
);
