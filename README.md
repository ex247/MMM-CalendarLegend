# MMM-CalendarLegend

A MagicMirror² module that displays a clean legend/key for your configured calendar feeds, showing each calendar's name and color.

This module listens for `CALENDAR_EVENTS` notifications from the default `calendar` module and dynamically builds a legend based on active calendars.

---

## ✨ Features

* Automatically detects calendars from incoming events
* Displays color-coded legend
* Lightweight (no helper required)
* Optional sorting and counts
* Customizable styling

---
## 📷 Screenshot
<img width="669" height="42" alt="MMM-CalendarLegend-Screenshot" src="https://github.com/user-attachments/assets/36b745ed-ea21-42f2-961c-e4645cfc23de" />


---

## 📦 Installation

```bash
cd ~/MagicMirror/modules
git clone https://github.com/ex247/MMM-CalendarLegend.git
```

---

## ⚙️ Configuration

Add this to your `config.js`:

```js
{
  module: "calendar",
  position: "top_left",
  config: {
    calendars: [
      {
        url: "ICAL_URL_1",
        name: "Work",
        color: "#ff0000"
      },
      {
        url: "ICAL_URL_2",
        name: "Family",
        color: "#00ff00"
      }
    ]
  }
},
{
  module: "MMM-CalendarLegend",
  position: "top_right",
  config: {
    showCounts: false,
    sort: "name",
    defaultColor: "#999",
    updateDelay: 0
  }
}
```

---

## 🔧 Configuration Options

| Option         | Description                                        | Default |
| -------------- | -------------------------------------------------- | ------- |
| `showCounts`   | Show number of events per calendar                 | `false` |
| `sort`         | Sorting method: `name` or `none`                   | `name`  |
| `defaultColor` | Fallback color if none is defined                  | `#999`  |
| `updateDelay`  | Delay before DOM update (ms)                       | `0`     |
| `calendars`    | Static calendar definitions (fallback/manual mode) | `[]`    |
| `autoSync`     | Automatically read calendars from calendar module  | `true`  |

### `calendars` format

```js
calendars: [
  { name: "Work", color: "#ff0000" },
  { name: "Family", color: "#00ff00" }
]
```

These will be displayed even if there are no active events.

---

## 🧠 How It Works

* Listens for `CALENDAR_EVENTS`
* Extracts `calendarName` and `color`
* Optionally auto-syncs with the `calendar` module config
* Builds a unique list of calendars
* Updates DOM when new data arrives

### 🔄 Auto-Sync Mode

When `autoSync: true`, the module will read calendar definitions directly from the loaded `calendar` module at runtime.

No need to duplicate your calendar list in this module.

---

---

## 📁 File Structure

```
MMM-CalendarLegend/
├── MMM-CalendarLegend.js
├── MMM-CalendarLegend.css
└── README.md
```

---

## 🚀 Future Ideas

* Persist calendar list even with no events
* Click-to-toggle calendars
* Match calendar module fade/opacity styles

---

## 📜 License

MIT

---

## 🙌 Contributing

Pull requests welcome!

---

## ⭐ Credits

Built for the MagicMirror² community
