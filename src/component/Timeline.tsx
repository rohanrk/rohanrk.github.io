import * as React from "react";

import "../style/timeline.css";

export type TimelineEntry = {
  organization: string;
  role: string;
  description: string;
  year: number;
};

interface TimelineProps {
  entries: TimelineEntry[];
}

export class Timeline extends React.Component<TimelineProps, {}> {
  constructor(props: TimelineProps) {
    super(props);
  }

  render() {
    return (
      <div className="timeline">
        {this.props.entries.map((entry, key) => (
          <div key={key} className="timeline-entry">
            <h4>
              <b>{entry.organization}</b>
            </h4>
            <p>
              <i>{entry.role}</i>
            </p>
            <p>{entry.description}</p>
          </div>
        ))}
      </div>
    );
  }
}
