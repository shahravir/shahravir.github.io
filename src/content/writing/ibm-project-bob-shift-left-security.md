---
title: "IBM Project Bob Shifts Security Left with AI-Powered Code Scans"
description: "How AI-powered Gitleaks scanning moves security from a pipeline gate into the developer's PR loop — shift-left security for the agentic era."
pubDate: "2026-05-19T10:29:33.000Z"
image: "/images/writing/ibm-project-bob-shift-left-security/og.jpg"
tags:
  - "security"
  - "ibm"
  - "generative-ai-tools"
  - "ideais"
  - "project-bob"
repo: "https://github.com/shahravir/gitleaks-repo-scan-agent"
original: {"name":"Medium","url":"https://medium.com/@shah.ravir/ibm-project-bob-shifts-security-left-with-ai-powered-code-scans-9a9bd9622915"}
---
![Project Bob: Shifting Security Left, Properly This Time](/images/writing/ibm-project-bob-shift-left-security/1.webp)
*Project Bob: Shifting Security Left, Properly This Time*

Every CISO team’s dream — “shift-left security” for a decade. In practice, “shift left” has usually meant “shift left to the developer’s PR — where it now blocks them at 5pm on a Friday.” That’s not shift-left. That’s shift-late-to-the-same-place.

IBM’s Project Bob does it for real.

As you write code, Bob runs Semgrep scans inline, surfacing vulnerabilities and credential leaks the moment they appear — with one-click fixes. AI-powered secrets detection catches the API key you accidentally pasted before it ever sees a commit hash. Quantum-safe and broader compliance scans hook in alongside.

And the Bob Findings section is genuinely intutive. Bob is quietly reading your code in the background — not to grade, but to nudge. Complexity creeping into a function. A method drifting toward a god-class. A dependency two majors behind. Fix inline with one click, or batch for later. It’s not waiting for SonarQube to catch you in next sprint’s review; it’s whispering “this looks like it wants to be split” while you’re still in the headspace where splitting it is easy.

Here’s the bit security and risk teams will quietly love: the usual downstream threat-model exercises — STRIDE, PASTA, MITRE-style assessments, the ritual pen test before go-live — start surfacing fewer findings worth flagging. Not because they’re skipped. Because by the time code reaches them, the vulnerabilities that live inside the developed code have already been seen, surfaced, and fixed by the developer who wrote them. Architecture and integration risks still need their own treatment, of course. But the long tail of code-level CVEs, leaked secrets, brittle patterns, and outdated dependencies that historically eat the bulk of a security review? Already handled. From the get-go.

That’s not shift-left. That’s shift-all-the-way-left — to the keystroke.
