---
title: "The Hallucination Is in Your Architecture, Not the Model"
description: "When generative AI fails in production, the root cause is often system design — not model choice."
pubDate: "2026-05-18T07:43:25.000Z"
image: "/images/writing/hallucination-is-in-your-architecture/og.jpg"
tags:
  - "context-engineering"
  - "ai-reliability"
  - "generative-ai"
  - "enterprise-architecture"
  - "agentic-ai"
original: {"name":"Medium","url":"https://medium.com/@shah.ravir/the-hallucination-is-in-your-architecture-not-the-model-70c590cbc19b"}
alsoOn:
  - name: "LinkedIn"
    url: "https://www.linkedin.com/pulse/hallucination-your-architecture-mode-ravi-shah-fmnye"
---
![Model Hellucination is real — don’t complain about it. manage it instead.](/images/writing/hallucination-is-in-your-architecture/1.webp)
*Model Hellucination is real — don’t complain about it. manage it instead.*

A team deploys a generative AI solution. It goes well in the demo. Then it goes into production and starts producing outputs that are confidently wrong — wrong account details, wrong policy interpretation, wrong procedure. The post-mortem lands in the same place every time: *“the model hallucinated.”*

I want to challenge that conclusion. Not because hallucination isn’t real — it is. But because in the majority of enterprise failures I’ve seen and investigated, the model wasn’t the primary culprit. The architecture was.

We’ve spent two years debating model quality. We should have spent that time asking whether our existing architectures were ever designed to support AI at all.

This isn’t about architecture being wrong — it’s about the world having changed

Let me be clear about something before going further. The architects who designed today’s enterprise landscapes made sound decisions for the context they were operating in. API contracts, integration patterns, data models — these were built for a world where the consumer was always a deterministic application, written by a developer who understood the implicit rules and could encode them in code.

That world has changed. AI is no longer a feature in an application. It is becoming the application. And the architecture that served us well in the deterministic era needs to evolve to support a new kind of consumer — one that reasons over context, infers meaning from data, and operates autonomously across service boundaries.

The question isn’t *what went wrong in the past*. The question is *what needs to be true going forward*.

Three architectural gaps that matter in an AI-omnipresent world

**1\. Incomplete service contracts**

Most enterprise APIs were designed for human developers who understood the implicit context — the business rules baked into field names, the valid value ranges documented somewhere in a wiki, the edge cases handled in the calling application rather than the API itself. That implicit knowledge worked because the developer was part of the system.

When an AI agent calls these APIs, it inherits every assumption that was never made explicit. Incomplete contracts don’t just cause bad outputs — they cause *plausible* bad outputs, which are far more dangerous. A system that fails loudly is fixable. A system that fails quietly, at scale, with confidence, is a regulatory event.

Going forward, service contracts need to carry semantic meaning — not just data schemas, but contextual constraints, valid reasoning boundaries, and the business intent behind the interface.

**2\. Missing semantic context**

There is a difference between data and meaning. An API returning {“status”: 2} is data. An agent understanding that status 2 means a claim is under secondary review, has a 48-hour SLA, and triggers a specific regulatory disclosure obligation — that is meaning.

Most enterprise data layers were built to serve applications that already carried this semantic context in their code. When AI enters the chain, that embedded knowledge becomes invisible. The agent sees the field. It cannot see the decades of business logic that give it significance.

This is precisely why context engineering has emerged as a critical discipline. It is not enough to retrieve relevant documents — you need a structured, maintained semantic layer that surfaces the right context, at the right granularity, at the right moment in the reasoning chain. Getting this right is one of the highest-leverage investments an enterprise can make in AI reliability.

**3\. Poor observability**

You cannot govern what you cannot see. In a deterministic software system, an unexpected output produces a traceable error. In an AI system, an unexpected output often produces a perfectly formatted, grammatically correct response that nobody flags until a customer complains or an auditor asks a question.

If your AI architecture doesn’t capture what context was retrieved, what tools were called, what reasoning steps were taken, and what confidence signals were present — you are flying blind. In regulated industries, that is not a technical debt conversation. It is a material risk conversation.

What the new architecture needs to include

The teams getting this right are treating AI reliability as an evolving architecture discipline. They are extending their integration layers to carry semantic richness alongside data. They are building agent observability pipelines with the same rigour they apply to application performance monitoring. They are rethinking what a service contract means when the consumer is an autonomous reasoning system rather than a deterministic application.

None of this requires tearing down what exists. It requires extending it thoughtfully — with AI as a first-class citizen of the architecture, not a layer bolted on top.

*At IBM, we have been developing both a GenAI Technical Reference Architecture for financial services and a set of assets and points of view specifically around context engineering — building rich, efficient context pipelines that give AI systems the meaning they need to reason reliably. If this is a challenge you are navigating, let’s connect.*

#EnterpriseArchitecture #GenerativeAI #AIReliability #ContextEngineering #FinancialServices #AgenticAI #IBMConsulting #RiskAndGovernance
