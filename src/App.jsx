import "./App.css";
import { TwitterTimelineEmbed } from "react-twitter-embed";

function App() {
  return (
    <>
      testing
      <div className="container">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="HsakaTrades"
          data-theme="dark"
          options={{ width: 500, height: 750 }}
        />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Pentosh1"
          options={{ width: 500, height: 750 }}
        />
      </div>
    </>
  );
}

export default App;
