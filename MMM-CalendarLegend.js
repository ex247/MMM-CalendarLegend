Module.register("MMM-CalendarLegend", {
  defaults: {
    showCounts: false,
    sort: "name",
    defaultColor: "#999",
    updateDelay: 0,
    autoSync: true,
    calendars: []
  },

  start: function () {
    this.calendars = {};
  },

  notificationReceived: function (notification, payload, sender) {
    if (notification === "CALENDAR_EVENTS") {
      this.processEvents(payload);
    }
  },

  processEvents: function (events) {
    const calendarMap = { ...this.calendars };

    Object.keys(calendarMap).forEach(name => {
      calendarMap[name].count = 0;
    });

    events.forEach(event => {
      const name = event.calendarName || "Unknown";
      const color = event.color || this.config.defaultColor;

      if (!calendarMap[name]) {
        calendarMap[name] = {
          color,
          count: 0
        };
      }

      calendarMap[name].count++;
    });

    this.calendars = calendarMap;

    setTimeout(() => this.updateDom(), this.config.updateDelay);
  },

  getDom: function () {
    const wrapper = document.createElement("div");

    const entries = Object.entries(this.calendars);

    if (entries.length === 0) {
      wrapper.innerHTML = "No calendar data";
      return wrapper;
    }

    if (this.config.sort === "name") {
      entries.sort(([a], [b]) => a.localeCompare(b));
    }

    const list = document.createElement("ul");
    list.className = "calendar-legend";

    entries.forEach(([name, data]) => {
      const item = document.createElement("li");

      const swatch = document.createElement("span");
      swatch.className = "legend-color";
      swatch.style.backgroundColor = data.color;

      const label = document.createElement("span");
      label.className = "legend-label";

      label.innerText = this.config.showCounts
        ? `${name} (${data.count})`
        : name;

      item.appendChild(swatch);
      item.appendChild(label);
      list.appendChild(item);
    });

    wrapper.appendChild(list);
    return wrapper;
  },

  getStyles: function () {
    return ["MMM-CalendarLegend.css"];
  }
});
