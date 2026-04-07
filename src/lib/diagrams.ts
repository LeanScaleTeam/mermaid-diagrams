export interface Diagram {
  category: string;
  code: string;
  description: string;
  id: string;
  title: string;
}

export const diagrams: Diagram[] = [
  {
    category: 'GTM',
    code: `flowchart TD
    A[New Lead] -->|Qualify| B{MQL?}
    B -->|Yes| C[SDR Outreach]
    B -->|No| D[Nurture Campaign]
    D --> A
    C -->|Meeting Booked| E[Discovery Call]
    E --> F{Qualified Opp?}
    F -->|Yes| G[Demo / Proposal]
    F -->|No| D
    G --> H{Decision}
    H -->|Won| I[Closed Won]
    H -->|Lost| J[Closed Lost]
    J --> K[Win/Loss Analysis]`,
    description: 'Standard B2B sales pipeline from lead to close',
    id: 'sales-process',
    title: 'Sales Process'
  },
  {
    category: 'Architecture',
    code: `flowchart LR
    subgraph Sources
        W[Website Forms]
        E[Email Campaigns]
        L[LinkedIn Ads]
    end
    subgraph CRM
        S[Salesforce]
        H[HubSpot]
    end
    subgraph Analytics
        BI[BI Dashboard]
        R[Reports]
    end
    W --> H
    E --> H
    L --> H
    H -->|Sync| S
    S --> BI
    H --> BI
    BI --> R`,
    description: 'How data moves between CRM systems',
    id: 'data-flow',
    title: 'CRM Data Flow'
  },
  {
    category: 'Operations',
    code: `flowchart TD
    A[Deal Closed] --> B[Kickoff Meeting Scheduled]
    B --> C[Technical Setup]
    B --> D[Account Configuration]
    C --> E{Integration Required?}
    E -->|Yes| F[API Setup]
    E -->|No| G[Standard Config]
    F --> H[Integration Testing]
    D --> I[User Provisioning]
    G --> I
    H --> I
    I --> J[Training Session]
    J --> K[Go Live]
    K --> L[30-Day Check-in]`,
    description: 'Post-sale customer onboarding workflow',
    id: 'onboarding',
    title: 'Customer Onboarding'
  },
  {
    category: 'Architecture',
    code: `graph TB
    subgraph Engagement
        CMS[CMS / Website]
        Email[Email Platform]
        Social[Social Tools]
        Ads[Ad Platforms]
    end
    subgraph Orchestration
        MAP[Marketing Automation]
        SEQ[Sales Sequences]
    end
    subgraph CRM Layer
        SF[Salesforce]
        HS[HubSpot]
    end
    subgraph Intelligence
        BI[BI / Analytics]
        ENRICH[Data Enrichment]
        INTENT[Intent Data]
    end
    CMS --> MAP
    Email --> MAP
    Social --> MAP
    Ads --> MAP
    MAP --> SF
    MAP --> HS
    SEQ --> SF
    ENRICH --> SF
    INTENT --> MAP
    SF --> BI
    HS --> BI`,
    description: 'Marketing and sales technology architecture',
    id: 'tech-stack',
    title: 'GTM Tech Stack'
  },
  {
    category: 'Operations',
    code: `flowchart LR
    A[Backlog Grooming] --> B[Sprint Planning]
    B --> C[Development]
    C --> D[Code Review]
    D --> E{Approved?}
    E -->|Yes| F[QA Testing]
    E -->|No| C
    F --> G{Passed?}
    G -->|Yes| H[Deploy to Staging]
    G -->|No| C
    H --> I[UAT]
    I --> J[Production Deploy]
    J --> K[Sprint Review]
    K --> L[Retrospective]
    L --> A`,
    description: 'Agile sprint process from planning to retro',
    id: 'sprint-workflow',
    title: 'Sprint Workflow'
  }
];

export const categories = [...new Set(diagrams.map((d) => d.category))];
