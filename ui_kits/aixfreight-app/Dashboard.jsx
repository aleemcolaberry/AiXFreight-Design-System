const { Card, Badge, ModeBadge, Button, Icon, Table, StatCard, AiDisclosure, AiFeedback } = window.AiXFreightDesignSystem_0c3a26;
const SHIP_COLS = [{key:'id',label:'Shipment',mono:true},{key:'lane',label:'Lane',muted:true,render:(v,s)=>s.origin+' → '+s.dest},{key:'mode',label:'Mode',render:m=><ModeBadge mode={m} size="sm"/>},{key:'status',label:'Status',render:(v,s)=><Badge tone={s.status} dot>{s.label}</Badge>},{key:'eta',label:'ETA',mono:true,muted:true,nowrap:true}];
window.SHIP_COLS = SHIP_COLS;
function Stat({ label, value, delta, tone }) { return <StatCard label={label} value={value} delta={delta} deltaTone={tone}/>; }
function Dashboard({ go, openRec }) {
  const D = window.AIX_DATA;
  return <div className="aix-page">
    <div className="aix-stats"><Stat label="Active shipments" value="128" delta="+6" tone="info"/><Stat label="On-time rate" value="96.2%" delta="+1.4" tone="success"/><Stat label="Exceptions" value="3" delta="2 new" tone="danger"/><Stat label="AI savings · Sep" value="$41.2k" delta="Live" tone="ai"/></div>
    <Card eyebrow="Live" title="Shipments in motion" actions={<Button size="sm" variant="ghost" iconRight="arrowRight" onClick={()=>go('shipments')}>All shipments</Button>} padding={0}>
      <Table columns={SHIP_COLS} rows={D.shipments.slice(0,4)} onRowClick={s=>go('detail',s)}/>
    </Card>
    <div style={{display:'flex',flexDirection:'column',gap:16}}>
      {D.recommendations.map(r=><Card key={r.id} inverse eyebrow="AI recommendation" title={r.title} footer={<><AiFeedback inverse size="sm" label="" style={{flex:1}}/><Button size="sm" icon="sparkles" onClick={()=>openRec(r)}>Review</Button></>}>
        <div style={{display:'flex',gap:16,fontFamily:'var(--font-mono)',fontWeight:500,fontSize:13}}><span style={{color:'var(--color-gold)'}}>{r.delta}</span><span style={{color:'var(--color-eco)'}}>{r.gain}</span><span style={{color:'var(--text-on-inverse-muted)'}}>{r.confidence}%</span></div>
        <AiDisclosure inverse confidence={r.confidence} rationale={r.body} sources={r.sources} limits={r.limits} style={{marginTop:12}}/></Card>)}
    </div>
    <Card eyebrow="Network" title="Mode mix · last 30 days" style={{gridColumn:'1 / -1'}}>
      <div style={{display:'flex',height:14,borderRadius:999,overflow:'hidden',gap:2}}><div style={{flex:54,background:'var(--color-ocean)'}}/><div style={{flex:22,background:'var(--color-land)'}}/><div style={{flex:16,background:'var(--color-air)'}}/><div style={{flex:8,background:'var(--color-eco)'}}/></div>
      <div style={{display:'flex',gap:24,marginTop:14}}>{[['ocean','Ocean','54%'],['land','Land & rail','22%'],['air','Air','16%'],['eco','Eco lanes','8%']].map(([m,l,v])=><div key={m} style={{display:'flex',alignItems:'center',gap:8}}><ModeBadge mode={m} size="sm" iconOnly/><span style={{fontSize:13,color:'var(--text-secondary)'}}>{l}</span><span style={{fontFamily:'var(--font-mono)',fontWeight:500,fontSize:13}}>{v}</span></div>)}</div>
    </Card>
  </div>;
}
Object.assign(window,{Dashboard});