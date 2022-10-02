import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import { SafeAreaView, View, StatusBar } from "react-native";
import Body from "./components/Body";
import DELpopup from "./components/DELpopup";
import Details from "./components/Details";
import Nav from "./components/nav";
import Objpop from "./components/Objpop";
import OnePage from "./components/OnePage";
import Regpopup from "./components/Regpopup";
import Searchpopup from "./components/Searchpopup";
import Webview from "./components/Webview";
import { progressfun } from "./utils/Data";

let f = true;
export default function App() {
  // Nav
  const [name, setname] = useState("Guest");
  const [country, setcountry] = useState("Global");
  // REG popup
  const [badges, setbadges] = useState([]);
  const [progress, setprogress] = useState("0%");
  const [regshow, setregshow] = useState(false);

  // Del popup
  const [delshow, setdelshow] = useState(false);
  // Search popup
  const [sershow, setsershow] = useState(false);
  const [part, setpart] = useState("");

  // Webview
  const [uri, seturi] = useState("");
  const [webviewshow, setwebviewshow] = useState(false);

  // Deltails popup
  const [delcardshow, setdelcardshow] = useState(false);
  const [delcardtitle, setdelcardtitle] = useState("");

  // Obj popup
  const [objshow, setobjshow] = useState(false);
  const [objtitle, setobjtitle] = useState("");

  // Open Page
  const [openpage, setopenpage] = useState(false);

  const getdata = async () => {
    try {
      const sname = await AsyncStorage.getItem("name");
      const scountry = await AsyncStorage.getItem("country");
      const sbadges = await AsyncStorage.getItem("badges"); // [names]
      if (sname && scountry) {
        if (f) setname(sname);
        if (f) setcountry(scountry);
        if (f) setbadges(JSON.parse(sbadges) || []);
        setprogress(await progressfun(country));
      } else {
        setregshow(true);
      }
    } catch (error) {
      alert(error);
    }
    f = false;
  };

  useEffect(() => {
    getdata();
  }, [country, delcardtitle]);

  return (
    <SafeAreaView
      className="flex-1"
      style={{ marginTop: StatusBar.currentHeight }}
    >
      {webviewshow && (
        <Webview
          uri={uri}
          webviewshow={webviewshow}
          setwebviewshow={setwebviewshow}
        />
      )}
      {webviewshow || (
        <Nav
          name={name}
          country={country}
          badges={badges.length}
          progress={progress}
          setregshow={setregshow}
          setdelshow={setdelshow}
        />
      )}

      <Objpop setobjshow={setobjshow} objshow={objshow} objtitle={objtitle} />
      <OnePage
        openpage={openpage}
        setopenpage={setopenpage}
        data={{
          name: "Agricultural Product Price and Crop Cultivation Prediction based on Data Science Technique",
          summary: `Among around the world, farming has the
            significant obligation regarding working on the monetary
            commitment of the country. In any case, still the most agricultural fields are immature because of the absence of sending of biological system control innovations. Because of
            these issues, the harvest creation is not further developed
            which influences the farming economy. Consequently an
            advancement of agrarian efficiency is improved in view of
            the plant yield expectation. To forestall this issue, Agricultural areas need to foresee the harvest from given dataset
            utilizing AI methods. The investigation of dataset by directed AI technique which is SMLT to catch a few data's
            like, variable ID, uni-variate examination, bi-variate and
            multi-variate investigation, missing worth medicines and so
            on. A near report between AI calculations had been done to
            figure out which calculation is the most reliable in anticipating the best harvest. The outcomes show that the viability of the proposed AI calculation procedure can measure
            up to best exactness with entropy computation, accuracy,
            Recall, F1 Score, Sensitivity, Specificity and Entropy.`,
          urls: ["https://www.irjet.net/archives/V9/i5/IRJET-V9I5775.pdf"],
          labels: ["pdf file"],
          visualization: [
            { x: 10, y: 20 },
            { x: 40, y: 90 },
          ],
        }}
        setwebviewshow={setwebviewshow}
        seturi={seturi}
      />

      <Regpopup
        name={name}
        setname={setname}
        country={country}
        setcountry={setcountry}
        regshow={regshow}
        setregshow={setregshow}
      />
      <Details
        title={delcardtitle}
        settitle={setdelcardtitle}
        country={country}
        delcardshow={delcardshow}
        setdelcardshow={setdelcardshow}
        seturi={seturi}
        setwebviewshow={setwebviewshow}
        setbadges={setbadges}
        openpage={openpage}
        setopenpage={setopenpage}
      />
      <DELpopup
        country={country}
        badges={badges}
        delshow={delshow}
        setdelshow={setdelshow}
        setdelcardshow={setdelcardshow}
        setdelcardtitle={setdelcardtitle}
        delcardtitle={delcardtitle}
      />
      <Searchpopup
        country={country}
        part={part}
        sershow={sershow}
        setsershow={setsershow}
        seturi={seturi}
        setwebviewshow={setwebviewshow}
      />
      <Body
        setdelcardshow={setdelcardshow}
        setdelcardtitle={setdelcardtitle}
        setpart={setpart}
        setsershow={setsershow}
        setobjshow={setobjshow}
        setobjtitle={setobjtitle}
      />
    </SafeAreaView>
  );
}
