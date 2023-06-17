// Timeline.jsx
// import "./Timeline.css"
import React from 'react';
import Timeline from 'react-calendar-timeline';
import 'react-calendar-timeline/lib/Timeline.css';

const VaccinationTimeline = () => {
  // Sample data for the timeline
  const timelineData = [
    { id: 1, group: 'Vaccines', title: 'Vaccine 1', start_time: new Date(2023, 6, 1), end_time: new Date(2023, 6, 2) },
    { id: 2, group: 'Vaccines', title: 'Vaccine 2', start_time: new Date(2023, 7, 1), end_time: new Date(2023, 7, 2) },
    { id: 3, group: 'Vaccines', title: 'Vaccine 3', start_time: new Date(2023, 8, 1), end_time: new Date(2023, 8, 2) },
    // Add more timeline data as needed
  ];

  // Sample groups for the timeline
  const timelineGroups = [{ id: 'Vaccines', title: 'Vaccines' }];

  return (
    <div className="vaccination-timeline">
      <h4>Vaccination Timeline</h4>
      <Timeline
        groups={timelineGroups}
        items={timelineData}
        defaultTimeStart={new Date(2023, 6, 1)}
        defaultTimeEnd={new Date(2023, 8, 31)}
        lineHeight={50}
        itemHeightRatio={0.75}
        sidebarWidth={150}
        canMove={false}
        canResize={false}
        canChangeGroup={false}
      />
    </div>
  );
};

export default VaccinationTimeline;
       

