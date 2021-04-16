import React from "react";

export default function TrackBar({ i }) {
  const Fill = () => {
    console.log(i);
    return <div className="days" style={{ width: `${(i / 60) * 100}%` }} />;
  };

  return (
    <div className="bar">
      <Fill props={i} />
    </div>
  );
}
