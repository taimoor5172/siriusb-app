import { MenuData } from '../interfaces/navigation';

export const menuData: MenuData = {
  products: [
    { name: 'SpatialSense Scanner', path: '/products/spatial-scanner' },
    { name: 'SpatialSense Cloud', path: '/products/spatial-cloud' },
    { name: 'SpatialSense Edge Device', path: '/products/spatial-edge' },
  ],
  solutions: [
    { name: 'SpatialTwin: TreeGuard', path: '/solutions/treeguard' },
    { name: 'SpatialTwin: TrackVision', path: '/solutions/trackvision' },
    { name: 'SpatialTwin: BlastVue', path: '/solutions/blastvue' },
  ],
  resources: [
    { name: 'Documentation', path: '/resources/docs' },
    { name: 'Blog', path: '/resources/blog' },
    { name: 'Support', path: '/resources/support' },
  ],
}; 