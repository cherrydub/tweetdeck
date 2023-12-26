import "./App.css";
import { TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";

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
        <TwitterTweetEmbed
          tweetId="1739638245632221503"
          options={{ conversation: "none" }} // You can customize options here
        />
      </div>
    </>
  );
}

export default App;
