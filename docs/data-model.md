# Data Model

## Network KPI
Timestamp, Node ID, Domain, CPU, Memory, Latency, Packet Loss, Active Sessions, Traffic, GTP Failure Rate.

## Alarm
Alarm ID, Timestamp, Node ID, Severity, Type.

## Incident
Incident ID, Service, Domain, Severity, Detected At, Impact Percentage, Status.

## Service
Service ID, Name, Dependencies, Baseline Metrics.

## Change
Change ID, Node ID, Timestamp, Type, Status.

## Evidence
Evidence ID, Incident ID, Description, Type, Completeness.

## Recommendation
Recommendation ID, Incident ID, Risk, Confidence, Required Human Approval, Supporting Evidence, Missing Evidence.
