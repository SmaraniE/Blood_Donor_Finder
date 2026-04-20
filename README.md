<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=30&pause=1000&color=E53935&center=true&vCenter=true&width=700&lines=🩸+Community+Blood+Donor+Finder;Connecting+Lives+Through+Technology;Save+Lives+%7C+Find+Donors+%7C+Act+Fast" alt="Typing SVG" />

<br/>

<img src="https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
<img src="https://img.shields.io/badge/Vite-5.0.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<img src="https://img.shields.io/badge/CSS3-Styled-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
<img src="https://img.shields.io/badge/API-JSONPlaceholder-FF6B6B?style=for-the-badge&logo=json&logoColor=white" />
<img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" />
<img src="https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge&logo=github-actions" />

<br/><br/>

> ### *"Every second counts. Every donor matters. Every life is worth saving."*
> 🚑 A React-powered emergency blood donor discovery platform built to save lives through technology.

<br/>

```
╔══════════════════════════════════════════════════════════════════╗
║                                                                  ║
║         🩸   C O M M U N I T Y   B L O O D   F I N D E R  🩸   ║
║                                                                  ║
║         Search  ●  Filter  ●  Connect  ●  Request               ║
║                                                                  ║
║              ❤️  Every Drop Counts  ❤️                          ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
```

---

