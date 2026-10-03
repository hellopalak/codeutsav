# NIT Raipur - AI Agent & Defense Portal

An enterprise-grade, hackathon-ready AI Agent portal featuring:
- **PS 3: AI Agents Security & Prompt Injection Defense (Raipur Python Backend)** 🛡️
- **PS 4: Database Query Optimization & Privacy Masking** 📊
- **ChatGPT-Grade Dark Web Interface** matching industry aesthetic with speech-to-text, read-aloud, deep thinking mode, and multi-provider resilience.

---

## 🏗️ Architecture

```
[ChatGPT Dark UI - Frontend (Vite + JS)]  <--- Port 5173
       │
       ├─► [Raipur FastAPI Security Engine] <--- Port 8000
       │        ├── agent.py (Protected vs Unprotected Agent)
       │        ├── firewall.py (Regex & Semantic Prompt Injection Scanner)
       │        ├── guard.py (Action Guard Policy Enforcement)
       │        ├── audit.py (Real-time Audit Logger)
       │        └── eval/ (40 Preloaded Attack & Benign Datasets)
       │
       └─► [Multi-Provider Resilience Layer]
                ├── Ollama (Local LLM via port 11434)
                ├── Google Gemini 2.0 / 2.5 Flash (Free AI Studio Key)
                ├── Groq (Llama 3.3 70B, Sub-second Inference)
                ├── OpenAI (GPT-4o / GPT-4o-mini)
                └── Offline Mock / Hackathon Brain (Zero-Key Guaranteed Fallback)
```

---

## ⚡ Quick Start

### 1. Start the Backend:
```powershell
python Raipur/api_server.py
# Or: npm run backend
```
Backend runs at `http://127.0.0.1:8000` with Swagger docs at `http://127.0.0.1:8000/docs`.

### 2. Start the Frontend:
```powershell
npm run dev
```
Frontend runs at `http://127.0.0.1:5173`.

---

## 🛡️ Key Features Implemented

1. **Security Shield (PS 3 Defense Simulator):**
   - Click **Security Shield (PS 3)** in the sidebar or top header.
   - Choose from 40 preloaded attack scenarios (direct prompt injection, base64 bypass, fake system tokens, tool response poisoning).
   - Side-by-side comparison:
     - **Unprotected Agent**: Demonstrates successful hijack 🚨 and tool misuse (`send_email`, `read_file` of confidential data).
     - **Protected Agent**: Proves prevention via Action Guard & Firewall (`[REMOVED: suspected injected instruction]`).
   - **Human-in-the-Loop Circuit Breaker**: Interactive **Approve** and **Deny** buttons for sensitive actions.
   - **Real-time Audit Logs**: Inspect live security records.
   - **Firewall Quick Scanner**: Live test any prompt string.

2. **Model Resilience (No Crashing if Ollama/Gemini are unavailable):**
   - If Ollama is offline or Gemini API key is not entered, the agent automatically falls back to deterministic replay scripts and local domain reasoning.
   - You can test with full confidence during judges' pitching without worrying about network drops.
