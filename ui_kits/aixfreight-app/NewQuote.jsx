const { Card, Input, Select, Radio, Checkbox, Button, ModeBadge, Badge } = window.AiXFreightDesignSystem_0c3a26;
function NewQuote({ onDone }) {
  const [inc,setInc]=React.useState('FOB'); const [mode,setMode]=React.useState('Let AI decide'); const [ins,setIns]=React.useState(true); const [cust,setCust]=React.useState(true);
  return <div className="aix-page wide">
    <Card eyebrow="Step 1 of 2" title="Shipment details">
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
        <Input label="Origin" icon="mapPin" placeholder="City or port" defaultValue="Shenzhen, CN" required/><Input label="Destination" icon="mapPin" placeholder="City or port" defaultValue="Hamburg, DE" required/>
        <Select label="Cargo type" options={['FCL — full container','LCL — shared container','Pallets','Break bulk']} value="FCL — full container"/><Input label="Weight" defaultValue="18200" suffix="kg"/>
        <Input label="Ready date" type="date" defaultValue="2026-09-20"/><Input label="Needed by" type="date" defaultValue="2026-10-14" hint="AI will flag if this window is at risk"/>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginTop:24}}>
        <Radio label="Incoterm" options={['FOB','CIF','DDP']} value={inc} onChange={setInc} direction="row"/>
        <Select label="Preferred mode" options={['Let AI decide','Ocean','Air','Land','Rail']} value={mode} onChange={setMode}/>
      </div>
      <div style={{display:'flex',gap:28,marginTop:24}}><Checkbox checked={ins} onChange={setIns} label="Cargo insurance" description="0.3% of declared value"/><Checkbox checked={cust} onChange={setCust} label="Customs brokerage" description="Handled by AiXFreight"/></div>
    </Card>
    <div style={{display:'flex',flexDirection:'column',gap:16}}>
      <Card inverse eyebrow="AI estimate" title="3 routes found" footer={<><span className="aix-caption" style={{color:'var(--text-on-inverse-muted)'}}>Refreshes as you type</span><Button size="sm" icon="sparkles" onClick={onDone}>Get quotes</Button></>}>
        <div style={{display:'flex',flexDirection:'column',gap:10}}>{[['ocean','Ocean · 24 days','$12,480','Best value'],['rail','Rail · 18 days','$15,760','Balanced'],['air','Air · 3 days','$38,900','Fastest']].map(([m,l,p,t],i)=><div key={m} style={{display:'flex',alignItems:'center',gap:12,padding:'12px 14px',borderRadius:'var(--radius-md)',background:i===0?'rgba(255,255,255,.08)':'transparent',border:'1px solid '+(i===0?'var(--accent)':'var(--border-inverse)')}}><ModeBadge mode={m} inverse size="sm" iconOnly/><span style={{fontSize:13,flex:1}}>{l}</span><span style={{fontFamily:'var(--font-mono)',fontWeight:500,fontSize:13}}>{p}</span>{i===0&&<Badge tone="ai">{t}</Badge>}</div>)}</div>
      </Card>
      <Card eyebrow="Sustainability" title="Emissions"><p style={{fontSize:13,color:'var(--text-secondary)'}}>Ocean route emits <b style={{fontFamily:'var(--font-mono)'}}>1.9 t CO₂e</b> — 94% less than air. Eco-lane available on this corridor.</p></Card>
    </div>
  </div>;
}
Object.assign(window,{NewQuote});