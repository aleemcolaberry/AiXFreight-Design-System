const { Card, Badge, ModeBadge, Button, Tabs, Icon, Switch, AiDisclosure, AiFeedback } = window.AiXFreightDesignSystem_0c3a26;
function ShipmentDetail({ s, openRec }) {
  const D = window.AIX_DATA; const rec = D.recommendations.find(r=>r.shipment===s.id); const [auto,setAuto]=React.useState(true);
  return <div className="aix-page">
    <div style={{gridColumn:'1 / -1',display:'flex',alignItems:'center',gap:16,flexWrap:'wrap'}}><ModeBadge mode={s.mode}/><h2 style={{fontSize:'clamp(24px,3vw,36px)',minWidth:0}}>{s.origin} <span style={{color:'var(--text-muted)'}}>→</span> {s.dest}</h2><Badge tone={s.status} dot>{s.label}</Badge><div style={{marginLeft:'auto',display:'flex',gap:8}}><Button variant="secondary" icon="download">Documents</Button><Button variant="navy" icon="fileText">Share tracking</Button></div></div>
    <Card eyebrow="Route" title="Journey" padding={0}>
      <div style={{padding:'20px 24px 8px',position:'relative',height:120}}><svg viewBox="0 0 600 80" preserveAspectRatio="none" style={{position:'absolute',inset:'20px 24px auto',width:'calc(100% - 48px)',height:80}} fill="none"><path d="M10 60 C 200 60, 300 20, 590 12" stroke="var(--border-default)" strokeWidth="4" strokeLinecap="round"/><path d="M10 60 C 200 60, 300 20, 590 12" stroke="var(--color-gold)" strokeWidth="4" strokeDasharray="8 8" strokeLinecap="round" pathLength="100" style={{strokeDashoffset:0}}/><circle cx="10" cy="60" r="7" fill="var(--color-land)"/><circle cx="370" cy="28" r="9" fill="#fff" stroke="var(--accent)" strokeWidth="4"/><circle cx="590" cy="12" r="7" fill="var(--color-ocean)"/></svg></div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',borderTop:'1px solid var(--border-default)'}}>{[['Cargo',s.cargo],['Vessel','MSC Aurora · V.2439'],['Container',s.id.replace('AIX','MSKU')+'-0'],['Declared value',s.value]].map(([l,v])=><div key={l} style={{padding:'16px 24px',borderRight:'1px solid var(--border-default)'}}><div className="aix-caption">{l}</div><div style={{fontFamily:'var(--font-mono)',fontWeight:500,fontSize:14,marginTop:4}}>{v}</div></div>)}</div>
    </Card>
    <div style={{display:'flex',flexDirection:'column',gap:16}}>
      {rec?<Card inverse eyebrow="AI recommendation" title={rec.title} footer={<><AiFeedback inverse size="sm" label="" style={{flex:1}}/><Button size="sm" icon="sparkles" onClick={()=>openRec(rec)}>Review</Button></>}><div style={{display:'flex',gap:16,fontFamily:'var(--font-mono)',fontWeight:500,fontSize:13}}><span style={{color:'var(--color-gold)'}}>{rec.delta}</span><span style={{color:'var(--color-eco)'}}>{rec.gain}</span><span style={{color:'var(--text-on-inverse-muted)'}}>{rec.confidence}%</span></div><AiDisclosure inverse confidence={rec.confidence} rationale={rec.body} sources={rec.sources} limits={rec.limits} style={{marginTop:12}}/></Card>
      :<Card inverse eyebrow="AI copilot" title="No action needed"><p style={{fontSize:13,color:'var(--text-on-inverse-muted)',lineHeight:1.5}}>Tracking on plan. ETA confidence 97%. We'll alert you if the window moves by more than 6 hours.</p><AiDisclosure inverse confidence={97} title="Why this ETA" rationale="Vessel AIS position and Hamburg berth schedule agree on 14 Sep 09:40." sources={[{label:'MSC Aurora AIS',time:'08:12'},{label:'Port of Hamburg berth plan',time:'07:30'}]} limits={['Inland haulage slot not confirmed']} style={{marginTop:12}}/></Card>}
      <Card eyebrow="Settings" title="Automation"><Switch checked={auto} onChange={setAuto} label="AI auto-reroute under $2,000"/></Card>
    </div>
    <Card eyebrow="Timeline" title="Milestones" style={{gridColumn:'1 / -1'}}>
      <ol style={{listStyle:'none',margin:0,padding:0,display:'grid',gridTemplateColumns:'repeat(5,minmax(0,1fr))',gap:0,position:'relative'}}>
        {D.events.map((e,i)=><li key={i} style={{position:'relative',paddingTop:22}}>
          <span style={{position:'absolute',top:6,left:0,right:0,height:2,background:e.done?'var(--color-navy)':'var(--border-default)'}}/>
          <span style={{position:'absolute',top:0,left:0,width:14,height:14,borderRadius:999,background:e.ai?'var(--accent)':e.done?'var(--color-navy)':'#fff',border:'2px solid '+(e.ai?'var(--accent)':e.done?'var(--color-navy)':'var(--border-strong)')}}/>
          <div className="aix-caption" style={{color:e.ai?'var(--accent)':undefined}}>{e.t}</div><div style={{fontWeight:600,fontSize:14,marginTop:4,paddingRight:16}}>{e.title}</div><div style={{fontSize:12,color:'var(--text-muted)',marginTop:2}}>{e.where}</div></li>)}
      </ol></Card>
  </div>;
}
Object.assign(window,{ShipmentDetail});