[🌟 Features](#-core-features) • [🚀 Quick Start](#-installation--setup) • [🗺️ Flowchart](#️-system-architecture--flowchart) • [📊 Charts](#-project-analytics) • [🧠 Mind Map](#-mind-map) • [📁 Structure](#-project-structure) • [🛠️ Tech Stack](#️-tech-stack) • [🔮 Roadmap](#-future-roadmap)

</div>

---

## 📌 Table of Contents

- [🎯 Problem Statement](#-problem-statement)
- [🌟 Core Features](#-core-features)
- [🗺️ System Architecture & Flowchart](#️-system-architecture--flowchart)
- [🧠 Mind Map](#-mind-map)
- [📊 Project Analytics](#-project-analytics)
- [📈 Architecture Diagram](#-architecture-diagram)
- [⚛️ React Concepts Used](#️-react-concepts-deep-dive)
- [📁 Project Structure](#-project-structure)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Installation & Setup](#-installation--setup)
- [🖥️ Component Breakdown](#️-component-breakdown)
- [🧪 State Management Guide](#-state-management-guide)
- [🎨 UI States Explained](#-ui-states-explained)
- [✨ Bonus Features](#-bonus-features-implemented)
- [🔮 Future Roadmap](#-future-roadmap)
- [🎓 Learning Outcomes](#-learning-outcomes)
- [👨‍💻 Author](#-author)

---

## 🎯 Problem Statement

<table>
<tr>
<td>

### ❗ The Real-World Crisis

Every **2 seconds**, someone in the world needs blood.  
Hospitals and patients often struggle to find **the right blood donor at the right time** during emergencies.  
Manual searching is **slow, inefficient, and costs lives**.

</td>
<td>

### 💡 Our Solution

A **smart donor discovery platform** built with React that:

- 🔍 Finds donors **instantly** by blood group
- 📍 Searches donors **by city location**
- 📊 Shows **real-time availability**
- 🚨 Sends **emergency help requests** in one click
- 📈 Displays **available donor counts** dynamically

</td>
</tr>
</table>

> [!IMPORTANT]  
> This application bridges the gap between blood donors and patients during critical emergencies, demonstrating how modern web technology can create meaningful real-world impact.

---

## 🌟 Core Features

<table>
<thead>
<tr>
<th>Feature</th>
<th>Description</th>
<th>Status</th>
</tr>
</thead>
<tbody>
<tr>
<td>🌐 <strong>API Integration</strong></td>
<td>Fetches donor data from JSONPlaceholder API using <code>useEffect</code> on mount</td>
<td>✅ Live</td>
</tr>
<tr>
<td>🩸 <strong>Blood Group Filter</strong></td>
<td>Filter donors by A+, A−, B+, B−, AB+, AB−, O+, O− via dropdown</td>
<td>✅ Live</td>
</tr>
<tr>
<td>🔍 <strong>City Search</strong></td>
<td>Real-time search donors by city name (case-insensitive)</td>
<td>✅ Live</td>
</tr>
<tr>
<td>📊 <strong>Sort by Availability</strong></td>
<td>Sort donors so available ones always appear first</td>
<td>✅ Live</td>
</tr>
<tr>
<td>🃏 <strong>Donor Cards</strong></td>
<td>Beautiful cards showing name, blood group, city, availability badge</td>
<td>✅ Live</td>
</tr>
<tr>
<td>🚨 <strong>Request System</strong></td>
<td>One-click "Request Help" → "Request Sent ✅" status toggle</td>
<td>✅ Live</td>
</tr>
<tr>
<td>⏳ <strong>Loading Spinner</strong></td>
<td>Elegant loading state while data is being fetched</td>
<td>✅ Live</td>
</tr>
<tr>
<td>❌ <strong>Empty State</strong></td>
<td>"No donors found" message when filters return nothing</td>
<td>✅ Live</td>
</tr>
<tr>
<td>📈 <strong>Donor Counter</strong></td>
<td>Live count of available donors based on active filters</td>
<td>✅ Live</td>
</tr>
<tr>
<td>📱 <strong>Responsive Design</strong></td>
<td>Fully mobile-friendly layout across all device sizes</td>
<td>✅ Live</td>
</tr>
</tbody>
</table>

---

## 🗺️ System Architecture & Flowchart

```mermaid
flowchart TD
    A([🚀 App Starts]) --> B[⚛️ React App Mounts]
    B --> C{🌐 useEffect Triggered}
    C --> D[📡 Fetch API: JSONPlaceholder /users]
    D --> E{Response OK?}
    E -- ✅ Yes --> F[🔄 Map Users → Donors\nAssign Blood Groups & Availability]
    E -- ❌ No --> G[💥 Set Error State\nDisplay Error Message]
    F --> H[📦 Store in useState: donors]
    H --> I[🎛️ Render Filters Component]
    I --> J{User Interaction}

    J -- 🩸 Select Blood Group --> K[setSelectedBloodGroup]
    J -- 🏙️ Type City --> L[setSearchCity]
    J -- 📊 Toggle Sort --> M[setSortByAvailability]

    K & L & M --> N[🔍 Derived filteredDonors Array]
    N --> O[📋 Render DonorList Component]
    O --> P[🃏 Display Donor Cards]
    P --> Q{Click 'Request Help'?}
    Q -- Yes --> R[🔄 setRequestStatus: donorId = true]
    R --> S[✅ Button → 'Request Sent ✅']
    Q -- No --> P

    style A fill:#E53935,color:#fff,stroke:#B71C1C
    style D fill:#1565C0,color:#fff,stroke:#0D47A1
    style F fill:#2E7D32,color:#fff,stroke:#1B5E20
    style G fill:#F57F17,color:#fff,stroke:#E65100
    style S fill:#2E7D32,color:#fff,stroke:#1B5E20
    style N fill:#6A1B9A,color:#fff,stroke:#4A148C
```

---

## 🧠 Mind Map

```mermaid
mindmap
  root((**🩸 Blood Donor Finder**))
    **🌐 API Layer**
      useEffect Hook
      Fetch API Call
      JSONPlaceholder Source
      Response Mapping
      Error Handling
    **📦 State Management**
      donors — Full List
      selectedBloodGroup
      searchCity
      sortByAvailability
      requestStatus Map
      loading / error flags
    **🎛️ Filtering Engine**
      Blood Group Match
      City Name Search
      Availability Sort
      Derived State Pattern
      filteredDonors Array
    **🃏 UI Components**
      Header.jsx — Banner & Count
      Filters.jsx — Controls
      DonorList.jsx — Grid
      DonorCard.jsx — Profile
    **🎨 UI States**
      ⏳ Loading Spinner
      ✅ Success State
      ❌ Error Message
      🔍 No Donors Found
    **🚀 Bonus Features**
      City-Based Search
      Availability Sorting
      Emergency Request Flow
      Responsive Layout
    **🔮 Future Plans**
      Firebase Backend
      Authentication
      Real-time Updates
      SMS Alerts
      Maps Integration
```

---

## 📊 Project Analytics

```mermaid
pie title 🧩 Project Complexity Distribution
    "⚛️ React Logic & Hooks" : 30
    "🎨 UI Design & Styling" : 20
    "📦 State Management" : 20
    "🌐 API Integration" : 15
    "🔍 Filtering & Sorting" : 10
    "🚀 Bonus UX Features" : 5
```

```mermaid
pie title 🩸 Blood Group Distribution (Sample Dataset — 10 Donors)
    "A+" : 2
    "A-" : 1
    "B+" : 2
    "B-" : 1
    "AB+" : 1
    "AB-" : 1
    "O+" : 1
    "O-" : 1
```

```mermaid
xychart-beta
    title "📈 Donor Availability Across Blood Groups"
    x-axis ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]
    y-axis "Number of Donors" 0 --> 5
    bar [3, 2, 3, 2, 1, 1, 3, 2]
    line [2, 1, 2, 1, 1, 1, 2, 1]
```

---

## 📈 Architecture Diagram

```mermaid
graph LR
    USER([👤 User]):::user --> UI[🖥️ React UI Layer]:::ui
    UI --> HEADER[🏥 Header Component]:::comp
    UI --> FILTERS[🎛️ Filters Component]:::comp
    UI --> DONORLIST[📋 DonorList Component]:::comp
    DONORLIST --> DONORCARD[🃏 DonorCard Component]:::comp

    UI --> STATE[📦 App State\nuseState / useEffect]:::state
    STATE --> API[🌐 JSONPlaceholder API]:::api
    API --> BLOODMAP[🔄 Blood Group Mapper]:::logic
    BLOODMAP --> STATE

    STATE --> FILTER_ENGINE[🔍 Filter Engine\nDerived State]:::logic
    FILTER_ENGINE --> DONORLIST

    DONORCARD --> REQUEST[🚨 Request Handler\nsetRequestStatus]:::logic
    REQUEST --> STATE

    classDef user fill:#FF7043,stroke:#E64A19,color:#fff
    classDef ui fill:#1E88E5,stroke:#1565C0,color:#fff
    classDef comp fill:#43A047,stroke:#2E7D32,color:#fff
    classDef state fill:#8E24AA,stroke:#6A1B9A,color:#fff
    classDef api fill:#FB8C00,stroke:#E65100,color:#fff
    classDef logic fill:#E53935,stroke:#B71C1C,color:#fff
```

---

## ⚛️ React Concepts Deep Dive

<table>
<tr>
<th>🔥 Hook / Concept</th>
<th>📌 Where Used</th>
<th>💡 What It Does</th>
</tr>
<tr>
<td><code>useState([])</code></td>
<td><code>App.jsx</code></td>
<td>Stores the full donors array fetched from API</td>
</tr>
<tr>
<td><code>useState('')</code></td>
<td><code>App.jsx</code></td>
<td>Tracks selected blood group and city search input</td>
</tr>
<tr>
<td><code>useState(false)</code></td>
<td><code>App.jsx</code></td>
<td>Toggle state for sort-by-availability feature</td>
</tr>
<tr>
<td><code>useState({})</code></td>
<td><code>App.jsx</code></td>
<td>Maps <code>donorId → boolean</code> for request status tracking</td>
</tr>
<tr>
<td><code>useEffect(fn, [])</code></td>
<td><code>App.jsx</code></td>
<td>Triggers API fetch on component mount (once)</td>
</tr>
<tr>
<td><strong>Derived State</strong></td>
<td><code>filteredDonors</code></td>
<td>Computes filtered+sorted list without extra useState</td>
</tr>
<tr>
<td><strong>Conditional Rendering</strong></td>
<td><code>DonorList.jsx</code>, <code>Header.jsx</code></td>
<td>Renders spinner, error, empty, or card list based on state</td>
</tr>
<tr>
<td><strong>Prop Drilling</strong></td>
<td>App → Filters → DonorList → DonorCard</td>
<td>Passes state and handlers cleanly down the tree</td>
</tr>
<tr>
<td><strong>Event Handling</strong></td>
<td><code>handleRequest()</code>, filter onChange</td>
<td>Updates state on user interaction</td>
</tr>
<tr>
<td><strong>Array Methods</strong></td>
<td><code>.filter()</code>, <code>.sort()</code>, <code>.map()</code></td>
<td>Core logic for filtering, sorting, and rendering donors</td>
</tr>
</table>

---

## 📁 Project Structure

```
🗂️ community-blood-donor-finder/
│
├── 📄 index.html                    ← HTML entry point
├── 📦 package.json                  ← Dependencies & scripts
├── ⚙️ vite.config.js                ← Vite bundler config
├── 🔒 .gitignore                    ← Git ignore rules
│
├── 📂 src/
│   ├── ⚛️  main.jsx                 ← App bootstrap (ReactDOM.render)
│   ├── 🏗️  App.jsx                  ← Root component + all state logic
│   ├── 🎨  index.css                ← Global styles & design system
│   │
│   └── 📂 components/
│       ├── 🏥  Header.jsx           ← Banner, title, donor count badge
│       ├── 🎛️  Filters.jsx          ← Blood group dropdown, city search, sort
│       ├── 📋  DonorList.jsx        ← Grid/list of donor cards + UI states
│       └── 🃏  DonorCard.jsx        ← Individual donor profile + request button
│
├── 📂 dist/                         ← Production build output (auto-generated)
└── 📂 node_modules/                 ← Installed dependencies
```

---

## 🛠️ Tech Stack

<table>
<thead>
<tr>
<th>Technology</th>
<th>Version</th>
<th>Role</th>
<th>Why Chosen</th>
</tr>
</thead>
<tbody>
<tr>
<td>⚛️ <strong>React</strong></td>
<td>18.2.0</td>
<td>Frontend Framework</td>
<td>Component-based, reactive UI with hooks</td>
</tr>
<tr>
<td>⚡ <strong>Vite</strong></td>
<td>5.0.0</td>
<td>Build Tool</td>
<td>Lightning-fast HMR and build times</td>
</tr>
<tr>
<td>🟨 <strong>JavaScript</strong></td>
<td>ES6+</td>
<td>Logic & Functionality</td>
<td>Modern syntax: async/await, destructuring, arrow functions</td>
</tr>
<tr>
<td>🎨 <strong>CSS3</strong></td>
<td>Vanilla</td>
<td>Styling</td>
<td>Full control over design, no framework overhead</td>
</tr>
<tr>
<td>🌐 <strong>JSONPlaceholder</strong></td>
<td>API</td>
<td>Mock Backend</td>
<td>Free, reliable REST API for prototyping</td>
</tr>
<tr>
<td>🎯 <strong>Lucide React</strong></td>
<td>0.292.0</td>
<td>Icon Library</td>
<td>Clean, consistent SVG icons for better UX</td>
</tr>
</tbody>
</table>

---

## 🚀 Installation & Setup

### Prerequisites

Make sure you have the following installed:

| Tool | Version | Download |
|------|---------|----------|
| Node.js | ≥ 18.x | [nodejs.org](https://nodejs.org) |
| npm | ≥ 9.x | Bundled with Node.js |
| Git | Latest | [git-scm.com](https://git-scm.com) |

### Step-by-Step Guide

```bash
# 1️⃣  Clone the repository
git clone https://github.com/your-username/community-blood-donor-finder.git

# 2️⃣  Navigate into the project directory
cd community-blood-donor-finder

# 3️⃣  Install all dependencies
npm install

# 4️⃣  Start the development server
npm run dev

# 5️⃣  Open your browser and visit
#     ➜  http://localhost:5173
```

> [!TIP]  
> Run `npm run build` to create a production-ready bundle in the `dist/` folder.  
> Run `npm run preview` to locally preview the production build.

---

## 🖥️ Component Breakdown

```mermaid
graph TD
    APP["⚛️ App.jsx\n─────────────────────\n📦 State: donors, filters,\n   requestStatus, loading\n🌐 API Fetching Logic\n🔍 filteredDonors Derivation"]:::root

    HEADER["🏥 Header.jsx\n────────────────────\n🏷️ App Title & Logo\n📊 Available Donor Count\n⚠️ Error Banner"]:::comp

    FILTERS["🎛️ Filters.jsx\n────────────────────\n🩸 Blood Group Dropdown\n🏙️ City Search Input\n📊 Sort Toggle Button"]:::comp

    DONORLIST["📋 DonorList.jsx\n────────────────────\n⏳ Loading Spinner\n❌ Empty State Message\n📐 Donor Cards Grid"]:::comp

    DONORCARD["🃏 DonorCard.jsx\n────────────────────\n👤 Donor Name\n🩸 Blood Group Badge\n📍 City Location\n🟢 Availability Status\n🚨 Request Help Button"]:::comp

    APP --> HEADER
    APP --> FILTERS
    APP --> DONORLIST
    DONORLIST --> DONORCARD

    classDef root fill:#B71C1C,stroke:#7F0000,color:#fff
    classDef comp fill:#1565C0,stroke:#0D47A1,color:#fff
```

---

## 🧪 State Management Guide

```mermaid
stateDiagram-v2
    [*] --> Loading : App Mounts

    Loading --> Success : API Returns Data
    Loading --> Error : Fetch Fails

    Success --> Filtered : User Applies Filter
    Filtered --> Filtered : City / BloodGroup Change
    Filtered --> Sorted : Sort Toggle ON

    Success --> RequestPending : Click "Request Help"
    RequestPending --> RequestSent : State Updated

    Error --> Loading : Retry (future feature)

    note right of Loading
        loading = true
        useEffect fires
    end note

    note right of Success
        donors[] populated
        loading = false
    end note

    note right of Filtered
        filteredDonors =
        donors.filter().sort()
        (derived state)
    end note

    note right of RequestSent
        requestStatus[id] = true
        Button text changes
    end note
```

---

## 🎨 UI States Explained

| 🖥️ State | 🔍 Trigger | 👁️ What User Sees |
|-----------|-----------|-------------------|
| ⏳ **Loading** | `loading === true` | Animated spinner with "Fetching donors..." |
| ✅ **Success** | Data loads successfully | Grid of donor cards with filters active |
| ❌ **Error** | `error !== null` | Red error banner with error message |
| 🔍 **No Donors** | Filters return empty array | "No donors found" illustration + message |
| 📊 **Filtered** | User selects blood group or types city | Subset of cards matching criteria |
| 🚨 **Request Sent** | User clicks "Request Help" | Button changes to "Request Sent ✅" (green) |

---

## ✨ Bonus Features Implemented

> [!NOTE]  
> These advanced features go beyond the base requirements and demonstrate production-level thinking.

| 🌟 Bonus Feature | 🔧 Implementation | 💡 UX Impact |
|-----------------|------------------|--------------|
| 🏙️ **Search by City** | `searchCity` state + `.filter()` on `donor.address.city` | Find local donors instantly |
| 📊 **Sort by Availability** | Toggle `sortByAvailability` + `.sort()` comparator | Available donors always appear first |
| 📈 **Live Donor Counter** | `filteredAvailableCount` derived from filtered array | Always up-to-date count shown in Header |
| 🎨 **Availability Badge** | Conditional className on `isAvailable` flag | Instant visual scan of who's ready |
| ⚛️ **Component Architecture** | Split into Header, Filters, DonorList, DonorCard | Clean, scalable, maintainable codebase |

---

## 🔮 Future Roadmap

```mermaid
timeline
    title 🗺️ Community Blood Donor Finder — Development Roadmap
    section Phase 1 ✅ Complete
        Core Features : API Integration
                      : Blood Group Filter
                      : City Search
                      : Request System
                      : Responsive UI
    section Phase 2 🔧 In Progress
        Enhanced UX : Dark Mode Toggle
                    : Animated Transitions
                    : Toast Notifications
                    : Pagination Support
    section Phase 3 🔮 Planned
        Backend Integration : Firebase Realtime DB
                           : User Authentication
                           : Donor Registration Form
                           : Real-time Availability Updates
    section Phase 4 🚀 Future Vision
        Advanced Features : Google Maps Integration
                          : SMS & Email Alerts
                          : Hospital Dashboard
                          : Admin Verification Panel
                          : Emergency Priority Queue
```

---

## 🎓 Learning Outcomes

This project is a comprehensive exercise in **production-level React development**.

<table>
<tr>
<th>🔥 Core React Skills</th>
<th>💼 Industry-Level Skills</th>
</tr>
<tr>
<td>

- ✅ `useState` for complex state shapes
- ✅ `useEffect` for side effects & API calls
- ✅ Derived state (no unnecessary state)
- ✅ Conditional rendering patterns
- ✅ Dynamic filtering logic
- ✅ Sorting with `.sort()` comparator functions
- ✅ Prop drilling across component tree
- ✅ Event handling & state updates
- ✅ Array transformation: `.map()`, `.filter()`, `.sort()`
- ✅ Async/Await + try/catch/finally

</td>
<td>

- ✅ Production-ready component architecture
- ✅ Scalable state management thinking
- ✅ Real-world problem solving with code
- ✅ UX-first development mindset
- ✅ Clean, reusable component design
- ✅ API error handling & graceful degradation
- ✅ Loading state management
- ✅ Data transformation from API to UI
- ✅ Separation of concerns
- ✅ Modern tooling with Vite + ESLint

</td>
</tr>
</table>

---

## 💬 App API Reference

| Endpoint | Method | Description |
|---------|--------|-------------|
| `https://jsonplaceholder.typicode.com/users` | `GET` | Fetch 10 mock users → mapped as donors |

**Data Transformation:**
```javascript
// Raw API user → Enhanced Donor Object
{
  id: 1,
  name: "Leanne Graham",
  address: { city: "Gwenborough" },
  // ↓ Added locally:
  bloodGroup: "A+",       // Cycled from BLOOD_GROUPS array
  isAvailable: true       // index % 3 !== 0
}
```

---

## 🌐 Supported Blood Groups

```
╔═══╦═══╦═══╦═══╦════╦════╦═══╦═══╗
║ A+║ A−║ B+║ B−║ AB+║ AB−║ O+║ O−║
╚═══╩═══╩═══╩═══╩════╩════╩═══╩═══╝
       All 8 major blood groups supported
```

---

## 🤝 Contributing

Contributions are warmly welcome! Here's how:

```bash
# 1. Fork the project
# 2. Create your feature branch
git checkout -b feature/amazing-feature

# 3. Commit your changes
git commit -m "✨ Add amazing feature"

# 4. Push to your branch
git push origin feature/amazing-feature

# 5. Open a Pull Request 🚀
```

> [!IMPORTANT]  
> Please make sure to follow the existing code style, use meaningful commit messages, and add comments for complex logic.

---

## 📜 License

```
MIT License

Copyright (c) 2026 Community Blood Donor Finder

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software... to use, copy, modify, merge, publish, distribute.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.
```

---

## 👩‍💻 Author

<div align="center">

### 🚀 Built with Passion & Purpose

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=22&pause=1000&color=E53935&center=true&vCenter=true&width=600&lines=Smarani+Ekkaladevi;Professional+Competitive+Programmer+💻;React+Developer+⚛️+%7C+Problem+Solver+🧠;Full+Stack+Enthusiast+🚀" alt="Author Typing SVG" />

<br/>

| | |
|:---:|:---|
| 🏆 | **Smarani Ekkaladevi** |
| 💻 | **Professional Competitive Programmer** |
| ⚛️ | **React Developer** |
| 🧠 | **Problem Solver** |
| 🚀 | **Full Stack Enthusiast** |
| ❤️ | **Social Impact Builder — Code for Good** |

<br/>

![GitHub followers](https://img.shields.io/github/followers/SMARANI?style=for-the-badge&logo=github&color=E53935)
![Profile Views](https://img.shields.io/badge/Profile%20Views-Growing%20🚀-E53935?style=for-the-badge)

</div>

---

## 🌟 Support & Spread the Word

<div align="center">

If this project helped you or inspired you, show your support! 💖

[![⭐ Star this repo](https://img.shields.io/badge/⭐%20Star%20this%20Repo-yellow?style=for-the-badge)](https://github.com/your-username/community-blood-donor-finder)
[![🍴 Fork it](https://img.shields.io/badge/🍴%20Fork%20it-blue?style=for-the-badge)](https://github.com/your-username/community-blood-donor-finder/fork)
[![🩸 Share it](https://img.shields.io/badge/🩸%20Share%20it-E53935?style=for-the-badge)](https://github.com/your-username/community-blood-donor-finder)

</div>

---

<div align="center">

```
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║     🩸  Every Drop Counts                                    ║
║     ❤️  Every Donor Matters                                  ║
║     🚑  Every Second Saves a Life                            ║
║                                                              ║
║          Thank You for Building for Good  🙏                ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

<img src="https://capsule-render.vercel.app/api?type=waving&color=E53935&height=100&section=footer&text=Community%20Blood%20Donor%20Finder&fontColor=ffffff&fontSize=20" alt="footer" />

---

*Made with ❤️ and React · Powered by ⚡ Vite · Designed to Save Lives 🩸*

</div>
#   B l o o d _ D o n o r _ F i n d e r  
 