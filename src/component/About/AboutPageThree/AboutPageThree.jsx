import "./AboutPageThree.css";

const AboutPageThree = () => {
  const stepData = [
    {
      stepNum: 32,
      stepTitle: "Teachers in our school",
      stepContent: "Donec vestibulum justo a diam ultricies pel",
    },
    {
      stepNum: "97%",
      stepTitle: "Of satisfied students",
      stepContent: "Tortor hendrerit elit fermentum consequat",
    },
    {
      stepNum: 216,
      stepTitle: "New students a year",
      stepContent: "Penatibus in lobortis venenatis blandit transitat",
    },
    {
      stepNum: 9,
      stepTitle: "Different halls and rooms",
      stepContent: "Efficitur si arcu libero aliquet blanden ferment",
    },
  ];

  return (
    <div className="AboutThreeContainer">
      <div className="AboutThreeWrapper">
        <div className="AboutThreeCardsHolder">
          {stepData.map((data, index) => (
            <main key={index} className="AboutThreeCardHold">
              <div className="AboutThreeCardContent">
                <h1>{data.stepNum}</h1>
                <h3>{data.stepTitle}</h3>
                <p>{data.stepContent}</p>
              </div>
            </main>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPageThree;
