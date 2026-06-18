// Rep data with IBM coaching metrics
const reps = [
  {
    id: 'priya',
    name: 'Priya Shah',
    initials: 'PS',
    role: 'Enterprise AE',
    region: 'East',
    pipeline: 318000,
    goal: 300000,
    coverage: 4.2,
    risk: 18,
    opportunities: 9,
    meetings: 24,
    accountsAssigned: 82,
    accountsTouched: 67,
    teamAvg: 7,
    conversion: 38,
    zoomOut: {
      quantity: { score: 85, status: 'ok', label: 'Strong' },
      dealSize: { score: 88, status: 'ok', label: 'Excellent' },
      mix: { score: 82, status: 'ok', label: 'Balanced' },
      balance: { score: 90, status: 'ok', label: 'Good' }
    },
    exposedArea: 'None',
    aiSummary: 'Priya is on track to exceed quota. Pipeline is healthy with strong coverage and balanced opportunity mix.',
    recommendations: [
      { priority: 1, title: 'Maintain momentum', reason: 'All metrics trending positively', action: 'Continue current strategy and share best practices with team' },
      { priority: 2, title: 'Expand into new accounts', reason: 'High win rate in current accounts', action: 'Target 5 new strategic accounts this quarter' }
    ]
  },
  {
    id: 'maya',
    name: 'Maya Chen',
    initials: 'MC',
    role: 'Enterprise AE',
    region: 'West',
    pipeline: 286000,
    goal: 260000,
    coverage: 4.0,
    risk: 38,
    opportunities: 3,
    meetings: 14,
    accountsAssigned: 76,
    accountsTouched: 58,
    teamAvg: 7,
    conversion: 21,
    zoomOut: {
      quantity: { score: 42, status: 'exposed', label: 'Critical' },
      dealSize: { score: 85, status: 'ok', label: 'Strong' },
      mix: { score: 78, status: 'ok', label: 'Good' },
      balance: { score: 72, status: 'ok', label: 'Balanced' }
    },
    exposedArea: 'Quantity',
    aiSummary: 'Maya has strong pipeline today but opportunity creation is down 38%. Future quarters at risk without immediate action.',
    recommendations: [
      { priority: 1, title: 'Rebuild opportunity creation', reason: 'Only 3 opportunities created vs team average of 7', action: 'Generate 10 additional meetings this week' },
      { priority: 2, title: 'Protect current pipeline', reason: 'Strong deals in progress', action: 'Advance top 3 opportunities to next stage' }
    ]
  },
  {
    id: 'sam',
    name: 'Sam Rivera',
    initials: 'SR',
    role: 'Commercial AE',
    region: 'South',
    pipeline: 224000,
    goal: 240000,
    coverage: 3.1,
    risk: 45,
    opportunities: 7,
    meetings: 21,
    accountsAssigned: 68,
    accountsTouched: 52,
    teamAvg: 7,
    conversion: 33,
    zoomOut: {
      quantity: { score: 68, status: 'ok', label: 'Adequate' },
      dealSize: { score: 58, status: 'exposed', label: 'Below avg' },
      mix: { score: 75, status: 'ok', label: 'Good' },
      balance: { score: 70, status: 'ok', label: 'Balanced' }
    },
    exposedArea: 'Deal Size',
    aiSummary: 'Sam is creating opportunities but deal sizes are below target. Focus on upselling and cross-selling.',
    recommendations: [
      { priority: 1, title: 'Increase deal size', reason: 'Average deal 30% below target', action: 'Bundle products and target larger accounts' },
      { priority: 2, title: 'Maintain activity level', reason: 'Meeting volume is strong', action: 'Continue current prospecting pace' }
    ]
  },
  {
    id: 'jordan',
    name: 'Jordan Lee',
    initials: 'JL',
    role: 'Enterprise AE',
    region: 'Central',
    pipeline: 182000,
    goal: 240000,
    coverage: 2.6,
    risk: 72,
    opportunities: 4,
    meetings: 16,
    accountsAssigned: 74,
    accountsTouched: 19,
    teamAvg: 7,
    conversion: 28,
    zoomOut: {
      quantity: { score: 38, status: 'exposed', label: 'Critical' },
      dealSize: { score: 72, status: 'ok', label: 'Adequate' },
      mix: { score: 55, status: 'exposed', label: 'Limited' },
      balance: { score: 45, status: 'exposed', label: 'Uneven' }
    },
    exposedArea: 'Quantity',
    aiSummary: 'Jordan is unlikely to hit quota without creating 5 additional opportunities. Account engagement and meeting-to-opportunity conversion are the primary constraints.',
    recommendations: [
      { priority: 1, title: 'Increase account coverage', reason: 'Only 26% of territory engaged', action: 'Touch 15 additional accounts this week' },
      { priority: 2, title: 'Rebuild opportunity creation pace', reason: 'Below team average', action: 'Audit sequence conversion and add second outbound block' }
    ]
  },
  {
    id: 'noah',
    name: 'Noah Williams',
    initials: 'NW',
    role: 'Commercial AE',
    region: 'East',
    pipeline: 164000,
    goal: 220000,
    coverage: 2.3,
    risk: 81,
    opportunities: 3,
    meetings: 11,
    accountsAssigned: 62,
    accountsTouched: 18,
    teamAvg: 7,
    conversion: 27,
    zoomOut: {
      quantity: { score: 32, status: 'exposed', label: 'Critical' },
      dealSize: { score: 65, status: 'ok', label: 'Adequate' },
      mix: { score: 48, status: 'exposed', label: 'Limited' },
      balance: { score: 38, status: 'exposed', label: 'Uneven' }
    },
    exposedArea: 'Quantity',
    aiSummary: 'Noah is significantly behind quota with critical gaps in activity and account coverage. Immediate intervention required.',
    recommendations: [
      { priority: 1, title: 'Emergency activity increase', reason: 'All metrics below target', action: 'Double daily prospecting blocks and generate 20 meetings' },
      { priority: 2, title: 'Territory coverage audit', reason: 'Only 29% of accounts touched', action: 'Review account list and prioritize top 30 accounts' }
    ]
  },
  {
    id: 'elena',
    name: 'Elena Garcia',
    initials: 'EG',
    role: 'Commercial AE',
    region: 'West',
    pipeline: 198000,
    goal: 220000,
    coverage: 2.9,
    risk: 57,
    opportunities: 8,
    meetings: 23,
    accountsAssigned: 70,
    accountsTouched: 54,
    teamAvg: 7,
    conversion: 35,
    zoomOut: {
      quantity: { score: 72, status: 'ok', label: 'Good' },
      dealSize: { score: 68, status: 'ok', label: 'Adequate' },
      mix: { score: 65, status: 'ok', label: 'Fair' },
      balance: { score: 58, status: 'exposed', label: 'Uneven' }
    },
    exposedArea: 'Balance',
    aiSummary: 'Elena is close to quota but pipeline is concentrated in few accounts. Diversification needed to reduce risk.',
    recommendations: [
      { priority: 1, title: 'Diversify pipeline', reason: 'Too concentrated in 3 accounts', action: 'Develop 5 new opportunities in different accounts' },
      { priority: 2, title: 'Maintain activity', reason: 'Meeting volume is strong', action: 'Continue current prospecting strategy' }
    ]
  }
];

let currentRep = reps[3]; // Default to Jordan Lee

