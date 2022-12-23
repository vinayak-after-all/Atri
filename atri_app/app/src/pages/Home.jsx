import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useFooterCb, useFlex158Cb, useFlex159Cb, useFlex160Cb, useFlex161Cb, useFlex163Cb, useFlex162Cb, useFlex167Cb, useFlex165Cb, useFlex166Cb, useFlex164Cb, useFlex171Cb, useFlex169Cb, useFlex170Cb, useFlex168Cb, useFlex183Cb, useFlex181Cb, useFlex182Cb, useFlex180Cb, useFlex184Cb, useFlex185Cb, useFlex186Cb, useFlex191Cb, useFlex187Cb, useFlex188Cb, useFlex189Cb, useFlex190Cb, useFlex192Cb, useNavbarCb, useFlex193Cb, useFlex194Cb, useFlex195Cb, useFlex5Cb, useFlex8Cb, useIntroCb, useFlex196Cb, useFlex197Cb, useFlex353Cb, useFlex354Cb, useFlex356Cb, useFlex198Cb, useTrustTestimonalsCb, useFlex199Cb, useFlex202Cb, useFlex203Cb, useServicesCb, useFlex216Cb, useFlex217Cb, useFlex218Cb, useFlex239Cb, useFlex236Cb, useFlex233Cb, useDiv57Cb, useDiv58Cb, useDiv59Cb, useFlex237Cb, useDiv19Cb, useDiv62Cb, useDiv60Cb, useDiv61Cb, useFlex238Cb, useDiv65Cb, useDiv63Cb, useDiv64Cb, useFlex358Cb, useProjectsCb, useFlex240Cb, useFlex241Cb, useFlex242Cb, useBlogsCb, useFlex243Cb, useFlex244Cb, useFlex245Cb, useFlex249Cb, useFlex250Cb, useFlex251Cb, useFlex252Cb, useAchievementCb, useFlex359Cb, useFlex360Cb, useFlex361Cb, useGalleryCb, useFlex253Cb, useFlex254Cb, useFlex255Cb, useFlex256Cb, useFlex257Cb, useFlex258Cb, useWork_ExperienceCb, useFlex260Cb, useFlex264Cb, useFlex262Cb, useFlex263Cb, useFlex284Cb, useFlex282Cb, useFlex279Cb, useFlex274Cb, useFlex272Cb, useFlex268Cb, useFlex269Cb, useFlex273Cb, useFlex270Cb, useFlex271Cb, useFlex283Cb, useFlex280Cb, useFlex275Cb, useFlex276Cb, useFlex281Cb, useFlex277Cb, useFlex278Cb, useFlex301Cb, useFlex299Cb, useFlex296Cb, useFlex291Cb, useFlex289Cb, useFlex285Cb, useFlex286Cb, useFlex290Cb, useFlex287Cb, useFlex288Cb, useFlex300Cb, useFlex297Cb, useFlex292Cb, useFlex293Cb, useFlex298Cb, useFlex294Cb, useFlex295Cb, useFlex318Cb, useFlex316Cb, useFlex313Cb, useFlex308Cb, useFlex306Cb, useFlex302Cb, useFlex303Cb, useFlex307Cb, useFlex304Cb, useFlex305Cb, useFlex317Cb, useFlex314Cb, useFlex309Cb, useFlex310Cb, useFlex315Cb, useFlex311Cb, useFlex312Cb, useTextBox119Cb, useTextBox120Cb, useImage43Cb, useTextBox121Cb, useTextBox122Cb, useImage44Cb, useImage45Cb, useTextBox124Cb, useImage46Cb, useTextBox123Cb, useImage47Cb, useTextBox126Cb, useImage48Cb, useTextBox125Cb, useImage53Cb, useTextBox132Cb, useImage54Cb, useTextBox131Cb, useTextBox133Cb, useTextBox134Cb, useImage55Cb, useTextBox144Cb, useTextBox146Cb, useImage56Cb, useTextBox196Cb, useTextBox197Cb, useTextBox198Cb, useTextBox199Cb, useTextBox200Cb, useTextBox201Cb, useTextBox202Cb, useTextBox203Cb, useTextBox204Cb, useTextBox150Cb, useImage2Cb, useTextBox12Cb, useTextBox13Cb, useTextBox14Cb, useTextBox15Cb, useTextBox11Cb, useImage1Cb, useTextBox25Cb, useTextBox26Cb, useTextBox27Cb, useButton6Cb, useButton7Cb, useImage71Cb, useImage3Cb, useTextBox29Cb, useImage8Cb, useImage9Cb, useImage10Cb, useImage11Cb, useTextBox30Cb, useImage12Cb, useTextBox32Cb, useTextBox35Cb, useTextBox151Cb, useTextBox155Cb, useTextBox154Cb, useImage13Cb, useTextBox33Cb, useTextBox36Cb, useTextBox158Cb, useTextBox156Cb, useTextBox157Cb, useImage14Cb, useTextBox34Cb, useTextBox37Cb, useTextBox161Cb, useTextBox159Cb, useTextBox160Cb, useTextBox31Cb, useTextBox42Cb, useTextBox43Cb, useButton4Cb, useTextBox50Cb, useTextBox49Cb, useTextBox207Cb, useTextBox73Cb, useTextBox75Cb, useTextBox209Cb, useTextBox52Cb, useTextBox53Cb, useTextBox208Cb, useTextBox76Cb, useTextBox78Cb, useTextBox210Cb, useTextBox79Cb, useTextBox81Cb, useTextBox211Cb, useTextBox82Cb, useTextBox83Cb, useTextBox84Cb, useImage23Cb, useImage24Cb, useImage27Cb, useImage28Cb, useImage57Cb, useTextBox162Cb, useImage58Cb, useTextBox163Cb, useTextBox166Cb, useImage61Cb, useTextBox167Cb, useTextBox168Cb, useTextBox169Cb, useImage62Cb, useTextBox170Cb, useTextBox171Cb, useTextBox172Cb, useImage63Cb, useTextBox173Cb, useTextBox174Cb, useTextBox175Cb, useImage64Cb, useTextBox176Cb, useTextBox177Cb, useTextBox178Cb, useImage65Cb, useTextBox179Cb, useTextBox180Cb, useTextBox181Cb, useImage66Cb, useTextBox182Cb, useTextBox183Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const FooterProps = useStore((state)=>state["Home"]["Footer"]);
const FooterIoProps = useIoStore((state)=>state["Home"]["Footer"]);
const FooterCb = useFooterCb()
const Flex158Props = useStore((state)=>state["Home"]["Flex158"]);
const Flex158IoProps = useIoStore((state)=>state["Home"]["Flex158"]);
const Flex158Cb = useFlex158Cb()
const Flex159Props = useStore((state)=>state["Home"]["Flex159"]);
const Flex159IoProps = useIoStore((state)=>state["Home"]["Flex159"]);
const Flex159Cb = useFlex159Cb()
const Flex160Props = useStore((state)=>state["Home"]["Flex160"]);
const Flex160IoProps = useIoStore((state)=>state["Home"]["Flex160"]);
const Flex160Cb = useFlex160Cb()
const Flex161Props = useStore((state)=>state["Home"]["Flex161"]);
const Flex161IoProps = useIoStore((state)=>state["Home"]["Flex161"]);
const Flex161Cb = useFlex161Cb()
const Flex163Props = useStore((state)=>state["Home"]["Flex163"]);
const Flex163IoProps = useIoStore((state)=>state["Home"]["Flex163"]);
const Flex163Cb = useFlex163Cb()
const Flex162Props = useStore((state)=>state["Home"]["Flex162"]);
const Flex162IoProps = useIoStore((state)=>state["Home"]["Flex162"]);
const Flex162Cb = useFlex162Cb()
const Flex167Props = useStore((state)=>state["Home"]["Flex167"]);
const Flex167IoProps = useIoStore((state)=>state["Home"]["Flex167"]);
const Flex167Cb = useFlex167Cb()
const Flex165Props = useStore((state)=>state["Home"]["Flex165"]);
const Flex165IoProps = useIoStore((state)=>state["Home"]["Flex165"]);
const Flex165Cb = useFlex165Cb()
const Flex166Props = useStore((state)=>state["Home"]["Flex166"]);
const Flex166IoProps = useIoStore((state)=>state["Home"]["Flex166"]);
const Flex166Cb = useFlex166Cb()
const Flex164Props = useStore((state)=>state["Home"]["Flex164"]);
const Flex164IoProps = useIoStore((state)=>state["Home"]["Flex164"]);
const Flex164Cb = useFlex164Cb()
const Flex171Props = useStore((state)=>state["Home"]["Flex171"]);
const Flex171IoProps = useIoStore((state)=>state["Home"]["Flex171"]);
const Flex171Cb = useFlex171Cb()
const Flex169Props = useStore((state)=>state["Home"]["Flex169"]);
const Flex169IoProps = useIoStore((state)=>state["Home"]["Flex169"]);
const Flex169Cb = useFlex169Cb()
const Flex170Props = useStore((state)=>state["Home"]["Flex170"]);
const Flex170IoProps = useIoStore((state)=>state["Home"]["Flex170"]);
const Flex170Cb = useFlex170Cb()
const Flex168Props = useStore((state)=>state["Home"]["Flex168"]);
const Flex168IoProps = useIoStore((state)=>state["Home"]["Flex168"]);
const Flex168Cb = useFlex168Cb()
const Flex183Props = useStore((state)=>state["Home"]["Flex183"]);
const Flex183IoProps = useIoStore((state)=>state["Home"]["Flex183"]);
const Flex183Cb = useFlex183Cb()
const Flex181Props = useStore((state)=>state["Home"]["Flex181"]);
const Flex181IoProps = useIoStore((state)=>state["Home"]["Flex181"]);
const Flex181Cb = useFlex181Cb()
const Flex182Props = useStore((state)=>state["Home"]["Flex182"]);
const Flex182IoProps = useIoStore((state)=>state["Home"]["Flex182"]);
const Flex182Cb = useFlex182Cb()
const Flex180Props = useStore((state)=>state["Home"]["Flex180"]);
const Flex180IoProps = useIoStore((state)=>state["Home"]["Flex180"]);
const Flex180Cb = useFlex180Cb()
const Flex184Props = useStore((state)=>state["Home"]["Flex184"]);
const Flex184IoProps = useIoStore((state)=>state["Home"]["Flex184"]);
const Flex184Cb = useFlex184Cb()
const Flex185Props = useStore((state)=>state["Home"]["Flex185"]);
const Flex185IoProps = useIoStore((state)=>state["Home"]["Flex185"]);
const Flex185Cb = useFlex185Cb()
const Flex186Props = useStore((state)=>state["Home"]["Flex186"]);
const Flex186IoProps = useIoStore((state)=>state["Home"]["Flex186"]);
const Flex186Cb = useFlex186Cb()
const Flex191Props = useStore((state)=>state["Home"]["Flex191"]);
const Flex191IoProps = useIoStore((state)=>state["Home"]["Flex191"]);
const Flex191Cb = useFlex191Cb()
const Flex187Props = useStore((state)=>state["Home"]["Flex187"]);
const Flex187IoProps = useIoStore((state)=>state["Home"]["Flex187"]);
const Flex187Cb = useFlex187Cb()
const Flex188Props = useStore((state)=>state["Home"]["Flex188"]);
const Flex188IoProps = useIoStore((state)=>state["Home"]["Flex188"]);
const Flex188Cb = useFlex188Cb()
const Flex189Props = useStore((state)=>state["Home"]["Flex189"]);
const Flex189IoProps = useIoStore((state)=>state["Home"]["Flex189"]);
const Flex189Cb = useFlex189Cb()
const Flex190Props = useStore((state)=>state["Home"]["Flex190"]);
const Flex190IoProps = useIoStore((state)=>state["Home"]["Flex190"]);
const Flex190Cb = useFlex190Cb()
const Flex192Props = useStore((state)=>state["Home"]["Flex192"]);
const Flex192IoProps = useIoStore((state)=>state["Home"]["Flex192"]);
const Flex192Cb = useFlex192Cb()
const NavbarProps = useStore((state)=>state["Home"]["Navbar"]);
const NavbarIoProps = useIoStore((state)=>state["Home"]["Navbar"]);
const NavbarCb = useNavbarCb()
const Flex193Props = useStore((state)=>state["Home"]["Flex193"]);
const Flex193IoProps = useIoStore((state)=>state["Home"]["Flex193"]);
const Flex193Cb = useFlex193Cb()
const Flex194Props = useStore((state)=>state["Home"]["Flex194"]);
const Flex194IoProps = useIoStore((state)=>state["Home"]["Flex194"]);
const Flex194Cb = useFlex194Cb()
const Flex195Props = useStore((state)=>state["Home"]["Flex195"]);
const Flex195IoProps = useIoStore((state)=>state["Home"]["Flex195"]);
const Flex195Cb = useFlex195Cb()
const Flex5Props = useStore((state)=>state["Home"]["Flex5"]);
const Flex5IoProps = useIoStore((state)=>state["Home"]["Flex5"]);
const Flex5Cb = useFlex5Cb()
const Flex8Props = useStore((state)=>state["Home"]["Flex8"]);
const Flex8IoProps = useIoStore((state)=>state["Home"]["Flex8"]);
const Flex8Cb = useFlex8Cb()
const IntroProps = useStore((state)=>state["Home"]["Intro"]);
const IntroIoProps = useIoStore((state)=>state["Home"]["Intro"]);
const IntroCb = useIntroCb()
const Flex196Props = useStore((state)=>state["Home"]["Flex196"]);
const Flex196IoProps = useIoStore((state)=>state["Home"]["Flex196"]);
const Flex196Cb = useFlex196Cb()
const Flex197Props = useStore((state)=>state["Home"]["Flex197"]);
const Flex197IoProps = useIoStore((state)=>state["Home"]["Flex197"]);
const Flex197Cb = useFlex197Cb()
const Flex353Props = useStore((state)=>state["Home"]["Flex353"]);
const Flex353IoProps = useIoStore((state)=>state["Home"]["Flex353"]);
const Flex353Cb = useFlex353Cb()
const Flex354Props = useStore((state)=>state["Home"]["Flex354"]);
const Flex354IoProps = useIoStore((state)=>state["Home"]["Flex354"]);
const Flex354Cb = useFlex354Cb()
const Flex356Props = useStore((state)=>state["Home"]["Flex356"]);
const Flex356IoProps = useIoStore((state)=>state["Home"]["Flex356"]);
const Flex356Cb = useFlex356Cb()
const Flex198Props = useStore((state)=>state["Home"]["Flex198"]);
const Flex198IoProps = useIoStore((state)=>state["Home"]["Flex198"]);
const Flex198Cb = useFlex198Cb()
const TrustTestimonalsProps = useStore((state)=>state["Home"]["TrustTestimonals"]);
const TrustTestimonalsIoProps = useIoStore((state)=>state["Home"]["TrustTestimonals"]);
const TrustTestimonalsCb = useTrustTestimonalsCb()
const Flex199Props = useStore((state)=>state["Home"]["Flex199"]);
const Flex199IoProps = useIoStore((state)=>state["Home"]["Flex199"]);
const Flex199Cb = useFlex199Cb()
const Flex202Props = useStore((state)=>state["Home"]["Flex202"]);
const Flex202IoProps = useIoStore((state)=>state["Home"]["Flex202"]);
const Flex202Cb = useFlex202Cb()
const Flex203Props = useStore((state)=>state["Home"]["Flex203"]);
const Flex203IoProps = useIoStore((state)=>state["Home"]["Flex203"]);
const Flex203Cb = useFlex203Cb()
const ServicesProps = useStore((state)=>state["Home"]["Services"]);
const ServicesIoProps = useIoStore((state)=>state["Home"]["Services"]);
const ServicesCb = useServicesCb()
const Flex216Props = useStore((state)=>state["Home"]["Flex216"]);
const Flex216IoProps = useIoStore((state)=>state["Home"]["Flex216"]);
const Flex216Cb = useFlex216Cb()
const Flex217Props = useStore((state)=>state["Home"]["Flex217"]);
const Flex217IoProps = useIoStore((state)=>state["Home"]["Flex217"]);
const Flex217Cb = useFlex217Cb()
const Flex218Props = useStore((state)=>state["Home"]["Flex218"]);
const Flex218IoProps = useIoStore((state)=>state["Home"]["Flex218"]);
const Flex218Cb = useFlex218Cb()
const Flex239Props = useStore((state)=>state["Home"]["Flex239"]);
const Flex239IoProps = useIoStore((state)=>state["Home"]["Flex239"]);
const Flex239Cb = useFlex239Cb()
const Flex236Props = useStore((state)=>state["Home"]["Flex236"]);
const Flex236IoProps = useIoStore((state)=>state["Home"]["Flex236"]);
const Flex236Cb = useFlex236Cb()
const Flex233Props = useStore((state)=>state["Home"]["Flex233"]);
const Flex233IoProps = useIoStore((state)=>state["Home"]["Flex233"]);
const Flex233Cb = useFlex233Cb()
const Div57Props = useStore((state)=>state["Home"]["Div57"]);
const Div57IoProps = useIoStore((state)=>state["Home"]["Div57"]);
const Div57Cb = useDiv57Cb()
const Div58Props = useStore((state)=>state["Home"]["Div58"]);
const Div58IoProps = useIoStore((state)=>state["Home"]["Div58"]);
const Div58Cb = useDiv58Cb()
const Div59Props = useStore((state)=>state["Home"]["Div59"]);
const Div59IoProps = useIoStore((state)=>state["Home"]["Div59"]);
const Div59Cb = useDiv59Cb()
const Flex237Props = useStore((state)=>state["Home"]["Flex237"]);
const Flex237IoProps = useIoStore((state)=>state["Home"]["Flex237"]);
const Flex237Cb = useFlex237Cb()
const Div19Props = useStore((state)=>state["Home"]["Div19"]);
const Div19IoProps = useIoStore((state)=>state["Home"]["Div19"]);
const Div19Cb = useDiv19Cb()
const Div62Props = useStore((state)=>state["Home"]["Div62"]);
const Div62IoProps = useIoStore((state)=>state["Home"]["Div62"]);
const Div62Cb = useDiv62Cb()
const Div60Props = useStore((state)=>state["Home"]["Div60"]);
const Div60IoProps = useIoStore((state)=>state["Home"]["Div60"]);
const Div60Cb = useDiv60Cb()
const Div61Props = useStore((state)=>state["Home"]["Div61"]);
const Div61IoProps = useIoStore((state)=>state["Home"]["Div61"]);
const Div61Cb = useDiv61Cb()
const Flex238Props = useStore((state)=>state["Home"]["Flex238"]);
const Flex238IoProps = useIoStore((state)=>state["Home"]["Flex238"]);
const Flex238Cb = useFlex238Cb()
const Div65Props = useStore((state)=>state["Home"]["Div65"]);
const Div65IoProps = useIoStore((state)=>state["Home"]["Div65"]);
const Div65Cb = useDiv65Cb()
const Div63Props = useStore((state)=>state["Home"]["Div63"]);
const Div63IoProps = useIoStore((state)=>state["Home"]["Div63"]);
const Div63Cb = useDiv63Cb()
const Div64Props = useStore((state)=>state["Home"]["Div64"]);
const Div64IoProps = useIoStore((state)=>state["Home"]["Div64"]);
const Div64Cb = useDiv64Cb()
const Flex358Props = useStore((state)=>state["Home"]["Flex358"]);
const Flex358IoProps = useIoStore((state)=>state["Home"]["Flex358"]);
const Flex358Cb = useFlex358Cb()
const ProjectsProps = useStore((state)=>state["Home"]["Projects"]);
const ProjectsIoProps = useIoStore((state)=>state["Home"]["Projects"]);
const ProjectsCb = useProjectsCb()
const Flex240Props = useStore((state)=>state["Home"]["Flex240"]);
const Flex240IoProps = useIoStore((state)=>state["Home"]["Flex240"]);
const Flex240Cb = useFlex240Cb()
const Flex241Props = useStore((state)=>state["Home"]["Flex241"]);
const Flex241IoProps = useIoStore((state)=>state["Home"]["Flex241"]);
const Flex241Cb = useFlex241Cb()
const Flex242Props = useStore((state)=>state["Home"]["Flex242"]);
const Flex242IoProps = useIoStore((state)=>state["Home"]["Flex242"]);
const Flex242Cb = useFlex242Cb()
const BlogsProps = useStore((state)=>state["Home"]["Blogs"]);
const BlogsIoProps = useIoStore((state)=>state["Home"]["Blogs"]);
const BlogsCb = useBlogsCb()
const Flex243Props = useStore((state)=>state["Home"]["Flex243"]);
const Flex243IoProps = useIoStore((state)=>state["Home"]["Flex243"]);
const Flex243Cb = useFlex243Cb()
const Flex244Props = useStore((state)=>state["Home"]["Flex244"]);
const Flex244IoProps = useIoStore((state)=>state["Home"]["Flex244"]);
const Flex244Cb = useFlex244Cb()
const Flex245Props = useStore((state)=>state["Home"]["Flex245"]);
const Flex245IoProps = useIoStore((state)=>state["Home"]["Flex245"]);
const Flex245Cb = useFlex245Cb()
const Flex249Props = useStore((state)=>state["Home"]["Flex249"]);
const Flex249IoProps = useIoStore((state)=>state["Home"]["Flex249"]);
const Flex249Cb = useFlex249Cb()
const Flex250Props = useStore((state)=>state["Home"]["Flex250"]);
const Flex250IoProps = useIoStore((state)=>state["Home"]["Flex250"]);
const Flex250Cb = useFlex250Cb()
const Flex251Props = useStore((state)=>state["Home"]["Flex251"]);
const Flex251IoProps = useIoStore((state)=>state["Home"]["Flex251"]);
const Flex251Cb = useFlex251Cb()
const Flex252Props = useStore((state)=>state["Home"]["Flex252"]);
const Flex252IoProps = useIoStore((state)=>state["Home"]["Flex252"]);
const Flex252Cb = useFlex252Cb()
const AchievementProps = useStore((state)=>state["Home"]["Achievement"]);
const AchievementIoProps = useIoStore((state)=>state["Home"]["Achievement"]);
const AchievementCb = useAchievementCb()
const Flex359Props = useStore((state)=>state["Home"]["Flex359"]);
const Flex359IoProps = useIoStore((state)=>state["Home"]["Flex359"]);
const Flex359Cb = useFlex359Cb()
const Flex360Props = useStore((state)=>state["Home"]["Flex360"]);
const Flex360IoProps = useIoStore((state)=>state["Home"]["Flex360"]);
const Flex360Cb = useFlex360Cb()
const Flex361Props = useStore((state)=>state["Home"]["Flex361"]);
const Flex361IoProps = useIoStore((state)=>state["Home"]["Flex361"]);
const Flex361Cb = useFlex361Cb()
const GalleryProps = useStore((state)=>state["Home"]["Gallery"]);
const GalleryIoProps = useIoStore((state)=>state["Home"]["Gallery"]);
const GalleryCb = useGalleryCb()
const Flex253Props = useStore((state)=>state["Home"]["Flex253"]);
const Flex253IoProps = useIoStore((state)=>state["Home"]["Flex253"]);
const Flex253Cb = useFlex253Cb()
const Flex254Props = useStore((state)=>state["Home"]["Flex254"]);
const Flex254IoProps = useIoStore((state)=>state["Home"]["Flex254"]);
const Flex254Cb = useFlex254Cb()
const Flex255Props = useStore((state)=>state["Home"]["Flex255"]);
const Flex255IoProps = useIoStore((state)=>state["Home"]["Flex255"]);
const Flex255Cb = useFlex255Cb()
const Flex256Props = useStore((state)=>state["Home"]["Flex256"]);
const Flex256IoProps = useIoStore((state)=>state["Home"]["Flex256"]);
const Flex256Cb = useFlex256Cb()
const Flex257Props = useStore((state)=>state["Home"]["Flex257"]);
const Flex257IoProps = useIoStore((state)=>state["Home"]["Flex257"]);
const Flex257Cb = useFlex257Cb()
const Flex258Props = useStore((state)=>state["Home"]["Flex258"]);
const Flex258IoProps = useIoStore((state)=>state["Home"]["Flex258"]);
const Flex258Cb = useFlex258Cb()
const Work_ExperienceProps = useStore((state)=>state["Home"]["Work_Experience"]);
const Work_ExperienceIoProps = useIoStore((state)=>state["Home"]["Work_Experience"]);
const Work_ExperienceCb = useWork_ExperienceCb()
const Flex260Props = useStore((state)=>state["Home"]["Flex260"]);
const Flex260IoProps = useIoStore((state)=>state["Home"]["Flex260"]);
const Flex260Cb = useFlex260Cb()
const Flex264Props = useStore((state)=>state["Home"]["Flex264"]);
const Flex264IoProps = useIoStore((state)=>state["Home"]["Flex264"]);
const Flex264Cb = useFlex264Cb()
const Flex262Props = useStore((state)=>state["Home"]["Flex262"]);
const Flex262IoProps = useIoStore((state)=>state["Home"]["Flex262"]);
const Flex262Cb = useFlex262Cb()
const Flex263Props = useStore((state)=>state["Home"]["Flex263"]);
const Flex263IoProps = useIoStore((state)=>state["Home"]["Flex263"]);
const Flex263Cb = useFlex263Cb()
const Flex284Props = useStore((state)=>state["Home"]["Flex284"]);
const Flex284IoProps = useIoStore((state)=>state["Home"]["Flex284"]);
const Flex284Cb = useFlex284Cb()
const Flex282Props = useStore((state)=>state["Home"]["Flex282"]);
const Flex282IoProps = useIoStore((state)=>state["Home"]["Flex282"]);
const Flex282Cb = useFlex282Cb()
const Flex279Props = useStore((state)=>state["Home"]["Flex279"]);
const Flex279IoProps = useIoStore((state)=>state["Home"]["Flex279"]);
const Flex279Cb = useFlex279Cb()
const Flex274Props = useStore((state)=>state["Home"]["Flex274"]);
const Flex274IoProps = useIoStore((state)=>state["Home"]["Flex274"]);
const Flex274Cb = useFlex274Cb()
const Flex272Props = useStore((state)=>state["Home"]["Flex272"]);
const Flex272IoProps = useIoStore((state)=>state["Home"]["Flex272"]);
const Flex272Cb = useFlex272Cb()
const Flex268Props = useStore((state)=>state["Home"]["Flex268"]);
const Flex268IoProps = useIoStore((state)=>state["Home"]["Flex268"]);
const Flex268Cb = useFlex268Cb()
const Flex269Props = useStore((state)=>state["Home"]["Flex269"]);
const Flex269IoProps = useIoStore((state)=>state["Home"]["Flex269"]);
const Flex269Cb = useFlex269Cb()
const Flex273Props = useStore((state)=>state["Home"]["Flex273"]);
const Flex273IoProps = useIoStore((state)=>state["Home"]["Flex273"]);
const Flex273Cb = useFlex273Cb()
const Flex270Props = useStore((state)=>state["Home"]["Flex270"]);
const Flex270IoProps = useIoStore((state)=>state["Home"]["Flex270"]);
const Flex270Cb = useFlex270Cb()
const Flex271Props = useStore((state)=>state["Home"]["Flex271"]);
const Flex271IoProps = useIoStore((state)=>state["Home"]["Flex271"]);
const Flex271Cb = useFlex271Cb()
const Flex283Props = useStore((state)=>state["Home"]["Flex283"]);
const Flex283IoProps = useIoStore((state)=>state["Home"]["Flex283"]);
const Flex283Cb = useFlex283Cb()
const Flex280Props = useStore((state)=>state["Home"]["Flex280"]);
const Flex280IoProps = useIoStore((state)=>state["Home"]["Flex280"]);
const Flex280Cb = useFlex280Cb()
const Flex275Props = useStore((state)=>state["Home"]["Flex275"]);
const Flex275IoProps = useIoStore((state)=>state["Home"]["Flex275"]);
const Flex275Cb = useFlex275Cb()
const Flex276Props = useStore((state)=>state["Home"]["Flex276"]);
const Flex276IoProps = useIoStore((state)=>state["Home"]["Flex276"]);
const Flex276Cb = useFlex276Cb()
const Flex281Props = useStore((state)=>state["Home"]["Flex281"]);
const Flex281IoProps = useIoStore((state)=>state["Home"]["Flex281"]);
const Flex281Cb = useFlex281Cb()
const Flex277Props = useStore((state)=>state["Home"]["Flex277"]);
const Flex277IoProps = useIoStore((state)=>state["Home"]["Flex277"]);
const Flex277Cb = useFlex277Cb()
const Flex278Props = useStore((state)=>state["Home"]["Flex278"]);
const Flex278IoProps = useIoStore((state)=>state["Home"]["Flex278"]);
const Flex278Cb = useFlex278Cb()
const Flex301Props = useStore((state)=>state["Home"]["Flex301"]);
const Flex301IoProps = useIoStore((state)=>state["Home"]["Flex301"]);
const Flex301Cb = useFlex301Cb()
const Flex299Props = useStore((state)=>state["Home"]["Flex299"]);
const Flex299IoProps = useIoStore((state)=>state["Home"]["Flex299"]);
const Flex299Cb = useFlex299Cb()
const Flex296Props = useStore((state)=>state["Home"]["Flex296"]);
const Flex296IoProps = useIoStore((state)=>state["Home"]["Flex296"]);
const Flex296Cb = useFlex296Cb()
const Flex291Props = useStore((state)=>state["Home"]["Flex291"]);
const Flex291IoProps = useIoStore((state)=>state["Home"]["Flex291"]);
const Flex291Cb = useFlex291Cb()
const Flex289Props = useStore((state)=>state["Home"]["Flex289"]);
const Flex289IoProps = useIoStore((state)=>state["Home"]["Flex289"]);
const Flex289Cb = useFlex289Cb()
const Flex285Props = useStore((state)=>state["Home"]["Flex285"]);
const Flex285IoProps = useIoStore((state)=>state["Home"]["Flex285"]);
const Flex285Cb = useFlex285Cb()
const Flex286Props = useStore((state)=>state["Home"]["Flex286"]);
const Flex286IoProps = useIoStore((state)=>state["Home"]["Flex286"]);
const Flex286Cb = useFlex286Cb()
const Flex290Props = useStore((state)=>state["Home"]["Flex290"]);
const Flex290IoProps = useIoStore((state)=>state["Home"]["Flex290"]);
const Flex290Cb = useFlex290Cb()
const Flex287Props = useStore((state)=>state["Home"]["Flex287"]);
const Flex287IoProps = useIoStore((state)=>state["Home"]["Flex287"]);
const Flex287Cb = useFlex287Cb()
const Flex288Props = useStore((state)=>state["Home"]["Flex288"]);
const Flex288IoProps = useIoStore((state)=>state["Home"]["Flex288"]);
const Flex288Cb = useFlex288Cb()
const Flex300Props = useStore((state)=>state["Home"]["Flex300"]);
const Flex300IoProps = useIoStore((state)=>state["Home"]["Flex300"]);
const Flex300Cb = useFlex300Cb()
const Flex297Props = useStore((state)=>state["Home"]["Flex297"]);
const Flex297IoProps = useIoStore((state)=>state["Home"]["Flex297"]);
const Flex297Cb = useFlex297Cb()
const Flex292Props = useStore((state)=>state["Home"]["Flex292"]);
const Flex292IoProps = useIoStore((state)=>state["Home"]["Flex292"]);
const Flex292Cb = useFlex292Cb()
const Flex293Props = useStore((state)=>state["Home"]["Flex293"]);
const Flex293IoProps = useIoStore((state)=>state["Home"]["Flex293"]);
const Flex293Cb = useFlex293Cb()
const Flex298Props = useStore((state)=>state["Home"]["Flex298"]);
const Flex298IoProps = useIoStore((state)=>state["Home"]["Flex298"]);
const Flex298Cb = useFlex298Cb()
const Flex294Props = useStore((state)=>state["Home"]["Flex294"]);
const Flex294IoProps = useIoStore((state)=>state["Home"]["Flex294"]);
const Flex294Cb = useFlex294Cb()
const Flex295Props = useStore((state)=>state["Home"]["Flex295"]);
const Flex295IoProps = useIoStore((state)=>state["Home"]["Flex295"]);
const Flex295Cb = useFlex295Cb()
const Flex318Props = useStore((state)=>state["Home"]["Flex318"]);
const Flex318IoProps = useIoStore((state)=>state["Home"]["Flex318"]);
const Flex318Cb = useFlex318Cb()
const Flex316Props = useStore((state)=>state["Home"]["Flex316"]);
const Flex316IoProps = useIoStore((state)=>state["Home"]["Flex316"]);
const Flex316Cb = useFlex316Cb()
const Flex313Props = useStore((state)=>state["Home"]["Flex313"]);
const Flex313IoProps = useIoStore((state)=>state["Home"]["Flex313"]);
const Flex313Cb = useFlex313Cb()
const Flex308Props = useStore((state)=>state["Home"]["Flex308"]);
const Flex308IoProps = useIoStore((state)=>state["Home"]["Flex308"]);
const Flex308Cb = useFlex308Cb()
const Flex306Props = useStore((state)=>state["Home"]["Flex306"]);
const Flex306IoProps = useIoStore((state)=>state["Home"]["Flex306"]);
const Flex306Cb = useFlex306Cb()
const Flex302Props = useStore((state)=>state["Home"]["Flex302"]);
const Flex302IoProps = useIoStore((state)=>state["Home"]["Flex302"]);
const Flex302Cb = useFlex302Cb()
const Flex303Props = useStore((state)=>state["Home"]["Flex303"]);
const Flex303IoProps = useIoStore((state)=>state["Home"]["Flex303"]);
const Flex303Cb = useFlex303Cb()
const Flex307Props = useStore((state)=>state["Home"]["Flex307"]);
const Flex307IoProps = useIoStore((state)=>state["Home"]["Flex307"]);
const Flex307Cb = useFlex307Cb()
const Flex304Props = useStore((state)=>state["Home"]["Flex304"]);
const Flex304IoProps = useIoStore((state)=>state["Home"]["Flex304"]);
const Flex304Cb = useFlex304Cb()
const Flex305Props = useStore((state)=>state["Home"]["Flex305"]);
const Flex305IoProps = useIoStore((state)=>state["Home"]["Flex305"]);
const Flex305Cb = useFlex305Cb()
const Flex317Props = useStore((state)=>state["Home"]["Flex317"]);
const Flex317IoProps = useIoStore((state)=>state["Home"]["Flex317"]);
const Flex317Cb = useFlex317Cb()
const Flex314Props = useStore((state)=>state["Home"]["Flex314"]);
const Flex314IoProps = useIoStore((state)=>state["Home"]["Flex314"]);
const Flex314Cb = useFlex314Cb()
const Flex309Props = useStore((state)=>state["Home"]["Flex309"]);
const Flex309IoProps = useIoStore((state)=>state["Home"]["Flex309"]);
const Flex309Cb = useFlex309Cb()
const Flex310Props = useStore((state)=>state["Home"]["Flex310"]);
const Flex310IoProps = useIoStore((state)=>state["Home"]["Flex310"]);
const Flex310Cb = useFlex310Cb()
const Flex315Props = useStore((state)=>state["Home"]["Flex315"]);
const Flex315IoProps = useIoStore((state)=>state["Home"]["Flex315"]);
const Flex315Cb = useFlex315Cb()
const Flex311Props = useStore((state)=>state["Home"]["Flex311"]);
const Flex311IoProps = useIoStore((state)=>state["Home"]["Flex311"]);
const Flex311Cb = useFlex311Cb()
const Flex312Props = useStore((state)=>state["Home"]["Flex312"]);
const Flex312IoProps = useIoStore((state)=>state["Home"]["Flex312"]);
const Flex312Cb = useFlex312Cb()
const TextBox119Props = useStore((state)=>state["Home"]["TextBox119"]);
const TextBox119IoProps = useIoStore((state)=>state["Home"]["TextBox119"]);
const TextBox119Cb = useTextBox119Cb()
const TextBox120Props = useStore((state)=>state["Home"]["TextBox120"]);
const TextBox120IoProps = useIoStore((state)=>state["Home"]["TextBox120"]);
const TextBox120Cb = useTextBox120Cb()
const Image43Props = useStore((state)=>state["Home"]["Image43"]);
const Image43IoProps = useIoStore((state)=>state["Home"]["Image43"]);
const Image43Cb = useImage43Cb()
const TextBox121Props = useStore((state)=>state["Home"]["TextBox121"]);
const TextBox121IoProps = useIoStore((state)=>state["Home"]["TextBox121"]);
const TextBox121Cb = useTextBox121Cb()
const TextBox122Props = useStore((state)=>state["Home"]["TextBox122"]);
const TextBox122IoProps = useIoStore((state)=>state["Home"]["TextBox122"]);
const TextBox122Cb = useTextBox122Cb()
const Image44Props = useStore((state)=>state["Home"]["Image44"]);
const Image44IoProps = useIoStore((state)=>state["Home"]["Image44"]);
const Image44Cb = useImage44Cb()
const Image45Props = useStore((state)=>state["Home"]["Image45"]);
const Image45IoProps = useIoStore((state)=>state["Home"]["Image45"]);
const Image45Cb = useImage45Cb()
const TextBox124Props = useStore((state)=>state["Home"]["TextBox124"]);
const TextBox124IoProps = useIoStore((state)=>state["Home"]["TextBox124"]);
const TextBox124Cb = useTextBox124Cb()
const Image46Props = useStore((state)=>state["Home"]["Image46"]);
const Image46IoProps = useIoStore((state)=>state["Home"]["Image46"]);
const Image46Cb = useImage46Cb()
const TextBox123Props = useStore((state)=>state["Home"]["TextBox123"]);
const TextBox123IoProps = useIoStore((state)=>state["Home"]["TextBox123"]);
const TextBox123Cb = useTextBox123Cb()
const Image47Props = useStore((state)=>state["Home"]["Image47"]);
const Image47IoProps = useIoStore((state)=>state["Home"]["Image47"]);
const Image47Cb = useImage47Cb()
const TextBox126Props = useStore((state)=>state["Home"]["TextBox126"]);
const TextBox126IoProps = useIoStore((state)=>state["Home"]["TextBox126"]);
const TextBox126Cb = useTextBox126Cb()
const Image48Props = useStore((state)=>state["Home"]["Image48"]);
const Image48IoProps = useIoStore((state)=>state["Home"]["Image48"]);
const Image48Cb = useImage48Cb()
const TextBox125Props = useStore((state)=>state["Home"]["TextBox125"]);
const TextBox125IoProps = useIoStore((state)=>state["Home"]["TextBox125"]);
const TextBox125Cb = useTextBox125Cb()
const Image53Props = useStore((state)=>state["Home"]["Image53"]);
const Image53IoProps = useIoStore((state)=>state["Home"]["Image53"]);
const Image53Cb = useImage53Cb()
const TextBox132Props = useStore((state)=>state["Home"]["TextBox132"]);
const TextBox132IoProps = useIoStore((state)=>state["Home"]["TextBox132"]);
const TextBox132Cb = useTextBox132Cb()
const Image54Props = useStore((state)=>state["Home"]["Image54"]);
const Image54IoProps = useIoStore((state)=>state["Home"]["Image54"]);
const Image54Cb = useImage54Cb()
const TextBox131Props = useStore((state)=>state["Home"]["TextBox131"]);
const TextBox131IoProps = useIoStore((state)=>state["Home"]["TextBox131"]);
const TextBox131Cb = useTextBox131Cb()
const TextBox133Props = useStore((state)=>state["Home"]["TextBox133"]);
const TextBox133IoProps = useIoStore((state)=>state["Home"]["TextBox133"]);
const TextBox133Cb = useTextBox133Cb()
const TextBox134Props = useStore((state)=>state["Home"]["TextBox134"]);
const TextBox134IoProps = useIoStore((state)=>state["Home"]["TextBox134"]);
const TextBox134Cb = useTextBox134Cb()
const Image55Props = useStore((state)=>state["Home"]["Image55"]);
const Image55IoProps = useIoStore((state)=>state["Home"]["Image55"]);
const Image55Cb = useImage55Cb()
const TextBox144Props = useStore((state)=>state["Home"]["TextBox144"]);
const TextBox144IoProps = useIoStore((state)=>state["Home"]["TextBox144"]);
const TextBox144Cb = useTextBox144Cb()
const TextBox146Props = useStore((state)=>state["Home"]["TextBox146"]);
const TextBox146IoProps = useIoStore((state)=>state["Home"]["TextBox146"]);
const TextBox146Cb = useTextBox146Cb()
const Image56Props = useStore((state)=>state["Home"]["Image56"]);
const Image56IoProps = useIoStore((state)=>state["Home"]["Image56"]);
const Image56Cb = useImage56Cb()
const TextBox196Props = useStore((state)=>state["Home"]["TextBox196"]);
const TextBox196IoProps = useIoStore((state)=>state["Home"]["TextBox196"]);
const TextBox196Cb = useTextBox196Cb()
const TextBox197Props = useStore((state)=>state["Home"]["TextBox197"]);
const TextBox197IoProps = useIoStore((state)=>state["Home"]["TextBox197"]);
const TextBox197Cb = useTextBox197Cb()
const TextBox198Props = useStore((state)=>state["Home"]["TextBox198"]);
const TextBox198IoProps = useIoStore((state)=>state["Home"]["TextBox198"]);
const TextBox198Cb = useTextBox198Cb()
const TextBox199Props = useStore((state)=>state["Home"]["TextBox199"]);
const TextBox199IoProps = useIoStore((state)=>state["Home"]["TextBox199"]);
const TextBox199Cb = useTextBox199Cb()
const TextBox200Props = useStore((state)=>state["Home"]["TextBox200"]);
const TextBox200IoProps = useIoStore((state)=>state["Home"]["TextBox200"]);
const TextBox200Cb = useTextBox200Cb()
const TextBox201Props = useStore((state)=>state["Home"]["TextBox201"]);
const TextBox201IoProps = useIoStore((state)=>state["Home"]["TextBox201"]);
const TextBox201Cb = useTextBox201Cb()
const TextBox202Props = useStore((state)=>state["Home"]["TextBox202"]);
const TextBox202IoProps = useIoStore((state)=>state["Home"]["TextBox202"]);
const TextBox202Cb = useTextBox202Cb()
const TextBox203Props = useStore((state)=>state["Home"]["TextBox203"]);
const TextBox203IoProps = useIoStore((state)=>state["Home"]["TextBox203"]);
const TextBox203Cb = useTextBox203Cb()
const TextBox204Props = useStore((state)=>state["Home"]["TextBox204"]);
const TextBox204IoProps = useIoStore((state)=>state["Home"]["TextBox204"]);
const TextBox204Cb = useTextBox204Cb()
const TextBox150Props = useStore((state)=>state["Home"]["TextBox150"]);
const TextBox150IoProps = useIoStore((state)=>state["Home"]["TextBox150"]);
const TextBox150Cb = useTextBox150Cb()
const Image2Props = useStore((state)=>state["Home"]["Image2"]);
const Image2IoProps = useIoStore((state)=>state["Home"]["Image2"]);
const Image2Cb = useImage2Cb()
const TextBox12Props = useStore((state)=>state["Home"]["TextBox12"]);
const TextBox12IoProps = useIoStore((state)=>state["Home"]["TextBox12"]);
const TextBox12Cb = useTextBox12Cb()
const TextBox13Props = useStore((state)=>state["Home"]["TextBox13"]);
const TextBox13IoProps = useIoStore((state)=>state["Home"]["TextBox13"]);
const TextBox13Cb = useTextBox13Cb()
const TextBox14Props = useStore((state)=>state["Home"]["TextBox14"]);
const TextBox14IoProps = useIoStore((state)=>state["Home"]["TextBox14"]);
const TextBox14Cb = useTextBox14Cb()
const TextBox15Props = useStore((state)=>state["Home"]["TextBox15"]);
const TextBox15IoProps = useIoStore((state)=>state["Home"]["TextBox15"]);
const TextBox15Cb = useTextBox15Cb()
const TextBox11Props = useStore((state)=>state["Home"]["TextBox11"]);
const TextBox11IoProps = useIoStore((state)=>state["Home"]["TextBox11"]);
const TextBox11Cb = useTextBox11Cb()
const Image1Props = useStore((state)=>state["Home"]["Image1"]);
const Image1IoProps = useIoStore((state)=>state["Home"]["Image1"]);
const Image1Cb = useImage1Cb()
const TextBox25Props = useStore((state)=>state["Home"]["TextBox25"]);
const TextBox25IoProps = useIoStore((state)=>state["Home"]["TextBox25"]);
const TextBox25Cb = useTextBox25Cb()
const TextBox26Props = useStore((state)=>state["Home"]["TextBox26"]);
const TextBox26IoProps = useIoStore((state)=>state["Home"]["TextBox26"]);
const TextBox26Cb = useTextBox26Cb()
const TextBox27Props = useStore((state)=>state["Home"]["TextBox27"]);
const TextBox27IoProps = useIoStore((state)=>state["Home"]["TextBox27"]);
const TextBox27Cb = useTextBox27Cb()
const Button6Props = useStore((state)=>state["Home"]["Button6"]);
const Button6IoProps = useIoStore((state)=>state["Home"]["Button6"]);
const Button6Cb = useButton6Cb()
const Button7Props = useStore((state)=>state["Home"]["Button7"]);
const Button7IoProps = useIoStore((state)=>state["Home"]["Button7"]);
const Button7Cb = useButton7Cb()
const Image71Props = useStore((state)=>state["Home"]["Image71"]);
const Image71IoProps = useIoStore((state)=>state["Home"]["Image71"]);
const Image71Cb = useImage71Cb()
const Image3Props = useStore((state)=>state["Home"]["Image3"]);
const Image3IoProps = useIoStore((state)=>state["Home"]["Image3"]);
const Image3Cb = useImage3Cb()
const TextBox29Props = useStore((state)=>state["Home"]["TextBox29"]);
const TextBox29IoProps = useIoStore((state)=>state["Home"]["TextBox29"]);
const TextBox29Cb = useTextBox29Cb()
const Image8Props = useStore((state)=>state["Home"]["Image8"]);
const Image8IoProps = useIoStore((state)=>state["Home"]["Image8"]);
const Image8Cb = useImage8Cb()
const Image9Props = useStore((state)=>state["Home"]["Image9"]);
const Image9IoProps = useIoStore((state)=>state["Home"]["Image9"]);
const Image9Cb = useImage9Cb()
const Image10Props = useStore((state)=>state["Home"]["Image10"]);
const Image10IoProps = useIoStore((state)=>state["Home"]["Image10"]);
const Image10Cb = useImage10Cb()
const Image11Props = useStore((state)=>state["Home"]["Image11"]);
const Image11IoProps = useIoStore((state)=>state["Home"]["Image11"]);
const Image11Cb = useImage11Cb()
const TextBox30Props = useStore((state)=>state["Home"]["TextBox30"]);
const TextBox30IoProps = useIoStore((state)=>state["Home"]["TextBox30"]);
const TextBox30Cb = useTextBox30Cb()
const Image12Props = useStore((state)=>state["Home"]["Image12"]);
const Image12IoProps = useIoStore((state)=>state["Home"]["Image12"]);
const Image12Cb = useImage12Cb()
const TextBox32Props = useStore((state)=>state["Home"]["TextBox32"]);
const TextBox32IoProps = useIoStore((state)=>state["Home"]["TextBox32"]);
const TextBox32Cb = useTextBox32Cb()
const TextBox35Props = useStore((state)=>state["Home"]["TextBox35"]);
const TextBox35IoProps = useIoStore((state)=>state["Home"]["TextBox35"]);
const TextBox35Cb = useTextBox35Cb()
const TextBox151Props = useStore((state)=>state["Home"]["TextBox151"]);
const TextBox151IoProps = useIoStore((state)=>state["Home"]["TextBox151"]);
const TextBox151Cb = useTextBox151Cb()
const TextBox155Props = useStore((state)=>state["Home"]["TextBox155"]);
const TextBox155IoProps = useIoStore((state)=>state["Home"]["TextBox155"]);
const TextBox155Cb = useTextBox155Cb()
const TextBox154Props = useStore((state)=>state["Home"]["TextBox154"]);
const TextBox154IoProps = useIoStore((state)=>state["Home"]["TextBox154"]);
const TextBox154Cb = useTextBox154Cb()
const Image13Props = useStore((state)=>state["Home"]["Image13"]);
const Image13IoProps = useIoStore((state)=>state["Home"]["Image13"]);
const Image13Cb = useImage13Cb()
const TextBox33Props = useStore((state)=>state["Home"]["TextBox33"]);
const TextBox33IoProps = useIoStore((state)=>state["Home"]["TextBox33"]);
const TextBox33Cb = useTextBox33Cb()
const TextBox36Props = useStore((state)=>state["Home"]["TextBox36"]);
const TextBox36IoProps = useIoStore((state)=>state["Home"]["TextBox36"]);
const TextBox36Cb = useTextBox36Cb()
const TextBox158Props = useStore((state)=>state["Home"]["TextBox158"]);
const TextBox158IoProps = useIoStore((state)=>state["Home"]["TextBox158"]);
const TextBox158Cb = useTextBox158Cb()
const TextBox156Props = useStore((state)=>state["Home"]["TextBox156"]);
const TextBox156IoProps = useIoStore((state)=>state["Home"]["TextBox156"]);
const TextBox156Cb = useTextBox156Cb()
const TextBox157Props = useStore((state)=>state["Home"]["TextBox157"]);
const TextBox157IoProps = useIoStore((state)=>state["Home"]["TextBox157"]);
const TextBox157Cb = useTextBox157Cb()
const Image14Props = useStore((state)=>state["Home"]["Image14"]);
const Image14IoProps = useIoStore((state)=>state["Home"]["Image14"]);
const Image14Cb = useImage14Cb()
const TextBox34Props = useStore((state)=>state["Home"]["TextBox34"]);
const TextBox34IoProps = useIoStore((state)=>state["Home"]["TextBox34"]);
const TextBox34Cb = useTextBox34Cb()
const TextBox37Props = useStore((state)=>state["Home"]["TextBox37"]);
const TextBox37IoProps = useIoStore((state)=>state["Home"]["TextBox37"]);
const TextBox37Cb = useTextBox37Cb()
const TextBox161Props = useStore((state)=>state["Home"]["TextBox161"]);
const TextBox161IoProps = useIoStore((state)=>state["Home"]["TextBox161"]);
const TextBox161Cb = useTextBox161Cb()
const TextBox159Props = useStore((state)=>state["Home"]["TextBox159"]);
const TextBox159IoProps = useIoStore((state)=>state["Home"]["TextBox159"]);
const TextBox159Cb = useTextBox159Cb()
const TextBox160Props = useStore((state)=>state["Home"]["TextBox160"]);
const TextBox160IoProps = useIoStore((state)=>state["Home"]["TextBox160"]);
const TextBox160Cb = useTextBox160Cb()
const TextBox31Props = useStore((state)=>state["Home"]["TextBox31"]);
const TextBox31IoProps = useIoStore((state)=>state["Home"]["TextBox31"]);
const TextBox31Cb = useTextBox31Cb()
const TextBox42Props = useStore((state)=>state["Home"]["TextBox42"]);
const TextBox42IoProps = useIoStore((state)=>state["Home"]["TextBox42"]);
const TextBox42Cb = useTextBox42Cb()
const TextBox43Props = useStore((state)=>state["Home"]["TextBox43"]);
const TextBox43IoProps = useIoStore((state)=>state["Home"]["TextBox43"]);
const TextBox43Cb = useTextBox43Cb()
const Button4Props = useStore((state)=>state["Home"]["Button4"]);
const Button4IoProps = useIoStore((state)=>state["Home"]["Button4"]);
const Button4Cb = useButton4Cb()
const TextBox50Props = useStore((state)=>state["Home"]["TextBox50"]);
const TextBox50IoProps = useIoStore((state)=>state["Home"]["TextBox50"]);
const TextBox50Cb = useTextBox50Cb()
const TextBox49Props = useStore((state)=>state["Home"]["TextBox49"]);
const TextBox49IoProps = useIoStore((state)=>state["Home"]["TextBox49"]);
const TextBox49Cb = useTextBox49Cb()
const TextBox207Props = useStore((state)=>state["Home"]["TextBox207"]);
const TextBox207IoProps = useIoStore((state)=>state["Home"]["TextBox207"]);
const TextBox207Cb = useTextBox207Cb()
const TextBox73Props = useStore((state)=>state["Home"]["TextBox73"]);
const TextBox73IoProps = useIoStore((state)=>state["Home"]["TextBox73"]);
const TextBox73Cb = useTextBox73Cb()
const TextBox75Props = useStore((state)=>state["Home"]["TextBox75"]);
const TextBox75IoProps = useIoStore((state)=>state["Home"]["TextBox75"]);
const TextBox75Cb = useTextBox75Cb()
const TextBox209Props = useStore((state)=>state["Home"]["TextBox209"]);
const TextBox209IoProps = useIoStore((state)=>state["Home"]["TextBox209"]);
const TextBox209Cb = useTextBox209Cb()
const TextBox52Props = useStore((state)=>state["Home"]["TextBox52"]);
const TextBox52IoProps = useIoStore((state)=>state["Home"]["TextBox52"]);
const TextBox52Cb = useTextBox52Cb()
const TextBox53Props = useStore((state)=>state["Home"]["TextBox53"]);
const TextBox53IoProps = useIoStore((state)=>state["Home"]["TextBox53"]);
const TextBox53Cb = useTextBox53Cb()
const TextBox208Props = useStore((state)=>state["Home"]["TextBox208"]);
const TextBox208IoProps = useIoStore((state)=>state["Home"]["TextBox208"]);
const TextBox208Cb = useTextBox208Cb()
const TextBox76Props = useStore((state)=>state["Home"]["TextBox76"]);
const TextBox76IoProps = useIoStore((state)=>state["Home"]["TextBox76"]);
const TextBox76Cb = useTextBox76Cb()
const TextBox78Props = useStore((state)=>state["Home"]["TextBox78"]);
const TextBox78IoProps = useIoStore((state)=>state["Home"]["TextBox78"]);
const TextBox78Cb = useTextBox78Cb()
const TextBox210Props = useStore((state)=>state["Home"]["TextBox210"]);
const TextBox210IoProps = useIoStore((state)=>state["Home"]["TextBox210"]);
const TextBox210Cb = useTextBox210Cb()
const TextBox79Props = useStore((state)=>state["Home"]["TextBox79"]);
const TextBox79IoProps = useIoStore((state)=>state["Home"]["TextBox79"]);
const TextBox79Cb = useTextBox79Cb()
const TextBox81Props = useStore((state)=>state["Home"]["TextBox81"]);
const TextBox81IoProps = useIoStore((state)=>state["Home"]["TextBox81"]);
const TextBox81Cb = useTextBox81Cb()
const TextBox211Props = useStore((state)=>state["Home"]["TextBox211"]);
const TextBox211IoProps = useIoStore((state)=>state["Home"]["TextBox211"]);
const TextBox211Cb = useTextBox211Cb()
const TextBox82Props = useStore((state)=>state["Home"]["TextBox82"]);
const TextBox82IoProps = useIoStore((state)=>state["Home"]["TextBox82"]);
const TextBox82Cb = useTextBox82Cb()
const TextBox83Props = useStore((state)=>state["Home"]["TextBox83"]);
const TextBox83IoProps = useIoStore((state)=>state["Home"]["TextBox83"]);
const TextBox83Cb = useTextBox83Cb()
const TextBox84Props = useStore((state)=>state["Home"]["TextBox84"]);
const TextBox84IoProps = useIoStore((state)=>state["Home"]["TextBox84"]);
const TextBox84Cb = useTextBox84Cb()
const Image23Props = useStore((state)=>state["Home"]["Image23"]);
const Image23IoProps = useIoStore((state)=>state["Home"]["Image23"]);
const Image23Cb = useImage23Cb()
const Image24Props = useStore((state)=>state["Home"]["Image24"]);
const Image24IoProps = useIoStore((state)=>state["Home"]["Image24"]);
const Image24Cb = useImage24Cb()
const Image27Props = useStore((state)=>state["Home"]["Image27"]);
const Image27IoProps = useIoStore((state)=>state["Home"]["Image27"]);
const Image27Cb = useImage27Cb()
const Image28Props = useStore((state)=>state["Home"]["Image28"]);
const Image28IoProps = useIoStore((state)=>state["Home"]["Image28"]);
const Image28Cb = useImage28Cb()
const Image57Props = useStore((state)=>state["Home"]["Image57"]);
const Image57IoProps = useIoStore((state)=>state["Home"]["Image57"]);
const Image57Cb = useImage57Cb()
const TextBox162Props = useStore((state)=>state["Home"]["TextBox162"]);
const TextBox162IoProps = useIoStore((state)=>state["Home"]["TextBox162"]);
const TextBox162Cb = useTextBox162Cb()
const Image58Props = useStore((state)=>state["Home"]["Image58"]);
const Image58IoProps = useIoStore((state)=>state["Home"]["Image58"]);
const Image58Cb = useImage58Cb()
const TextBox163Props = useStore((state)=>state["Home"]["TextBox163"]);
const TextBox163IoProps = useIoStore((state)=>state["Home"]["TextBox163"]);
const TextBox163Cb = useTextBox163Cb()
const TextBox166Props = useStore((state)=>state["Home"]["TextBox166"]);
const TextBox166IoProps = useIoStore((state)=>state["Home"]["TextBox166"]);
const TextBox166Cb = useTextBox166Cb()
const Image61Props = useStore((state)=>state["Home"]["Image61"]);
const Image61IoProps = useIoStore((state)=>state["Home"]["Image61"]);
const Image61Cb = useImage61Cb()
const TextBox167Props = useStore((state)=>state["Home"]["TextBox167"]);
const TextBox167IoProps = useIoStore((state)=>state["Home"]["TextBox167"]);
const TextBox167Cb = useTextBox167Cb()
const TextBox168Props = useStore((state)=>state["Home"]["TextBox168"]);
const TextBox168IoProps = useIoStore((state)=>state["Home"]["TextBox168"]);
const TextBox168Cb = useTextBox168Cb()
const TextBox169Props = useStore((state)=>state["Home"]["TextBox169"]);
const TextBox169IoProps = useIoStore((state)=>state["Home"]["TextBox169"]);
const TextBox169Cb = useTextBox169Cb()
const Image62Props = useStore((state)=>state["Home"]["Image62"]);
const Image62IoProps = useIoStore((state)=>state["Home"]["Image62"]);
const Image62Cb = useImage62Cb()
const TextBox170Props = useStore((state)=>state["Home"]["TextBox170"]);
const TextBox170IoProps = useIoStore((state)=>state["Home"]["TextBox170"]);
const TextBox170Cb = useTextBox170Cb()
const TextBox171Props = useStore((state)=>state["Home"]["TextBox171"]);
const TextBox171IoProps = useIoStore((state)=>state["Home"]["TextBox171"]);
const TextBox171Cb = useTextBox171Cb()
const TextBox172Props = useStore((state)=>state["Home"]["TextBox172"]);
const TextBox172IoProps = useIoStore((state)=>state["Home"]["TextBox172"]);
const TextBox172Cb = useTextBox172Cb()
const Image63Props = useStore((state)=>state["Home"]["Image63"]);
const Image63IoProps = useIoStore((state)=>state["Home"]["Image63"]);
const Image63Cb = useImage63Cb()
const TextBox173Props = useStore((state)=>state["Home"]["TextBox173"]);
const TextBox173IoProps = useIoStore((state)=>state["Home"]["TextBox173"]);
const TextBox173Cb = useTextBox173Cb()
const TextBox174Props = useStore((state)=>state["Home"]["TextBox174"]);
const TextBox174IoProps = useIoStore((state)=>state["Home"]["TextBox174"]);
const TextBox174Cb = useTextBox174Cb()
const TextBox175Props = useStore((state)=>state["Home"]["TextBox175"]);
const TextBox175IoProps = useIoStore((state)=>state["Home"]["TextBox175"]);
const TextBox175Cb = useTextBox175Cb()
const Image64Props = useStore((state)=>state["Home"]["Image64"]);
const Image64IoProps = useIoStore((state)=>state["Home"]["Image64"]);
const Image64Cb = useImage64Cb()
const TextBox176Props = useStore((state)=>state["Home"]["TextBox176"]);
const TextBox176IoProps = useIoStore((state)=>state["Home"]["TextBox176"]);
const TextBox176Cb = useTextBox176Cb()
const TextBox177Props = useStore((state)=>state["Home"]["TextBox177"]);
const TextBox177IoProps = useIoStore((state)=>state["Home"]["TextBox177"]);
const TextBox177Cb = useTextBox177Cb()
const TextBox178Props = useStore((state)=>state["Home"]["TextBox178"]);
const TextBox178IoProps = useIoStore((state)=>state["Home"]["TextBox178"]);
const TextBox178Cb = useTextBox178Cb()
const Image65Props = useStore((state)=>state["Home"]["Image65"]);
const Image65IoProps = useIoStore((state)=>state["Home"]["Image65"]);
const Image65Cb = useImage65Cb()
const TextBox179Props = useStore((state)=>state["Home"]["TextBox179"]);
const TextBox179IoProps = useIoStore((state)=>state["Home"]["TextBox179"]);
const TextBox179Cb = useTextBox179Cb()
const TextBox180Props = useStore((state)=>state["Home"]["TextBox180"]);
const TextBox180IoProps = useIoStore((state)=>state["Home"]["TextBox180"]);
const TextBox180Cb = useTextBox180Cb()
const TextBox181Props = useStore((state)=>state["Home"]["TextBox181"]);
const TextBox181IoProps = useIoStore((state)=>state["Home"]["TextBox181"]);
const TextBox181Cb = useTextBox181Cb()
const Image66Props = useStore((state)=>state["Home"]["Image66"]);
const Image66IoProps = useIoStore((state)=>state["Home"]["Image66"]);
const Image66Cb = useImage66Cb()
const TextBox182Props = useStore((state)=>state["Home"]["TextBox182"]);
const TextBox182IoProps = useIoStore((state)=>state["Home"]["TextBox182"]);
const TextBox182Cb = useTextBox182Cb()
const TextBox183Props = useStore((state)=>state["Home"]["TextBox183"]);
const TextBox183IoProps = useIoStore((state)=>state["Home"]["TextBox183"]);
const TextBox183Cb = useTextBox183Cb()

  return (<>
  <Div className="p-Home Navbar bpt" {...NavbarProps} {...NavbarCb} {...NavbarIoProps}>
<Flex className="p-Home Flex193 bpt" {...Flex193Props} {...Flex193Cb} {...Flex193IoProps}>
<Flex className="p-Home Flex194 bpt" {...Flex194Props} {...Flex194Cb} {...Flex194IoProps}>
<Image className="p-Home Image2 bpt" {...Image2Props} {...Image2Cb} {...Image2IoProps}/>
</Flex>
<Flex className="p-Home Flex195 bpt" {...Flex195Props} {...Flex195Cb} {...Flex195IoProps}>
<Flex className="p-Home Flex5 bpt" {...Flex5Props} {...Flex5Cb} {...Flex5IoProps}>
<TextBox className="p-Home TextBox12 bpt" {...TextBox12Props} {...TextBox12Cb} {...TextBox12IoProps}/>
<TextBox className="p-Home TextBox13 bpt" {...TextBox13Props} {...TextBox13Cb} {...TextBox13IoProps}/>
<TextBox className="p-Home TextBox14 bpt" {...TextBox14Props} {...TextBox14Cb} {...TextBox14IoProps}/>
<TextBox className="p-Home TextBox15 bpt" {...TextBox15Props} {...TextBox15Cb} {...TextBox15IoProps}/>
<Flex className="p-Home Flex8 bpt" {...Flex8Props} {...Flex8Cb} {...Flex8IoProps}>
<TextBox className="p-Home TextBox11 bpt" {...TextBox11Props} {...TextBox11Cb} {...TextBox11IoProps}/>
<Image className="p-Home Image1 bpt" {...Image1Props} {...Image1Cb} {...Image1IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Div>
<Div className="p-Home Intro bpt" {...IntroProps} {...IntroCb} {...IntroIoProps}>
<Flex className="p-Home Flex196 bpt" {...Flex196Props} {...Flex196Cb} {...Flex196IoProps}>
<Flex className="p-Home Flex197 bpt" {...Flex197Props} {...Flex197Cb} {...Flex197IoProps}>
<TextBox className="p-Home TextBox25 bpt" {...TextBox25Props} {...TextBox25Cb} {...TextBox25IoProps}/>
<TextBox className="p-Home TextBox26 bpt" {...TextBox26Props} {...TextBox26Cb} {...TextBox26IoProps}/>
<TextBox className="p-Home TextBox27 bpt" {...TextBox27Props} {...TextBox27Cb} {...TextBox27IoProps}/>
<Flex className="p-Home Flex353 bpt" {...Flex353Props} {...Flex353Cb} {...Flex353IoProps}>
<Flex className="p-Home Flex354 bpt" {...Flex354Props} {...Flex354Cb} {...Flex354IoProps}>
<Button className="p-Home Button6 bpt" {...Button6Props} {...Button6Cb} {...Button6IoProps}/>
</Flex>
<Flex className="p-Home Flex356 bpt" {...Flex356Props} {...Flex356Cb} {...Flex356IoProps}>
<Button className="p-Home Button7 bpt" {...Button7Props} {...Button7Cb} {...Button7IoProps}/>
<Image className="p-Home Image71 bpt" {...Image71Props} {...Image71Cb} {...Image71IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex198 bpt" {...Flex198Props} {...Flex198Cb} {...Flex198IoProps}>
<Image className="p-Home Image3 bpt" {...Image3Props} {...Image3Cb} {...Image3IoProps}/>
</Flex>
</Flex>
</Div>
<Div className="p-Home TrustTestimonals bpt" {...TrustTestimonalsProps} {...TrustTestimonalsCb} {...TrustTestimonalsIoProps}>
<Flex className="p-Home Flex199 bpt" {...Flex199Props} {...Flex199Cb} {...Flex199IoProps}>
<Flex className="p-Home Flex202 bpt" {...Flex202Props} {...Flex202Cb} {...Flex202IoProps}>
<TextBox className="p-Home TextBox29 bpt" {...TextBox29Props} {...TextBox29Cb} {...TextBox29IoProps}/>
</Flex>
<Flex className="p-Home Flex203 bpt" {...Flex203Props} {...Flex203Cb} {...Flex203IoProps}>
<Image className="p-Home Image8 bpt" {...Image8Props} {...Image8Cb} {...Image8IoProps}/>
<Image className="p-Home Image11 bpt" {...Image11Props} {...Image11Cb} {...Image11IoProps}/>
<Image className="p-Home Image10 bpt" {...Image10Props} {...Image10Cb} {...Image10IoProps}/>
<Image className="p-Home Image9 bpt" {...Image9Props} {...Image9Cb} {...Image9IoProps}/>
</Flex>
</Flex>
</Div>
<Div className="p-Home Services bpt" {...ServicesProps} {...ServicesCb} {...ServicesIoProps}>
<Flex className="p-Home Flex216 bpt" {...Flex216Props} {...Flex216Cb} {...Flex216IoProps}>
<Flex className="p-Home Flex217 bpt" {...Flex217Props} {...Flex217Cb} {...Flex217IoProps}>
<TextBox className="p-Home TextBox30 bpt" {...TextBox30Props} {...TextBox30Cb} {...TextBox30IoProps}/>
</Flex>
<Flex className="p-Home Flex218 bpt" {...Flex218Props} {...Flex218Cb} {...Flex218IoProps}>
<Flex className="p-Home Flex358 bpt" {...Flex358Props} {...Flex358Cb} {...Flex358IoProps}>
<TextBox className="p-Home TextBox31 bpt" {...TextBox31Props} {...TextBox31Cb} {...TextBox31IoProps}/>
</Flex>
<Flex className="p-Home Flex239 bpt" {...Flex239Props} {...Flex239Cb} {...Flex239IoProps}>
<Flex className="p-Home Flex236 bpt" {...Flex236Props} {...Flex236Cb} {...Flex236IoProps}>
<Image className="p-Home Image12 bpt" {...Image12Props} {...Image12Cb} {...Image12IoProps}/>
<TextBox className="p-Home TextBox35 bpt" {...TextBox35Props} {...TextBox35Cb} {...TextBox35IoProps}/>
<TextBox className="p-Home TextBox32 bpt" {...TextBox32Props} {...TextBox32Cb} {...TextBox32IoProps}/>
<Flex className="p-Home Flex233 bpt" {...Flex233Props} {...Flex233Cb} {...Flex233IoProps}>
<Div className="p-Home Div57 bpt" {...Div57Props} {...Div57Cb} {...Div57IoProps}>
<TextBox className="p-Home TextBox151 bpt" {...TextBox151Props} {...TextBox151Cb} {...TextBox151IoProps}/>
<Div className="p-Home Div59 bpt" {...Div59Props} {...Div59Cb} {...Div59IoProps}>
<TextBox className="p-Home TextBox154 bpt" {...TextBox154Props} {...TextBox154Cb} {...TextBox154IoProps}/>
</Div>
<Div className="p-Home Div58 bpt" {...Div58Props} {...Div58Cb} {...Div58IoProps}>
<TextBox className="p-Home TextBox155 bpt" {...TextBox155Props} {...TextBox155Cb} {...TextBox155IoProps}/>
</Div>
</Div>
</Flex>
</Flex>
<Flex className="p-Home Flex237 bpt" {...Flex237Props} {...Flex237Cb} {...Flex237IoProps}>
<Image className="p-Home Image13 bpt" {...Image13Props} {...Image13Cb} {...Image13IoProps}/>
<TextBox className="p-Home TextBox36 bpt" {...TextBox36Props} {...TextBox36Cb} {...TextBox36IoProps}/>
<TextBox className="p-Home TextBox33 bpt" {...TextBox33Props} {...TextBox33Cb} {...TextBox33IoProps}/>
<Div className="p-Home Div19 bpt" {...Div19Props} {...Div19Cb} {...Div19IoProps}>
<Div className="p-Home Div62 bpt" {...Div62Props} {...Div62Cb} {...Div62IoProps}>
<TextBox className="p-Home TextBox158 bpt" {...TextBox158Props} {...TextBox158Cb} {...TextBox158IoProps}/>
<Div className="p-Home Div60 bpt" {...Div60Props} {...Div60Cb} {...Div60IoProps}>
<TextBox className="p-Home TextBox156 bpt" {...TextBox156Props} {...TextBox156Cb} {...TextBox156IoProps}/>
</Div>
<Div className="p-Home Div61 bpt" {...Div61Props} {...Div61Cb} {...Div61IoProps}>
<TextBox className="p-Home TextBox157 bpt" {...TextBox157Props} {...TextBox157Cb} {...TextBox157IoProps}/>
</Div>
</Div>
</Div>
</Flex>
<Flex className="p-Home Flex238 bpt" {...Flex238Props} {...Flex238Cb} {...Flex238IoProps}>
<Image className="p-Home Image14 bpt" {...Image14Props} {...Image14Cb} {...Image14IoProps}/>
<TextBox className="p-Home TextBox37 bpt" {...TextBox37Props} {...TextBox37Cb} {...TextBox37IoProps}/>
<TextBox className="p-Home TextBox34 bpt" {...TextBox34Props} {...TextBox34Cb} {...TextBox34IoProps}/>
<Div className="p-Home Div65 bpt" {...Div65Props} {...Div65Cb} {...Div65IoProps}>
<TextBox className="p-Home TextBox161 bpt" {...TextBox161Props} {...TextBox161Cb} {...TextBox161IoProps}/>
<Div className="p-Home Div63 bpt" {...Div63Props} {...Div63Cb} {...Div63IoProps}>
<TextBox className="p-Home TextBox159 bpt" {...TextBox159Props} {...TextBox159Cb} {...TextBox159IoProps}/>
</Div>
<Div className="p-Home Div64 bpt" {...Div64Props} {...Div64Cb} {...Div64IoProps}>
<TextBox className="p-Home TextBox160 bpt" {...TextBox160Props} {...TextBox160Cb} {...TextBox160IoProps}/>
</Div>
</Div>
</Flex>
</Flex>
</Flex>
</Flex>
</Div>
<Div className="p-Home Projects bpt" {...ProjectsProps} {...ProjectsCb} {...ProjectsIoProps}>
<Flex className="p-Home Flex240 bpt" {...Flex240Props} {...Flex240Cb} {...Flex240IoProps}>
<Flex className="p-Home Flex241 bpt" {...Flex241Props} {...Flex241Cb} {...Flex241IoProps}>
<TextBox className="p-Home TextBox42 bpt" {...TextBox42Props} {...TextBox42Cb} {...TextBox42IoProps}/>
<TextBox className="p-Home TextBox43 bpt" {...TextBox43Props} {...TextBox43Cb} {...TextBox43IoProps}/>
</Flex>
<Flex className="p-Home Flex242 bpt" {...Flex242Props} {...Flex242Cb} {...Flex242IoProps}>
<Button className="p-Home Button4 bpt" {...Button4Props} {...Button4Cb} {...Button4IoProps}/>
</Flex>
</Flex>
</Div>
<Div className="p-Home Blogs bpt" {...BlogsProps} {...BlogsCb} {...BlogsIoProps}>
<Flex className="p-Home Flex243 bpt" {...Flex243Props} {...Flex243Cb} {...Flex243IoProps}>
<Flex className="p-Home Flex244 bpt" {...Flex244Props} {...Flex244Cb} {...Flex244IoProps}>
<TextBox className="p-Home TextBox49 bpt" {...TextBox49Props} {...TextBox49Cb} {...TextBox49IoProps}/>
<TextBox className="p-Home TextBox50 bpt" {...TextBox50Props} {...TextBox50Cb} {...TextBox50IoProps}/>
<TextBox className="p-Home TextBox207 bpt" {...TextBox207Props} {...TextBox207Cb} {...TextBox207IoProps}/>
</Flex>
<Flex className="p-Home Flex245 bpt" {...Flex245Props} {...Flex245Cb} {...Flex245IoProps}>
<Flex className="p-Home Flex250 bpt" {...Flex250Props} {...Flex250Cb} {...Flex250IoProps}>
<TextBox className="p-Home TextBox52 bpt" {...TextBox52Props} {...TextBox52Cb} {...TextBox52IoProps}/>
<TextBox className="p-Home TextBox53 bpt" {...TextBox53Props} {...TextBox53Cb} {...TextBox53IoProps}/>
<TextBox className="p-Home TextBox208 bpt" {...TextBox208Props} {...TextBox208Cb} {...TextBox208IoProps}/>
</Flex>
<Flex className="p-Home Flex249 bpt" {...Flex249Props} {...Flex249Cb} {...Flex249IoProps}>
<TextBox className="p-Home TextBox75 bpt" {...TextBox75Props} {...TextBox75Cb} {...TextBox75IoProps}/>
<TextBox className="p-Home TextBox73 bpt" {...TextBox73Props} {...TextBox73Cb} {...TextBox73IoProps}/>
<TextBox className="p-Home TextBox209 bpt" {...TextBox209Props} {...TextBox209Cb} {...TextBox209IoProps}/>
</Flex>
<Flex className="p-Home Flex251 bpt" {...Flex251Props} {...Flex251Cb} {...Flex251IoProps}>
<TextBox className="p-Home TextBox78 bpt" {...TextBox78Props} {...TextBox78Cb} {...TextBox78IoProps}/>
<TextBox className="p-Home TextBox76 bpt" {...TextBox76Props} {...TextBox76Cb} {...TextBox76IoProps}/>
<TextBox className="p-Home TextBox210 bpt" {...TextBox210Props} {...TextBox210Cb} {...TextBox210IoProps}/>
</Flex>
<Flex className="p-Home Flex252 bpt" {...Flex252Props} {...Flex252Cb} {...Flex252IoProps}>
<TextBox className="p-Home TextBox81 bpt" {...TextBox81Props} {...TextBox81Cb} {...TextBox81IoProps}/>
<TextBox className="p-Home TextBox79 bpt" {...TextBox79Props} {...TextBox79Cb} {...TextBox79IoProps}/>
<TextBox className="p-Home TextBox211 bpt" {...TextBox211Props} {...TextBox211Cb} {...TextBox211IoProps}/>
</Flex>
</Flex>
</Flex>
</Div>
<Div className="p-Home Achievement bpt" {...AchievementProps} {...AchievementCb} {...AchievementIoProps}>
<Flex className="p-Home Flex359 bpt" {...Flex359Props} {...Flex359Cb} {...Flex359IoProps}>
<Flex className="p-Home Flex360 bpt" {...Flex360Props} {...Flex360Cb} {...Flex360IoProps}>
<TextBox className="p-Home TextBox83 bpt" {...TextBox83Props} {...TextBox83Cb} {...TextBox83IoProps}/>
<TextBox className="p-Home TextBox82 bpt" {...TextBox82Props} {...TextBox82Cb} {...TextBox82IoProps}/>
</Flex>
<Flex className="p-Home Flex361 bpt" {...Flex361Props} {...Flex361Cb} {...Flex361IoProps}>
<TextBox className="p-Home TextBox84 bpt" {...TextBox84Props} {...TextBox84Cb} {...TextBox84IoProps}/>
</Flex>
</Flex>
</Div>
<Div className="p-Home Gallery bpt" {...GalleryProps} {...GalleryCb} {...GalleryIoProps}>
<Flex className="p-Home Flex253 bpt" {...Flex253Props} {...Flex253Cb} {...Flex253IoProps}>
<Flex className="p-Home Flex254 bpt" {...Flex254Props} {...Flex254Cb} {...Flex254IoProps}>
<Image className="p-Home Image23 bpt" {...Image23Props} {...Image23Cb} {...Image23IoProps}/>
</Flex>
<Flex className="p-Home Flex255 bpt" {...Flex255Props} {...Flex255Cb} {...Flex255IoProps}>
<Image className="p-Home Image24 bpt" {...Image24Props} {...Image24Cb} {...Image24IoProps}/>
</Flex>
<Flex className="p-Home Flex256 bpt" {...Flex256Props} {...Flex256Cb} {...Flex256IoProps}>
<Flex className="p-Home Flex257 bpt" {...Flex257Props} {...Flex257Cb} {...Flex257IoProps}>
<Image className="p-Home Image27 bpt" {...Image27Props} {...Image27Cb} {...Image27IoProps}/>
</Flex>
<Flex className="p-Home Flex258 bpt" {...Flex258Props} {...Flex258Cb} {...Flex258IoProps}>
<Image className="p-Home Image28 bpt" {...Image28Props} {...Image28Cb} {...Image28IoProps}/>
</Flex>
</Flex>
</Flex>
</Div>
<Div className="p-Home Work_Experience bpt" {...Work_ExperienceProps} {...Work_ExperienceCb} {...Work_ExperienceIoProps}>
<Flex className="p-Home Flex260 bpt" {...Flex260Props} {...Flex260Cb} {...Flex260IoProps}>
<Flex className="p-Home Flex264 bpt" {...Flex264Props} {...Flex264Cb} {...Flex264IoProps}>
<Flex className="p-Home Flex263 bpt" {...Flex263Props} {...Flex263Cb} {...Flex263IoProps}>
<Image className="p-Home Image58 bpt" {...Image58Props} {...Image58Cb} {...Image58IoProps}/>
<TextBox className="p-Home TextBox163 bpt" {...TextBox163Props} {...TextBox163Cb} {...TextBox163IoProps}/>
</Flex>
<Flex className="p-Home Flex262 bpt" {...Flex262Props} {...Flex262Cb} {...Flex262IoProps}>
<Image className="p-Home Image57 bpt" {...Image57Props} {...Image57Cb} {...Image57IoProps}/>
<TextBox className="p-Home TextBox162 bpt" {...TextBox162Props} {...TextBox162Cb} {...TextBox162IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex284 bpt" {...Flex284Props} {...Flex284Cb} {...Flex284IoProps}>
<Flex className="p-Home Flex282 bpt" {...Flex282Props} {...Flex282Cb} {...Flex282IoProps}>
<Flex className="p-Home Flex279 bpt" {...Flex279Props} {...Flex279Cb} {...Flex279IoProps}>
<Flex className="p-Home Flex274 bpt" {...Flex274Props} {...Flex274Cb} {...Flex274IoProps}>
<Flex className="p-Home Flex272 bpt" {...Flex272Props} {...Flex272Cb} {...Flex272IoProps}>
<Flex className="p-Home Flex268 bpt" {...Flex268Props} {...Flex268Cb} {...Flex268IoProps}>
<TextBox className="p-Home TextBox166 bpt" {...TextBox166Props} {...TextBox166Cb} {...TextBox166IoProps}/>
</Flex>
<Flex className="p-Home Flex269 bpt" {...Flex269Props} {...Flex269Cb} {...Flex269IoProps}>
<Image className="p-Home Image61 bpt" {...Image61Props} {...Image61Cb} {...Image61IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex273 bpt" {...Flex273Props} {...Flex273Cb} {...Flex273IoProps}>
<Flex className="p-Home Flex270 bpt" {...Flex270Props} {...Flex270Cb} {...Flex270IoProps}>
<TextBox className="p-Home TextBox167 bpt" {...TextBox167Props} {...TextBox167Cb} {...TextBox167IoProps}/>
</Flex>
<Flex className="p-Home Flex271 bpt" {...Flex271Props} {...Flex271Cb} {...Flex271IoProps}>
<TextBox className="p-Home TextBox168 bpt" {...TextBox168Props} {...TextBox168Cb} {...TextBox168IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex283 bpt" {...Flex283Props} {...Flex283Cb} {...Flex283IoProps}>
<Flex className="p-Home Flex280 bpt" {...Flex280Props} {...Flex280Cb} {...Flex280IoProps}>
<Flex className="p-Home Flex275 bpt" {...Flex275Props} {...Flex275Cb} {...Flex275IoProps}>
<TextBox className="p-Home TextBox169 bpt" {...TextBox169Props} {...TextBox169Cb} {...TextBox169IoProps}/>
</Flex>
<Flex className="p-Home Flex276 bpt" {...Flex276Props} {...Flex276Cb} {...Flex276IoProps}>
<Image className="p-Home Image62 bpt" {...Image62Props} {...Image62Cb} {...Image62IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex281 bpt" {...Flex281Props} {...Flex281Cb} {...Flex281IoProps}>
<Flex className="p-Home Flex277 bpt" {...Flex277Props} {...Flex277Cb} {...Flex277IoProps}>
<TextBox className="p-Home TextBox170 bpt" {...TextBox170Props} {...TextBox170Cb} {...TextBox170IoProps}/>
</Flex>
<Flex className="p-Home Flex278 bpt" {...Flex278Props} {...Flex278Cb} {...Flex278IoProps}>
<TextBox className="p-Home TextBox171 bpt" {...TextBox171Props} {...TextBox171Cb} {...TextBox171IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex301 bpt" {...Flex301Props} {...Flex301Cb} {...Flex301IoProps}>
<Flex className="p-Home Flex299 bpt" {...Flex299Props} {...Flex299Cb} {...Flex299IoProps}>
<Flex className="p-Home Flex296 bpt" {...Flex296Props} {...Flex296Cb} {...Flex296IoProps}>
<Flex className="p-Home Flex291 bpt" {...Flex291Props} {...Flex291Cb} {...Flex291IoProps}>
<Flex className="p-Home Flex289 bpt" {...Flex289Props} {...Flex289Cb} {...Flex289IoProps}>
<Flex className="p-Home Flex285 bpt" {...Flex285Props} {...Flex285Cb} {...Flex285IoProps}>
<TextBox className="p-Home TextBox172 bpt" {...TextBox172Props} {...TextBox172Cb} {...TextBox172IoProps}/>
</Flex>
<Flex className="p-Home Flex286 bpt" {...Flex286Props} {...Flex286Cb} {...Flex286IoProps}>
<Image className="p-Home Image63 bpt" {...Image63Props} {...Image63Cb} {...Image63IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex290 bpt" {...Flex290Props} {...Flex290Cb} {...Flex290IoProps}>
<Flex className="p-Home Flex287 bpt" {...Flex287Props} {...Flex287Cb} {...Flex287IoProps}>
<TextBox className="p-Home TextBox173 bpt" {...TextBox173Props} {...TextBox173Cb} {...TextBox173IoProps}/>
</Flex>
<Flex className="p-Home Flex288 bpt" {...Flex288Props} {...Flex288Cb} {...Flex288IoProps}>
<TextBox className="p-Home TextBox174 bpt" {...TextBox174Props} {...TextBox174Cb} {...TextBox174IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex300 bpt" {...Flex300Props} {...Flex300Cb} {...Flex300IoProps}>
<Flex className="p-Home Flex297 bpt" {...Flex297Props} {...Flex297Cb} {...Flex297IoProps}>
<Flex className="p-Home Flex292 bpt" {...Flex292Props} {...Flex292Cb} {...Flex292IoProps}>
<TextBox className="p-Home TextBox175 bpt" {...TextBox175Props} {...TextBox175Cb} {...TextBox175IoProps}/>
</Flex>
<Flex className="p-Home Flex293 bpt" {...Flex293Props} {...Flex293Cb} {...Flex293IoProps}>
<Image className="p-Home Image64 bpt" {...Image64Props} {...Image64Cb} {...Image64IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex298 bpt" {...Flex298Props} {...Flex298Cb} {...Flex298IoProps}>
<Flex className="p-Home Flex294 bpt" {...Flex294Props} {...Flex294Cb} {...Flex294IoProps}>
<TextBox className="p-Home TextBox176 bpt" {...TextBox176Props} {...TextBox176Cb} {...TextBox176IoProps}/>
</Flex>
<Flex className="p-Home Flex295 bpt" {...Flex295Props} {...Flex295Cb} {...Flex295IoProps}>
<TextBox className="p-Home TextBox177 bpt" {...TextBox177Props} {...TextBox177Cb} {...TextBox177IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex318 bpt" {...Flex318Props} {...Flex318Cb} {...Flex318IoProps}>
<Flex className="p-Home Flex316 bpt" {...Flex316Props} {...Flex316Cb} {...Flex316IoProps}>
<Flex className="p-Home Flex313 bpt" {...Flex313Props} {...Flex313Cb} {...Flex313IoProps}>
<Flex className="p-Home Flex308 bpt" {...Flex308Props} {...Flex308Cb} {...Flex308IoProps}>
<Flex className="p-Home Flex306 bpt" {...Flex306Props} {...Flex306Cb} {...Flex306IoProps}>
<Flex className="p-Home Flex302 bpt" {...Flex302Props} {...Flex302Cb} {...Flex302IoProps}>
<TextBox className="p-Home TextBox178 bpt" {...TextBox178Props} {...TextBox178Cb} {...TextBox178IoProps}/>
</Flex>
<Flex className="p-Home Flex303 bpt" {...Flex303Props} {...Flex303Cb} {...Flex303IoProps}>
<Image className="p-Home Image65 bpt" {...Image65Props} {...Image65Cb} {...Image65IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex307 bpt" {...Flex307Props} {...Flex307Cb} {...Flex307IoProps}>
<Flex className="p-Home Flex304 bpt" {...Flex304Props} {...Flex304Cb} {...Flex304IoProps}>
<TextBox className="p-Home TextBox179 bpt" {...TextBox179Props} {...TextBox179Cb} {...TextBox179IoProps}/>
</Flex>
<Flex className="p-Home Flex305 bpt" {...Flex305Props} {...Flex305Cb} {...Flex305IoProps}>
<TextBox className="p-Home TextBox180 bpt" {...TextBox180Props} {...TextBox180Cb} {...TextBox180IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex317 bpt" {...Flex317Props} {...Flex317Cb} {...Flex317IoProps}>
<Flex className="p-Home Flex314 bpt" {...Flex314Props} {...Flex314Cb} {...Flex314IoProps}>
<Flex className="p-Home Flex309 bpt" {...Flex309Props} {...Flex309Cb} {...Flex309IoProps}>
<TextBox className="p-Home TextBox181 bpt" {...TextBox181Props} {...TextBox181Cb} {...TextBox181IoProps}/>
</Flex>
<Flex className="p-Home Flex310 bpt" {...Flex310Props} {...Flex310Cb} {...Flex310IoProps}>
<Image className="p-Home Image66 bpt" {...Image66Props} {...Image66Cb} {...Image66IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex315 bpt" {...Flex315Props} {...Flex315Cb} {...Flex315IoProps}>
<Flex className="p-Home Flex311 bpt" {...Flex311Props} {...Flex311Cb} {...Flex311IoProps}>
<TextBox className="p-Home TextBox182 bpt" {...TextBox182Props} {...TextBox182Cb} {...TextBox182IoProps}/>
</Flex>
<Flex className="p-Home Flex312 bpt" {...Flex312Props} {...Flex312Cb} {...Flex312IoProps}>
<TextBox className="p-Home TextBox183 bpt" {...TextBox183Props} {...TextBox183Cb} {...TextBox183IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
</Div>
<Div className="p-Home Footer bpt" {...FooterProps} {...FooterCb} {...FooterIoProps}>
<Flex className="p-Home Flex158 bpt" {...Flex158Props} {...Flex158Cb} {...Flex158IoProps}>
<TextBox className="p-Home TextBox119 bpt" {...TextBox119Props} {...TextBox119Cb} {...TextBox119IoProps}/>
</Flex>
<Flex className="p-Home Flex159 bpt" {...Flex159Props} {...Flex159Cb} {...Flex159IoProps}>
<TextBox className="p-Home TextBox120 bpt" {...TextBox120Props} {...TextBox120Cb} {...TextBox120IoProps}/>
</Flex>
<Flex className="p-Home Flex160 bpt" {...Flex160Props} {...Flex160Cb} {...Flex160IoProps}>
<Flex className="p-Home Flex161 bpt" {...Flex161Props} {...Flex161Cb} {...Flex161IoProps}>
<Flex className="p-Home Flex163 bpt" {...Flex163Props} {...Flex163Cb} {...Flex163IoProps}>
<TextBox className="p-Home TextBox121 bpt" {...TextBox121Props} {...TextBox121Cb} {...TextBox121IoProps}/>
</Flex>
<Image className="p-Home Image43 bpt" {...Image43Props} {...Image43Cb} {...Image43IoProps}/>
</Flex>
<Flex className="p-Home Flex162 bpt" {...Flex162Props} {...Flex162Cb} {...Flex162IoProps}>
<TextBox className="p-Home TextBox122 bpt" {...TextBox122Props} {...TextBox122Cb} {...TextBox122IoProps}/>
<Image className="p-Home Image44 bpt" {...Image44Props} {...Image44Cb} {...Image44IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex167 bpt" {...Flex167Props} {...Flex167Cb} {...Flex167IoProps}>
<Flex className="p-Home Flex166 bpt" {...Flex166Props} {...Flex166Cb} {...Flex166IoProps}>
<Flex className="p-Home Flex164 bpt" {...Flex164Props} {...Flex164Cb} {...Flex164IoProps}>
<TextBox className="p-Home TextBox123 bpt" {...TextBox123Props} {...TextBox123Cb} {...TextBox123IoProps}/>
</Flex>
<Image className="p-Home Image46 bpt" {...Image46Props} {...Image46Cb} {...Image46IoProps}/>
</Flex>
<Flex className="p-Home Flex165 bpt" {...Flex165Props} {...Flex165Cb} {...Flex165IoProps}>
<TextBox className="p-Home TextBox124 bpt" {...TextBox124Props} {...TextBox124Cb} {...TextBox124IoProps}/>
<Image className="p-Home Image45 bpt" {...Image45Props} {...Image45Cb} {...Image45IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex171 bpt" {...Flex171Props} {...Flex171Cb} {...Flex171IoProps}>
<Flex className="p-Home Flex170 bpt" {...Flex170Props} {...Flex170Cb} {...Flex170IoProps}>
<Flex className="p-Home Flex168 bpt" {...Flex168Props} {...Flex168Cb} {...Flex168IoProps}>
<TextBox className="p-Home TextBox125 bpt" {...TextBox125Props} {...TextBox125Cb} {...TextBox125IoProps}/>
</Flex>
<Image className="p-Home Image48 bpt" {...Image48Props} {...Image48Cb} {...Image48IoProps}/>
</Flex>
<Flex className="p-Home Flex169 bpt" {...Flex169Props} {...Flex169Cb} {...Flex169IoProps}>
<TextBox className="p-Home TextBox126 bpt" {...TextBox126Props} {...TextBox126Cb} {...TextBox126IoProps}/>
<Image className="p-Home Image47 bpt" {...Image47Props} {...Image47Cb} {...Image47IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex183 bpt" {...Flex183Props} {...Flex183Cb} {...Flex183IoProps}>
<Flex className="p-Home Flex182 bpt" {...Flex182Props} {...Flex182Cb} {...Flex182IoProps}>
<Flex className="p-Home Flex180 bpt" {...Flex180Props} {...Flex180Cb} {...Flex180IoProps}>
<TextBox className="p-Home TextBox131 bpt" {...TextBox131Props} {...TextBox131Cb} {...TextBox131IoProps}/>
</Flex>
<Image className="p-Home Image54 bpt" {...Image54Props} {...Image54Cb} {...Image54IoProps}/>
</Flex>
<Flex className="p-Home Flex181 bpt" {...Flex181Props} {...Flex181Cb} {...Flex181IoProps}>
<TextBox className="p-Home TextBox132 bpt" {...TextBox132Props} {...TextBox132Cb} {...TextBox132IoProps}/>
<Image className="p-Home Image53 bpt" {...Image53Props} {...Image53Cb} {...Image53IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex184 bpt" {...Flex184Props} {...Flex184Cb} {...Flex184IoProps}>
<TextBox className="p-Home TextBox133 bpt" {...TextBox133Props} {...TextBox133Cb} {...TextBox133IoProps}/>
<TextBox className="p-Home TextBox134 bpt" {...TextBox134Props} {...TextBox134Cb} {...TextBox134IoProps}/>
</Flex>
<Flex className="p-Home Flex185 bpt" {...Flex185Props} {...Flex185Cb} {...Flex185IoProps}>
<Flex className="p-Home Flex186 bpt" {...Flex186Props} {...Flex186Cb} {...Flex186IoProps}>
<Image className="p-Home Image55 bpt" {...Image55Props} {...Image55Cb} {...Image55IoProps}/>
<TextBox className="p-Home TextBox144 bpt" {...TextBox144Props} {...TextBox144Cb} {...TextBox144IoProps}/>
<Flex className="p-Home Flex191 bpt" {...Flex191Props} {...Flex191Cb} {...Flex191IoProps}>
<Image className="p-Home Image56 bpt" {...Image56Props} {...Image56Cb} {...Image56IoProps}/>
<TextBox className="p-Home TextBox146 bpt" {...TextBox146Props} {...TextBox146Cb} {...TextBox146IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex187 bpt" {...Flex187Props} {...Flex187Cb} {...Flex187IoProps}>
<Flex className="p-Home Flex188 bpt" {...Flex188Props} {...Flex188Cb} {...Flex188IoProps}>
<TextBox className="p-Home TextBox196 bpt" {...TextBox196Props} {...TextBox196Cb} {...TextBox196IoProps}/>
<TextBox className="p-Home TextBox197 bpt" {...TextBox197Props} {...TextBox197Cb} {...TextBox197IoProps}/>
<TextBox className="p-Home TextBox198 bpt" {...TextBox198Props} {...TextBox198Cb} {...TextBox198IoProps}/>
</Flex>
<Flex className="p-Home Flex189 bpt" {...Flex189Props} {...Flex189Cb} {...Flex189IoProps}>
<TextBox className="p-Home TextBox199 bpt" {...TextBox199Props} {...TextBox199Cb} {...TextBox199IoProps}/>
<TextBox className="p-Home TextBox200 bpt" {...TextBox200Props} {...TextBox200Cb} {...TextBox200IoProps}/>
<TextBox className="p-Home TextBox201 bpt" {...TextBox201Props} {...TextBox201Cb} {...TextBox201IoProps}/>
</Flex>
<Flex className="p-Home Flex190 bpt" {...Flex190Props} {...Flex190Cb} {...Flex190IoProps}>
<TextBox className="p-Home TextBox202 bpt" {...TextBox202Props} {...TextBox202Cb} {...TextBox202IoProps}/>
<TextBox className="p-Home TextBox203 bpt" {...TextBox203Props} {...TextBox203Cb} {...TextBox203IoProps}/>
<TextBox className="p-Home TextBox204 bpt" {...TextBox204Props} {...TextBox204Cb} {...TextBox204IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex192 bpt" {...Flex192Props} {...Flex192Cb} {...Flex192IoProps}>
<TextBox className="p-Home TextBox150 bpt" {...TextBox150Props} {...TextBox150Cb} {...TextBox150IoProps}/>
</Flex>
</Div>
  </>);
}
