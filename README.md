# 🚀 Network Payload & Preview Stitcher

A lightweight Chrome DevTools extension that captures API request payloads and response previews in a single unified view, enabling developers, QA engineers, and support teams to document, debug, and analyze network traffic more efficiently.

---

# 📖 Overview

Modern web applications rely heavily on APIs. During debugging, testing, or documentation, engineers often need to inspect both the request payload and the corresponding response. Chrome DevTools provides this information, but it is separated across multiple tabs, making side-by-side inspection and screenshot-based reporting cumbersome.

**Network Payload & Preview Stitcher** solves this problem by introducing a dedicated DevTools panel that automatically displays:

* 📤 Request Payload
* 📥 Response Preview
* 🌐 HTTP Method
* 🔗 API Endpoint
* ⚡ Real-Time Network Activity

All within a single interface.

The extension is built using **Chrome Extension Manifest V3** and runs entirely within the browser, requiring no external services or backend infrastructure.

---

# ✨ Key Features

### 📋 Unified Request & Response View

View request payloads and response previews together without switching between DevTools tabs.

### ⚡ Real-Time Network Monitoring

Automatically captures and displays API traffic as requests are executed.

### 🛠️ Developer-Friendly Interface

Designed specifically for debugging, issue reporting, API validation, and documentation workflows.

### 📸 Screenshot-Ready Layout

Generate clean screenshots containing both request and response information for:

* 🐞 Bug Reports
* 🧪 QA Documentation
* 🎫 Support Tickets
* 👥 Internal Engineering Discussions
* 🤝 Client Communications

### 🔒 Lightweight & Local

* No backend required
* No cloud services
* No telemetry
* No user tracking

### ✅ Manifest V3 Compatible

Built using Chrome's latest extension architecture and security standards.

---

# 🎯 Use Cases

### 💻 Frontend Development

Quickly inspect API requests and responses during feature development.

### 🧪 Quality Assurance (QA)

Capture complete API interaction screenshots for defect reporting.

### 🎧 Technical Support

Share request-response snapshots while investigating production issues.

### 📚 API Documentation

Create visual examples of endpoint behavior for internal documentation.

### 🔐 Security Analysis

Review payload structures and response formats during testing.

---

# 📂 Project Structure

```text
network-snapshot-extension/
├── manifest.json
├── devtools.html
├── devtools.js
├── panel.html
└── panel.js
```

## 📄 File Descriptions

| File            | Purpose                                        |
| --------------- | ---------------------------------------------- |
| `manifest.json` | Chrome Extension configuration and permissions |
| `devtools.html` | Registers the custom DevTools panel            |
| `devtools.js`   | Initializes and loads the panel                |
| `panel.html`    | User interface for displaying captured traffic |
| `panel.js`      | Handles network event processing and rendering |

---

# 🛠️ Installation

Since this extension is intended for developer productivity and internal workflows, it can be loaded directly into Chrome without publishing to the Chrome Web Store.

## 📋 Prerequisites

* 🌐 Google Chrome (latest version recommended)
* ⚙️ Developer Mode enabled in Chrome Extensions

### 1️⃣ Download the Project

Clone the repository or copy the project files into a local directory.

```bash
git clone <repository-url>
```

Or manually place the files inside:

```text
network-snapshot-extension/
```

---

### 2️⃣ Open Chrome Extensions

Navigate to:

```text
chrome://extensions
```

---

### 3️⃣ Enable Developer Mode

Toggle **Developer Mode** ON from the top-right corner of the page.

---

### 4️⃣ Load the Extension

1. Click **Load unpacked**
2. Select the root project folder:

```text
network-snapshot-extension/
```

3. Click **Select Folder**

The extension will immediately become available inside Chrome DevTools.

---

# 🚀 Usage Guide

## 🔍 Open DevTools

Launch DevTools using:

### 🖥️ Windows / Linux

```text
F12
Ctrl + Shift + I
```

### 🍎 macOS

```text
Cmd + Option + I
```

---

## 📌 Open the Custom Panel

Locate the newly added:

```text
Payload + Preview
```

tab within DevTools.

If it is not immediately visible:

* Click the `>>` overflow menu
* Open the DevTools Command Menu:

```text
Ctrl + Shift + P
```

Then search for:

```text
Payload + Preview
```

---

## 📡 Start Capturing Network Traffic

After opening the panel:

### Step 1: Refresh the Page

```text
F5
```

or

```text
Ctrl + R
```

### Step 2: Trigger API Requests

Perform actions such as:

* 🔐 Login
* 📱 OTP Verification
* 📝 Form Submission
* 📊 Dashboard Loading
* 🔍 Search Operations
* ➕ Create Records
* ✏️ Update Records
* 🗑️ Delete Records

### Step 3: Review Captured Data

Observe request payloads and response previews appearing in real time.

---

# 📸 Example Workflow

1. 🌐 Open your application
2. 🔍 Open DevTools
3. 📌 Navigate to **Payload + Preview**
4. 🔄 Refresh the page
5. ⚡ Trigger an API request
6. 👀 Review the captured request and response
7. 📸 Take a screenshot
8. 🤝 Share with your team or attach to a ticket

---

# 🔒 Security & Privacy

This extension operates entirely within the local browser environment.

## 🛡️ Data Handling

* ❌ No external API calls
* ❌ No remote servers
* ❌ No telemetry collection
* ❌ No analytics tracking
* ❌ No user data transmission

All captured network information remains within the active browser session.

---

# 🌐 Browser Compatibility

| Browser                   | Supported |
| ------------------------- | --------- |
| Google Chrome             | ✅         |
| Chromium                  | ✅         |
| Microsoft Edge (Chromium) | ✅         |
| Brave Browser             | ✅         |
| Opera                     | ✅         |

---

# ⚠️ Limitations

* DevTools must remain open during capture
* Requests are captured only after the panel is initialized
* A page refresh is recommended after opening the panel
* Designed primarily for development and debugging workflows

---

# 🗺️ Future Enhancements

Potential future improvements include:

* 🔍 Search and filtering
* 📤 Request export functionality
* 🎨 JSON formatting and syntax highlighting
* 🌙 Dark mode support
* 💾 Request history persistence
* 📦 HAR export support
* 📋 Copy-to-clipboard actions
* ⏱️ Response timing metrics

---

# 🤝 Contributing

Contributions, bug reports, and feature requests are welcome.

### Contribution Process

1. 🍴 Fork the repository
2. 🌱 Create a feature branch
3. 💻 Commit your changes
4. 🚀 Submit a pull request

---

# 📜 License

Licensed under the **MIT License**.

You are free to use, modify, distribute, and integrate this project into personal, educational, or commercial workflows.

---

# 👨‍💻 Author

Built for developers who spend more time debugging APIs than writing documentation.

⭐ If this project improves your workflow, consider starring the repository and contributing improvements back to the community.
