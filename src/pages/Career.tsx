import * as React from "react";
import { TimelineEntry, Timeline } from "../component/Timeline";

const CAREER_BLOCKS: TimelineEntry[] = [
  {
    organization: "Georgia Tech",
    role: "Computer Science Student",
    description: "",
    year: Date.parse("2016-08"),
  },
  {
    organization: "CINC",
    role: "SWE Intern",
    description: "",
    year: Date.parse("2017-05"),
  },
  {
    organization: "Tumblr",
    role: "iOS Core Intern",
    description: "",
    year: Date.parse("2019-05"),
  },
  {
    organization: "HubSpot",
    role: "Software Engineering Co-op",
    description: "",
    year: Date.parse("2020-01"),
  },
  {
    organization: "Credit Karma",
    role: "Software Engineering Intern",
    description: "",
    year: Date.parse("2020-05"),
  },
  {
    organization: "Splunk",
    role: "Apple TV OS Intern",
    description: "",
    year: Date.parse("2021-05"),
  },
  {
    organization: "Amazon",
    role: "SDE Intern",
    description: "",
    year: Date.parse("2021-07"),
  },
  {
    organization: "Google",
    role: "Cloud Storage SRE",
    description: "",
    year: Date.parse("2022-03"),
  },
];

const Career: React.FC = () => {
  return (
    <div>
      <Timeline entries={CAREER_BLOCKS.sort((a, b) => b.year - a.year)} />
    </div>
  );
};

export default Career;
