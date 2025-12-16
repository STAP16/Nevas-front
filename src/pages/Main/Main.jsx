import FirstScreen from "./Screen/FirstScreen/FirstScreen";
import SecondScreen from "./Screen/SecondScreen/SecondScreen";

const secondScreenBg = {
  background: "linear-gradient(to top, #031891, #01072B)",
};

export default function Main() {
  return (
    <>
      <div className="page">
        <FirstScreen />
      </div>
      <div className="page" style={secondScreenBg}>
        <SecondScreen />
      </div>
    </>
  );
}
