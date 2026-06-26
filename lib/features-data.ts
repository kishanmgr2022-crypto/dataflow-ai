const isProd = process.env.NODE_ENV === 'production';
export const basePath = isProd ? '/dataflow-ai' : '';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string; // SVG icon identifier
  image: string; // path to feature illustration
  gridSpan: { col: number; row: number }; // bento grid sizing
}

export const FEATURES: Feature[] = [
  {
    id: 'smart-pipelines',
    title: 'Smart Pipelines',
    description:
      'Build intelligent data pipelines that automatically adapt to schema changes and optimize throughput using AI-driven orchestration.',
    icon: 'pipeline',
    image: '/features/smart-pipelines.png',
    gridSpan: { col: 2, row: 2 },
  },
  {
    id: 'ai-transforms',
    title: 'AI Transformations',
    description:
      'Leverage pre-trained models to clean, enrich, and transform data in real-time — no ML expertise required.',
    icon: 'transform',
    image: '/features/ai-transforms.png',
    gridSpan: { col: 1, row: 1 },
  },
  {
    id: 'real-time-sync',
    title: 'Real-Time Sync',
    description:
      'Keep every system in perfect harmony with sub-second data synchronization across 200+ connectors.',
    icon: 'sync',
    image: '/features/real-time-sync.png',
    gridSpan: { col: 1, row: 1 },
  },
  {
    id: 'anomaly-detection',
    title: 'Anomaly Detection',
    description:
      'Catch data quality issues before they impact your business with ML-powered anomaly detection and automated alerts.',
    icon: 'shield',
    image: '/features/anomaly-detection.png',
    gridSpan: { col: 1, row: 2 },
  },
  {
    id: 'visual-builder',
    title: 'Visual Flow Builder',
    description:
      'Design complex automation workflows with a drag-and-drop interface — from simple ETL to multi-step AI pipelines.',
    icon: 'builder',
    image: '/features/visual-builder.png',
    gridSpan: { col: 2, row: 1 },
  },
  {
    id: 'analytics',
    title: 'Predictive Analytics',
    description:
      'Unlock forward-looking insights with built-in predictive models that turn historical data into actionable forecasts.',
    icon: 'analytics',
    image: '/features/analytics.png',
    gridSpan: { col: 1, row: 1 },
  },
];
