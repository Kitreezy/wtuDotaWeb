"use client";

const TEAL = "#1FE3C2";
const GOLD = "#FFB627";
const RED  = "#FF4E6A";
const BLUE = "#4DA8FF";

const TIER_DATA = [
  { tier:"S", name:"Morphling",   wr:54.3 },
  { tier:"S", name:"Leshrac",     wr:53.8 },
  { tier:"S", name:"Puck",        wr:53.1 },
  { tier:"A", name:"Anti-Mage",   wr:52.7 },
  { tier:"A", name:"Invoker",     wr:52.4 },
  { tier:"A", name:"Axe",         wr:51.9 },
  { tier:"A", name:"Pudge",       wr:51.5 },
  { tier:"B", name:"Drow Ranger", wr:50.2 },
];

const FEATURES = [
  { icon:"🔥", title:"Тренды меты",       desc:"Винрейт за 14 дней на Divine+Immortal по каждой позиции отдельно." },
  { icon:"📊", title:"Тир-лист",          desc:"S/A/B/C/D герои с актуальными данными. Фильтр по атрибуту и роли." },
  { icon:"📈", title:"Мета-сдвиги",       desc:"Сравнение неделя к неделе — кто растёт, кто падает. Из STRATZ API." },
  { icon:"⚡", title:"Прокачка скиллов",  desc:"Q/W/E/R по уровням + таланты на 10/15/20/25 — для каждого матча." },
  { icon:"👥", title:"Про игроки",        desc:"Список игроков на герое, профиль с матчами и статой." },
  { icon:"⚔️", title:"Черновик",          desc:"Выбери союзников и врагов — получи лучшие контрпики из матчапов." },
];

function Nav() {
  return (
    <nav style={{
      position:"sticky", top:0, zIndex:100,
      display:"flex", alignItems:"center", justifyContent:"space-between",
      padding:"14px 40px",
      background:"rgba(13,15,20,0.92)", backdropFilter:"blur(16px)",
      borderBottom:"1px solid rgba(255,255,255,0.06)",
    }}>
      <div style={{ display:"flex", alignItems:"center", gap:10 }}>
        <div style={{
          width:32, height:32, borderRadius:8,
          background:"rgba(31,227,194,0.10)", border:"1px solid rgba(31,227,194,0.22)",
          display:"flex", alignItems:"center", justifyContent:"center", fontSize:15,
        }}>⚔️</div>
        <span style={{ fontWeight:700, fontSize:15, letterSpacing:"0.04em" }}>
          WTU <span style={{ color:TEAL }}>Dota</span>
        </span>
      </div>
      <div style={{ display:"flex", alignItems:"center", gap:28 }}>
        {["Возможности","Платформы","FAQ"].map(l => (
          <a key={l} href={`#${l}`} style={{ color:"#8B90A0", fontSize:13, textDecoration:"none" }}>{l}</a>
        ))}
        <a href="#download" style={{
          background:TEAL, color:"#0D0F14", fontWeight:700, fontSize:13,
          padding:"8px 18px", borderRadius:8, textDecoration:"none",
        }}>Скачать</a>
      </div>
    </nav>
  );
}

function DlButtons() {
  return (
    <div style={{ display:"flex", gap:14, flexWrap:"wrap", justifyContent:"center", marginTop:40 }}>
      <a href="#download" style={{
        display:"flex", alignItems:"center", gap:12,
        background:TEAL, color:"#0D0F14",
        padding:"13px 26px", borderRadius:12, textDecoration:"none",
      }}>
        <span style={{ fontSize:22 }}></span>
        <span style={{ display:"flex", flexDirection:"column", alignItems:"flex-start" }}>
          <span style={{ fontSize:10, opacity:.7, letterSpacing:"0.04em" }}>СКАЧАТЬ ДЛЯ</span>
          <span style={{ fontSize:15, fontWeight:700 }}>macOS</span>
        </span>
      </a>
      <a href="#download" style={{
        display:"flex", alignItems:"center", gap:12,
        background:"transparent", color:"#E8EAF2",
        padding:"13px 26px", borderRadius:12, textDecoration:"none",
        border:"1px solid rgba(255,255,255,0.10)",
      }}>
        <span style={{ fontSize:22 }}>🪟</span>
        <span style={{ display:"flex", flexDirection:"column", alignItems:"flex-start" }}>
          <span style={{ fontSize:10, color:"#8B90A0", letterSpacing:"0.04em" }}>СКАЧАТЬ ДЛЯ</span>
          <span style={{ fontSize:15, fontWeight:700 }}>Windows</span>
        </span>
      </a>
    </div>
  );
}

