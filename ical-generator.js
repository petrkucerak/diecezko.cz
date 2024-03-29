const fs = require("fs");
const ics = require("ics");
const program = require("./components/switcher/program.json");

program.map((event) => {
  const time = event.time.split(":");
  ics.createEvent(
    {
      title: event.name,
      url: "https://diecezko.cz/",
      description: event.description.replaceAll("&nbsp;", " "),
      // busyStatus: "FREE",
      organizer: {
        name: "Pan Holub",
        email: "evzen@diecezko.cz",
        dir: "https://diecezko.cz/evzenova-cesta",
        sentBy: "evzen@diecezko.cz",
      },

      location: event.place !== undefined ? event.place.name : undefined,
      geo:
        event.place !== undefined && event.place.coords !== undefined
          ? {
              lat: parseFloat(event.place.coords.x),
              lon: parseFloat(event.place.coords.y),
            }
          : undefined,
      start: [2024, 3, 23, parseInt(time[0]), parseInt(time[1])],
      duration: { minutes: event.duration },
    },
    (error, value) => {
      if (error) {
        console.log(error);
      }
      const path = `./public/assets/events/${event.time.replace(":", "")}${
        event.id
      }`;
      if (!fs.existsSync(path)) fs.mkdirSync(path);
      const file = fs.createWriteStream(`${path}/event.ics`);
      file.write(value);
      file.close();
    }
  );
});