// Opportunities data - IBM Products
const opportunities = [
  {
    id: 'opp-001',
    name: 'IBM watsonx.ai Enterprise Adoption',
    product: 'IBM watsonx.ai',
    rep: reps[0], // Priya Shah
    account: 'JPMorgan Chase',
    stage: 'Proposal',
    acv: 850000,
    tcv: 2550000,
    closeDate: '2026-09-15',
    probability: 75,
    forecastCategory: 'Commit',
    risk: 'low',
    nextStep: 'Executive presentation with CIO and AI leadership team',
    stakeholders: ['CIO', 'Head of AI/ML', 'VP Engineering', 'Chief Data Officer'],
    competitors: ['Microsoft Azure AI', 'AWS SageMaker'],
    recentActivities: ['Technical deep-dive completed', 'ROI analysis presented', 'Security review passed'],
    aiRecommendations: ['Schedule executive alignment meeting with CEO', 'Prepare competitive differentiation on governance', 'Engage IBM Research for custom AI demo']
  },
  {
    id: 'opp-002',
    name: 'IBM watsonx Assistant Deployment',
    product: 'IBM watsonx Assistant',
    rep: reps[3], // Jordan Lee
    account: 'Delta Air Lines',
    stage: 'Discovery',
    acv: 420000,
    tcv: 1260000,
    closeDate: '2026-09-30',
    probability: 40,
    forecastCategory: 'Pipeline',
    risk: 'medium',
    nextStep: 'Needs assessment meeting with Customer Experience VP',
    stakeholders: ['VP Customer Experience', 'Director of Digital', 'IT Director'],
    competitors: ['Google Dialogflow', 'Amazon Lex'],
    recentActivities: ['Initial discovery call', 'Use case workshop scheduled'],
    aiRecommendations: ['Complete technical proof of concept', 'Demonstrate multilingual capabilities', 'Share airline industry success stories']
  },
  {
    id: 'opp-003',
    name: 'IBM watsonx.data Implementation',
    product: 'IBM watsonx.data',
    rep: reps[1], // Maya Chen
    account: 'Bank of America',
    stage: 'Negotiation',
    acv: 1200000,
    tcv: 3600000,
    closeDate: '2026-08-31',
    probability: 85,
    forecastCategory: 'Best Case',
    risk: 'low',
    nextStep: 'Contract review with legal and procurement teams',
    stakeholders: ['Chief Data Officer', 'VP Data Platform', 'Enterprise Architect', 'Procurement Director'],
    competitors: ['Databricks', 'Snowflake'],
    recentActivities: ['Pricing negotiation in progress', 'Technical validation complete', 'Reference calls completed'],
    aiRecommendations: ['Address final pricing concerns', 'Expedite legal review process', 'Prepare implementation roadmap']
  },
  {
    id: 'opp-004',
    name: 'IBM QRadar SIEM Modernization',
    product: 'IBM QRadar SIEM',
    rep: reps[4], // Noah Williams
    account: 'AT&T',
    stage: 'Qualification',
    acv: 680000,
    tcv: 2040000,
    closeDate: '2026-10-15',
    probability: 30,
    forecastCategory: 'Pipeline',
    risk: 'high',
    nextStep: 'Budget approval pending - Q4 planning cycle',
    stakeholders: ['CISO', 'Director of Security Operations', 'SOC Manager'],
    competitors: ['Splunk', 'Palo Alto Networks Cortex'],
    recentActivities: ['Security assessment completed', 'Waiting on budget allocation'],
    aiRecommendations: ['Engage procurement team early', 'Demonstrate TCO advantage vs Splunk', 'Offer pilot program to reduce risk']
  },
  {
    id: 'opp-005',
    name: 'IBM Instana Observability Platform',
    product: 'IBM Instana',
    rep: reps[2], // Sam Rivera
    account: 'American Airlines',
    stage: 'Proposal',
    acv: 520000,
    tcv: 1560000,
    closeDate: '2026-09-20',
    probability: 60,
    forecastCategory: 'Commit',
    risk: 'medium',
    nextStep: 'Technical demo for DevOps and SRE teams',
    stakeholders: ['VP Engineering', 'Director of DevOps', 'SRE Lead'],
    competitors: ['Datadog', 'New Relic'],
    recentActivities: ['POC in progress', 'Positive feedback from SRE team'],
    aiRecommendations: ['Highlight automatic root cause analysis', 'Schedule demo with stakeholders', 'Provide migration plan from current tools']
  },
  {
    id: 'opp-006',
    name: 'IBM Red Hat OpenShift Platform Adoption',
    product: 'Red Hat OpenShift',
    rep: reps[5], // Elena Garcia
    account: 'Toyota',
    stage: 'Discovery',
    acv: 950000,
    tcv: 2850000,
    closeDate: '2026-10-01',
    probability: 50,
    forecastCategory: 'Pipeline',
    risk: 'medium',
    nextStep: 'Requirements gathering for hybrid cloud strategy',
    stakeholders: ['CTO', 'VP Cloud Infrastructure', 'Enterprise Architect'],
    competitors: ['VMware Tanzu', 'AWS EKS'],
    recentActivities: ['Initial architecture workshop', 'Hybrid cloud assessment'],
    aiRecommendations: ['Demonstrate automotive industry expertise', 'Engage Red Hat specialists', 'Provide TCO analysis for hybrid deployment']
  },
  {
    id: 'opp-007',
    name: 'IBM Concert Deployment',
    product: 'IBM Concert',
    rep: reps[0], // Priya Shah
    account: 'Verizon',
    stage: 'Closed Won',
    acv: 720000,
    tcv: 2160000,
    closeDate: '2026-07-30',
    probability: 100,
    forecastCategory: 'Closed',
    risk: 'none',
    nextStep: 'Implementation kickoff scheduled for next week',
    stakeholders: ['CIO', 'VP Application Management', 'Director of IT Operations'],
    competitors: ['ServiceNow', 'BMC Helix'],
    recentActivities: ['Contract signed', 'Implementation team assigned', 'Kickoff meeting scheduled'],
    aiRecommendations: ['Ensure smooth onboarding', 'Identify expansion opportunities', 'Schedule executive business review']
  },
  {
    id: 'opp-008',
    name: 'IBM Turbonomic Application Resource Management',
    product: 'IBM Turbonomic',
    rep: reps[3], // Jordan Lee
    account: 'PepsiCo',
    stage: 'Qualification',
    acv: 380000,
    tcv: 1140000,
    closeDate: '2026-09-25',
    probability: 35,
    forecastCategory: 'Pipeline',
    risk: 'high',
    nextStep: 'Waiting for decision maker availability - VP Infrastructure',
    stakeholders: ['VP Infrastructure', 'Director of Cloud Operations', 'FinOps Lead'],
    competitors: ['VMware Aria', 'Flexera'],
    recentActivities: ['Initial discovery call completed', 'Cost optimization assessment pending'],
    aiRecommendations: ['Quantify cloud cost savings opportunity', 'Schedule meeting with FinOps team', 'Provide competitive comparison on automation']
  },
  {
    id: 'opp-009',
    name: 'IBM Cloud Pak for Data Expansion',
    product: 'IBM Cloud Pak for Data',
    rep: reps[1], // Maya Chen
    account: 'UnitedHealth Group',
    stage: 'Proposal',
    acv: 1100000,
    tcv: 3300000,
    closeDate: '2026-09-10',
    probability: 70,
    forecastCategory: 'Best Case',
    risk: 'low',
    nextStep: 'Technical validation meeting with data science team',
    stakeholders: ['Chief Data Officer', 'VP Analytics', 'Head of Data Science', 'Compliance Officer'],
    competitors: ['Databricks', 'Cloudera'],
    recentActivities: ['Expansion from existing deployment', 'Data governance workshop completed'],
    aiRecommendations: ['Leverage existing relationship', 'Demonstrate healthcare compliance features', 'Expand into additional business units']
  },
  {
    id: 'opp-010',
    name: 'IBM Guardium Data Security Rollout',
    product: 'IBM Guardium',
    rep: reps[2], // Sam Rivera
    account: 'CVS Health',
    stage: 'Negotiation',
    acv: 580000,
    tcv: 1740000,
    closeDate: '2026-08-28',
    probability: 80,
    forecastCategory: 'Commit',
    risk: 'low',
    nextStep: 'Final pricing discussion and contract terms',
    stakeholders: ['CISO', 'VP Data Protection', 'Compliance Director', 'Procurement Manager'],
    competitors: ['Imperva', 'Oracle Data Safe'],
    recentActivities: ['Security audit completed', 'Compliance requirements validated', 'Pricing proposal submitted'],
    aiRecommendations: ['Address competitor pricing concerns', 'Highlight HIPAA compliance capabilities', 'Offer multi-year discount']
  },
  {
    id: 'opp-011',
    name: 'IBM Power11 Server Refresh',
    product: 'IBM Power11',
    rep: reps[0], // Priya Shah
    account: 'State Farm',
    stage: 'Proposal',
    acv: 1450000,
    tcv: 1450000,
    closeDate: '2026-09-18',
    probability: 65,
    forecastCategory: 'Best Case',
    risk: 'medium',
    nextStep: 'Infrastructure modernization business case review',
    stakeholders: ['CIO', 'VP Infrastructure', 'Director of Data Center Operations'],
    competitors: ['HPE', 'Dell EMC'],
    recentActivities: ['Performance benchmarking completed', 'Migration assessment in progress'],
    aiRecommendations: ['Demonstrate AI acceleration capabilities', 'Provide migration support plan', 'Highlight energy efficiency savings']
  },
  {
    id: 'opp-012',
    name: 'IBM Ansible Automation Platform Rollout',
    product: 'Red Hat Ansible',
    rep: reps[4], // Noah Williams
    account: 'Walgreens',
    stage: 'Discovery',
    acv: 340000,
    tcv: 1020000,
    closeDate: '2026-10-05',
    probability: 45,
    forecastCategory: 'Pipeline',
    risk: 'medium',
    nextStep: 'Automation assessment and use case workshop',
    stakeholders: ['VP IT Operations', 'Director of Infrastructure', 'DevOps Manager'],
    competitors: ['Terraform', 'Puppet'],
    recentActivities: ['Initial discovery meeting', 'Automation maturity assessment scheduled'],
    aiRecommendations: ['Demonstrate retail industry automation patterns', 'Quantify operational efficiency gains', 'Provide training and enablement plan']
  }
];

// Activity data (last 30 days)
const activityData = reps.map(rep => ({
  rep: rep,
  meetings: rep.meetings,
  emails: Math.round(rep.meetings * 3.5),
  calls: Math.round(rep.meetings * 2.2),
  accountsTouched: rep.accountsTouched,
  conversionRate: rep.conversion,
  trend: rep.meetings > rep.teamAvg * 1.1 ? 'up' : rep.meetings < rep.teamAvg * 0.9 ? 'down' : 'stable'
}));

// Utility functions
function formatCurrency(value) {
  const abs = Math.abs(value);
  if (abs >= 1000000) return (value >= 0 ? '$' : '-$') + (abs / 1000000).toFixed(1) + 'M';
  return (value >= 0 ? '$' : '-$') + (abs / 1000).toFixed(0) + 'K';
}

function getRiskClass(risk) {
  if (risk >= 70) return 'high';
  if (risk >= 40) return 'medium';
  return 'low';
}

function getAvatarClass(index) {
  const classes = ['', 'peach', 'blue', 'purple', 'peach', 'blue'];
  return classes[index % classes.length];
}

// Initialize dashboard
function init() {
  renderOverview();
  renderCoaching();
  renderOpportunities();
  renderActivityIntelligence();
  renderReports();
  setupEventListeners();
}

// Render Manager Overview
function renderOverview() {
  renderKPIs();
  renderPipelineTable();
  renderRiskMatrix();
  renderInsightList();
}

function renderKPIs() {
  const totalPipeline = reps.reduce((sum, r) => sum + r.pipeline, 0);
  const totalGoal = reps.reduce((sum, r) => sum + r.goal, 0);
  const totalOpps = reps.reduce((sum, r) => sum + r.opportunities, 0);
  const atRiskCount = reps.filter(r => r.risk >= 50).length;
  const untouchedAccounts = reps.reduce((sum, r) => sum + (r.accountsAssigned - r.accountsTouched), 0);
  const pipelineGap = reps.filter(r => r.pipeline < r.goal).reduce((sum, r) => sum + (r.goal - r.pipeline), 0);

  const kpis = [
    { label: 'TEAM PIPELINE', value: formatCurrency(totalPipeline), change: '↗ 8.2%', up: true },
    { label: 'TEAM QUOTA', value: formatCurrency(totalGoal), change: 'Pacing 82%', up: false },
    { label: 'PIPELINE COVERAGE', value: '3.2×', change: 'Target 3.5×', up: false },
    { label: 'OPPORTUNITIES CREATED', value: totalOpps, change: '↘ 14%', up: false, attention: true },
    { label: 'AT-RISK REPS', value: atRiskCount, change: 'Need coaching', up: false, attention: true },
    { label: 'UNTOUCHED ACCOUNTS', value: untouchedAccounts, change: '28% of assigned', up: false },
    { label: 'PIPELINE GAP', value: formatCurrency(pipelineGap), change: 'Across 3 reps', up: false, attention: true }
  ];

  document.getElementById('kpi-grid').innerHTML = kpis.map(kpi => `
    <div class="kpi${kpi.attention ? ' attention' : ''}">
      <small>${kpi.label}</small>
      <strong>${kpi.value}</strong>
      <span class="${kpi.up ? 'up' : 'down'}">${kpi.change}</span>
    </div>
  `).join('');
}

