import React from "react";

export default function TrackBar(i) {
  const Fill = (props) => {
    return <div className="Name" style={{ width: `${props.percentage}%` }} />;
  };

  return (
    <div className="bar">
      <Fill props={i} />
    </div>
  );
}
