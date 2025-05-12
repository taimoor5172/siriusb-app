import { MenuData } from '../interfaces/navigation';

export const menuData: MenuData = {
  products: [
    { name: 'Awow Company', path: 'https://awowcompany.com/' },
    { name: 'SiriusBpk', path: 'https://siriusb.pk/' },
    { name: 'Yakaaz', path: 'http://yakaaz.siriusb.pk/' },
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