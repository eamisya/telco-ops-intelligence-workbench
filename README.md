# Telco-Ops Intelligence Workbench 🗼🤖

An MVP demonstrating an end-to-end intelligence flow for Telecommunications Operations, moving from raw network anomaly detection to deterministic Root Cause Analysis (RCA) and AI-assisted recommendations. 

This project is built as a **local-first, frontend-only Single Page Application (SPA)** to demonstrate domain knowledge, clean architectural boundaries, and operational intelligence without the overhead of backend infrastructure.

---

## 🎯 The Portfolio Narrative

This workbench proves a critical architectural pipeline for modern NOCs/SREs:
**OBSERVE** (Telemetry) → **UNDERSTAND** (Correlation) → **REASON** (RCA) → **DECIDE** (AI Recommendation) → **ACT** (Human Approval).

It bridges the gap between traditional Mobile Core / Transport operations and modern Data & AI platforms.

## 🚀 Key Features & Scenarios

The MVP comes pre-injected with 6 highly realistic, data-driven Telco outage scenarios:
1. **PGW Resource Saturation**: S/P Gateway CPU pressure causing Mobile Data latency.
2. **MME Signaling Storm**: `S1AP` flood triggered by a software patch, causing VoLTE signaling degradation.
3. **MSS/MGW Interconnect Failure**: SS7 routing update failure leading to CS Voice call drops.
4. **HLR/HSS Authentication Outage**: SDM Core database sync failure causing widespread Diameter/MAP timeouts.
5. **IP MPLS Fiber Cut**: Transport failure isolating RAN Aggregation nodes and eNodeBs.
6. **DRA Congestion**: PCRF overload from complex policy updates leading to Gx/Gy interface timeouts.

## 📁 Repository Structure

```text
telco-ops-intelligence-workbench/
│
├── index.html                 # Main SPA Entry Point
├── README.md                  # Project Documentation
│
├── assets/                    # Styling
│   └── app.css                # Dark/Slate UI optimized for NOC screens
│
├── data/                      # Synthetic Operational Datasets
│   ├── network_kpi.json       # Simulates TSDB telemetry
│   ├── alarms.json            # Simulates Fault Management events
│   ├── incidents.json         # ITIL Incident records
│   ├── services.json          # Service Topology state
│   ├── changes.json           # Change Management records
│   └── evidence.json          # Correlated evidence logs
│
├── js/                        # Application Logic
│   ├── app.js                 # UI Rendering & State Management
│   ├── data.js                # Data Access Layer
│   ├── analytics.js           # Deterministic Scoring (KPI Deviation, Anomaly)
│   ├── rca.js                 # Root Cause Analysis Logic
│   └── ai-reasoning.js        # Rule-based Recommendation Engine
│
└── docs/                      # Architectural Documentation
    ├── architecture.md        # Pipeline & Production Evolution
    ├── data-model.md          # Operational Schema
    ├── case-study.md          # Recruiter-facing summary
    └── skills-and-implementation.md # Skills demonstrated
```

## 🛠️ How to Run Locally

Because this is a vanilla JS application with embedded data to bypass local CORS restrictions, running it is incredibly simple:

1. Clone the repository.
2. Double-click `index.html` to open it in any modern web browser.
3. Navigate through the 5 top tabs to experience the intelligence flow.

---

## 🤖 Bonus: AI Simulation Prompt for Incident Reporting

To take this MVP to the next level during a presentation, you can demonstrate how the deterministic RCA output feeds into a Large Language Model (LLM) to automatically generate an **Executive Technical Incident Report Slide Deck**.

Copy and paste the prompt below into ChatGPT, Gemini, or Claude, and provide it with the RCA output from the Workbench screen:

> **System Prompt:**
> "You are an Expert Telco Solution Architect and NOC Manager. I am going to provide you with the Root Cause Analysis (RCA) output and correlated evidence from our Telco-Ops Intelligence Workbench. 
>
> Your task is to generate the exact content for a 4-slide Executive Technical Incident Report Presentation. 
> 
> Format the output clearly for PowerPoint slides:
> **Slide 1: Executive Summary** (Incident ID, Domain, Service Impact, Time to Detect).
> **Slide 2: Timeline & Evidence** (Chronological bullet points of the correlated alarms, KPIs, and Change Management events).
> **Slide 3: Root Cause Analysis** (The validated hypothesis and confidence score).
> **Slide 4: AI Recommendations & Mitigation** (Immediate actions required, missing evidence to gather, and preventative measures).
> 
> **Here is the RCA Output from the system:** 
> *[Paste the text from the RCA Explorer and AI Recommendation screens here]*"

---
*Built for the future of AI-assisted Telecommunications Operations.*
