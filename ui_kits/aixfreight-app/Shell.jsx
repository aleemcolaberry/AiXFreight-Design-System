const { Icon, IconButton, Logo, Input, Badge, ThemeToggle } = window.AiXFreightDesignSystem_0c3a26;
const NAV = [['dashboard','layoutDashboard','Dashboard'],['shipments','package','Shipments'],['routes','route','Routes'],['docs','fileText','Documents'],['settings','settings','Settings']];
function Sidebar({ page, go }) {
  return <aside style={{width:'var(--sidebar-width)',flex:'none',background:'var(--surface-inverse)',color:'#fff',display:'flex',flexDirection:'column',padding:'20px 16px',gap:24}}>
    <Logo variant="horizontal" inverse height={34} base="../.." style={{marginLeft:4}}/>
    <nav style={{display:'flex',flexDirection:'column',gap:2}}>{NAV.map(([k,ic,l])=>{const on=page===k||(k==='shipments'&&page==='detail');return <button key={k} onClick={()=>go(k)} style={{display:'flex',alignItems:'center',gap:12,height:40,padding:'0 12px',border:0,borderRadius:'var(--radius-md)',background:on?'var(--surface-inverse-raised)':'transparent',color:on?'#fff':'var(--text-on-inverse-muted)',fontFamily:'var(--font-body)',fontWeight:500,fontSize:14,cursor:'pointer',textAlign:'left',boxShadow:on?'inset 3px 0 0 var(--accent)':'none'}}><Icon name={ic} size={18}/>{l}</button>})}</nav>
    <div style={{marginTop:'auto',background:'var(--surface-inverse-raised)',borderRadius:'var(--radius-lg)',padding:16}}>
      <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:6}}><Icon name="sparkles" size={16} color="var(--accent)"/><span className="aix-caption" style={{color:'var(--accent)'}}>AI copilot</span></div>
      <p style={{fontSize:13,color:'var(--text-on-inverse-muted)',lineHeight:1.45}}>2 recommendations waiting. Est. savings this week: <b style={{color:'#fff'}}>$4,320</b></p>
    </div></aside>;
}
function Topbar({ title, crumbs, actions }) {
  return <header style={{height:'var(--topbar-height)',flex:'none',display:'flex',alignItems:'center',gap:16,padding:'0 28px',background:'var(--surface-card)',borderBottom:'1px solid var(--border-default)'}}>
    <div style={{display:'flex',alignItems:'center',gap:8,minWidth:0,flex:'1 1 auto',overflow:'hidden'}}>{crumbs&&crumbs.map((c,i)=><React.Fragment key={i}><span className="aix-caption">{c}</span><Icon name="chevronRight" size={12} color="var(--text-muted)"/></React.Fragment>)}<h1 className="aix-truncate" title={title} style={{fontSize:22,fontWeight:600}}>{title}</h1></div>
    <div style={{marginLeft:'auto',display:'flex',alignItems:'center',gap:8,flex:'none'}}><div style={{width:'clamp(140px,22vw,260px)'}}><Input icon="search" placeholder="Search shipments, containers…" size="sm"/></div>{actions}<ThemeToggle variant="icon"/><IconButton icon="bell" label="Notifications" badge/><span style={{width:32,height:32,borderRadius:999,background:'var(--color-ocean)',color:'#fff',display:'grid',placeItems:'center',fontFamily:'var(--font-display)',fontWeight:700,fontSize:14}}>MK</span></div></header>;
}
Object.assign(window,{Sidebar,Topbar});