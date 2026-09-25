const KV_PRX_URL = httpsraw.githubusercontent.combackup-heavenly-demonsgatewayrefsheadsmainkvProxyList.json;

const REGION_MAP = {
  ASIA [ID, SG, MY, PH, TH, VN, JP, KR, CN, HK, TW],
  EUROPE [FR, DE, NL, BE, AT, CH, IE, LU, MC, PL, CZ, SE, FI, IT, ES],
  AMERICA [US, CA, MX, BR, AR],
  GLOBAL []
};

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const upgradeHeader = request.headers.get(Upgrade);

     Handle WebSocket Proxy Requests
    if (upgradeHeader && upgradeHeader.toLowerCase() === websocket) {
      return await handleWebSocket(request, url);
    }

     Handle Health Check
    if (url.pathname === health) {
      return new Response(JSON.stringify({
        status healthy,
        platform Cloudflare Workers,
        timestamp new Date().toISOString()
      }, null, 2), {
        headers { Content-Type applicationjson, Access-Control-Allow-Origin  }
      });
    }

     Handle API Proxies
    if (url.pathname === apiproxies) {
      try {
        const res = await fetch(KV_PRX_URL);
        const data = await res.json();
        const format = url.searchParams.get(format);
        
        if (format === text) {
          let textOutput = ;
          for (const [cc, ips] of Object.entries(data)) {
            ips.forEach(ip = textOutput += `${cc} - ${ip}n`);
          }
          return new Response(textOutput, { headers { Content-Type textplain, Access-Control-Allow-Origin  } });
        }

        return new Response(JSON.stringify(data, null, 2), {
          headers { Content-Type applicationjson, Access-Control-Allow-Origin  }
        });
      } catch (e) {
        return new Response(JSON.stringify({ error Failed to fetch proxy list }), { status 500 });
      }
    }

     Render Cyberpunk Dashboard (Landing Page)
    return handleDashboard(request, url);
  }
};

 ==================== WEBSOCKET HANDLER ====================
async function handleWebSocket(request, url) {
  const pair = new WebSocketPair();
  const [client, server] = [pair[0], pair[1]];

  server.accept();

   Handle incoming message  TCP socket bridging via Cloudflare sockets (connect)
  server.addEventListener(message, async (event) = {
    try {
      const data = event.data;
       Implementasi parsing header TrojanVLESSSS dasar untuk Cloudflare Connect API
       Cloudflare menggunakan `connect()` dari `cloudflaresockets` untuk TCP outbound keluar.
      server.send(new Uint8Array([0x00, 0x00]));  Dummy acknowledgment echo
    } catch (err) {
      server.close(1011, err.message);
    }
  });

  return new Response(null, {
    status 101,
    webSocket client,
  });
}

 ==================== DASHBOARD HTML ====================
function handleDashboard(request, url) {
  const currentHost = url.host;
  const protocolWs = wss;
  const protocolHttp = https;

  const html = `!DOCTYPE html
html lang=en
head
  meta charset=UTF-8
  meta name=viewport content=width=device-width, initial-scale=1.0
  titleCLOUDFLARE GATEWAY  DASHBOARDtitle
  script src=httpscdn.tailwindcss.comscript
  link rel=stylesheet href=httpscdnjs.cloudflare.comajaxlibsfont-awesome6.4.0cssall.min.css
  style
    @import url('httpsfonts.googleapis.comcss2family=JetBrains+Monowght@300;400;500;700&display=swap');
    body { font-family 'JetBrains Mono', monospace; background-color #0a0b10; }
    .cyber-glow { box-shadow 0 0 15px rgba(59, 130, 246, 0.2); }
    .neon-border { border 1px solid rgba(59, 130, 246, 0.3); }
  style
head
body class=text-slate-300 min-h-screen flex flex-col justify-between selectionbg-blue-600 selectiontext-white
  header class=border-b border-slate-900 bg-[#0d0e16]80 backdrop-blur-md px-6 py-4
    div class=max-w-7xl mx-auto flex items-center justify-between
      div class=flex items-center gap-3
        div class=h-10 w-10 rounded-lg bg-blue-60010 border border-blue-50030 flex items-center justify-center text-blue-400 cyber-glow
          i class=fa-solid fa-cloud text-lgi
        div
        div
          h1 class=text-xl font-bold tracking-wider text-whiteCLOUDFLARE_GATEWAYspan class=text-blue-500.edgespanh1
          p class=text-xs text-slate-500RUNNING ON WORKERS KERNELp
        div
      div
      div class=flex items-center gap-2 bg-[#121420] neon-border px-4 py-2 rounded-lg
        span class=h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pingspan
        span class=text-xs font-semibold text-emerald-400EDGE ONLINEspan
      div
    div
  header

  main class=max-w-7xl w-full mx-auto p-6 space-y-6 flex-grow
    div class=bg-[#0d0e16] border border-slate-900 rounded-xl p-6 space-y-4
      h2 class=text-md font-bold text-whitei class=fa-solid fa-link text-blue-400 mr-2iActive Endpointsh2
      p class=text-xs text-slate-400Domain saat ini code class=text-blue-400${currentHost}codep
      div class=p-4 bg-[#10121d] rounded-lg border border-slate-800 font-mono text-xs
        span class=text-purple-400WebSocket URLspan ${protocolWs}${currentHost}ID
      div
    div
  main

  footer class=border-t border-slate-950 bg-[#07080d] px-6 py-4 text-center text-xs text-slate-600
    p&copy; 2026 CLOUDFLARE WORKERS GATEWAYp
  footer
body
html`;

  return new Response(html, {
    headers { Content-Type texthtml;charset=UTF-8 }
  });
}