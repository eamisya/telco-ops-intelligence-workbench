// rca.js - Root Cause Analysis reasoning
const RCA = {
    analyze: (incidentId) => {
        const evidence = Data.getEvidence(incidentId) || [];
        const completeness = evidence.length > 0 ? evidence.reduce((acc, curr) => acc + curr.completeness, 0) / evidence.length : 0;
        
        let hypothesis = "Insufficient data to form a hypothesis";
        let missingEvidence = ["Check dependent node health", "Verify recent unscheduled changes"];
        
        if (incidentId === 'INC-20261006-001') {
            hypothesis = "PGW-02 resource saturation is the most likely contributor";
        } else if (incidentId === 'INC-20261006-002') {
            hypothesis = "MME-01 signaling storm likely triggered by recent software patch or mass IoT reconnection";
        } else if (incidentId === 'INC-20261006-003') {
            hypothesis = "MSS-01 link failure caused by routing update, leading to MGW voice call drops";
        } else if (incidentId === 'INC-20261006-004') {
            hypothesis = "HLR-01 Database synchronization failure causing widespread authentication timeouts";
        } else if (incidentId === 'INC-20261006-005') {
            hypothesis = "Physical fiber cut near Eastern Ring likely severed PE-RTR-04 uplinks, isolating RAN Aggregation and connected eNodeBs";
            missingEvidence = ["Optical Time Domain Reflectometer (OTDR) fault location", "Confirm Civil Works proximity to fiber paths"];
        } else if (incidentId === 'INC-20261006-006') {
            hypothesis = "PCRF-01 overload induced by complex policy rule update, propagating Gx/Gy timeouts through DRA and halting PGW session creation";
            missingEvidence = ["Rollback CHG-120 and observe PCRF CPU", "Verify OCS charging latencies"];
        }
        
        return {
            incident: incidentId,
            hypothesis: hypothesis,
            confidence: Math.min(80 + evidence.length * 3, 98),
            evidenceCompleteness: Math.round(completeness),
            evidence: evidence.map(e => `[${e.type}] ${e.description}`),
            missingEvidence: missingEvidence,
            status: "INVESTIGATION_REQUIRED"
        };
    }
};