function MockPhone({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{
      width:220, background:"#13161D", flexShrink:0,
      border:"1px solid rgba(255,255,255,0.07)", borderRadius:20, overflow:"hidden",
    }}>
      <div style={{
        height:28, background:"#1A1D26", borderBottom:"1px solid rgba(255,255,255,0.05)",
        display:"flex", alignItems:"center", padding:"0 12px", gap:5,
      }}>
        {[RED,GOLD,TEAL].map(c=><div key={c} style={{width:6,height:6,borderRadius:"50%",background:c}}/>)}
        <span style={{fontSize:8,fontWeight:700,color:"#4A4F60",letterSpacing:"0.07em",marginLeft:4}}>{title}</span>
      </div>
      <div style={{padding:10}}>{children}</div>
    </div>
  );
}

function FeedMock() {
  const heroes = [
    {i:"M",n:"Morphling",r:"Carry · Escape",wr:54.3,c:TEAL},
    {i:"L",n:"Leshrac",r:"Nuker · Support",wr:53.8,c:RED},
    {i:"P",n:"Puck",r:"Escape · Nuker",wr:53.1,c:BLUE},
    {i:"I",n:"Invoker",r:"Nuker · Disabler",wr:52.4,c:GOLD},
  ];
  return (
    <MockPhone title="ТРЕНДЫ МЕТЫ">
      <div style={{fontSize:13,fontWeight:700,paddingBottom:8}}>Тренды меты</div>
      <div style={{display:"flex",gap:4,marginBottom:8,flexWrap:"wrap"}}>
        {["Все","Carry","Mid"].map(p=>(
          <span key={p} style={{
            fontSize:7,fontWeight:700,padding:"2px 7px",borderRadius:10,
            background:p==="Все"?TEAL:"rgba(255,255,255,0.05)",
            color:p==="Все"?"#0D0F14":"#8B90A0",
          }}>{p}</span>
        ))}
      </div>
      {heroes.map(h=>(
        <div key={h.n} style={{
          display:"flex",alignItems:"center",gap:7,padding:"6px 0",
          borderBottom:"1px solid rgba(255,255,255,0.05)",
        }}>
          <div style={{
            width:28,height:28,borderRadius:6,flexShrink:0,
            background:`${h.c}14`,border:`1px solid ${h.c}28`,
            display:"flex",alignItems:"center",justifyContent:"center",
            fontSize:9,fontWeight:800,color:h.c,
          }}>{h.i}</div>
          <div style={{flex:1,minWidth:0}}>
            <div style={{fontSize:10,fontWeight:600,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{h.n}</div>
            <div style={{fontSize:8,color:"#8B90A0"}}>{h.r}</div>
          </div>
          <span style={{fontSize:11,fontWeight:700,color:TEAL,fontFamily:"monospace"}}>{h.wr}%</span>
        </div>
      ))}
    </MockPhone>
  );
}

function MatchMock() {
  const cells=[
    {l:"Q",c:TEAL},{l:"Q",c:TEAL},{l:"E",c:GOLD},{l:"Q",c:TEAL},{l:"W",c:BLUE},
    {l:"Q",c:TEAL},{l:"R",c:RED},{l:"E",c:GOLD},{l:"E",c:GOLD},{l:"Т◀",c:GOLD,t:true},
    {l:"E",c:GOLD},{l:"R",c:RED},{l:"W",c:BLUE},{l:"W",c:BLUE},{l:"Т▶",c:GOLD,t:true},
  ];
  return (
    <MockPhone title="МАТЧ ДЕТАЛЬНО">
      <div style={{
        background:"rgba(31,227,194,0.06)",border:"1px solid rgba(31,227,194,0.14)",
        borderRadius:8,padding:"8px 10px",marginBottom:8,
      }}>
        <div style={{fontSize:9,fontWeight:800,color:TEAL,marginBottom:3}}>ПОБЕДА · 38:42</div>
        <div style={{fontSize:12,fontWeight:700}}>Anti-Mage</div>
        <div style={{display:"flex",gap:10,marginTop:3}}>
          <span style={{fontSize:9,color:"#8B90A0",fontFamily:"monospace"}}>12/2/5</span>
          <span style={{fontSize:9,color:"#4A4F60"}}>GPM 642</span>
        </div>
      </div>
      <div style={{fontSize:8,fontWeight:700,color:"#4A4F60",letterSpacing:"0.08em",marginBottom:5}}>ПРОКАЧКА ПО УРОВНЯМ</div>
      <div style={{display:"flex",flexWrap:"wrap",gap:2,marginBottom:8}}>
        {cells.map((c,i)=>(
          <div key={i} style={{
            width:19,height:14,borderRadius:3,
            background:c.t?c.c:`${c.c}22`,
            display:"flex",alignItems:"center",justifyContent:"center",
            fontSize:c.t?5:7,fontWeight:900,
            color:c.t?"#0D0F14":c.c,fontFamily:"monospace",
          }}>{c.l}</div>
        ))}
      </div>
      <div style={{display:"flex",gap:6}}>
        <div style={{flex:1}}>
          <div style={{fontSize:7,color:TEAL,marginBottom:3}}>RADIANT · ПОБ</div>
          {["Anti-Mage","Axe","Lina"].map((n,i)=>(
            <div key={n} style={{
              fontSize:8,padding:"2px 5px",borderRadius:3,marginBottom:2,
              background:i===0?"rgba(31,227,194,0.08)":"transparent",
              color:i===0?TEAL:"#8B90A0",
            }}>{n}</div>
          ))}
        </div>
        <div style={{flex:1}}>
          <div style={{fontSize:7,color:RED,marginBottom:3}}>DIRE</div>
          {["Invoker","Pudge","Drow"].map(n=>(
            <div key={n} style={{fontSize:8,color:"#8B90A0",padding:"2px 5px",marginBottom:2}}>{n}</div>
          ))}
        </div>
      </div>
    </MockPhone>
  );
}

function DraftMock() {
  return (
    <MockPhone title="ЧЕРНОВИК">
      <div style={{fontSize:13,fontWeight:700,paddingBottom:8}}>Черновик</div>
      <div style={{fontSize:8,color:"#4A4F60",letterSpacing:"0.06em",marginBottom:5}}>МОЯ КОМАНДА</div>
      <div style={{display:"flex",gap:4,marginBottom:10}}>
        {[{l:"AM",c:TEAL},{l:"AX",c:RED},{l:"+",c:TEAL,dash:true}].map(s=>(
          <div key={s.l} style={{
            width:36,height:36,borderRadius:7,
            background:s.dash?"rgba(31,227,194,0.05)":`${s.c}14`,
            border:s.dash?`1.5px dashed ${s.c}40`:`1px solid ${s.c}28`,
            display:"flex",alignItems:"center",justifyContent:"center",
            fontSize:10,fontWeight:700,color:s.c,
          }}>{s.l}</div>
        ))}
      </div>
      <div style={{fontSize:8,color:"#4A4F60",letterSpacing:"0.06em",marginBottom:5}}>ПРОТИВНИКИ</div>
      <div style={{display:"flex",gap:4,marginBottom:10}}>
        {[{l:"INV",c:BLUE},{l:"+",c:RED,dash:true}].map(s=>(
          <div key={s.l} style={{
            width:36,height:36,borderRadius:7,
            background:s.dash?"rgba(255,78,106,0.05)":`${s.c}14`,
            border:s.dash?`1.5px dashed ${s.c}40`:`1px solid ${s.c}28`,
            display:"flex",alignItems:"center",justifyContent:"center",
            fontSize:10,fontWeight:700,color:s.c,
          }}>{s.l}</div>
        ))}
      </div>
      <div style={{fontSize:8,fontWeight:700,color:"#4A4F60",letterSpacing:"0.08em",marginBottom:5}}>РЕКОМЕНДАЦИИ</div>
      {[{n:"Leshrac",wr:63.4,s:"Nuker · Support"},{n:"Earthshaker",wr:61.8,s:"Initiator"}].map(r=>(
        <div key={r.n} style={{
          background:"rgba(31,227,194,0.05)",border:"1px solid rgba(31,227,194,0.12)",
          borderRadius:7,padding:"6px 8px",marginBottom:5,
          display:"flex",alignItems:"center",justifyContent:"space-between",
        }}>
          <div>
            <div style={{fontSize:9,fontWeight:600}}>{r.n}</div>
            <div style={{fontSize:8,color:"#8B90A0"}}>{r.s}</div>
          </div>
          <span style={{fontSize:11,fontWeight:700,color:TEAL,fontFamily:"monospace"}}>{r.wr}%</span>
        </div>
      ))}
    </MockPhone>
  );
}

export default function HomePage() {
  const tierColors: Record<string,string> = { S:GOLD, A:TEAL, B:BLUE };

  return (
    <>
      <Nav />

      {/* HERO */}
      <section style={{ padding:"88px 40px 72px", textAlign:"center" }}>
        <span style={{
          display:"inline-flex", alignItems:"center", gap:7,
          background:"rgba(31,227,194,0.08)", border:"1px solid rgba(31,227,194,0.20)",
          color:TEAL, fontSize:11, fontWeight:700, letterSpacing:"0.08em",
          padding:"5px 16px", borderRadius:20, marginBottom:28,
        }}>
          <span style={{
            width:6, height:6, borderRadius:"50%", background:TEAL,
            animation:"pulse 2s ease-in-out infinite",
          }}/>
          DIVINE + IMMORTAL · REALTIME ДАННЫЕ
        </span>
        <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:.35}}`}</style>
        <h1 style={{
          fontSize:"clamp(36px,6vw,58px)", fontWeight:800, lineHeight:1.08,
          letterSpacing:"-0.025em", color:"#E8EAF2", marginBottom:20,
        }}>
          Мета Dota&nbsp;2<br /><span style={{ color:TEAL }}>в твоих руках</span>
        </h1>
        <p style={{
          fontSize:17, color:"#8B90A0", lineHeight:1.65,
          maxWidth:540, margin:"0 auto",
        }}>
          Анализ винрейта, топ билды, прокачка скиллов и матчи про игроков — всё на одном экране. Для Mac и Windows.
        </p>
        <DlButtons />
        <p style={{ fontSize:11, color:"#4A4F60", marginTop:14 }}>Бесплатно · v1.0 · macOS 13+ · Windows 10+</p>
      </section>

      {/* STATS BAR */}
      <div style={{
        display:"flex", flexWrap:"wrap", justifyContent:"center",
        background:"#13161D",
        borderTop:"1px solid rgba(255,255,255,0.06)",
        borderBottom:"1px solid rgba(255,255,255,0.06)",
      }}>
        {[
          {n:"130+", l:"Героев"},
          {n:"14 дн",l:"Актуальность"},
          {n:"D+I",  l:"Divine · Immortal"},
          {n:"Live", l:"Обновления меты"},
          {n:"2 API",l:"OpenDota + STRATZ"},
        ].map(s=>(
          <div key={s.l} style={{
            display:"flex", flexDirection:"column", alignItems:"center",
            padding:"18px 32px", borderRight:"1px solid rgba(255,255,255,0.06)",
          }}>
            <span style={{fontSize:19,fontWeight:800,color:TEAL,fontFamily:"monospace"}}>{s.n}</span>
            <span style={{fontSize:11,color:"#8B90A0",marginTop:2,letterSpacing:"0.04em"}}>{s.l}</span>
          </div>
        ))}
      </div>

      {/* TIER STRIP */}
      <div style={{
        display:"flex", gap:16, overflowX:"auto", padding:"24px 40px",
        background:"#13161D", borderBottom:"1px solid rgba(255,255,255,0.06)",
      }}>
        {TIER_DATA.map(h=>(
          <div key={h.name} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:5,minWidth:70}}>
            <div style={{
              width:36,height:36,borderRadius:8,
              background:`${tierColors[h.tier]}20`,
              border:`1px solid ${tierColors[h.tier]}30`,
              display:"flex",alignItems:"center",justifyContent:"center",
              fontSize:15,fontWeight:900,color:tierColors[h.tier],fontFamily:"monospace",
            }}>{h.tier}</div>
            <span style={{fontSize:9,fontWeight:600,color:"#8B90A0",textAlign:"center",whiteSpace:"nowrap"}}>{h.name}</span>
            <span style={{fontSize:9,color:"#4A4F60",fontFamily:"monospace"}}>{h.wr}%</span>
          </div>
        ))}
      </div>

      {/* APP PREVIEW */}
      <section style={{padding:"72px 40px"}}>
        <p style={{textAlign:"center",fontSize:11,fontWeight:700,color:TEAL,letterSpacing:"0.12em",marginBottom:12}}>ПРЕВЬЮ ПРИЛОЖЕНИЯ</p>
        <h2 style={{textAlign:"center",fontSize:"clamp(24px,4vw,32px)",fontWeight:800,color:"#E8EAF2",letterSpacing:"-0.01em",marginBottom:8}}>
          Интерфейс как в игре
        </h2>
        <p style={{textAlign:"center",color:"#8B90A0",fontSize:15,marginBottom:44}}>Тёмная тема, нативная под Mac и Windows.</p>
        <div style={{display:"flex",gap:20,justifyContent:"center",flexWrap:"wrap"}}>
          <FeedMock />
          <MatchMock />
          <DraftMock />
        </div>
      </section>

      {/* FEATURES */}
      <section id="Возможности" style={{padding:"0 40px 72px"}}>
        <p style={{textAlign:"center",fontSize:11,fontWeight:700,color:TEAL,letterSpacing:"0.12em",marginBottom:12}}>ВОЗМОЖНОСТИ</p>
        <h2 style={{textAlign:"center",fontSize:"clamp(24px,4vw,32px)",fontWeight:800,color:"#E8EAF2",letterSpacing:"-0.01em",marginBottom:8}}>
          Всё что нужно про-игроку
        </h2>
        <p style={{textAlign:"center",color:"#8B90A0",fontSize:15,marginBottom:44}}>От тренда меты до анализа конкретного матча в один клик.</p>
        <div style={{
          display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
          gap:16, maxWidth:900, margin:"0 auto",
        }}>
          {FEATURES.map(f=>(
            <div key={f.title} style={{
              background:"#13161D", border:"1px solid rgba(255,255,255,0.07)",
              borderRadius:14, padding:22,
            }}>
              <div style={{
                width:40,height:40,background:"rgba(31,227,194,0.09)",borderRadius:10,
                display:"flex",alignItems:"center",justifyContent:"center",
                fontSize:18,marginBottom:14,
              }}>{f.icon}</div>
              <div style={{fontSize:14,fontWeight:700,color:"#E8EAF2",marginBottom:6}}>{f.title}</div>
              <div style={{fontSize:12,color:"#8B90A0",lineHeight:1.55}}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PLATFORMS */}
      <section id="Платформы" style={{padding:"0 40px 72px"}}>
        <p style={{textAlign:"center",fontSize:11,fontWeight:700,color:TEAL,letterSpacing:"0.12em",marginBottom:12}}>ПЛАТФОРМЫ</p>
        <h2 style={{textAlign:"center",fontSize:"clamp(24px,4vw,32px)",fontWeight:800,color:"#E8EAF2",letterSpacing:"-0.01em",marginBottom:8}}>Mac и Windows</h2>
        <p style={{textAlign:"center",color:"#8B90A0",fontSize:15,marginBottom:44}}>Нативное приложение — не сайт. Работает быстро, выглядит как надо.</p>
        <div style={{
          display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
          gap:16, maxWidth:700, margin:"0 auto",
        }}>
          {[
            {os:"macOS", icon:"", ver:"v1.0 · 12 MB", ext:".dmg", req:"macOS 13+ · Apple Silicon · Intel", featured:true},
            {os:"Windows", icon:"🪟", ver:"v1.0 · 15 MB", ext:".exe", req:"Windows 10/11 (64-bit) · .NET включён", featured:false},
          ].map(p=>(
            <div key={p.os} style={{
              background:"#13161D",
              border:p.featured?"1px solid rgba(31,227,194,0.25)":"1px solid rgba(255,255,255,0.07)",
              borderRadius:16, padding:"28px 24px",
              display:"flex", flexDirection:"column", gap:16,
            }}>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <div style={{display:"flex",alignItems:"center",gap:12}}>
                  <span style={{fontSize:28}}>{p.icon}</span>
                  <div>
                    <div style={{fontSize:16,fontWeight:700}}>{p.os}</div>
                    <div style={{fontSize:11,color:"#8B90A0"}}>{p.ver}</div>
                  </div>
                </div>
                {p.featured&&(
                  <span style={{
                    background:"rgba(31,227,194,0.1)",border:"1px solid rgba(31,227,194,0.2)",
                    color:TEAL,fontSize:9,fontWeight:700,padding:"3px 10px",borderRadius:6,letterSpacing:"0.06em",
                  }}>РЕКОМЕНДУЕМ</span>
                )}
              </div>
              <div style={{fontSize:12,color:"#4A4F60",lineHeight:1.8}}>{p.req}</div>
              <a href="#download" style={{
                display:"flex",alignItems:"center",justifyContent:"center",gap:8,
                padding:"12px 0",borderRadius:10,textDecoration:"none",
                background:p.featured?TEAL:"#1A1D26",
                color:p.featured?"#0D0F14":"#E8EAF2",
                fontWeight:700,fontSize:14,
                border:p.featured?"none":"1px solid rgba(255,255,255,0.07)",
              }}>↓ Скачать {p.ext}</a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="download" style={{padding:"72px 40px",textAlign:"center"}}>
        <div style={{
          background:"#13161D", border:"1px solid rgba(31,227,194,0.2)",
          borderRadius:20, padding:"56px 40px", maxWidth:640, margin:"0 auto",
        }}>
          <h2 style={{fontSize:"clamp(22px,4vw,30px)",fontWeight:800,color:"#E8EAF2",letterSpacing:"-0.01em",marginBottom:12}}>
            Готов к следующей игре?
          </h2>
          <p style={{color:"#8B90A0",fontSize:15,marginBottom:32,lineHeight:1.6}}>
            Скачай WTU и заходи с актуальной метой. Бесплатно, без регистрации.
          </p>
          <DlButtons />
          <p style={{fontSize:11,color:"#4A4F60",marginTop:16}}>
            Бесплатно · macOS 13+ · Windows 10+ · Powered by OpenDota &amp; STRATZ
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding:"24px 40px",
        borderTop:"1px solid rgba(255,255,255,0.06)",
        display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:12,
      }}>
        <span style={{fontSize:13,fontWeight:700,color:"#4A4F60",letterSpacing:"0.04em"}}>
          WTU <span style={{color:TEAL}}>Dota</span>
        </span>
        <div style={{display:"flex",gap:20}}>
          {["Политика","GitHub","Контакты"].map(l=>(
            <a key={l} href="#" style={{fontSize:12,color:"#4A4F60",textDecoration:"none"}}>{l}</a>
          ))}
        </div>
        <span style={{fontSize:11,color:"#4A4F60"}}>Powered by OpenDota &amp; STRATZ API</span>
      </footer>
    </>
  );
}
