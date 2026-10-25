---
title: "Deliver resilient digital experiences using the circuit breaker pattern"
description: "Applying the circuit breaker resilience pattern to deliver fault-tolerant digital experiences under failure."
pubDate: "2022-11-27T21:33:45.000Z"
image: "/images/writing/circuit-breaker-pattern/og.jpg"
original: {"name":"Medium","url":"https://medium.com/@shah.ravir/deliver-resilient-digital-features-using-the-circuit-breaker-pattern-38208eb75b94"}
---
> Humans are inherently optimistic creatures and often do not sufficiently plan for failures, and we sometimes do the same with our software systems. The circuit breaker pattern provokes software implementation teams to prepare for failures so that we adjust user experiences appropriately.

I have been helping enterprises deliver digital services for about two decades and have seen many features fail in production and, in turn, bring down the more significant digital estate due to the lack of resilience. Approaches to test for failures are evolving; however, this substantially delays feature delivery for most enterprises. The evolution of Low-code, no-code development methodologies only worsens the feature/function’s resiliency and eventually degrades user experience in the event of service degradation.

This article describes how the circuit breaker pattern can address these problems and what are the tricks of the trade.

I will use a simple retail banking app as an example to keep things simple. A typical banking app has features — show an overall dashboard, view user details, view account balance, view transaction history, and many more.

![](/images/writing/circuit-breaker-pattern/1.webp)

## What is the Circuit Breaker pattern?

When (let’s say) the payment engine degrades and reports SLA breaches, the payment feature stops working on the app. Circuit breaker pattern can detect such failures and, after reaching the threshold, can re-route requests to the fallback component instead(circuit-open). It monitors the situation, and when the payment engine recovers and performs as per SLA, it self-heals the feature(circuit-close).

If configured correctly, the rest of the features, like view account balance, view transaction history and others, will continue to work as expected when the make payment feature is experiencing degradation.

![](/images/writing/circuit-breaker-pattern/2.webp)

## The devil in the detail

In today’s low-code/no-code implementation approaches, the circuit breaker functionality is available out-of-box with most modern frameworks. However, configuring and tinkering with the framework does not yield the desired business results, and it needs a holistic solution approach that impacts almost every layer of the user journey.

![](/images/writing/circuit-breaker-pattern/3.webp)

In our example, every component that delivers the payment journey from the mobile app to the payment engine must apply a circuit breaker framework.

**Payment Engine (system of record):** This layer should ensure consistent and predictable error codes and messages are delivered up the chain. If not done well, circuit breakers configured on consumers won’t be able to pick up SLA breaches effectively.

**Service Bus Layer:** This layer provides consistent middleware representation and adapts to the core systems running with legacy technologies. The service bus should implement a unique circuit breaker handler for each SOR integration to ensure we can manage each system of records’ SLAs.

**Channel Adaptation Layer:** This layer provides a simplified interface to the mobile app to make the payment happen and internally performs aggregation and transformations to achieve an end-to-end user journey.

Again, this layer should implement a unique circuit breaker handler for each service bus interface.

**Mobile App:** The app should implement a circuit breaker pattern at the feature level and ensure that the user experience is optimised for service degradation accordingly. For example, the payment engine degradation is communicated to the mobile app using each layer’s circuit breaker handler. In this event, it should disable the user’s payment journey and present a graceful message to notify of the brief downtime. It ensures the optimal user experience and reduces the load on the already troubled payment engine.

![](/images/writing/circuit-breaker-pattern/4.webp)

## Performance

Of course, each layer in the make-payment journey does more than just integration to make the resiliency happen; it is essential to understand how much more to ensure we adjust the SLAs and user behaviour appropriately. In my experience, at each layer, the circuit breaker adds an overhead of <1% in response time, and the impact on the infrastructure elements is minimal in most cases. So, the payment journey will have approximately 1–2% of response time degradation due to circuit breaker implementation, which is worth comparing the business benefits it provides.

## Available Options

Some popular circuit breaker implementation options include [Istio](https://istio.io/latest/docs/tasks/traffic-management/circuit-breaking/) service mesh, [Resilience4J](https://resilience4j.readme.io/docs/circuitbreaker) and [Polly](https://dotnetcorecentral.com/blog/microservice-resilience-circuit-breaker-using-polly-in-net-core/). In addition, most of the famous gateway services in the market have policy-based circuit breaker enforcement options. Also, we can leverage Kubernetes’ readiness probes for circuit breaker implementation if one or many of the layers reside on the Kubernetes platform.

## Summary

The circuit breaker pattern can help deliver a well-thought user experience in service degradation scenarios and provokes the implementation team to perform relevant testing from the get-go. I strongly feel that user experience tinkering along with the circuit breaker pattern is essential to providing resilient features on your digital estate.
