// parseICS.mjs
import ical from 'ical';

export function parseICSData(icsData) {
  const events = ical.parseICS(icsData);
  let parsedEvents = [];
  
  for (let key in events) {
    if (events[key].type === 'VEVENT') {
      parsedEvents.push({
        summary: events[key].summary,
        start: events[key].start,
        end: events[key].end,
        location: events[key].location,
        description: events[key].description
      });
    }
  }

  return parsedEvents;
}
