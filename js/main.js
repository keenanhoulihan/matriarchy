  const TABS = ['statement','gallery','contact'];
  function showTab(name, keepHash){
    if(!TABS.includes(name)) name = 'statement';
    TABS.forEach(t=>{
      document.getElementById('panel-'+t).classList.toggle('active', t===name);
      const b = document.getElementById('tab-'+t+'-btn');
      b.classList.toggle('active', t===name);
      b.setAttribute('aria-selected', t===name);
    });
    if(!keepHash) history.replaceState(null,'', name==='statement' ? location.pathname : '#'+name);
    window.scrollTo({top:0, behavior:'auto'});
  }
  if(location.hash) showTab(location.hash.slice(1), true);
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
  },{threshold:.08});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