function renderPipelineTable() {
  const tableHead = `
    <div class="table-head">
      <div>REP</div>
      <div>PIPELINE PROGRESS</div>
      <div>PIPELINE GAP</div>
      <div>COVERAGE</div>
      <div>QUOTA RISK</div>
    </div>
  `;

  const rows = reps.map((rep, index) => {
    const gap = rep.pipeline - rep.goal;
    const percent = (rep.pipeline / rep.goal) * 100;
    const goalPercent = 100;

    return `
      <div class="rep-row" data-rep="${rep.id}">
        <div class="rep-ident">
          <span class="avatar ${getAvatarClass(index)}">${rep.initials}</span>
          <div>
            <strong>${rep.name}</strong>
            <small>${rep.role} · ${rep.region}</small>
          </div>
        </div>
        <div class="bar-wrap">
          <div class="bar-labels">
            <strong>${formatCurrency(rep.pipeline)}</strong>
            <span>${formatCurrency(rep.goal)}</span>
          </div>
          <div class="bar">
            <span style="width: ${Math.min(percent, 100)}%"></span>
            <i style="left: ${goalPercent}%"></i>
          </div>
        </div>
        <div class="metric-cell">
          <strong style="color: ${gap >= 0 ? '#19806c' : '#bd4d2d'}">${formatCurrency(gap)}</strong>
          <small>${gap >= 0 ? 'Above goal' : 'Below goal'}</small>
        </div>
        <div class="metric-cell">
          <strong class="${rep.coverage < 3 ? 'coverage low' : ''}">${rep.coverage.toFixed(1)}×</strong>
        </div>
        <div>
          <span class="risk ${getRiskClass(rep.risk)}">${rep.risk}%</span>
        </div>
      </div>
    `;
  }).join('');

  document.getElementById('pipeline-table').innerHTML = tableHead + rows;
}

function renderRiskMatrix() {
  const matrix = document.getElementById('risk-matrix');
  
  // Clear existing dots
  const existingDots = matrix.querySelectorAll('.matrix-dot');
  existingDots.forEach(dot => dot.remove());

  reps.forEach((rep, index) => {
    const pipelineHealth = (rep.pipeline / rep.goal) * 100;
    const oppCreation = (rep.opportunities / rep.teamAvg) * 100;
    
    // Map to matrix coordinates (0-100% for each axis)
    const x = Math.min(Math.max(pipelineHealth, 0), 200) / 2;
    const y = 100 - (Math.min(Math.max(oppCreation, 0), 200) / 2);
    
    const dot = document.createElement('div');
    dot.className = 'matrix-dot';
    dot.textContent = rep.initials;
    dot.style.left = `${x}%`;
    dot.style.top = `${y}%`;
    dot.style.background = rep.risk >= 70 ? '#e06842' : rep.risk >= 40 ? '#daa529' : '#3aaf92';
    dot.dataset.rep = rep.id;
    dot.onclick = () => openCoaching(rep.id);
    
    matrix.appendChild(dot);
  });
}

function renderInsightList() {
  const insights = [
    { rep: reps[1], text: 'Strong pipeline · creation down 38%', tag: 'watch', tagText: 'Future risk' },
    { rep: reps[3], text: 'Creation up but conversion lagging', tag: 'coach', tagText: 'Coach' },
    { rep: reps[0], text: 'Pipeline and creation on pace', tag: 'healthy', tagText: 'Healthy' }
  ];

  document.getElementById('insight-list').innerHTML = insights.map((insight, index) => `
    <button class="insight-row" data-rep="${insight.rep.id}">
      <span class="avatar ${getAvatarClass(index)}">${insight.rep.initials}</span>
      <span>
        <strong>${insight.rep.name}</strong>
        <small>${insight.text}</small>
      </span>
      <span class="risk-tag ${insight.tag}">${insight.tagText}</span>
    </button>
  `).join('');
}

// Render Rep Coaching
function renderCoaching() {
  const rep = currentRep;
  const gap = rep.goal - rep.pipeline;
  const percent = (rep.pipeline / rep.goal) * 100;
  
  // Update header
  document.getElementById('rep-avatar').textContent = rep.initials;
  document.getElementById('rep-avatar').className = `avatar large ${getAvatarClass(reps.indexOf(rep))}`;
  document.getElementById('rep-name').textContent = rep.name;
  document.getElementById('rep-meta').textContent = `${rep.role} · ${rep.region} region`;
  document.getElementById('crumb-label').textContent = 'Rep coaching';
  
  // Update AI summary
  document.getElementById('ai-summary').textContent = rep.aiSummary;
  document.getElementById('risk-score').textContent = `${rep.risk}%`;
  
  // Update KPIs
  const untouched = rep.accountsAssigned - rep.accountsTouched;
  document.getElementById('rep-kpis').innerHTML = `
    <div class="rep-kpi"><small>CURRENT PIPELINE</small><strong>${formatCurrency(rep.pipeline)}</strong></div>
    <div class="rep-kpi"><small>GOAL</small><strong>${formatCurrency(rep.goal)}</strong></div>
    <div class="rep-kpi"><small>GAP TO QUOTA</small><strong class="${gap > 0 ? 'danger' : ''}">${formatCurrency(-gap)}</strong></div>
    <div class="rep-kpi"><small>COVERAGE</small><strong>${rep.coverage.toFixed(1)}×</strong></div>
    <div class="rep-kpi"><small>OPPORTUNITIES</small><strong>${rep.opportunities}</strong></div>
    <div class="rep-kpi"><small>MEETINGS</small><strong>${rep.meetings}</strong></div>
    <div class="rep-kpi"><small>ACCOUNTS ASSIGNED</small><strong>${rep.accountsAssigned}</strong></div>
    <div class="rep-kpi"><small>ACCOUNTS TOUCHED</small><strong>${rep.accountsTouched}</strong></div>
    <div class="rep-kpi"><small>UNTOUCHED ACCOUNTS</small><strong class="${untouched > 20 ? 'danger' : ''}">${untouched}</strong></div>
  `;
  
  // Update pipeline analysis
  document.getElementById('deep-current').textContent = formatCurrency(rep.pipeline);
  document.getElementById('deep-goal').textContent = formatCurrency(rep.goal);
  document.getElementById('deep-gap').textContent = formatCurrency(-gap);
  document.getElementById('deep-progress').style.width = `${Math.min(percent, 100)}%`;
  document.getElementById('pipeline-status').textContent = gap > 0 ? 'Needs attention' : 'On track';
  document.getElementById('pipeline-status').className = `status-pill ${gap > 0 ? 'danger' : 'warning'}`;
  
  // Update Zoom Out
  renderZoomOut(rep);
  
  // Update Sales Formula
  const oppGap = rep.teamAvg - rep.opportunities;
  const meetingsNeeded = Math.ceil(oppGap / (rep.conversion / 100));
  
  document.getElementById('formula-metrics').innerHTML = `
    <div><small>OPPORTUNITIES CREATED</small><strong>${rep.opportunities}</strong></div>
    <div><small>TEAM AVERAGE</small><strong>${rep.teamAvg}</strong></div>
    <div><small>OPPORTUNITY GAP</small><strong style="color: ${oppGap > 0 ? '#d8653b' : '#087f75'}">${oppGap > 0 ? '-' : '+'}${Math.abs(oppGap)}</strong></div>
    <div><small>MEETINGS NEEDED</small><strong>${meetingsNeeded}</strong></div>
  `;
  
  document.getElementById('meetings-needed').textContent = `${meetingsNeeded} more meetings needed`;
  document.getElementById('conversion-note').textContent = `Based on ${rep.name.split(' ')[0]}'s ${rep.conversion}% meeting-to-opportunity conversion`;
  document.getElementById('formula-status').textContent = oppGap > 0 ? 'Below pace' : 'On pace';
  
  // Update Recovery Plan
  const avgDeal = rep.pipeline / rep.opportunities;
  const oppsNeeded = Math.ceil(gap / avgDeal);
  const largeOppsNeeded = Math.ceil(gap / (avgDeal * 1.5));
  
  document.getElementById('recovery-gap').textContent = formatCurrency(gap);
  document.getElementById('option-a').textContent = `${oppsNeeded} opportunities`;
  document.getElementById('option-a').nextElementSibling.textContent = `at ${formatCurrency(avgDeal)} average`;
  document.getElementById('option-b').textContent = `${largeOppsNeeded} opportunities`;
  document.getElementById('option-b').nextElementSibling.textContent = `at ${formatCurrency(avgDeal * 1.5)} average`;
  
  document.getElementById('action-accounts').textContent = Math.ceil(untouched * 0.3);
  document.getElementById('action-meetings').textContent = meetingsNeeded;
  document.getElementById('action-stalled').textContent = Math.min(rep.opportunities, 2);
  
  // Update Recommendations
  renderRecommendations(rep);
  
  // Update rep menu
  renderRepMenu();
}

function renderZoomOut(rep) {
  const exposures = [
    { label: 'Quantity', ...rep.zoomOut.quantity },
    { label: 'Deal size', ...rep.zoomOut.dealSize },
    { label: 'Mix', ...rep.zoomOut.mix },
    { label: 'Balance', ...rep.zoomOut.balance }
  ];
  
  document.getElementById('exposure-grid').innerHTML = exposures.map(exp => `
    <div class="exposure ${exp.status === 'exposed' ? 'exposed' : ''}">
      <div class="exposure-head">
        <strong>${exp.label}</strong>
        <span>${exp.score}/100</span>
      </div>
      <div class="mini-track">
        <span style="width: ${exp.score}%"></span>
      </div>
      <small>${exp.label === 'Quantity' ? 'Number of opportunities in pipeline' : 
              exp.label === 'Deal size' ? 'Average deal value vs target' :
              exp.label === 'Mix' ? 'Product and segment diversity' :
              'Distribution across accounts'}</small>
    </div>
  `).join('');
  
  document.getElementById('exposed-label').textContent = rep.exposedArea;
}

