// ai-reasoning.js - Deterministic AI recommendation layer
const AIReasoning = {
    generateRecommendation: (incident, rcaResult) => {
        if (rcaResult.confidence > 85 && rcaResult.evidenceCompleteness > 75) {
            return { action: "recommendation allowed", status: "APPROVED" };
        } else if (rcaResult.confidence > 85 && rcaResult.evidenceCompleteness <= 75) {
            return { action: "investigation only", status: "PENDING" };
        } else {
            return { action: "insufficient evidence", status: "REJECTED" };
        }
    }
};
