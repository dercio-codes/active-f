import { THEME_TEXT_COLOR } from "../constants";

 const SecondarySectionHeader = ({ txt }) => {
  const splitArr = txt.toUpperCase().split(" ");
  const firstWord = splitArr[0];
  splitArr.shift();
  const rest_of_words = splitArr.join(" ");
  return (
    <div
      style={{
        fontSize: 24,
        fontWeight: 700,
        color: THEME_TEXT_COLOR,
        marginTop: 10,
        marginBottom: 10,
      }}
    >
      <span
        style={{
          color: "#c42b31",
        }}
      >
        {firstWord}
      </span>
      <span> </span>
      <span>{rest_of_words}</span>
    </div>
  );
};

export default SecondarySectionHeader;