import * as React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const seeMoreContent = (args: {
  close: () => void;
  title: string;
  content: React.ReactNode;
}) => (
  <div
    style={{
      backgroundColor: "rgba(1, 1, 1, 0.85)",
      padding: "21px",
      color: "white",
      height: "100%",
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "calc(100% - 42px)",
        flexDirection: "column",
      }}
    >
      <div>
        <h2>{args.title}</h2>
        <div>{args.content}</div>
      </div>

      <a
        onClick={() => args.close()}
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AiFillCloseCircle style={{ fontSize: "3em" }} />
      </a>
    </div>
  </div>
);

export const media = [
  {
    url: "https://devguides-static.s3.amazonaws.com/webinars/stories/1.mp4",
    type: "video",
    seeMore: ({ close }: { close: () => void }) =>
      seeMoreContent({
        close,
        title: "Practice Landings",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      }),
    header: {
      heading: "Practice Landings",
      subheading: "Deer Valley, AZ",
      profileImage: require("../../static/assets/images/story-icon.png"),
    },
  },
  {
    url: "https://devguides-static.s3.amazonaws.com/webinars/stories/2.mp4",
    type: "video",
    seeMore: ({ close }: { close: () => void }) =>
      seeMoreContent({
        close,
        title: "Flight into Camarillo",
        content: (
          <div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/71/CamarilloCalifornia.jpg"
              style={{ width: "100%", height: "auto", margin: "10px 0px" }}
            />
            <div>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </div>
          </div>
        ),
      }),
    header: {
      heading: "Flight into Camarillo",
      subheading: "Camarillo, CA",
      profileImage: require("../../static/assets/images/story-icon.png"),
    },
  },
  {
    url: "https://devguides-static.s3.amazonaws.com/webinars/stories/3.mp4",
    type: "video",
    header: {
      heading: "Flight into Camarillo",
      subheading: "Camarillo, CA",
      profileImage: require("../../static/assets/images/story-icon.png"),
    },
  },
  {
    url: "https://devguides-static.s3.amazonaws.com/webinars/stories/4.mp4",
    type: "video",
    header: {
      heading: "Northern Arizona",
      subheading: "Prescott, AZ",
      profileImage: require("../../static/assets/images/story-icon.png"),
    },
  },
  {
    url: "https://devguides-static.s3.amazonaws.com/webinars/stories/5.mp4",
    type: "video",
    header: {
      heading: "Red Rocks",
      subheading: "Sedona, AZ",
      profileImage: require("../../static/assets/images/story-icon.png"),
    },
  },
  {
    url: "https://devguides-static.s3.amazonaws.com/webinars/stories/6.mp4",
    type: "video",
    header: {
      heading: "Gorgeous Views",
      subheading: "Telluride, CO",
      profileImage: require("../../static/assets/images/story-icon.png"),
    },
  },
  {
    url: "https://devguides-static.s3.amazonaws.com/webinars/stories/7.mp4",
    type: "video",
    header: {
      heading: "Friend Trip",
      subheading: "Flagstaff, AZ",
      profileImage: require("../../static/assets/images/story-icon.png"),
    },
  },
  {
    url: "https://devguides-static.s3.amazonaws.com/webinars/stories/8.mp4",
    type: "video",
    header: {
      heading: "Perfect Day to Fly",
      subheading: "Scottsdale, AZ",
      profileImage: require("../../static/assets/images/story-icon.png"),
    },
  },
  {
    url: "https://devguides-static.s3.amazonaws.com/webinars/stories/9.mp4",
    type: "video",
    header: {
      heading: "Cross Country Trip",
      subheading: "Lake Havasu, AZ",
      profileImage: require("../../static/assets/images/story-icon.png"),
    },
  },
  {
    url: "https://devguides-static.s3.amazonaws.com/webinars/stories/10.mp4",
    type: "video",
    header: {
      heading: "Check Ride Prep",
      subheading: "Scottsdale, AZ",
      profileImage: require("../../static/assets/images/story-icon.png"),
    },
  },
  {
    url: "https://devguides-static.s3.amazonaws.com/webinars/stories/11.mp4",
    type: "video",
    header: {
      heading: "Trip Planning",
      subheading: "Tempe, AZ",
      profileImage: require("../../static/assets/images/story-icon.png"),
    },
  },
  {
    url: "https://devguides-static.s3.amazonaws.com/webinars/stories/12.mp4",
    type: "video",
    header: {
      heading: "Utah Trip",
      subheading: "Provo, UT",
      profileImage: require("../../static/assets/images/story-icon.png"),
    },
  },
  {
    url: "https://devguides-static.s3.amazonaws.com/webinars/stories/13.mp4",
    type: "video",
    header: {
      heading: "Weekend Trip",
      subheading: "Scottsdale, AZ",
      profileImage: require("../../static/assets/images/story-icon.png"),
    },
  },
  {
    url: "https://devguides-static.s3.amazonaws.com/webinars/stories/14.mp4",
    type: "video",
    header: {
      heading: "Hollywood Adventure",
      subheading: "Burbank, CA",
      profileImage: require("../../static/assets/images/story-icon.png"),
    },
  },
  {
    url: "https://devguides-static.s3.amazonaws.com/webinars/stories/15.mp4",
    type: "video",
    header: {
      heading: "Leaving the Views",
      subheading: "Sedona, AZ",
      profileImage: require("../../static/assets/images/story-icon.png"),
    },
  },
];
