import * as React from "react";
import Stories from "react-insta-stories";
import { media } from "./media";

const controls = {
  play: require("../../static/assets/controls/play.png"),
  previous: require("../../static/assets/controls/previous.png"),
  next: require("../../static/assets/controls/next.png"),
  pause: require("../../static/assets/controls/pause.png"),
  restart: require("../../static/assets/controls/restart.png"),
};

export default function FlyingStories() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(true);
  const [activeStory, setActiveStory] = React.useState(null);

  const onStoryStart = (val: number) => {
    setIsPaused(false);
    setActiveStory(media[val]);
  };

  const onAllStoriesEnd = () => {
    setIsPaused(true);
    setActiveStory(null);
  };

  const onLastStory = currentIndex === media.length - 1;

  const storyContols = (
    <div className="story-controls">
      <a
        onClick={() =>
          currentIndex > 0 ? setCurrentIndex(currentIndex - 1) : {}
        }
        style={{ opacity: currentIndex > 0 ? 1 : 0.5 }}
      >
        <img src={controls.previous} />
      </a>

      {!activeStory ? (
        <a onClick={() => setCurrentIndex(0)}>
          <img src={controls.restart} />
        </a>
      ) : (
        <a onClick={() => setIsPaused(!isPaused)}>
          <img src={isPaused ? controls.play : controls.pause} />
        </a>
      )}

      <a
        onClick={() => (!onLastStory ? setCurrentIndex(currentIndex + 1) : {})}
        style={{ opacity: onLastStory ? 0.5 : 1 }}
      >
        <img src={controls.next} />
      </a>
    </div>
  );

  return (
    <div>
      <Stories
        stories={media}
        currentIndex={currentIndex}
        isPaused={isPaused}
        onStoryStart={onStoryStart}
        onAllStoriesEnd={onAllStoriesEnd}
        keyboardNavigation
      />

      {storyContols}
    </div>
  );
}
