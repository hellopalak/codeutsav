// mock-data.js - Default chats pre-populated to match user's screenshot exactly

export const DEFAULT_USER = {
  name: "Palak Jain",
  initials: "PJ",
  plan: "Go"
};

export const INITIAL_CONVERSATIONS = [
  {
    id: "bloomberg-ps-updates",
    title: "Bloomberg PS Updates",
    timestamp: "2026-10-03T12:45:00Z",
    pinned: true,
    messages: [
      {
        id: "msg-1",
        role: "assistant",
        content: `Problem: Bade database mein queries slow ho jaati hain, but manually optimize karna difficult hai. Aur AI ko raw company data dena privacy risk hai.

**Tumhe kya banana hai?**

**Ek AI tool jo:**

**Database metadata/slow queries → AI analysis → problem identify → SQL/index/partition suggest → sandbox mein simulate → result dashboard**

Example:

> "Sales dashboard slow kyun hai?"

AI bole:

> "Ye JOIN inefficient hai. Composite index add karne se estimated query time reduce hoga."

**Important:** AI ko **actual customer/company data nahi milega**, sirf masked/abstracted database information milegi.

Basically:

> **PS 3** = **AI agents ko hackers se protect karo** 🛡️  
> **PS 4** = **Databases ko AI se intelligently optimize karo** 📊`,
        timestamp: "12:45 PM"
      }
    ]
  },
  {
    id: "identify-plant",
    title: "Identify plant",
    timestamp: "2026-10-02T19:30:00Z",
    messages: [
      {
        id: "p1",
        role: "user",
        content: "Can you help me identify this indoor plant with heart-shaped split leaves?",
        timestamp: "Yesterday"
      },
      {
        id: "p2",
        role: "assistant",
        content: "That sounds like a **Monstera deliciosa** (commonly called the Swiss Cheese Plant)! It features glossy green, heart-shaped leaves that develop natural perforations and splits (fenestrations) as it matures.",
        timestamp: "Yesterday"
      }
    ]
  },
  {
    id: "anime-identification-help",
    title: "Anime identification help",
    timestamp: "2026-10-02T14:10:00Z",
    messages: [
      {
        id: "a1",
        role: "user",
        content: "Anime about a boy who gets possessed by a curse and attends a jujutsu academy?",
        timestamp: "Oct 2"
      },
      {
        id: "a2",
        role: "assistant",
        content: "That anime is **Jujutsu Kaisen**! The protagonist is Yuji Itadori, who swallows a cursed talisman (the finger of Ryomen Sukuna) and joins Tokyo Jujutsu High.",
        timestamp: "Oct 2"
      }
    ]
  },
  {
    id: "ps-saral-bhasha",
    title: "PS सरल भाषा में",
    timestamp: "2026-10-01T22:00:00Z",
    messages: [
      {
        id: "s1",
        role: "user",
        content: "Smart India Hackathon ke problem statements ko aasan bhasha mein samjhao",
        timestamp: "Oct 1"
      },
      {
        id: "s2",
        role: "assistant",
        content: "Bilkul! SIH ke problem statements ko 3 main categories mein samjha ja sakta hai:\n1. **AI & Automation:** Sarkari departments ka manual paperwork automate karna.\n2. **Security & Cyber:** Data leak rokna aur phishing attack se bachna.\n3. **Hardware / IoT:** Smart agriculture aur disaster management sensors.",
        timestamp: "Oct 1"
      }
    ]
  },
  {
    id: "sih-2026-low-submission",
    title: "SIH 2026 Low Submission Pro...",
    timestamp: "2026-09-30T16:20:00Z",
    messages: [
      {
        id: "sih1",
        role: "user",
        content: "Which SIH problem statements have the lowest team competition / submission count?",
        timestamp: "Sep 30"
      },
      {
        id: "sih2",
        role: "assistant",
        content: "Typically, problem statements involving **domain-specific hardware**, **complex GIS/spatial data analysis**, and **government backend compliance tools** receive 60-70% fewer submissions compared to generic student-portal apps.",
        timestamp: "Sep 30"
      }
    ]
  },
  {
    id: "remove-wires",
    title: "Remove wires",
    timestamp: "2026-09-29T11:00:00Z",
    messages: [
      {
        id: "rw1",
        role: "user",
        content: "How to remove power lines and wires from a photo using Photoshop or AI inpainting?",
        timestamp: "Sep 29"
      },
      {
        id: "rw2",
        role: "assistant",
        content: "You can use Photoshop's **Generative Fill** or the **Spot Healing Brush Tool** (set to Content-Aware). In open-source AI, **LaMa (Large Mask Inpainting)** cleans wire artifacts seamlessly.",
        timestamp: "Sep 29"
      }
    ]
  },
  {
    id: "crypto-wallet-attribution",
    title: "Crypto Wallet Attribution USP",
    timestamp: "2026-09-28T09:15:00Z",
    messages: [
      {
        id: "cw1",
        role: "user",
        content: "What makes a crypto on-chain wallet clustering tool unique for hackathon judges?",
        timestamp: "Sep 28"
      },
      {
        id: "cw2",
        role: "assistant",
        content: "Focus on **Multi-hop Heuristic Graph Clustering**: combining UTXO co-spend algorithms with cross-chain bridge tracking (e.g. EVM to Solana) and real-time AML risk scoring.",
        timestamp: "Sep 28"
      }
    ]
  },
  {
    id: "analyze-videosetu-repo",
    title: "Analyze VideoSetu Repo",
    timestamp: "2026-09-27T18:40:00Z",
    messages: [
      {
        id: "vs1",
        role: "user",
        content: "Analyze the architecture of the VideoSetu WebRTC streaming repository",
        timestamp: "Sep 27"
      },
      {
        id: "vs2",
        role: "assistant",
        content: "VideoSetu utilizes a selective forwarding unit (SFU) architecture with mediasoup and WebSockets signaling for sub-100ms multi-party interactive video streams.",
        timestamp: "Sep 27"
      }
    ]
  },
  {
    id: "view-seat-arrangement",
    title: "View Seat Arrangement",
    timestamp: "2026-09-26T14:05:00Z",
    messages: [
      {
        id: "sa1",
        role: "user",
        content: "Generate an automated seating allocation matrix for NIT Raipur exam hall with alternate branch spacing",
        timestamp: "Sep 26"
      },
      {
        id: "sa2",
        role: "assistant",
        content: "Here is a bipartite graph coloring / round-robin seating algorithm that guarantees students sitting adjacent are always from different departments and semesters.",
        timestamp: "Sep 26"
      }
    ]
  }
];