function renderRecommendations(rep) {
  document.getElementById('recommendation-list').innerHTML = rep.recommendations.map(rec => `
    <div class="rec">
      <div class="rec-head">
        <strong>Priority #${rec.priority}: ${rec.title}</strong>
        <span>PRIORITY ${rec.priority}</span>
      </div>
      <p><strong>Reason:</strong> ${rec.reason}</p>
      <div class="rec-action"><strong>Action:</strong> ${rec.action}</div>
    </div>
  `).join('');
}

function renderRepMenu() {
  document.getElementById('rep-menu').innerHTML = reps.map(rep => `
    <button data-rep="${rep.id}">${rep.name}</button>
  `).join('');
}

// Event listeners
function setupEventListeners() {
  // Navigation
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      const view = item.dataset.view;
      if (view) switchView(view);
    });
  });
  
  // Mobile menu
  document.getElementById('mobile-menu').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('open');
  });
  
  // Open coaching buttons
  document.getElementById('open-coaching').addEventListener('click', () => switchView('coaching'));
  document.getElementById('view-risk').addEventListener('click', () => switchView('coaching'));
  document.getElementById('pipeline-coaching').addEventListener('click', () => switchView('coaching'));
  
  // Back button
  document.getElementById('back-overview').addEventListener('click', () => switchView('overview'));
  
  // Rep selection
  document.getElementById('rep-select').addEventListener('click', () => {
    document.getElementById('rep-menu').classList.toggle('open');
  });
  
  // Rep menu items
  document.addEventListener('click', (e) => {
    if (e.target.closest('#rep-menu button')) {
      const repId = e.target.closest('button').dataset.rep;
      selectRep(repId);
      document.getElementById('rep-menu').classList.remove('open');
    }
    
    // Close rep menu when clicking outside
    if (!e.target.closest('#rep-select') && !e.target.closest('#rep-menu')) {
      document.getElementById('rep-menu').classList.remove('open');
    }
    
    // Pipeline table row clicks
    if (e.target.closest('.rep-row')) {
      const repId = e.target.closest('.rep-row').dataset.rep;
      openCoaching(repId);
    }
    
    // Insight row clicks
    if (e.target.closest('.insight-row')) {
      const repId = e.target.closest('.insight-row').dataset.rep;
      openCoaching(repId);
    }
    
    // Matrix dot clicks
    if (e.target.closest('.matrix-dot')) {
      const repId = e.target.closest('.matrix-dot').dataset.rep;
      openCoaching(repId);
    }
  });
}

// ============================================
// OPPORTUNITIES VIEW
// ============================================

