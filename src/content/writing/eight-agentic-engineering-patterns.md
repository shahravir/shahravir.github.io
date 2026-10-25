---
title: "Eight Patterns Every Agentic Engineer Should Know (And Why Most Teams Only Use Two)"
description: "A field guide to agentic patterns — why most enterprise teams default to only two, and what to adopt next."
pubDate: "2026-05-18T07:55:08.000Z"
image: "../../assets/writing/eight-agentic-engineering-patterns.jpg"
tags:
  - "generative-ai-solution"
  - "agentic-ai"
  - "enterprise-architecture"
  - "design-patterns"
  - "software-engineering"
original: {"name":"Medium","url":"https://medium.com/@shah.ravir/eight-patterns-every-agentic-engineer-should-know-and-why-most-teams-only-use-two-f4f6c9d35a9d"}
alsoOn:
  - name: "LinkedIn"
    url: "https://www.linkedin.com/pulse/eight-patterns-every-agentic-engineer-should-know-why-ravi-shah-htkse"
  - name: "DEV"
    url: "https://dev.to/shahravir/eight-patterns-every-agentic-engineer-should-know-and-why-most-teams-only-use-two-4n74"
---
There’s a quiet problem unfolding inside most enterprise AI programmes right now. Teams are building “agentic” systems — and most of them are building the same ones — RAG and ReAct based, over and over again.

A retrieval-augmented(RAG) agent that answers questions. A ReAct loop that calls a tool when prompted. Both useful. Both well understood. Both barely scratching the surface of what agentic engineering can actually do.

I’ve spent the last year building out a GenAI Technical Reference Architecture for financial services — mapping how agentic AI actually works inside complex regulated enterprises, not how it works in demo videos. What emerged were eight distinct agentic application patterns. Not eight variations of the same thing. Eight genuinely different ways agents reason, act, and collaborate. And in nearly every engagement I walk into, teams are living in patterns one and two.

Here’s what they’re missing.

Pattern 1 — RAG-Augmented Agent The default starting point. Ground the model in your data, reduce hallucination, answer questions. This is where most teams begin. And stop.

![](/images/writing/eight-agentic-engineering-patterns/1.webp)

Pattern 2 — ReAct (Reason + Act) The agent reasons step-by-step, selects a tool, observes the result, and loops. Most chatbot and copilot implementations live here. It’s powerful — but single-agent, single-turn in practice.

![](/images/writing/eight-agentic-engineering-patterns/2.webp)

Pattern 3 — Plan-and-Execute The agent separates planning from execution. A planner decomposes a complex goal into subtasks; an executor works through them independently. This is where agentic AI starts to feel genuinely autonomous. Most teams haven’t reached it yet.

![](/images/writing/eight-agentic-engineering-patterns/3.webp)

Pattern 4 — Reflexion / Self-Critique The agent reviews its own output, scores it against a rubric, and iterates before responding. This is how you build agents that don’t just answer — they improve. Critical for regulated environments where the quality, consistency, and auditability matter.

![](/images/writing/eight-agentic-engineering-patterns/4.webp)

Pattern 5 — Multi-Agent Orchestration An orchestrator agent decomposes work and delegates to specialist sub-agents — each with their own tools, memory, and domain focus. This is the pattern that unlocks genuine enterprise-scale automation. It’s also the pattern that breaks most enterprise architecture assumptions about ownership, observability, and control.

![](/images/writing/eight-agentic-engineering-patterns/5.webp)

Pattern 6 — Human-in-the-Loop (HiTL) Agent The agent executes autonomously up to a defined confidence or risk threshold, then hands off to a human reviewer before proceeding. Not a fallback. A purposeful design choice. In financial services, this isn’t optional — it’s a regulatory posture. The architecture question is where you place the human gate, not whether you need one.

![](/images/writing/eight-agentic-engineering-patterns/6.webp)

Pattern 7 — Event-Driven Agentic Pipeline Agents are triggered by events — a transaction, a document arrival, a threshold breach — rather than by a human prompt. The system becomes proactive. This is where agentic AI starts to behave like infrastructure, not just tooling. And it requires an entirely different approach to idempotency, failure handling, and agent lifecycle management.

![](/images/writing/eight-agentic-engineering-patterns/7.webp)

Pattern 8 — Federated / Ecosystem Agent Agents that operate across organisational boundaries — interacting with partner APIs, third-party data, or other institutions’ agent networks. In banking, think open finance, ecosystem partnerships, and real-time interoperability. This is the frontier. Most enterprises don’t have the governance architecture to support it yet, but it’s coming faster than anyone is planning for.

![](/images/writing/eight-agentic-engineering-patterns/8.webp)

So why do most teams only use two?

Partly it’s tooling — LangChain, AutoGen, and similar frameworks make patterns 1 and 2 trivially easy and patterns 5–8 genuinely hard. Partly it’s risk appetite — autonomous execution is frightening if you don’t have the observability stack to match. But mostly, I think it’s architecture. Teams are building agents without first asking what class of problem they’re solving.

The pattern you choose determines your entire downstream architecture: how you design memory, how you handle state, how you instrument for auditability, how you govern trust. Picking the wrong one early is expensive to unpick.

The conversation I want to see happening in engineering teams isn’t “should we use agents?” — that ship has sailed. It’s “which pattern fits this problem, and have we the architectural maturity to run it safely?”

That question separates the teams building toys from the teams building infrastructure.

I’ve been developing a reference architecture for agentic AI in financial services covering all eight patterns, with a seven-layer implementation framework and trust/governance model. Happy to share thinking — leave a comment or connect directly.

#AgenticAI #EnterpriseArchitecture #FinancialServices #AIEngineering #GenAI #IBMConsulting #ThoughtLeadership

*Originally published at* [*https://www.linkedin.com*](/writing/eight-agentic-engineering-patterns/)*.*
