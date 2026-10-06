// data.js - Data access layer
const Data = {
    store: {
        kpi: [
    {
        "timestamp": "2026-10-06T10:15:00",
        "node_id": "PGW-02",
        "domain": "PACKET_CORE",
        "cpu_utilization": 92.4,
        "memory_utilization": 81.2,
        "latency_ms": 142,
        "packet_loss_pct": 2.8,
        "active_sessions": 482100,
        "traffic_gbps": 8.7,
        "gtp_failure_rate_pct": 3.4
    },
    {
        "timestamp": "2026-10-06T11:05:00",
        "node_id": "MME-01",
        "domain": "EPC_CONTROL",
        "cpu_utilization": 98.1,
        "memory_utilization": 75.0,
        "attach_success_rate_pct": 72.5,
        "paging_success_rate_pct": 68.4,
        "active_subscribers": 1250000,
        "s1ap_message_rate": 45000
    },
    {
        "timestamp": "2026-10-06T12:30:00",
        "node_id": "MSS-01",
        "domain": "CS_CORE",
        "cpu_utilization": 45.2,
        "memory_utilization": 50.1,
        "call_setup_success_rate_pct": 58.4,
        "answer_seizure_ratio_pct": 32.1,
        "ss7_link_utilization": 99.5
    },
    {
        "timestamp": "2026-10-06T12:30:00",
        "node_id": "MGW-03",
        "domain": "CS_CORE",
        "dsp_utilization_pct": 89.4,
        "ip_jitter_ms": 45,
        "dropped_calls": 1250
    },
    {
        "timestamp": "2026-10-06T14:10:00",
        "node_id": "HLR-01",
        "domain": "SDM_CORE",
        "cpu_utilization": 99.9,
        "db_transaction_latency_ms": 4500,
        "auth_success_rate_pct": 14.2,
        "location_update_success_rate_pct": 18.5
    },
    {
        "timestamp": "2026-10-06T15:20:00",
        "node_id": "PE-RTR-04",
        "domain": "TRANSPORT_IPMPLS",
        "bgp_session_drops": 14,
        "interface_utilization_pct": 0.0,
        "latency_ms": -1,
        "packet_loss_pct": 100.0
    },
    {
        "timestamp": "2026-10-06T15:21:00",
        "node_id": "RAN-AGG-02",
        "domain": "RAN_TRANSPORT",
        "active_enodebs": 0,
        "s1_setup_failures": 1250,
        "throughput_mbps": 0.0
    },
    {
        "timestamp": "2026-10-06T16:05:00",
        "node_id": "DRA-01",
        "domain": "EPC_CONTROL",
        "message_drop_rate_pct": 15.4,
        "gx_latency_ms": 2500,
        "gy_latency_ms": 3100,
        "tps": 85000
    },
    {
        "timestamp": "2026-10-06T16:05:00",
        "node_id": "PCRF-01",
        "domain": "POLICY_CORE",
        "cpu_utilization": 96.5,
        "db_query_latency_ms": 450
    },
    {
        "timestamp": "2026-10-06T16:06:00",
        "node_id": "PGW-01",
        "domain": "PACKET_CORE",
        "session_creation_failure_rate_pct": 28.5,
        "active_sessions": 850000
    }
],
        alarms: [
    {
        "alarm_id": "ALM-001",
        "timestamp": "2026-10-06T10:15:00",
        "node_id": "PGW-02",
        "severity": "MAJOR",
        "type": "RESOURCE_PRESSURE"
    },
    {
        "alarm_id": "ALM-002",
        "timestamp": "2026-10-06T11:04:00",
        "node_id": "MME-01",
        "severity": "CRITICAL",
        "type": "OVERLOAD_PROTECTION_ACTIVE"
    },
    {
        "alarm_id": "ALM-003",
        "timestamp": "2026-10-06T11:05:00",
        "node_id": "MME-01",
        "severity": "MAJOR",
        "type": "S1AP_LINK_CONGESTION"
    },
    {
        "alarm_id": "ALM-004",
        "timestamp": "2026-10-06T12:29:00",
        "node_id": "MSS-01",
        "severity": "CRITICAL",
        "type": "SS7_LINK_DOWN"
    },
    {
        "alarm_id": "ALM-005",
        "timestamp": "2026-10-06T12:30:00",
        "node_id": "MGW-03",
        "severity": "MAJOR",
        "type": "TDM_TRUNK_DEGRADED"
    },
    {
        "alarm_id": "ALM-006",
        "timestamp": "2026-10-06T12:32:00",
        "node_id": "MSS-01",
        "severity": "MAJOR",
        "type": "ROUTE_CONGESTION"
    },
    {
        "alarm_id": "ALM-007",
        "timestamp": "2026-10-06T14:08:00",
        "node_id": "HLR-01",
        "severity": "CRITICAL",
        "type": "DB_SYNC_FAILURE"
    },
    {
        "alarm_id": "ALM-008",
        "timestamp": "2026-10-06T14:10:00",
        "node_id": "MME-02",
        "severity": "MAJOR",
        "type": "DIAMETER_TIMEOUT"
    },
    {
        "alarm_id": "ALM-009",
        "timestamp": "2026-10-06T14:11:00",
        "node_id": "MSS-02",
        "severity": "MAJOR",
        "type": "MAP_TIMEOUT"
    },
    {
        "alarm_id": "ALM-010",
        "timestamp": "2026-10-06T15:19:55",
        "node_id": "PE-RTR-04",
        "severity": "CRITICAL",
        "type": "LINK_FAILURE_OPTICAL"
    },
    {
        "alarm_id": "ALM-011",
        "timestamp": "2026-10-06T15:20:05",
        "node_id": "PE-RTR-04",
        "severity": "MAJOR",
        "type": "BGP_PEER_DOWN"
    },
    {
        "alarm_id": "ALM-012",
        "timestamp": "2026-10-06T15:21:00",
        "node_id": "RAN-AGG-02",
        "severity": "CRITICAL",
        "type": "S1_UNREACHABLE"
    },
    {
        "alarm_id": "ALM-013",
        "timestamp": "2026-10-06T16:04:00",
        "node_id": "DRA-01",
        "severity": "MAJOR",
        "type": "DIAMETER_ROUTE_UNAVAILABLE"
    },
    {
        "alarm_id": "ALM-014",
        "timestamp": "2026-10-06T16:05:00",
        "node_id": "DRA-01",
        "severity": "MAJOR",
        "type": "DIAMETER_TOO_BUSY"
    },
    {
        "alarm_id": "ALM-015",
        "timestamp": "2026-10-06T16:05:30",
        "node_id": "PCRF-01",
        "severity": "CRITICAL",
        "type": "HIGH_CPU"
    },
    {
        "alarm_id": "ALM-016",
        "timestamp": "2026-10-06T16:06:00",
        "node_id": "PGW-01",
        "severity": "MAJOR",
        "type": "GX_TIMEOUT"
    },
    {
        "alarm_id": "ALM-017",
        "timestamp": "2026-10-06T16:06:00",
        "node_id": "PGW-01",
        "severity": "MAJOR",
        "type": "GY_TIMEOUT"
    }
],
        incidents: [
    {
        "incident_id": "INC-20261006-001",
        "service": "MOBILE_DATA",
        "domain": "PACKET_CORE",
        "severity": "HIGH",
        "detected_at": "2026-10-06T10:15:00",
        "impact_pct": 18.4,
        "status": "INVESTIGATING"
    },
    {
        "incident_id": "INC-20261006-002",
        "service": "VOLTE_SIGNALING",
        "domain": "EPC_CONTROL",
        "severity": "CRITICAL",
        "detected_at": "2026-10-06T11:05:00",
        "impact_pct": 45.2,
        "status": "INVESTIGATING"
    },
    {
        "incident_id": "INC-20261006-003",
        "service": "VOICE_CS",
        "domain": "CS_CORE",
        "severity": "HIGH",
        "detected_at": "2026-10-06T12:30:00",
        "impact_pct": 32.5,
        "status": "INVESTIGATING"
    },
    {
        "incident_id": "INC-20261006-004",
        "service": "SUBSCRIBER_AUTH",
        "domain": "SDM_CORE",
        "severity": "CRITICAL",
        "detected_at": "2026-10-06T14:10:00",
        "impact_pct": 85.0,
        "status": "INVESTIGATING"
    },
    {
        "incident_id": "INC-20261006-005",
        "service": "RAN_CONNECTIVITY",
        "domain": "TRANSPORT_IPMPLS",
        "severity": "CRITICAL",
        "detected_at": "2026-10-06T15:20:00",
        "impact_pct": 12.5,
        "status": "INVESTIGATING"
    },
    {
        "incident_id": "INC-20261006-006",
        "service": "POLICY_CHARGING",
        "domain": "EPC_CONTROL",
        "severity": "HIGH",
        "detected_at": "2026-10-06T16:05:00",
        "impact_pct": 28.5,
        "status": "INVESTIGATING"
    }
],
        services: [
    {
        "service_id": "MOBILE_DATA",
        "status": "DEGRADED",
        "dependencies": [
            "PGW",
            "SGW",
            "MME"
        ]
    },
    {
        "service_id": "VOLTE_SIGNALING",
        "status": "DOWN",
        "dependencies": [
            "MME",
            "HSS",
            "IMS"
        ]
    },
    {
        "service_id": "VOICE_CS",
        "status": "DEGRADED",
        "dependencies": [
            "MSS",
            "MGW",
            "HLR"
        ]
    },
    {
        "service_id": "SUBSCRIBER_AUTH",
        "status": "DOWN",
        "dependencies": [
            "HLR",
            "HSS"
        ]
    },
    {
        "service_id": "RAN_CONNECTIVITY",
        "status": "DOWN",
        "dependencies": [
            "PE-RTR",
            "RAN-AGG",
            "eNodeB"
        ]
    },
    {
        "service_id": "POLICY_CHARGING",
        "status": "DEGRADED",
        "dependencies": [
            "DRA",
            "PCRF",
            "OCS"
        ]
    }
],
        changes: [
    {
        "change_id": "CHG-099",
        "node_id": "PGW-02",
        "timestamp": "2026-10-06T09:00:00",
        "type": "CONFIG",
        "status": "COMPLETED"
    },
    {
        "change_id": "CHG-102",
        "node_id": "MME-01",
        "timestamp": "2026-10-06T10:30:00",
        "type": "SOFTWARE_PATCH",
        "status": "COMPLETED"
    },
    {
        "change_id": "CHG-105",
        "node_id": "MSS-01",
        "timestamp": "2026-10-06T11:45:00",
        "type": "ROUTING_UPDATE",
        "status": "COMPLETED"
    },
    {
        "change_id": "CHG-108",
        "node_id": "HLR-01",
        "timestamp": "2026-10-06T13:00:00",
        "type": "DB_MAINTENANCE",
        "status": "ROLLED_BACK"
    },
    {
        "change_id": "CHG-115",
        "node_id": "FIBER-RING-EAST",
        "timestamp": "2026-10-06T15:00:00",
        "type": "CIVIL_WORKS",
        "status": "IN_PROGRESS"
    },
    {
        "change_id": "CHG-120",
        "node_id": "PCRF-01",
        "timestamp": "2026-10-06T15:30:00",
        "type": "POLICY_RULE_UPDATE",
        "status": "COMPLETED"
    }
],
        evidence: [
    {
        "evidence_id": "EV-001",
        "incident_id": "INC-20261006-001",
        "description": "PGW-02 CPU utilization reached 92.4%",
        "type": "OBSERVED",
        "completeness": 100
    },
    {
        "evidence_id": "EV-002",
        "incident_id": "INC-20261006-001",
        "description": "Latency increased by 42%",
        "type": "OBSERVED",
        "completeness": 100
    },
    {
        "evidence_id": "EV-003",
        "incident_id": "INC-20261006-001",
        "description": "Configuration change CHG-099 executed prior to incident",
        "type": "OBSERVED",
        "completeness": 100
    },
    {
        "evidence_id": "EV-004",
        "incident_id": "INC-20261006-002",
        "description": "MME-01 CPU utilization at 98.1%",
        "type": "OBSERVED",
        "completeness": 100
    },
    {
        "evidence_id": "EV-005",
        "incident_id": "INC-20261006-002",
        "description": "S1AP Message Rate spike detected (45k/sec)",
        "type": "OBSERVED",
        "completeness": 100
    },
    {
        "evidence_id": "EV-006",
        "incident_id": "INC-20261006-002",
        "description": "Software patch CHG-102 may have altered signaling handling",
        "type": "INFERED",
        "completeness": 75
    },
    {
        "evidence_id": "EV-007",
        "incident_id": "INC-20261006-003",
        "description": "MSS-01 SS7 Link Down alarm received",
        "type": "OBSERVED",
        "completeness": 100
    },
    {
        "evidence_id": "EV-008",
        "incident_id": "INC-20261006-003",
        "description": "ASR dropped to 32.1%",
        "type": "OBSERVED",
        "completeness": 100
    },
    {
        "evidence_id": "EV-009",
        "incident_id": "INC-20261006-003",
        "description": "Routing update CHG-105 caused link failure",
        "type": "INFERED",
        "completeness": 85
    },
    {
        "evidence_id": "EV-010",
        "incident_id": "INC-20261006-004",
        "description": "HLR-01 DB Sync Failure alarm",
        "type": "OBSERVED",
        "completeness": 100
    },
    {
        "evidence_id": "EV-011",
        "incident_id": "INC-20261006-004",
        "description": "Authentication success rate plummeted to 14.2%",
        "type": "OBSERVED",
        "completeness": 100
    },
    {
        "evidence_id": "EV-012",
        "incident_id": "INC-20261006-004",
        "description": "Diameter & MAP timeouts correlated across MME and MSS",
        "type": "INFERED",
        "completeness": 90
    },
    {
        "evidence_id": "EV-013",
        "incident_id": "INC-20261006-005",
        "description": "PE-RTR-04 reported Link Failure and BGP session drops",
        "type": "OBSERVED",
        "completeness": 100
    },
    {
        "evidence_id": "EV-014",
        "incident_id": "INC-20261006-005",
        "description": "RAN-AGG-02 lost connectivity to 14 eNodeBs simultaneously",
        "type": "OBSERVED",
        "completeness": 100
    },
    {
        "evidence_id": "EV-015",
        "incident_id": "INC-20261006-005",
        "description": "Scheduled civil works (CHG-115) in the eastern fiber ring may have caused a fiber cut",
        "type": "INFERED",
        "completeness": 80
    },
    {
        "evidence_id": "EV-016",
        "incident_id": "INC-20261006-006",
        "description": "DRA-01 dropping 15.4% of Diameter messages",
        "type": "OBSERVED",
        "completeness": 100
    },
    {
        "evidence_id": "EV-017",
        "incident_id": "INC-20261006-006",
        "description": "PGW-01 reporting multiple Gx and Gy timeouts during session creation",
        "type": "OBSERVED",
        "completeness": 100
    },
    {
        "evidence_id": "EV-018",
        "incident_id": "INC-20261006-006",
        "description": "PCRF-01 CPU utilization highly saturated at 96.5%",
        "type": "OBSERVED",
        "completeness": 100
    },
    {
        "evidence_id": "EV-019",
        "incident_id": "INC-20261006-006",
        "description": "Complex Policy Rule Update (CHG-120) deployed recently, possibly causing expensive DB queries and PCRF overload",
        "type": "INFERED",
        "completeness": 85
    }
]
    },

    loadData: async () => {
        console.log('Data loaded from local store to bypass CORS for file:// protocol');
    },
    
    getIncidents: () => { return Data.store.incidents; },
    getIncident: (id) => { return Data.store.incidents.find(i => i.incident_id === id); },
    getKPI: (node_id) => { return Data.store.kpi.filter(k => k.node_id === node_id); },
    getAlarms: (incident_id) => { return Data.store.alarms; },
    getService: (service_id) => { return Data.store.services.find(s => s.service_id === service_id); },
    getChanges: () => { return Data.store.changes; },
    getEvidence: (incident_id) => { return Data.store.evidence.filter(e => e.incident_id === incident_id); }
};