function renderOpportunities() {
  const tableContainer = document.getElementById('opportunities-table');
  
  const tableHTML = `
    <div class="opp-table">
      <div class="opp-table-head">
        <div>IBM Product</div>
        <div>Customer</div>
        <div>Owner</div>
        <div>ACV</div>
        <div>TCV</div>
        <div>Stage</div>
        <div>Forecast</div>
        <div>Close Date</div>
        <div>Probability</div>
      </div>
      ${opportunities.map(opp => `
        <div class="opp-table-row clickable" data-opp-id="${opp.id}">
          <div class="opp-name">
            <strong>${opp.name}</strong>
            <small>${opp.product}</small>
          </div>
          <div><strong>${opp.account}</strong></div>
          <div class="opp-rep">
            <span class="avatar small ${getAvatarClass(reps.indexOf(opp.rep))}">${opp.rep.initials}</span>
            <span>${opp.rep.name}</span>
          </div>
          <div><strong>${formatCurrency(opp.acv)}</strong></div>
          <div>${formatCurrency(opp.tcv)}</div>
          <div><span class="stage-badge ${opp.stage.toLowerCase().replace(' ', '-')}">${opp.stage}</span></div>
          <div><span class="forecast-badge ${opp.forecastCategory.toLowerCase().replace(' ', '-')}">${opp.forecastCategory}</span></div>
          <div>${new Date(opp.closeDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
          <div><strong style="color: ${opp.probability >= 70 ? '#087f75' : opp.probability >= 50 ? '#daa529' : '#bd4d2d'}">${opp.probability}%</strong></div>
        </div>
      `).join('')}
    </div>
  `;
  
  tableContainer.innerHTML = tableHTML;
  
  // Add click handlers for opportunity rows
  document.querySelectorAll('.opp-table-row.clickable').forEach(row => {
    row.addEventListener('click', () => {
      const oppId = row.dataset.oppId;
      showOpportunityDetail(oppId);
    });
  });
}

function showOpportunityDetail(oppId) {
  const opp = opportunities.find(o => o.id === oppId);
  if (!opp) return;
  
  const modal = document.getElementById('opp-detail-modal');
  const modalContent = document.getElementById('opp-detail-content');
  
  const detailHTML = `
    <div class="opp-detail-header">
      <div>
        <p class="eyebrow">${opp.product}</p>
        <h2>${opp.name}</h2>
        <p class="opp-detail-meta">${opp.account} · Owned by ${opp.rep.name}</p>
      </div>
      <button class="close-modal" onclick="closeOpportunityDetail()">×</button>
    </div>
    
    <div class="opp-detail-kpis">
      <div class="opp-kpi">
        <small>ANNUAL CONTRACT VALUE</small>
        <strong>${formatCurrency(opp.acv)}</strong>
      </div>
      <div class="opp-kpi">
        <small>TOTAL CONTRACT VALUE</small>
        <strong>${formatCurrency(opp.tcv)}</strong>
      </div>
      <div class="opp-kpi">
        <small>PROBABILITY TO CLOSE</small>
        <strong style="color: ${opp.probability >= 70 ? '#087f75' : opp.probability >= 50 ? '#daa529' : '#bd4d2d'}">${opp.probability}%</strong>
      </div>
      <div class="opp-kpi">
        <small>CLOSE DATE</small>
        <strong>${new Date(opp.closeDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</strong>
      </div>
    </div>
    
    <div class="opp-detail-grid">
      <div class="opp-detail-section">
        <h3>Sales Stage & Forecast</h3>
        <div class="opp-detail-badges">
          <span class="stage-badge ${opp.stage.toLowerCase().replace(' ', '-')}">${opp.stage}</span>
          <span class="forecast-badge ${opp.forecastCategory.toLowerCase().replace(' ', '-')}">${opp.forecastCategory}</span>
          <span class="risk-badge ${opp.risk}">${opp.risk === 'none' ? 'Won' : opp.risk + ' risk'}</span>
        </div>
        <div class="opp-detail-item">
          <strong>Next Step:</strong>
          <p>${opp.nextStep}</p>
        </div>
      </div>
      
      <div class="opp-detail-section">
        <h3>Key Stakeholders</h3>
        <div class="stakeholder-list">
          ${opp.stakeholders.map(s => `<div class="stakeholder-item"><span class="stakeholder-icon">👤</span>${s}</div>`).join('')}
        </div>
      </div>
      
      <div class="opp-detail-section">
        <h3>Competitive Landscape</h3>
        <div class="competitor-list">
          ${opp.competitors.map(c => `<div class="competitor-item"><span class="competitor-icon">⚔</span>${c}</div>`).join('')}
        </div>
      </div>
      
      <div class="opp-detail-section">
        <h3>Recent Activities</h3>
        <div class="activity-list">
          ${opp.recentActivities.map(a => `<div class="activity-item"><span class="activity-icon">✓</span>${a}</div>`).join('')}
        </div>
      </div>
    </div>
    
    <div class="opp-ai-recommendations">
      <div class="opp-ai-header">
        <span class="ai-icon-large">✦</span>
        <div>
          <h3>AI-Generated Next Steps</h3>
          <p>Recommended actions to advance this opportunity</p>
        </div>
      </div>
      <div class="opp-ai-list">
        ${opp.aiRecommendations.map((rec, i) => `
          <div class="opp-ai-item">
            <span class="priority-num">${i + 1}</span>
            <div>
              <strong>${rec}</strong>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
    
    <div class="opp-detail-actions">
      <button class="button secondary">Add activity</button>
      <button class="button secondary">Update stage</button>
      <button class="button primary">Schedule follow-up</button>
    </div>
  `;
  
  modalContent.innerHTML = detailHTML;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeOpportunityDetail() {
  const modal = document.getElementById('opp-detail-modal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// ============================================
// ACTIVITY INTELLIGENCE VIEW
// ============================================

function renderActivityIntelligence() {
  // Render KPIs
  const totalMeetings = activityData.reduce((sum, a) => sum + a.meetings, 0);
  const totalEmails = activityData.reduce((sum, a) => sum + a.emails, 0);
  const totalCalls = activityData.reduce((sum, a) => sum + a.calls, 0);
  const avgConversion = activityData.reduce((sum, a) => sum + a.conversionRate, 0) / activityData.length;
  
  const kpis = [
    { label: 'TOTAL MEETINGS', value: totalMeetings, change: '↑ 6%', up: true },
    { label: 'TOTAL EMAILS', value: totalEmails, change: '↑ 12%', up: true },
    { label: 'TOTAL CALLS', value: totalCalls, change: '↓ 3%', up: false },
    { label: 'AVG CONVERSION', value: `${Math.round(avgConversion)}%`, change: '↑ 2%', up: true },
    { label: 'ACCOUNTS TOUCHED', value: activityData.reduce((sum, a) => sum + a.accountsTouched, 0), change: '↑ 8%', up: true },
    { label: 'ACTIVE REPS', value: reps.length, change: 'All engaged', up: true }
  ];
  
  document.getElementById('activity-kpis').innerHTML = kpis.map(kpi => `
    <div class="kpi">
      <small>${kpi.label}</small>
      <strong>${kpi.value}</strong>
      <span class="${kpi.up ? 'up' : 'down'}">${kpi.change}</span>
    </div>
  `).join('');
  
  // Render activity table
  const tableHTML = `
    <div class="activity-table">
      <div class="activity-table-head">
        <div>Rep</div>
        <div>Meetings</div>
        <div>Emails</div>
        <div>Calls</div>
        <div>Accounts Touched</div>
        <div>Conversion</div>
        <div>Trend</div>
      </div>
      ${activityData.map((data, index) => `
        <div class="activity-table-row">
          <div class="rep-cell">
            <span class="avatar ${getAvatarClass(index)}">${data.rep.initials}</span>
            <div>
              <strong>${data.rep.name}</strong>
              <small>${data.rep.role}</small>
            </div>
          </div>
          <div><strong>${data.meetings}</strong></div>
          <div>${data.emails}</div>
          <div>${data.calls}</div>
          <div><strong>${data.accountsTouched}</strong> <small>of ${data.rep.accountsAssigned}</small></div>
          <div><strong>${data.conversionRate}%</strong></div>
          <div><span class="trend-badge ${data.trend}">${data.trend === 'up' ? '↑' : data.trend === 'down' ? '↓' : '→'}</span></div>
        </div>
      `).join('')}
    </div>
  `;
  
  document.getElementById('activity-table').innerHTML = tableHTML;
  
  // Render activity trends
  const trendsHTML = `
    <div class="trend-summary">
      <div class="trend-item">
        <span class="trend-label">This week</span>
        <strong>${Math.round(totalMeetings * 0.25)}</strong>
        <span class="up">↑ 8%</span>
      </div>
      <div class="trend-item">
        <span class="trend-label">Last week</span>
        <strong>${Math.round(totalMeetings * 0.23)}</strong>
        <span class="down">↓ 2%</span>
      </div>
      <div class="trend-item">
        <span class="trend-label">2 weeks ago</span>
        <strong>${Math.round(totalMeetings * 0.24)}</strong>
        <span class="up">↑ 5%</span>
      </div>
    </div>
    <div class="insight-box">
      <strong>Insight:</strong> Meeting volume is trending up, but conversion rates remain flat. Focus on meeting quality and qualification.
    </div>
  `;
  
  document.getElementById('activity-trends').innerHTML = trendsHTML;
  
  // Render top performers
  const topPerformers = [...activityData].sort((a, b) => b.meetings - a.meetings).slice(0, 3);
  const performersHTML = topPerformers.map((data, index) => `
    <div class="performer-row">
      <span class="rank">#${index + 1}</span>
      <span class="avatar ${getAvatarClass(reps.indexOf(data.rep))}">${data.rep.initials}</span>
      <div>
        <strong>${data.rep.name}</strong>
        <small>${data.meetings} meetings · ${data.conversionRate}% conversion</small>
      </div>
    </div>
  `).join('');
  
  document.getElementById('top-performers').innerHTML = performersHTML;
}

// ============================================
// REPORTS VIEW
// ============================================

function renderReports() {
  // Executive summary
  const totalPipeline = reps.reduce((sum, r) => sum + r.pipeline, 0);
  const totalGoal = reps.reduce((sum, r) => sum + r.goal, 0);
  const atRiskReps = reps.filter(r => r.risk >= 50);
  const pacing = Math.round((totalPipeline / totalGoal) * 100);
  
  const summaryHTML = `
    <div class="exec-summary">
      <div class="summary-grid">
        <div class="summary-metric">
          <small>TEAM PACING</small>
          <strong class="${pacing >= 100 ? 'positive' : 'negative'}">${pacing}%</strong>
          <span>of quota</span>
        </div>
        <div class="summary-metric">
          <small>TOTAL PIPELINE</small>
          <strong>${formatCurrency(totalPipeline)}</strong>
          <span>across ${reps.length} reps</span>
        </div>
        <div class="summary-metric">
          <small>PIPELINE GAP</small>
          <strong class="negative">${formatCurrency(totalGoal - totalPipeline)}</strong>
          <span>to reach goal</span>
        </div>
        <div class="summary-metric">
          <small>AT-RISK REPS</small>
          <strong class="negative">${atRiskReps.length}</strong>
          <span>need coaching</span>
        </div>
      </div>
      <div class="summary-insight">
        <span class="spark">✦</span>
        <div>
          <strong>Key Insight</strong>
          <p>Team is pacing at ${pacing}% of quota. ${atRiskReps.length} reps require immediate coaching attention. Opportunity creation is down 14% month-over-month, but meeting volume is up 6%. Focus coaching on conversion quality rather than quantity.</p>
        </div>
      </div>
    </div>
  `;
  
  document.getElementById('executive-summary').innerHTML = summaryHTML;
  
  // At-risk reps list
  const atRiskHTML = atRiskReps.map((rep, index) => `
    <div class="at-risk-item">
      <div class="at-risk-header">
        <span class="avatar ${getAvatarClass(reps.indexOf(rep))}">${rep.initials}</span>
        <div>
          <strong>${rep.name}</strong>
          <small>${rep.role} · ${rep.region}</small>
        </div>
        <span class="risk ${getRiskClass(rep.risk)}">${rep.risk}%</span>
      </div>
      <div class="at-risk-details">
        <div><small>Gap:</small> <strong>${formatCurrency(rep.goal - rep.pipeline)}</strong></div>
        <div><small>Issue:</small> <strong>${rep.exposedArea}</strong></div>
      </div>
      <div class="at-risk-action">${rep.recommendations[0].action}</div>
    </div>
  `).join('');
  
  document.getElementById('at-risk-list').innerHTML = atRiskHTML;
  
  // Recommended actions
  const actions = [
    { priority: 1, action: 'Schedule 1:1s with Jordan, Noah, and Elena', impact: 'High', timeline: 'This week' },
    { priority: 2, action: 'Review territory coverage across team', impact: 'High', timeline: 'This week' },
    { priority: 3, action: 'Audit meeting-to-opportunity conversion process', impact: 'Medium', timeline: 'Next week' },
    { priority: 4, action: 'Share Priya\'s best practices with team', impact: 'Medium', timeline: 'Next week' },
    { priority: 5, action: 'Implement daily prospecting blocks', impact: 'High', timeline: 'This week' }
  ];
  
  const actionsHTML = actions.map(action => `
    <div class="action-item">
      <div class="action-header">
        <span class="priority-badge">P${action.priority}</span>
        <strong>${action.action}</strong>
      </div>
      <div class="action-meta">
        <span class="impact ${action.impact.toLowerCase()}">${action.impact} impact</span>
        <span class="timeline">${action.timeline}</span>
      </div>
    </div>
  `).join('');
  
  document.getElementById('recommended-actions').innerHTML = actionsHTML;
  
  // Opportunity creation chart (simple text-based for now)
  const chartHTML = `
    <div class="simple-chart">
      <div class="chart-bars">
        <div class="chart-bar" style="height: 65%"><span>38</span><small>Week 1</small></div>
        <div class="chart-bar" style="height: 72%"><span>42</span><small>Week 2</small></div>
        <div class="chart-bar" style="height: 68%"><span>40</span><small>Week 3</small></div>
        <div class="chart-bar" style="height: 85%"><span>50</span><small>Week 4</small></div>
        <div class="chart-bar" style="height: 78%"><span>46</span><small>Week 5</small></div>
        <div class="chart-bar" style="height: 70%"><span>41</span><small>Week 6</small></div>
        <div class="chart-bar" style="height: 62%"><span>36</span><small>Week 7</small></div>
        <div class="chart-bar active" style="height: 73%"><span>43</span><small>Week 8</small></div>
      </div>
      <div class="chart-insight">
        <strong>Trend Analysis:</strong> Opportunity creation peaked in Week 4 (50 opps) but has declined 14% since then. Current week shows slight recovery. Recommend focusing on account coverage and meeting generation.
      </div>
    </div>
  `;
  
  document.getElementById('opp-creation-chart').innerHTML = chartHTML;
}

function switchView(view) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  
  const viewMap = {
    'overview': { id: 'overview', label: 'Manager overview' },
    'coaching': { id: 'coaching', label: 'Rep coaching' },
    'opportunities': { id: 'opportunities', label: 'Opportunities' },
    'activity': { id: 'activity', label: 'Activity intelligence' },
    'reports': { id: 'reports', label: 'Reports' }
  };
  
  if (viewMap[view]) {
    document.getElementById(viewMap[view].id).classList.add('active');
    const navItem = document.querySelector(`[data-view="${view}"]`);
    if (navItem) navItem.classList.add('active');
    document.getElementById('crumb-label').textContent = viewMap[view].label;
  }
  
  // Close mobile sidebar if open
  const sidebar = document.getElementById('sidebar');
  if (sidebar.classList.contains('open')) {
    sidebar.classList.remove('open');
  }
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openCoaching(repId) {
  selectRep(repId);
  switchView('coaching');
}

function selectRep(repId) {
  const rep = reps.find(r => r.id === repId);
  if (rep) {
    currentRep = rep;
    renderCoaching();
  }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', init);

// ============================================
// AI COACHING ASSISTANT
// ============================================

class AICoach {
  constructor() {
    this.isOpen = false;
    this.conversationHistory = [];
    this.currentContext = null;
    
    // DOM elements
    this.fab = document.getElementById('ai-coach-fab');
    this.drawer = document.getElementById('ai-coach-drawer');
    this.closeBtn = document.getElementById('ai-close-btn');
    this.messagesContainer = document.getElementById('ai-messages');
    this.suggestionsContainer = document.getElementById('ai-suggestions');
    this.input = document.getElementById('ai-input');
    this.sendBtn = document.getElementById('ai-send-btn');
    this.clearBtn = document.getElementById('ai-clear-btn');
    
    this.init();
  }
  
  init() {
    // Event listeners
    this.fab.addEventListener('click', () => this.open());
    this.closeBtn.addEventListener('click', () => this.close());
    this.sendBtn.addEventListener('click', () => this.sendMessage());
    this.clearBtn.addEventListener('click', () => this.clearConversation());
    
    this.input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        this.sendMessage();
      }
    });
    
    // Show welcome message
    this.showWelcomeMessage();
    this.renderSuggestions();
  }
  
  open() {
    this.isOpen = true;
    this.drawer.classList.add('open');
    this.fab.style.display = 'none';
    this.input.focus();
    
    // Update context based on current view
    this.updateContext();
  }
  
  close() {
    this.isOpen = false;
    this.drawer.classList.remove('open');
    this.fab.style.display = 'flex';
  }
  
  updateContext() {
    // Determine current context (overview or coaching a specific rep)
    const coachingView = document.getElementById('coaching');
    if (coachingView.classList.contains('active')) {
      this.currentContext = {
        view: 'coaching',
        rep: currentRep
      };
    } else {
      this.currentContext = {
        view: 'overview',
        team: reps
      };
    }
  }
  
  showWelcomeMessage() {
    const welcomeHTML = `
      <div class="ai-empty-state">
        <div class="ai-empty-icon">✦</div>
        <div class="ai-empty-title">AI Coaching Assistant</div>
        <div class="ai-empty-text">
          I'm your AI-powered sales coaching copilot. Ask me anything about your team's performance, get coaching recommendations, or generate 1:1 agendas.
        </div>
      </div>
    `;
    this.messagesContainer.innerHTML = welcomeHTML;
  }
  
  renderSuggestions() {
    const suggestions = this.getSuggestions();
    
    const suggestionsHTML = `
      <div class="ai-suggestions-title">Suggested prompts</div>
      <div class="ai-suggestion-chips">
        ${suggestions.map(s => `
          <button class="ai-suggestion-chip" data-prompt="${s}">
            ${s}
          </button>
        `).join('')}
      </div>
    `;
    
    this.suggestionsContainer.innerHTML = suggestionsHTML;
    
    // Add click handlers
    this.suggestionsContainer.querySelectorAll('.ai-suggestion-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const prompt = chip.dataset.prompt;
        this.input.value = prompt;
        this.sendMessage();
      });
    });
  }
  
  getSuggestions() {
    if (this.currentContext && this.currentContext.view === 'coaching') {
      const rep = this.currentContext.rep;
      return [
        `Why is ${rep.name.split(' ')[0]} at risk?`,
        'Generate a coaching agenda',
        'How can they close the gap?',
        'Compare to team average',
        'What should I focus on?'
      ];
    } else {
      return [
        'Who needs coaching this week?',
        'Show team performance summary',
        'Which reps are at risk?',
        'Analyze opportunity creation',
        'Generate executive summary'
      ];
    }
  }
  
  async sendMessage() {
    const message = this.input.value.trim();
    if (!message) return;
    
    // Clear input
    this.input.value = '';
    
    // Remove welcome message if present
    const emptyState = this.messagesContainer.querySelector('.ai-empty-state');
    if (emptyState) {
      emptyState.remove();
    }
    
    // Add user message
    this.addMessage('user', message);
    
    // Show typing indicator
    this.showTypingIndicator();
    
    // Generate response (simulate delay)
    setTimeout(async () => {
      this.hideTypingIndicator();
      const response = await this.generateResponse(message);
      this.addMessage('assistant', response.text, response.card);
      
      // Update suggestions
      this.renderSuggestions();
    }, 800);
  }
  
  addMessage(role, text, card = null) {
    const time = new Date().toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit'
    });
    
    const messageHTML = `
      <div class="ai-message ${role}">
        <div class="ai-message-avatar">
          ${role === 'assistant' ? '✦' : '👤'}
        </div>
        <div class="ai-message-content">
          <div class="ai-message-header">
            <span class="ai-message-name">${role === 'assistant' ? 'AI Coach' : 'You'}</span>
            <span class="ai-message-time">${time}</span>
          </div>
          <div class="ai-message-text">${text}</div>
          ${card ? card : ''}
        </div>
      </div>
    `;
    
    this.messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    
    // Store in history
    this.conversationHistory.push({ role, text, time });
  }
  
  showTypingIndicator() {
    const typingHTML = `
      <div class="ai-typing" id="ai-typing">
        <div class="ai-message-avatar">✦</div>
        <div class="ai-typing-dots">
          <span class="ai-typing-dot"></span>
          <span class="ai-typing-dot"></span>
          <span class="ai-typing-dot"></span>
        </div>
      </div>
    `;
    this.messagesContainer.insertAdjacentHTML('beforeend', typingHTML);
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
  }
  
  hideTypingIndicator() {
    const typing = document.getElementById('ai-typing');
    if (typing) typing.remove();
  }
  
  async generateResponse(message) {
    this.updateContext();
    
    const intent = this.analyzeIntent(message);
    
    switch(intent) {
      case 'risk_analysis':
        return this.generateRiskAnalysis();
      case 'coaching_agenda':
        return this.generateCoachingAgenda();
      case 'gap_closing':
        return this.generateGapClosingPlan();
      case 'team_comparison':
        return this.generateTeamComparison();
      case 'focus_areas':
        return this.generateFocusAreas();
      case 'team_summary':
        return this.generateTeamSummary();
      case 'at_risk_reps':
        return this.generateAtRiskReps();
      case 'executive_summary':
        return this.generateExecutiveSummary();
      case 'what_if':
        return this.generateWhatIfAnalysis(message);
      default:
        return this.generateGeneralResponse(message);
    }
  }
  
  analyzeIntent(message) {
    const msg = message.toLowerCase();
    
    // Risk analysis
    if ((msg.includes('why') || msg.includes('explain')) &&
        (msg.includes('risk') || msg.includes('behind') || msg.includes('problem'))) {
      return 'risk_analysis';
    }
    
    // Coaching agenda
    if (msg.includes('agenda') || msg.includes('1:1') || msg.includes('meeting')) {
      return 'coaching_agenda';
    }
    
    // Gap closing
    if ((msg.includes('close') || msg.includes('fill')) && msg.includes('gap')) {
      return 'gap_closing';
    }
    
    // Team comparison
    if (msg.includes('compare') || msg.includes('vs') || msg.includes('versus') ||
        msg.includes('benchmark')) {
      return 'team_comparison';
    }
    
    // Focus areas
    if (msg.includes('focus') || msg.includes('priority') || msg.includes('priorities')) {
      return 'focus_areas';
    }
    
    // Team summary
    if (msg.includes('team') && (msg.includes('summary') || msg.includes('overview') ||
        msg.includes('performance'))) {
      return 'team_summary';
    }
    
    // At-risk reps
    if (msg.includes('at risk') || msg.includes('at-risk') || msg.includes('who needs')) {
      return 'at_risk_reps';
    }
    
    // Executive summary
    if (msg.includes('executive') && msg.includes('summary')) {
      return 'executive_summary';
    }
    
    // What-if analysis
    if (msg.includes('what if') || msg.includes('if we') || msg.includes('if they')) {
      return 'what_if';
    }
    
    return 'general';
  }
  
  generateRiskAnalysis() {
    if (!this.currentContext || this.currentContext.view !== 'coaching') {
      return {
        text: 'Please navigate to a rep\'s coaching page to analyze their specific risk factors.'
      };
    }
    
    const rep = this.currentContext.rep;
    const gap = rep.goal - rep.pipeline;
    const untouched = rep.accountsAssigned - rep.accountsTouched;
    const touchRate = Math.round((rep.accountsTouched / rep.accountsAssigned) * 100);
    
    // Find exposed areas
    const exposedAreas = Object.entries(rep.zoomOut)
      .filter(([key, val]) => val.status === 'exposed')
      .map(([key, val]) => ({ area: key, ...val }));
    
    const cardHTML = `
      <div class="ai-coaching-card">
        <div class="ai-coaching-card-header">
          <span class="ai-coaching-card-icon">⚠️</span>
          <span class="ai-coaching-card-title">Risk Breakdown</span>
        </div>
        <div class="ai-coaching-card-content">
          <div class="ai-metric-row">
            <span class="ai-metric-label">Risk Score</span>
            <span class="ai-metric-value negative">${rep.risk}%</span>
          </div>
          <div class="ai-metric-row">
            <span class="ai-metric-label">Pipeline Gap</span>
            <span class="ai-metric-value negative">${formatCurrency(gap)}</span>
          </div>
          <div class="ai-metric-row">
            <span class="ai-metric-label">Territory Coverage</span>
            <span class="ai-metric-value ${touchRate < 30 ? 'negative' : ''}">${touchRate}%</span>
          </div>
          <div class="ai-metric-row">
            <span class="ai-metric-label">Opportunities</span>
            <span class="ai-metric-value ${rep.opportunities < rep.teamAvg ? 'negative' : 'positive'}">${rep.opportunities} (avg: ${rep.teamAvg})</span>
          </div>
        </div>
      </div>
    `;
    
    let text = `${rep.name} is at <strong>${rep.risk}% risk</strong> due to ${exposedAreas.length} critical exposure areas:\n\n`;
    
    text += `<strong>1. ${rep.exposedArea}</strong> - `;
    if (rep.exposedArea === 'Quantity') {
      text += `Only ${rep.opportunities} opportunities in pipeline (${Math.round((rep.opportunities/rep.teamAvg)*100)}% of team average)\n\n`;
    } else if (rep.exposedArea === 'Deal Size') {
      text += `Average deal size is below target, limiting pipeline growth\n\n`;
    } else if (rep.exposedArea === 'Mix') {
      text += `Limited product/segment diversity (${rep.zoomOut.mix.score}/100 score)\n\n`;
    } else {
      text += `Pipeline concentrated in few accounts (${rep.zoomOut.balance.score}/100 score)\n\n`;
    }
    
    text += `<strong>2. Pipeline Gap</strong> - Currently ${formatCurrency(gap)} below goal\n\n`;
    text += `<strong>3. Activity Metrics</strong> - ${rep.opportunities} opportunities vs team average of ${rep.teamAvg}\n\n`;
    
    // Primary driver
    if (touchRate < 30) {
      text += `<strong>Primary Driver:</strong> Low account coverage (only ${touchRate}% of territory engaged)\n\n`;
    } else if (rep.conversion < 30) {
      text += `<strong>Primary Driver:</strong> Low meeting-to-opportunity conversion (${rep.conversion}%)\n\n`;
    } else {
      text += `<strong>Primary Driver:</strong> Below-average opportunity creation\n\n`;
    }
    
    // Immediate action
    const meetingsNeeded = Math.ceil((rep.teamAvg - rep.opportunities) / (rep.conversion / 100));
    text += `<strong>Immediate Action:</strong> Touch ${Math.min(untouched, 15)} additional accounts and generate ${meetingsNeeded} more meetings this week`;
    
    return { text, card: cardHTML };
  }
  
  generateCoachingAgenda() {
    if (!this.currentContext || this.currentContext.view !== 'coaching') {
      return {
        text: 'Please navigate to a rep\'s coaching page to generate a personalized coaching agenda.'
      };
    }
    
    const rep = this.currentContext.rep;
    const gap = rep.goal - rep.pipeline;
    const untouched = rep.accountsAssigned - rep.accountsTouched;
    
    const cardHTML = `
      <div class="ai-coaching-card">
        <div class="ai-coaching-card-header">
          <span class="ai-coaching-card-icon">📋</span>
          <span class="ai-coaching-card-title">30-Minute 1:1 Agenda</span>
        </div>
        <div class="ai-coaching-card-content">
          <strong>1. Pipeline Review (10 min)</strong>
          <ul>
            <li>Current: ${formatCurrency(rep.pipeline)} | Gap: ${formatCurrency(gap)}</li>
            <li>Ask: "Walk me through your top 3 opportunities"</li>
            <li>Ask: "Which deals are honestly not likely to close?"</li>
          </ul>
          
          <strong>2. Activity & Coverage (12 min)</strong>
          <ul>
            <li>Coverage: ${rep.accountsTouched}/${rep.accountsAssigned} accounts touched</li>
            <li>Ask: "Which accounts should we prioritize this week?"</li>
            <li>Action: Commit to touching ${Math.min(untouched, 15)} accounts</li>
          </ul>
          
          <strong>3. Skill Development (5 min)</strong>
          <ul>
            <li>Conversion: ${rep.conversion}% (${rep.conversion < 30 ? 'below' : 'at'} target)</li>
            <li>Focus: ${rep.conversion < 25 ? 'Discovery and qualification' : rep.conversion < 35 ? 'Value proposition delivery' : 'Deal acceleration'}</li>
          </ul>
          
          <strong>4. Commitments (3 min)</strong>
          <ul>
            <li>This week: ${Math.ceil((rep.teamAvg - rep.opportunities) / (rep.conversion / 100))} meetings, ${Math.min(15, untouched)} account touches</li>
            <li>Follow-up: Friday check-in</li>
          </ul>
        </div>
      </div>
    `;
    
    return {
      text: `I've created a structured 30-minute coaching agenda for ${rep.name} that focuses on their key exposure areas and drives specific commitments.`,
      card: cardHTML
    };
  }
  
  generateGapClosingPlan() {
    if (!this.currentContext || this.currentContext.view !== 'coaching') {
      return {
        text: 'Please navigate to a rep\'s coaching page to generate a gap-closing plan.'
      };
    }
    
    const rep = this.currentContext.rep;
    const gap = rep.goal - rep.pipeline;
    const avgDeal = rep.pipeline / rep.opportunities;
    const oppsNeeded = Math.ceil(gap / avgDeal);
    
    const cardHTML = `
      <div class="ai-coaching-card">
        <div class="ai-coaching-card-header">
          <span class="ai-coaching-card-icon">🎯</span>
          <span class="ai-coaching-card-title">Gap Closing Strategy</span>
        </div>
        <div class="ai-coaching-card-content">
          <strong>Path 1: New Opportunities (Recommended)</strong>
          <ul>
            <li>Create ${oppsNeeded} new opportunities at ${formatCurrency(avgDeal)} average</li>
            <li>Required: ${Math.ceil(oppsNeeded / (rep.conversion/100))} additional meetings</li>
            <li>Timeline: 2-3 weeks</li>
            <li>Probability: ${Math.min(85, 50 + (rep.conversion * 0.8))}%</li>
          </ul>
          
          <strong>Path 2: Expand Existing Deals</strong>
          <ul>
            <li>Upsell/cross-sell top ${Math.min(3, rep.opportunities)} opportunities</li>
            <li>Target: +${formatCurrency(gap/3)} per deal</li>
            <li>Timeline: 1-2 weeks</li>
            <li>Probability: ${Math.min(75, 40 + (rep.zoomOut.dealSize.score * 0.4))}%</li>
          </ul>
          
          <strong>Path 3: Accelerate Pipeline</strong>
          <ul>
            <li>Move ${Math.min(2, rep.opportunities)} deals forward one stage</li>
            <li>Pull forward ${formatCurrency(gap)} from next quarter</li>
            <li>Timeline: 1 week</li>
            <li>Probability: ${Math.min(65, 30 + (rep.coverage * 10))}%</li>
          </ul>
          
          <strong>Recommended Approach:</strong>
          <ul>
            <li>70% effort on new opportunity creation (Path 1)</li>
            <li>30% effort on expanding existing deals (Path 2)</li>
            <li>Expected outcome: Close gap in 2-3 weeks</li>
          </ul>
        </div>
      </div>
    `;
    
    return {
      text: `To close the ${formatCurrency(gap)} pipeline gap, ${rep.name} has three strategic paths. I recommend combining Path 1 (new opportunities) with Path 2 (deal expansion) for the highest probability of success.`,
      card: cardHTML
    };
  }
  
  generateTeamComparison() {
    if (!this.currentContext || this.currentContext.view !== 'coaching') {
      return {
        text: 'Please navigate to a rep\'s coaching page to compare their performance to the team.'
      };
    }
    
    const rep = this.currentContext.rep;
    const teamAvg = {
      pipeline: reps.reduce((sum, r) => sum + r.pipeline, 0) / reps.length,
      opportunities: reps.reduce((sum, r) => sum + r.opportunities, 0) / reps.length,
      meetings: reps.reduce((sum, r) => sum + r.meetings, 0) / reps.length,
      conversion: reps.reduce((sum, r) => sum + r.conversion, 0) / reps.length,
      coverage: reps.reduce((sum, r) => sum + r.coverage, 0) / reps.length
    };
    
    const cardHTML = `
      <div class="ai-coaching-card">
        <div class="ai-coaching-card-header">
          <span class="ai-coaching-card-icon">📊</span>
          <span class="ai-coaching-card-title">Performance vs Team Average</span>
        </div>
        <div class="ai-coaching-card-content">
          <div class="ai-metric-row">
            <span class="ai-metric-label">Pipeline</span>
            <span class="ai-metric-value ${rep.pipeline >= teamAvg.pipeline ? 'positive' : 'negative'}">
              ${formatCurrency(rep.pipeline)} vs ${formatCurrency(teamAvg.pipeline)}
              (${rep.pipeline >= teamAvg.pipeline ? '+' : ''}${Math.round((rep.pipeline/teamAvg.pipeline - 1) * 100)}%)
            </span>
          </div>
          <div class="ai-metric-row">
            <span class="ai-metric-label">Opportunities</span>
            <span class="ai-metric-value ${rep.opportunities >= teamAvg.opportunities ? 'positive' : 'negative'}">
              ${rep.opportunities} vs ${teamAvg.opportunities.toFixed(1)}
              (${rep.opportunities >= teamAvg.opportunities ? '+' : ''}${Math.round((rep.opportunities/teamAvg.opportunities - 1) * 100)}%)
            </span>
          </div>
          <div class="ai-metric-row">
            <span class="ai-metric-label">Meetings</span>
            <span class="ai-metric-value ${rep.meetings >= teamAvg.meetings ? 'positive' : 'negative'}">
              ${rep.meetings} vs ${teamAvg.meetings.toFixed(1)}
              (${rep.meetings >= teamAvg.meetings ? '+' : ''}${Math.round((rep.meetings/teamAvg.meetings - 1) * 100)}%)
            </span>
          </div>
          <div class="ai-metric-row">
            <span class="ai-metric-label">Conversion Rate</span>
            <span class="ai-metric-value ${rep.conversion >= teamAvg.conversion ? 'positive' : 'negative'}">
              ${rep.conversion}% vs ${teamAvg.conversion.toFixed(0)}%
            </span>
          </div>
          <div class="ai-metric-row">
            <span class="ai-metric-label">Coverage</span>
            <span class="ai-metric-value ${rep.coverage >= teamAvg.coverage ? 'positive' : 'negative'}">
              ${rep.coverage.toFixed(1)}× vs ${teamAvg.coverage.toFixed(1)}×
            </span>
          </div>
        </div>
      </div>
    `;
    
    let insights = [];
    if (rep.opportunities < teamAvg.opportunities * 0.8) {
      insights.push(`${rep.name} is creating ${Math.round((1 - rep.opportunities/teamAvg.opportunities) * 100)}% fewer opportunities than average`);
    }
    if (rep.conversion < teamAvg.conversion * 0.9) {
      insights.push(`Conversion rate is ${Math.round(teamAvg.conversion - rep.conversion)}% below team average`);
    }
    if (rep.pipeline < teamAvg.pipeline * 0.9) {
      insights.push(`Pipeline is ${Math.round((1 - rep.pipeline/teamAvg.pipeline) * 100)}% below team average`);
    }
    
    const insightText = insights.length > 0 ?
      `\n\n<strong>Key Insights:</strong>\n${insights.map(i => `• ${i}`).join('\n')}` :
      `\n\n<strong>Key Insight:</strong> ${rep.name} is performing at or above team averages in most metrics.`;
    
    return {
      text: `Here's how ${rep.name} compares to the team across key performance metrics:${insightText}`,
      card: cardHTML
    };
  }
  
  generateFocusAreas() {
    if (!this.currentContext || this.currentContext.view !== 'coaching') {
      return {
        text: 'Please navigate to a rep\'s coaching page to identify focus areas.'
      };
    }
    
    const rep = this.currentContext.rep;
    const priorities = rep.recommendations.slice(0, 3);
    
    const cardHTML = `
      <div class="ai-coaching-card">
        <div class="ai-coaching-card-header">
          <span class="ai-coaching-card-icon">🎯</span>
          <span class="ai-coaching-card-title">Top Coaching Priorities</span>
        </div>
        <div class="ai-coaching-card-content">
          ${priorities.map((rec, i) => `
            <strong>${i + 1}. ${rec.title}</strong>
            <ul>
              <li><strong>Reason:</strong> ${rec.reason}</li>
              <li><strong>Action:</strong> ${rec.action}</li>
            </ul>
          `).join('')}
        </div>
      </div>
    `;
    
    return {
      text: `Based on ${rep.name}'s current performance data, here are the top ${priorities.length} areas to focus on in your coaching sessions:`,
      card: cardHTML
    };
  }
  
  generateTeamSummary() {
    const totalPipeline = reps.reduce((sum, r) => sum + r.pipeline, 0);
    const totalGoal = reps.reduce((sum, r) => sum + r.goal, 0);
    const atRisk = reps.filter(r => r.risk >= 50);
    const onTrack = reps.filter(r => r.risk < 50);
    
    const cardHTML = `
      <div class="ai-coaching-card">
        <div class="ai-coaching-card-header">
          <span class="ai-coaching-card-icon">👥</span>
          <span class="ai-coaching-card-title">Team Performance Summary</span>
        </div>
        <div class="ai-coaching-card-content">
          <div class="ai-metric-row">
            <span class="ai-metric-label">Team Pipeline</span>
            <span class="ai-metric-value">${formatCurrency(totalPipeline)}</span>
          </div>
          <div class="ai-metric-row">
            <span class="ai-metric-label">Team Quota</span>
            <span class="ai-metric-value">${formatCurrency(totalGoal)}</span>
          </div>
          <div class="ai-metric-row">
            <span class="ai-metric-label">Pacing</span>
            <span class="ai-metric-value ${totalPipeline >= totalGoal ? 'positive' : 'negative'}">
              ${Math.round((totalPipeline/totalGoal) * 100)}% of quota
            </span>
          </div>
          <div class="ai-metric-row">
            <span class="ai-metric-label">At-Risk Reps</span>
            <span class="ai-metric-value negative">${atRisk.length} of ${reps.length}</span>
          </div>
          <div class="ai-metric-row">
            <span class="ai-metric-label">On-Track Reps</span>
            <span class="ai-metric-value positive">${onTrack.length} of ${reps.length}</span>
          </div>
          
          <strong style="margin-top: 12px; display: block;">At-Risk Reps:</strong>
          <ul>
            ${atRisk.map(r => `<li>${r.name} (${r.risk}% risk)</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
    
    return {
      text: `Your team is currently pacing at ${Math.round((totalPipeline/totalGoal) * 100)}% of quota with ${atRisk.length} reps requiring immediate coaching attention.`,
      card: cardHTML
    };
  }
  
  generateAtRiskReps() {
    const atRisk = reps.filter(r => r.risk >= 50).sort((a, b) => b.risk - a.risk);
    
    const cardHTML = `
      <div class="ai-coaching-card">
        <div class="ai-coaching-card-header">
          <span class="ai-coaching-card-icon">⚠️</span>
          <span class="ai-coaching-card-title">Reps Needing Coaching</span>
        </div>
        <div class="ai-coaching-card-content">
          ${atRisk.map(r => {
            const gap = r.goal - r.pipeline;
            return `
              <div style="margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid var(--line);">
                <strong>${r.name}</strong> - ${r.risk}% risk
                <ul>
                  <li>Gap: ${formatCurrency(gap)}</li>
                  <li>Primary issue: ${r.exposedArea}</li>
                  <li>Action: ${r.recommendations[0].action}</li>
                </ul>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
    
    return {
      text: `${atRisk.length} reps need coaching attention this week. Here they are ranked by risk level:`,
      card: cardHTML
    };
  }
  
  generateExecutiveSummary() {
    const totalPipeline = reps.reduce((sum, r) => sum + r.pipeline, 0);
    const totalGoal = reps.reduce((sum, r) => sum + r.goal, 0);
    const atRisk = reps.filter(r => r.risk >= 50);
    const totalGap = reps.filter(r => r.pipeline < r.goal)
      .reduce((sum, r) => sum + (r.goal - r.pipeline), 0);
    
    const cardHTML = `
      <div class="ai-coaching-card">
        <div class="ai-coaching-card-header">
          <span class="ai-coaching-card-icon">📈</span>
          <span class="ai-coaching-card-title">Executive Summary</span>
        </div>
        <div class="ai-coaching-card-content">
          <strong>Current Status</strong>
          <ul>
            <li>Team pacing at ${Math.round((totalPipeline/totalGoal) * 100)}% of quota</li>
            <li>${atRisk.length} of ${reps.length} reps at risk (≥50%)</li>
            <li>Total pipeline gap: ${formatCurrency(totalGap)}</li>
          </ul>
          
          <strong>Major Concerns</strong>
          <ul>
            <li>Opportunity creation down 14% month-over-month</li>
            <li>${atRisk.length} reps require immediate intervention</li>
            <li>Territory coverage gaps across ${Math.round(atRisk.length/reps.length * 100)}% of team</li>
          </ul>
          
          <strong>Recommended Actions</strong>
          <ul>
            <li>Schedule 1:1s with ${atRisk.map(r => r.name.split(' ')[0]).join(', ')}</li>
            <li>Focus on account coverage and meeting generation</li>
            <li>Target ${Math.round(totalGap / 50000)} additional opportunities team-wide</li>
          </ul>
          
          <strong>Forecast</strong>
          <ul>
            <li>With current trajectory: ${Math.round((totalPipeline/totalGoal) * 100)}% quota attainment</li>
            <li>With recommended actions: ${Math.min(100, Math.round((totalPipeline/totalGoal) * 100) + 15)}% quota attainment</li>
          </ul>
        </div>
      </div>
    `;
    
    return {
      text: `Here's your executive summary for Q3 Week 8:`,
      card: cardHTML
    };
  }
  
  generateWhatIfAnalysis(message) {
    if (!this.currentContext || this.currentContext.view !== 'coaching') {
      return {
        text: 'Please navigate to a rep\'s coaching page to run what-if scenarios.'
      };
    }
    
    const rep = this.currentContext.rep;
    
    // Extract numbers from message
    const numbers = message.match(/\d+/g);
    if (!numbers || numbers.length === 0) {
      return {
        text: 'Please specify a number in your what-if question. For example: "What if Jordan adds 5 meetings?" or "What if conversion improves by 10%?"'
      };
    }
    
    const value = parseInt(numbers[0]);
    
    // Determine what-if type
    let scenario = '';
    let newOpps = rep.opportunities;
    let newPipeline = rep.pipeline;
    let newRisk = rep.risk;
    
    if (message.toLowerCase().includes('meeting')) {
      scenario = `${value} additional meetings`;
      const newOppsFromMeetings = Math.round(value * (rep.conversion / 100));
      newOpps += newOppsFromMeetings;
      const avgDeal = rep.pipeline / rep.opportunities;
      newPipeline += newOppsFromMeetings * avgDeal;
      newRisk = Math.max(20, rep.risk - (newOppsFromMeetings * 8));
    } else if (message.toLowerCase().includes('opportunit')) {
      scenario = `${value} additional opportunities`;
      newOpps += value;
      const avgDeal = rep.pipeline / rep.opportunities;
      newPipeline += value * avgDeal;
      newRisk = Math.max(20, rep.risk - (value * 8));
    } else if (message.toLowerCase().includes('conversion')) {
      scenario = `${value}% improvement in conversion rate`;
      const newConversion = rep.conversion + value;
      const additionalOpps = Math.round(rep.meetings * (value / 100));
      newOpps += additionalOpps;
      const avgDeal = rep.pipeline / rep.opportunities;
      newPipeline += additionalOpps * avgDeal;
      newRisk = Math.max(20, rep.risk - (additionalOpps * 8));
    }
    
    const cardHTML = `
      <div class="ai-coaching-card">
        <div class="ai-coaching-card-header">
          <span class="ai-coaching-card-icon">🔮</span>
          <span class="ai-coaching-card-title">What-If Analysis</span>
        </div>
        <div class="ai-coaching-card-content">
          <strong>Scenario: ${scenario}</strong>
          
          <div style="margin-top: 12px;">
            <div class="ai-metric-row">
              <span class="ai-metric-label">Current Pipeline</span>
              <span class="ai-metric-value">${formatCurrency(rep.pipeline)}</span>
            </div>
            <div class="ai-metric-row">
              <span class="ai-metric-label">Projected Pipeline</span>
              <span class="ai-metric-value positive">${formatCurrency(newPipeline)}</span>
            </div>
            <div class="ai-metric-row">
              <span class="ai-metric-label">Pipeline Increase</span>
              <span class="ai-metric-value positive">+${formatCurrency(newPipeline - rep.pipeline)}</span>
            </div>
          </div>
          
          <div style="margin-top: 12px;">
            <div class="ai-metric-row">
              <span class="ai-metric-label">Current Opportunities</span>
              <span class="ai-metric-value">${rep.opportunities}</span>
            </div>
            <div class="ai-metric-row">
              <span class="ai-metric-label">Projected Opportunities</span>
              <span class="ai-metric-value positive">${newOpps}</span>
            </div>
          </div>
          
          <div style="margin-top: 12px;">
            <div class="ai-metric-row">
              <span class="ai-metric-label">Current Risk</span>
              <span class="ai-metric-value negative">${rep.risk}%</span>
            </div>
            <div class="ai-metric-row">
              <span class="ai-metric-label">Projected Risk</span>
              <span class="ai-metric-value ${newRisk < 50 ? 'positive' : 'negative'}">${newRisk}%</span>
            </div>
            <div class="ai-metric-row">
              <span class="ai-metric-label">Risk Reduction</span>
              <span class="ai-metric-value positive">-${rep.risk - newRisk}%</span>
            </div>
          </div>
          
          <strong style="margin-top: 12px; display: block;">Impact:</strong>
          <ul>
            <li>${newPipeline >= rep.goal ? '✅ Would close pipeline gap' : `⚠️ Still ${formatCurrency(rep.goal - newPipeline)} below goal`}</li>
            <li>${newRisk < 50 ? '✅ Would move to low-risk category' : '⚠️ Would remain at-risk'}</li>
            <li>Quota probability: ${Math.min(95, Math.round((newPipeline / rep.goal) * 100))}%</li>
          </ul>
        </div>
      </div>
    `;
    
    return {
      text: `Here's the projected impact if ${rep.name} achieves ${scenario}:`,
      card: cardHTML
    };
  }
  
  generateGeneralResponse(message) {
    if (this.currentContext && this.currentContext.view === 'coaching') {
      const rep = this.currentContext.rep;
      return {
        text: `I can help you with ${rep.name}'s coaching. Try asking:\n\n• "Why is ${rep.name.split(' ')[0]} at risk?"\n• "Generate a coaching agenda"\n• "How can they close the gap?"\n• "Compare to team average"\n• "What if they add 5 meetings?"`
      };
    } else {
      return {
        text: `I can help you with team coaching and performance analysis. Try asking:\n\n• "Who needs coaching this week?"\n• "Show team performance summary"\n• "Which reps are at risk?"\n• "Generate executive summary"\n\nOr navigate to a specific rep's coaching page for personalized insights.`
      };
    }
  }
  
  clearConversation() {
    this.conversationHistory = [];
    this.messagesContainer.innerHTML = '';
    this.showWelcomeMessage();
    this.renderSuggestions();
  }
}

// Initialize AI Coach
let aiCoach;
document.addEventListener('DOMContentLoaded', () => {
  aiCoach = new AICoach();
});

// Made with Bob
