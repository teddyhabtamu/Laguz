import React from 'react';
import { 
  ShieldCheck, 
  Truck, 
  Warehouse, 
  Ship, 
  FileText, 
  Plane, 
  Anchor, 
  Compass,
  Box,
  HardHat,
  MessageSquare,
  Home,
  Globe
} from 'lucide-react';
import { Service, StatItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'customs-clearance',
    title: 'Customs Clearance',
    description: 'Expert Ethiopian regulatory brokerage, manifest processing, and full-screen documentation support for rapid cargo release.',
    icon: 'FileText',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'transportation',
    title: 'Transportation',
    description: 'Specialized heavy-duty inland haulage connecting regional ports to industrial hubs with maximum efficiency using modern HGV fleets.',
    icon: 'Truck',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'sea-freight',
    title: 'Sea Freight',
    description: 'Comprehensive global shipping routes, focusing on large-scale container management and port terminal logistics.',
    icon: 'Ship',
    image: 'https://images.unsplash.com/photo-1617952739858-28043cecdae3?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'air-freight',
    title: 'Air Freight',
    description: 'Time-critical air cargo solutions for high-value and urgent shipments across international air corridors.',
    icon: 'Plane',
    image: 'https://images.unsplash.com/photo-1713846047266-12aa96cbbb6c?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'warehousing',
    title: 'Warehousing',
    description: 'Strategic storage solutions with advanced inventory tracking and cross-docking capabilities in key locations.',
    icon: 'Warehouse',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'port-handling',
    title: 'Port Handling',
    description: 'Expert management of vessel loading and unloading, specialized equipment handling, and port-to-port synergy.',
    icon: 'Anchor',
    image: 'https://images.unsplash.com/photo-1524522173746-f628baad3644?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'consultancy',
    title: 'Consultancy',
    description: 'Strategic supply chain advisory, feasibility studies, and regulatory guidance for complex logistics projects.',
    icon: 'MessageSquare',
    image: 'https://media.istockphoto.com/id/2214155412/photo/two-professional-male-managers-wearing-hard-hats-check-inventory-and-orders-delivering-goods.jpg?s=612x612&w=0&k=20&c=9Es7tKKllBfdwrCODxpfZWymjk1sOaqJ-LVxRoY7V70='
  },
  {
    id: 'door-to-door',
    title: 'Door To Door',
    description: 'Seamless end-to-end logistics solutions managing the entire manifest from origin directly to final destination.',
    icon: 'Home',
    image: 'https://images.unsplash.com/photo-1587813369290-091c9d432daf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGVsaXZlcnklMjB0cnVja3xlbnwwfHwwfHx8MA%3D%3D'
  }
];

export const STATS: StatItem[] = [
  { name: 'Vessels Tracked', value: 2400 },
  { name: 'Global Network Port', value: 85 },
  { name: 'Client Retention Rate', value: 98 },
  { name: 'Tons Handled Yearly', value: 450 },
];

export const HIGHLIGHTS = [
  { title: 'Operational Excellence', description: 'Strength beyond borders through systematic coordination.', icon: Anchor },
  { title: 'Digital Transparency', description: 'Real-time tracking and full manifest visibility.', icon: Globe },
  { title: 'Safety Manifest', description: 'Strict adherence to international maritime safety standards.', icon: ShieldCheck },
  { title: 'Supply Resilience', description: 'Adaptive routing to ensure delivery during global disruptions.', icon: Box }
];