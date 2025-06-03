import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { n as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server_Bqug4sl-.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/","cacheDir":"file:///C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/node_modules/.astro/","outDir":"file:///C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/dist/","srcDir":"file:///C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/src/","publicDir":"file:///C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/public/","buildClientDir":"file:///C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/dist/","buildServerDir":"file:///C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/chat.C0BIHguN.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/login","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/login\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/login.ts","pathname":"/api/login","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/chat.C0BIHguN.css"}],"routeData":{"route":"/chat","isIndex":false,"type":"page","pattern":"^\\/chat\\/?$","segments":[[{"content":"chat","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/chat.astro","pathname":"/chat","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/chat.C0BIHguN.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/chat.C0BIHguN.css"}],"routeData":{"route":"/login","isIndex":false,"type":"page","pattern":"^\\/login\\/?$","segments":[[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/login.astro","pathname":"/login","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/chat.C0BIHguN.css"}],"routeData":{"route":"/mentionlegale","isIndex":false,"type":"page","pattern":"^\\/mentionlegale\\/?$","segments":[[{"content":"mentionlegale","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/mentionlegale.astro","pathname":"/mentionlegale","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/chat.C0BIHguN.css"}],"routeData":{"route":"/produits/[id]","isIndex":false,"type":"page","pattern":"^\\/produits\\/([^/]+?)\\/?$","segments":[[{"content":"produits","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/produits/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/chat.C0BIHguN.css"}],"routeData":{"route":"/produits","isIndex":true,"type":"page","pattern":"^\\/produits\\/?$","segments":[[{"content":"produits","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/produits/index.astro","pathname":"/produits","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/chat.C0BIHguN.css"}],"routeData":{"route":"/propos","isIndex":true,"type":"page","pattern":"^\\/propos\\/?$","segments":[[{"content":"propos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/propos/index.astro","pathname":"/propos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/chat.C0BIHguN.css"}],"routeData":{"route":"/recettes/add","isIndex":false,"type":"page","pattern":"^\\/recettes\\/add\\/?$","segments":[[{"content":"recettes","dynamic":false,"spread":false}],[{"content":"add","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/recettes/add.astro","pathname":"/recettes/add","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/chat.C0BIHguN.css"}],"routeData":{"route":"/recettes/[id]","isIndex":false,"type":"page","pattern":"^\\/recettes\\/([^/]+?)\\/?$","segments":[[{"content":"recettes","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/recettes/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/chat.C0BIHguN.css"}],"routeData":{"route":"/recettes","isIndex":true,"type":"page","pattern":"^\\/recettes\\/?$","segments":[[{"content":"recettes","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/recettes/index.astro","pathname":"/recettes","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/chat.C0BIHguN.css"}],"routeData":{"route":"/register","isIndex":false,"type":"page","pattern":"^\\/register\\/?$","segments":[[{"content":"register","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/register.astro","pathname":"/register","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/chat.C0BIHguN.css"},{"type":"inline","content":".no-scrollbar[data-astro-cid-j7pv25f6]{scrollbar-width:none}.no-scrollbar[data-astro-cid-j7pv25f6]::-webkit-scrollbar{display:none}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/src/pages/chat.astro",{"propagation":"none","containsHead":true}],["C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/src/pages/login.astro",{"propagation":"none","containsHead":true}],["C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/src/pages/mentionlegale.astro",{"propagation":"none","containsHead":true}],["C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/src/pages/produits/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/src/pages/produits/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/src/pages/propos/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/src/pages/recettes/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/src/pages/recettes/add.astro",{"propagation":"none","containsHead":true}],["C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/src/pages/recettes/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/src/pages/register.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/api/login@_@ts":"pages/api/login.astro.mjs","\u0000@astro-page:src/pages/chat@_@astro":"pages/chat.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/login@_@astro":"pages/login.astro.mjs","\u0000@astro-page:src/pages/mentionlegale@_@astro":"pages/mentionlegale.astro.mjs","\u0000@astro-page:src/pages/produits/[id]@_@astro":"pages/produits/_id_.astro.mjs","\u0000@astro-page:src/pages/produits/index@_@astro":"pages/produits.astro.mjs","\u0000@astro-page:src/pages/propos/index@_@astro":"pages/propos.astro.mjs","\u0000@astro-page:src/pages/recettes/add@_@astro":"pages/recettes/add.astro.mjs","\u0000@astro-page:src/pages/recettes/[id]@_@astro":"pages/recettes/_id_.astro.mjs","\u0000@astro-page:src/pages/recettes/index@_@astro":"pages/recettes.astro.mjs","\u0000@astro-page:src/pages/register@_@astro":"pages/register.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_MGYTs4kR.mjs","C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BzO7bOZL.mjs","C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/src/pages/produits/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.CF5uY8Ob.js","C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.i-W_YPq6.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/src/pages/produits/index.astro?astro&type=script&index=0&lang.ts","document.getElementById(\"regionSelect\").addEventListener(\"change\",function(){document.getElementById(\"filterForm\").submit()});document.getElementById(\"categorieSelect\").addEventListener(\"change\",function(){document.getElementById(\"filterForm\").submit()});"],["C:/Users/mathi/github/projet-co-s2-2025-15_woodenladle/src/pages/index.astro?astro&type=script&index=0&lang.ts","const n=document.querySelector(\"#menu-btn\"),l=document.querySelector(\"#menu\"),i=document.body,r=document.querySelector(\"#header\"),o=document.getElementById(\"carousel\"),u=document.getElementById(\"carousel-left\"),m=document.getElementById(\"carousel-right\");function s(){const e=o?.children[0];if(!e)return 200;const t=window.getComputedStyle(o),a=parseInt(t.gap)||16;return e.offsetWidth+a}u?.addEventListener(\"click\",()=>{o.scrollBy({left:-s(),behavior:\"smooth\"})});m?.addEventListener(\"click\",()=>{o.scrollBy({left:s(),behavior:\"smooth\"})});n&&l&&n.addEventListener(\"click\",()=>{const e=n.ariaExpanded===\"true\",t=!e;n.ariaExpanded=String(t),l.ariaHidden=String(e),i.classList.toggle(\"noscroll\",t)});let c=window.scrollY;window.addEventListener(\"scroll\",()=>{window.scrollY>c?r.style.transform=\"translateY(-100%)\":r.style.transform=\"translateY(0)\",c=window.scrollY});const d=document.createElement(\"style\");d.innerHTML=\"body.noscroll { overflow: hidden; }\";document.head.appendChild(d);"]],"assets":["/_astro/AfriqueNord.BEcvpbLC.webp","/_astro/propos.DzUPtrOa.webp","/_astro/AmeriqueCentrale.qCf_JLpP.webp","/_astro/AmeriqueLatine.DHxHrmG6.webp","/_astro/AsieEst.BAVMxSCb.webp","/_astro/EuropeEst.C1uFKpxJ.webp","/_astro/Orient.CEZ_huGa.webp","/_astro/produits.DE5J6G8L.webp","/_astro/recettes.CMl73GZR.webp","/_astro/accueil.I7erTtr4.webp","/_astro/accueil_mobile.CcOExDrv.webp","/_astro/Mathis.DBdsPiJk.webp","/_astro/Valentine.nXZf6STO.webp","/_astro/Ethan.CVyQtTgG.webp","/_astro/chat.C0BIHguN.css","/favicon.svg","/scripts/chat-gemma.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"uNnxgdw+1WsBmZ3ulDolkSOMQV6veJh5Pxjwge6/AdM=","sessionConfig":{"driver":"fs-lite","options":{"base":"C:\\Users\\mathi\\github\\projet-co-s2-2025-15_woodenladle\\node_modules\\.astro\\sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
