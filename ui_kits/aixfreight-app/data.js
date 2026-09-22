window.AIX_DATA = {
  shipments: [
    { id: 'AIX-48211', origin: 'Shenzhen, CN', dest: 'Hamburg, DE', mode: 'ocean', status: 'success', label: 'On time', eta: '14 Sep · 09:40', cargo: '2 × 40HC · 18,200 kg', value: '$12,480', progress: 62 },
    { id: 'AIX-48197', origin: 'Chicago, US', dest: 'Monterrey, MX', mode: 'land', status: 'warning', label: 'At risk', eta: '11 Sep · 16:00', cargo: '1 × 53ft · 21,000 kg', value: '$3,940', progress: 41 },
    { id: 'AIX-48190', origin: 'Frankfurt, DE', dest: 'Nairobi, KE', mode: 'air', status: 'success', label: 'On time', eta: '10 Sep · 22:15', cargo: '6 pallets · 2,400 kg', value: '$8,120', progress: 88 },
    { id: 'AIX-48176', origin: 'Rotterdam, NL', dest: 'Santos, BR', mode: 'ocean', status: 'danger', label: 'Delayed', eta: '19 Sep · 07:00', cargo: '4 × 20GP · 44,000 kg', value: '$21,300', progress: 30 },
    { id: 'AIX-48163', origin: 'Duisburg, DE', dest: 'Chengdu, CN', mode: 'rail', status: 'success', label: 'On time', eta: '22 Sep · 12:00', cargo: '3 × 40HC · 52,000 kg', value: '$15,760', progress: 18 },
    { id: 'AIX-48150', origin: 'Los Angeles, US', dest: 'Tokyo, JP', mode: 'air', status: 'neutral', label: 'Booked', eta: '12 Sep · 05:30', cargo: '2 pallets · 640 kg', value: '$2,210', progress: 5 },
  ],
  recommendations: [
    { id: 'r1', title: 'Switch lane 2 to air', body: 'Port congestion at Los Angeles adds 4.2 days to AIX-48197. Moving the priority pallets to air keeps the delivery window.', delta: '+$1,120', gain: '−4.1 days', confidence: 94, shipment: 'AIX-48197', sources: [{ label: 'Port of LA congestion feed', time: '09:40' }, { label: 'Carrier air rates · 3 quotes', time: '09:38' }], limits: ['Customs dwell at Frankfurt not modelled', 'Air rates valid 2h'] },
    { id: 'r2', title: 'Consolidate 2 LCL bookings', body: 'AIX-48176 and a Rotterdam LCL share a sailing on 12 Sep. One FCL saves handling and reduces CO₂ by 18%.', delta: '−$860', gain: '−18% CO₂', confidence: 81, shipment: 'AIX-48176', sources: [{ label: 'Rotterdam sailing schedule', time: '08:55' }, { label: 'CO₂ model · GLEC v3', time: '08:55' }], limits: ['Partner LCL cut-off not confirmed'] },
  ],
  events: [
    { t: '08 Sep · 14:20', title: 'Departed Yantian terminal', where: 'Shenzhen, CN', done: true },
    { t: '09 Sep · 03:05', title: 'Vessel MSC Aurora underway', where: 'South China Sea', done: true },
    { t: '10 Sep · 11:00', title: 'AI ETA revised −6h', where: 'Weather window, Malacca', done: true, ai: true },
    { t: '13 Sep', title: 'Arrival Port of Hamburg', where: 'Hamburg, DE', done: false },
    { t: '14 Sep · 09:40', title: 'Delivery — Hamburg DC', where: 'Billbrook, Hamburg', done: false },
  ],
};