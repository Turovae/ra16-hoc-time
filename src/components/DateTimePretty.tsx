import React from "react";

function DateTimePretty<T extends { date: string }>(
  Component: React.ComponentType<T>,
  timeFormatter: (time: string) => string
) {
  return class extends React.Component<Record<"date", string>> {
    render() {
      const timeString = timeFormatter(this.props.date);
      return <Component {...(this.props as T)} date={timeString} />;
    }
  };
}

export default DateTimePretty;
