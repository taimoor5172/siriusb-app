
import { Product } from "../interfaces/product"

export const productData: Product[] = [
    {
      id: 'ai',
      title: 'AI',
      icon: "https://www.blackngreen.com/img/AI.svg",
      description: 'Our AI solutions help telecom operators leverage machine learning...',
      features: ['Predictive Maintenance', 'Customer Behavior Analysis', 'Network Optimization', 'Automated Customer Support']
    },
    {
      id: 'digital',
      title: 'Digital',
      icon: "https://www.blackngreen.com/img/digital.svg",
      description: 'Our digital transformation solutions help telecom companies adapt to the rapidly evolving digital landscape, enabling new business models and revenue streams.',
      features: ['Digital Customer Experience', 'Business Process Automation', 'Digital Marketplace Solutions', 'Connected Systems Integration']
    },
    {
      id: 'platform',
      title: 'Platform',
      icon: "https://www.blackngreen.com/img/platform.svg",
      description: 'Our unified platform solutions provide telecom operators with powerful tools to manage their networks, services, and customer relationships from a single interface.',
      features: ['Unified Communications', 'Multi-device Management', 'Cloud Integration', 'Scalable Infrastructure Solutions']
    }
  ];
