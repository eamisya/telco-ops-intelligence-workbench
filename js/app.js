// app.js - Main Application Logic and UI Rendering
const App = {
    init: async () => {
        console.log("App Initialized");
        await Data.loadData();
        App.renderOverview();
    },
    
    renderOverview: () => {
        const incidents = Data.getIncidents();
        let incidentHtml = incidents.map(inc => `
            <div class="card" onclick="App.renderIncident('${inc.incident_id}')" style="cursor: pointer; border-left: 4px solid ${inc.severity === 'CRITICAL' ? '#ff4d4f' : '#faad14'};">
                <h4>${inc.incident_id} - ${inc.service}</h4>
                <p>Severity: <strong>${inc.severity}</strong> | Domain: ${inc.domain} | Impact: ${inc.impact_pct}%</p>
            </div>
        `).join('');

        document.getElementById('content').innerHTML = `
            <h2>Operations Overview</h2>
            <div style="display: flex; gap: 20px; margin-bottom: 20px;">
                <div class="card" style="flex: 1;"><h3>Service Health</h3><h2 style="color: #52c41a;">82%</h2></div>
                <div class="card" style="flex: 1;"><h3>Active Incidents</h3><h2 style="color: #ff4d4f;">${incidents.length}</h2></div>
                <div class="card" style="flex: 1;"><h3>Critical Anomalies</h3><h2 style="color: #faad14;">5</h2></div>
            </div>
            <h3>Top Operational Risks</h3>
            <div id="incidents-list">
                ${incidentHtml || '<p>Loading incidents...</p>'}
            </div>
        `;
    },
    
    renderIncident: (id = 'INC-20261006-001') => { 
        const inc = Data.getIncident(id);
        const evidence = Data.getEvidence(id);
        const evHtml = evidence.map(e => `<li>[${e.type}] ${e.description} (Completeness: ${e.completeness}%)</li>`).join('');
        
        document.getElementById('content').innerHTML = `
            <h2>Incident Intelligence</h2>
            <div class="card">
                <h3>${inc.incident_id} - ${inc.service}</h3>
                <p>Severity: <span style="color: red;">${inc.severity}</span></p>
                <p>Detected At: ${inc.detected_at}</p>
                <p>Impact: ${inc.impact_pct}% traffic affected</p>
            </div>
            <div class="card">
                <h3>Correlated Evidence</h3>
                <ul>${evHtml || '<li>No explicit evidence recorded for this incident yet.</li>'}</ul>
            </div>
            <button onclick="App.renderRCA('${id}')" style="padding: 10px; background: #8ab4f8; border: none; cursor: pointer; color: #1e1e24; font-weight: bold; border-radius: 4px;">Explore RCA</button>
        `;
    },
    
    renderRCA: (id = 'INC-20261006-001') => { 
        const rca = RCA.analyze(id);
        document.getElementById('content').innerHTML = `
            <h2>RCA Explorer for ${id}</h2>
            <div class="card">
                <h3>Hypothesis</h3>
                <p style="font-size: 1.2em; color: #8ab4f8;">${rca.hypothesis}</p>
                <p>Confidence: <strong>${rca.confidence}%</strong></p>
            </div>
            <div style="display: flex; gap: 20px;">
                <div class="card" style="flex: 1; border-left: 4px solid #52c41a;">
                    <h4>Observed/Inferred Evidence</h4>
                    <ul>${rca.evidence.map(e => `<li>${e}</li>`).join('')}</ul>
                </div>
                <div class="card" style="flex: 1; border-left: 4px solid #faad14;">
                    <h4>Unverified/Missing</h4>
                    <ul>${rca.missingEvidence.map(e => `<li>${e}</li>`).join('')}</ul>
                </div>
            </div>
            <button onclick="App.renderRecommendation('${id}')" style="padding: 10px; background: #8ab4f8; border: none; cursor: pointer; color: #1e1e24; font-weight: bold; border-radius: 4px;">Get AI Recommendation</button>
        `;
    },
    
    renderRecommendation: (id = 'INC-20261006-001') => { 
        const rca = RCA.analyze(id);
        const rec = AIReasoning.generateRecommendation(id, rca);
        document.getElementById('content').innerHTML = `
            <h2>AI Recommendation</h2>
            <div class="card" style="border: 1px solid #8ab4f8;">
                <h3>AI-ASSISTED OPERATIONAL RECOMMENDATION</h3>
                <p>Status: <strong style="color: ${rec.status === 'APPROVED' ? '#52c41a' : '#faad14'}">${rec.status}</strong></p>
                <p>Action: <strong>${rec.action.toUpperCase()}</strong></p>
                <hr style="border-color: #3c3c4a; margin: 15px 0;">
                <p>Confidence: ${rca.confidence}%</p>
                <p>Evidence Completeness: ${rca.evidenceCompleteness}%</p>
                <p>Risk: MEDIUM</p>
                <p>Human Approval: REQUIRED</p>
            </div>
        `;
    },
    
    renderArchitecture: () => { 
        document.getElementById('content').innerHTML = `
            <h2>Architecture</h2>
            <div class="card" style="text-align: center; font-family: monospace;">
                <p>NETWORK ELEMENTS</p>
                <p>↓</p>
                <p>DATA INGESTION</p>
                <p>↓</p>
                <p>OPERATIONAL DATA MODEL</p>
                <p>↓</p>
                <p>ANALYTICS</p>
                <p>↓</p>
                <p>CORRELATION / RCA</p>
                <p>↓</p>
                <p>AI / RAG</p>
                <p>↓</p>
                <p>DECISION SUPPORT</p>
                <p>↓</p>
                <p>HUMAN APPROVAL</p>
            </div>
        `;
    }
};

window.onload = App.init;
