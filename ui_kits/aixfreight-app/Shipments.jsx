const { Card, Badge, ModeBadge, Button, Tabs, Tag, Icon, Table, Progress, Pagination, EmptyState } = window.AiXFreightDesignSystem_0c3a26;
function Shipments({ go }) {
  const D = window.AIX_DATA; const [tab,setTab]=React.useState('all'); const [mode,setMode]=React.useState(null); const [sort,setSort]=React.useState({key:'eta',dir:'asc'});
  const rows = D.shipments.filter(s=>(tab==='all'||(tab==='exc'&&s.status!=='success'&&s.status!=='neutral'))&&(!mode||s.mode===mode)).sort((a,b)=>{const c=String(a[sort.key]).localeCompare(String(b[sort.key]));return sort.dir==='asc'?c:-c;});
  return <div style={{padding:28,display:'flex',flexDirection:'column',gap:16}}>
    <div style={{display:'flex',alignItems:'center',gap:16}}><Tabs items={[{value:'all',label:'All',count:D.shipments.length},{value:'exc',label:'Exceptions',count:2},{value:'done',label:'Delivered'}]} value={tab} onChange={setTab} style={{flex:1}}/>
      <div style={{display:'flex',gap:8}}>{[['ocean','Ocean'],['air','Air'],['land','Land'],['rail','Rail']].map(([m,l])=><Tag key={m} selected={mode===m} onClick={()=>setMode(mode===m?null:m)}>{l}</Tag>)}</div></div>
    <Card padding={0}>
      {rows.length===0?<EmptyState compact icon="search" title="No shipments match" description="Try clearing a filter." action={<Button variant="secondary" size="sm" onClick={()=>{setMode(null);setTab('all');}}>Clear filters</Button>}/>:<Table sort={sort} onSort={k=>setSort(s=>({key:k,dir:s.key===k&&s.dir==='asc'?'desc':'asc'}))} onRowClick={s=>go('detail',s)} columns={[{key:'id',label:'Shipment',mono:true,sortable:true},{key:'lane',label:'Lane',muted:true,render:(v,s)=>s.origin+' → '+s.dest},{key:'mode',label:'Mode',render:m=><ModeBadge mode={m} size="sm"/>},{key:'cargo',label:'Cargo',muted:true,nowrap:true},{key:'progress',label:'Progress',width:140,render:(p,s)=><Progress value={p} mode={s.mode}/>},{key:'status',label:'Status',render:(v,s)=><Badge tone={s.status} dot>{s.label}</Badge>},{key:'eta',label:'ETA',mono:true,muted:true,nowrap:true,sortable:true},{key:'value',label:'Value',mono:true,align:'right'}]} rows={rows}/>}
      <div style={{padding:'12px 20px',borderTop:'1px solid var(--border-default)'}}><Pagination page={1} pageCount={1} total={rows.length} pageSize={rows.length||1}/></div>
    </Card></div>;
}
Object.assign(window,{Shipments});