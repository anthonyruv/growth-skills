---
name: plan-conversion-test
description: Design a focused landing-page conversion experiment with a hypothesis, measurement plan, and decision rules. Use when choosing what to test or interpreting a proposed page change.
---

# Plan a conversion test

Produce a test brief that can distinguish a useful improvement from noise. Preserve the existing control and choose a change based on the largest unresolved buyer question.

## Choose the question

Identify the page, audience, traffic source, primary conversion event, current baseline and sample period, expected traffic, and any major business constraints. Do not invent missing analytics. If traffic or event quality is unknown, make instrumentation or qualitative learning the next step.

Consider the headline, subheadline, or explanatory visual when the hypothesis concerns initial comprehension. State a causal hypothesis: for this audience, changing X should improve Y because Z. Keep one central hypothesis. If headline and visual must change together for a coherent message, identify it as a package test; it cannot isolate each component's contribution.

## Define measurement before launch

Specify the control, challenger, unit of randomization, eligibility, primary metric with numerator and denominator, and guardrails such as lead quality or completed purchases. Keep assignment stable and avoid counting the same visitor as independent repeatedly. Note tracking validation and major concurrent campaigns that could confound interpretation.

Do not make up a sample size or declare a result after a fixed number of days. Establish the minimum worthwhile effect, baseline uncertainty, and acceptable error or decision risk first. Use an appropriate analysis method if the inputs and tools support it. Otherwise state which inputs are missing and whether a qualitative test is more useful at current volume.

Predefine the stopping and decision approach. Do not repeatedly peek at an ordinary fixed-horizon significance test and stop at the first favorable reading. A valid sequential method needs to be selected in advance if continuous monitoring will determine stopping.

## Write the brief

Return the hypothesis, exact proposed change, measurement and tracking checks, audience/assignment, guardrails, and decision rules for adopt, retain control, or inconclusive. Include a rollback condition for obvious breakage and a log entry template capturing dates, variants, counts, caveats, and next learning.

Treat the control as the default until evidence supports a change. An inconclusive test is not evidence of equivalence. If evaluating supplied results, report denominators, uncertainty, and practical effect alongside the point estimate.

The user's request for a test plan does not authorize launching experiments or modifying live tracking. See [references/sources.md](references/sources.md) for attribution; statistical safeguards here are original practice, not claims about the source video.
