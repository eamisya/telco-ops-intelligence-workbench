// analytics.js - Calculation layer
const Analytics = {
    calculateKPIDeviation: (current, baseline) => { return ((current - baseline) / baseline) * 100; },
    calculateAnomalyScore: (kpiDev, alarmSev, svcImpact, tempCorr) => {
        return (0.35 * kpiDev) + (0.25 * alarmSev) + (0.20 * svcImpact) + (0.20 * tempCorr);
    },
    calculateRCAScore: (tempCorr, kpiCorr, depRel, histSim, impAlign) => {
        return (0.30 * tempCorr) + (0.25 * kpiCorr) + (0.20 * depRel) + (0.15 * histSim) + (0.10 * impAlign);
    },
    calculateEvidenceCompleteness: (available, required) => { return (available / required) * 100; }
};
