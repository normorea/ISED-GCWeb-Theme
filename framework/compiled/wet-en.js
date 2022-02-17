if("undefined"==typeof wet)var wet={};"undefined"==typeof wet.builder&&(wet.builder={});wet.builder.serverRefTop=function(a,h){return serverPage.serverRefTop(a)};wet.builder.serverTop=function(a,h){return serverPage.serverTop(a)};wet.builder.serverRefBottom=function(a,h){return serverPage.serverRefBottom(a)};wet.builder.serverBottom=function(a,h){return serverPage.serverBottom(a)};wet.builder.appTop=function(a,h){return applicationPage.appTop(a)};wet.builder.appFooter=function(a,h){return applicationPage.appFooter(a)};
wet.builder.environment=function(a,h){return("esdcqat"==a.cdnEnv?"https://cdn-canada.services.gc.qat/app/cls/WET":"esdcnonprod"==a.cdnEnv?"https://s2tst-cdn-canada.sade-edap.prv/app/cls/WET":"esdcprod"==a.cdnEnv?"https://ssl-templates.services.gc.ca/app/cls/WET":"localhost"==a.cdnEnv?"../../../..":"https://www.canada.ca/etc/designs/canada/cdts")+"/gcweb/v4_0_30/"};
wet.builder.refTop=function(a,h){a=a||{};return"<script>dataLayer = [];\x3c/script>\x3c!-- Google Tag Manager --\x3e<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5DBPCQJ');\x3c/script>\x3c!-- End Google Tag Manager --\x3e\x3c!--[if gte IE 9 | !IE ]>\x3c!--\x3e<link href='"+wet.builder.environment(a)+
'assets/favicon.ico\' rel="icon" type="image/x-icon"><link rel="stylesheet" href=\''+wet.builder.environment(a)+"css/theme.min.css'><link rel=\"stylesheet\" href='"+wet.builder.environment(a)+"cdts/cdtsfixes.css'>"+(!0==a.isApplication?'<link rel="stylesheet" href=\''+wet.builder.environment(a)+"cdts/cdtsapps.css'>":"")+"\x3c!--<![endif]--\x3e\x3c!--[if lt IE 9]><link href='"+wet.builder.environment(a)+'assets/favicon.ico\' rel="shortcut icon" /><link rel="stylesheet" href=\''+wet.builder.environment(a)+
"css/ie8-theme.min.css' /><script src=\""+("external"==a.jqueryEnv?"https://ajax.googleapis.com/ajax/libs":wet.builder.environment(a)+"js/")+"jquery/1.12.4/jquery.min.js\">\x3c/script><script src='"+wet.builder.environment(a)+"js/ie8-wet-boew.min.js'>\x3c/script><![endif]--\x3e\x3c!--[if lte IE 9]><![endif]--\x3e"+(null!=a.webAnalytics?"dev"==a.webAnalytics?'<script src="//assets.adobedtm.com/caacec67651710193d2331efef325107c23a0145/satelliteLib-78cf42deb149c9766cbaaa6151e252b9b67c0200-staging.js">\x3c/script>':
'<script src="//assets.adobedtm.com/caacec67651710193d2331efef325107c23a0145/satelliteLib-78cf42deb149c9766cbaaa6151e252b9b67c0200.js">\x3c/script>':"")};
wet.builder.top=function(a,h){a=a||{};var b='\x3c!-- Google Tag Manager (noscript) --\x3e<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5DBPCQJ" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>\x3c!-- End Google Tag Manager (noscript) --\x3e<ul id="wb-tphp"><li class="wb-slc"><a class="wb-sl" href="#wb-cont">Skip to main content</a></li><li class="wb-slc visible-sm visible-md visible-lg"><a class="wb-sl" href="#wb-info">Skip to "About government"</a></li>'+(!0==
a.topSecMenu?'<li class="wb-slc visible-md visible-lg"><a class="wb-sl" href="#wb-sec">Skip to section menu</a></li>':"")+'</ul><header><div id="wb-bnr" class="container">';if(null!=a.lngLinks){for(var b=b+'<section id="wb-lng" class="text-right"><h2 class="wb-inv">Language selection</h2><ul class="list-inline margin-bottom-none">',e=a.lngLinks,f=e.length,c=0;c<f;c++)var d=e[c],b=b+('<li><a lang="'+soy.$$escapeHtml(d.lang)+'" href="'+soy.$$escapeHtml(d.href)+'">'+soy.$$escapeHtml(d.text)+"</a></li>");
b+="</ul></section>"}b+='<div class="row"><div class="brand col-xs-5 col-md-4">'+(!1!=a.siteMenu?'<a href="https://www.canada.ca/en.html">':"")+"<img src='"+wet.builder.environment(a)+'assets/sig-blk-en.svg\' alt="" /><span class="wb-inv"> Government of Canada / <span lang="fr">Gouvernement du Canada</span></span>'+(!1!=a.siteMenu?"</a>":"")+"</div>"+(!1!=a.search?'<section id="wb-srch" class="col-lg-8 text-right"><h2>Search</h2><form action="https://www.canada.ca/en/sr.html" method="get" name="cse-search-box" role="search" class="form-inline"><div class="form-group"><label for="wb-srch-q" class="wb-inv">Search Canada.ca</label><input name="cdn" value="canada" type="hidden"><input name="st" value="s" type="hidden"><input name="num" value="10" type="hidden"><input name="langs" value="en" type="hidden"><input name="st1rt" value="1" type="hidden"><input name="s5bm3ts21rch" value="x" type="hidden"><input id="wb-srch-q" list="wb-srch-q-ac" class="wb-srch-q form-control" name="q" type="search" value="" size="34" maxlength="170" placeholder="Search Canada.ca"><input type="hidden" name="_charset_" value="UTF-8"><datalist id="wb-srch-q-ac"></datalist></div><div class="form-group submit"><button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small" name="wb-srch-sub"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Search</span></button></div></form></section>':
"")+"</div></div>"+(!1!=a.siteMenu?'<nav class="gcweb-menu" typeof="SiteNavigationElement"><div class="container"><h2 class="wb-inv">Menu</h2><button type="button" aria-haspopup="true" aria-expanded="false"><span class="wb-inv">Main </span>Menu <span class="expicon glyphicon glyphicon-chevron-down"></span></button><ul role="menu" aria-orientation="vertical" data-ajax-replace="//cdn.canada.ca/gcweb-cdn-live/sitemenu/sitemenu-v5-en.html"><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/jobs.html">Jobs and the workplace</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/immigration-citizenship.html">Immigration and citizenship</a></li><li role="presentation"><a role="menuitem" href="https://travel.gc.ca/">Travel and tourism</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/business.html">Business and industry</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/benefits.html">Benefits</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/health.html">Health</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/taxes.html">Taxes</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/environment.html">Environment and natural resources</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/defence.html">National security and defence</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/culture.html">Culture, history and sport</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/policing.html">Policing, justice and emergencies</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/transport.html">Transport and infrastructure</a></li><li role="presentation"><a role="menuitem" href="http://international.gc.ca/world-monde/index.aspx?lang=eng">Canada and the world</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/finance.html">Money and finances</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/finance.html">Science and innovation</a></li></ul></div></nav>':
'<div class="gcweb-menu"></div>');if(!1!=a.breadcrumbs){b+='<nav id="wb-bc" property="breadcrumb"><h2>You are here:</h2><div class="container"><ol class="breadcrumb">';if(null!=a.breadcrumbs)for(e=a.breadcrumbs,f=e.length,c=0;c<f;c++)d=e[c],b+="<li>"+(null!=d.acronym?'<abbr title="'+soy.$$escapeHtml(d.acronym)+'">':"")+(null!=d.href?'<a href="'+soy.$$escapeHtml(d.href)+'">':"")+soy.$$escapeHtml(d.title)+(null!=d.href?"</a>":"")+(null!=d.acronym?"</abbr>":"")+"</li>";else b+='<li><a href="https://www.canada.ca/en.html">Home</a></li>';
b+="</ol></div></nav>"}return b+"</header>"};
wet.builder.preFooter=function(a,h){a=a||{};var b="\t\t\t";if(!1!=a.pagedetails){b+='<div class="pagedetails'+(null!=a.isContainer?" container":"")+'">';if(!1!=a.showFeedback||!1!=a.showShare){b+='<div class="row">'+(!1!=a.showFeedback?null!=a.showFeedback?'<div class="col-sm-6 col-md-5 col-lg-4"><a href="'+soy.$$escapeHtml(a.showFeedback)+'" class="btn btn-default btn-center">Report a problem on this page</a></div>':'<div class="col-sm-6 col-md-5 col-lg-4"><a href="https://www.canada.ca/en/report-problem.html" class="btn btn-default btn-center">Report a problem on this page</a></div>':"");
if(!1!=a.showShare)if(null!=a.showShare){for(var b=b+('<div class="wb-share col-sm-4 col-md-3 col-sm-offset-'+(!1!=a.showFeedback?"2":"8")+" col-md-offset-"+(!1!=a.showFeedback?"4":"9")+(!1!=a.showFeedback?" col-lg-offset-5":"")+'" data-wb-share=\'{"filter": ['),e=a.showShare,f=e.length,c=0;c<f;c++)b+='"'+soy.$$escapeHtml(e[c])+'"'+(c!=f-1?", ":"");b+='], "lnkClass": "btn btn-default btn-block"}\'></div>'}else b+='<div class="wb-share col-sm-4 col-md-3 col-sm-offset-'+(!1!=a.showFeedback?"2":"8")+
" col-md-offset-"+(!1!=a.showFeedback?"4":"9")+(!1!=a.showFeedback?" col-lg-offset-5":"")+'" data-wb-share=\'{"lnkClass": "btn btn-default btn-block"}\'></div>';b+="</div>"}b+='<dl id="wb-dtmd">'+(null!=a.screenIdentifier?'<dt>Screen Identifier:&#32;</dt><dd property="identifier">'+soy.$$escapeHtml(a.screenIdentifier)+"</dd>":"")+(null!=a.dateModified?'<dt>Date modified:&#32;</dt><dd><time property="dateModified">'+soy.$$escapeHtml(a.dateModified)+"</time></dd>":"")+(null!=a.versionIdentifier?'<dt>Version:&#32;</dt><dd property="version">'+
soy.$$escapeHtml(a.versionIdentifier)+"</dd>":"")+"</dl></div>"}return b};
wet.builder.secmenu=function(a,h){for(var b='\t\t\t<h2 id="wb-sec-h" class="wb-inv">Section menu</h2>',e=a.sections,f=e.length,c=0;c<f;c++){for(var d=e[c],b=b+('<section class="list-group menu list-unstyled"><h3>'+(null!=d.sectionLink?'<a href="'+soy.$$escapeHtml(d.sectionLink)+'"'+(!0==d.newWindow?' target="_blank"':"")+">":"")+soy.$$escapeHtml(d.sectionName)+(!0==d.newWindow?'<span class="wb-inv"> This link will open in a new window</span>':"")+(null!=d.sectionLink?"</a>":"")+'</h3><ul class="list-group menu list-unstyled">'),
d=d.menuLinks,l=d.length,k=0;k<l;k++){var g=d[k];if(null!=g.subLinks){for(var b=b+('<li><a href="'+soy.$$escapeHtml(g.href)+'" class="list-group-item"'+(!0==g.newWindow?' target="_blank"':"")+">"+soy.$$escapeHtml(g.text)+(!0==g.newWindow?'<span class="wb-inv"> This link will open in a new window</span>':"")+'</a><ul class="list-group menu list-unstyled">'),g=g.subLinks,p=g.length,n=0;n<p;n++)var m=g[n],b=b+('<li><a href="'+soy.$$escapeHtml(m.subhref)+'" class="list-group-item"'+(!0==m.newWindow?' target="_blank"':
"")+">"+soy.$$escapeHtml(m.subtext)+(!0==m.newWindow?'<span class="wb-inv"> This link will open in a new window</span>':"")+"</a></li>");b+="</ul></li>"}else b+='<li><a href="'+soy.$$escapeHtml(g.href)+'" class="list-group-item"'+(!0==g.newWindow?' target="_blank"':"")+">"+soy.$$escapeHtml(g.text)+(!0==g.newWindow?'<span class="wb-inv"> This link will open in a new window</span>':"")+"</a></li>"}b+="</ul></section>"}return b};
wet.builder.footer=function(a,h){a=a||{};var b='\t\t<footer id="wb-info">';if(!1!=a.showFooter){b+='<div class="landscape"><nav class="container wb-navcurr"><h2 class="wb-inv">About government</h2><ul class="list-unstyled colcount-sm-2 colcount-md-3">';if(null!=a.contactLinks)for(var e=a.contactLinks,f=e.length,c=0;c<f;c++)var d=e[c],b=b+(0==c?'<li><a href="'+soy.$$escapeHtml(d.href)+'">Contact us</a></li>':"");else b+='<li><a href="https://www.canada.ca/en/contact.html">Contact us</a></li>';b+='<li><a href="https://www.canada.ca/en/government/dept.html">Departments and agencies</a></li><li><a href="https://www.canada.ca/en/government/publicservice.html">Public service and military</a></li><li><a href="https://www.canada.ca/en/news.html">News</a></li><li><a href="https://www.canada.ca/en/government/system/laws.html">Treaties, laws and regulations</a></li><li><a href="https://www.canada.ca/en/transparency/reporting.html">Government-wide reporting</a></li><li><a href="http://pm.gc.ca/eng">Prime Minister</a></li><li><a href="https://www.canada.ca/en/government/system.html">How government works</a></li><li><a href="http://open.canada.ca/en/">Open government</a></li></ul></nav></div><div class="brand"><div class="container"><div class="row"><nav class="col-md-9 col-lg-10 ftr-urlt-lnk"><h2 class="wb-inv">About this site</h2><ul><li><a href="https://www.canada.ca/en/social.html">Social media</a></li><li><a href="https://www.canada.ca/en/mobile.html">Mobile applications</a></li><li><a href="https://www1.canada.ca/en/newsite.html">About Canada.ca</a></li><li><a href="https://www.canada.ca/en/transparency/terms.html">Terms and conditions</a></li><li><a href="https://www.canada.ca/en/transparency/privacy.html">Privacy</a></li></ul></nav>'}else{b+=
'<div id="transactFooter" class="landscape"></div><div class="brand"><div class="container"><div class="row"><nav class="col-md-9 col-lg-10 ftr-urlt-lnk"><h2 class="wb-inv">About this site</h2><ul>';if(null!=a.contactLinks)for(e=a.contactLinks,f=e.length,c=0;c<f;c++)d=e[c],b+=0==c?"<li><a "+(d.href?' href="'+soy.$$escapeHtml(d.href)+'"':' href="https://www.canada.ca/en/contact.html"')+(d.newWindow?' target="_blank"':"")+">Contact information"+(!0==d.newWindow?'<span class="wb-inv"> This link will open in a new window</span>':
"")+"</a></li>":"";else b+='<li><a href="https://www.canada.ca/en/contact.html">Contact information</a></li>';if(null!=a.termsLink)for(e=a.termsLink,f=e.length,c=0;c<f;c++)d=e[c],b+=0==c?"<li><a "+(d.href?' href="'+soy.$$escapeHtml(d.href)+'"':' href="https://www.canada.ca/en/transparency/terms.html"')+(d.newWindow?' target="_blank"':"")+">Terms and conditions"+(!0==d.newWindow?'<span class="wb-inv"> This link will open in a new window</span>':"")+"</a></li>":"";else b+='<li><a href="https://www.canada.ca/en/transparency/terms.html">Terms and conditions</a></li>';
if(null!=a.privacyLink)for(e=a.privacyLink,f=e.length,c=0;c<f;c++)d=e[c],b+=0==c?"<li><a "+(d.href?' href="'+soy.$$escapeHtml(d.href)+'"':' href="https://www.canada.ca/en/transparency/privacy.html"')+(d.newWindow?' target="_blank"':"")+">Privacy"+(!0==d.newWindow?'<span class="wb-inv"> This link will open in a new window</span>':"")+"</a></li>":"";else b+='<li><a href="https://www.canada.ca/en/transparency/privacy.html">Privacy</a></li>';b+="</ul></nav>"}return b+='<div class="col-xs-6 visible-sm visible-xs tofpg"><a href="#wb-cont">Top of Page <span class="glyphicon glyphicon-chevron-up"></span></a></div><div class="col-xs-6 col-md-2 text-right"><img src=\''+
wet.builder.environment(a)+'assets/wmms-blk.svg\' alt="Symbol of the Government of Canada" /></div></div></div></div></footer>'};
wet.builder.refFooter=function(a,h){a=a||{};return"\t\t\x3c!--[if gte IE 9 | !IE ]>\x3c!--\x3e<script src='"+wet.builder.environment(a)+"cdts/pink.js'>\x3c/script><script src='"+("external"==a.jqueryEnv?"https://ajax.googleapis.com/ajax/libs/":wet.builder.environment(a)+"js/")+"jquery/2.2.4/jquery.min.js'>\x3c/script><script src='"+wet.builder.environment(a)+"js/wet-boew.min.js'>\x3c/script>\x3c!--<![endif]--\x3e\x3c!--[if lt IE 9]><script src='"+wet.builder.environment(a)+"js/ie8-wet-boew2.min.js'>\x3c/script><![endif]--\x3e<script src='"+
wet.builder.environment(a)+"js/theme.min.js'>\x3c/script>"+(!0==a.exitScript&&null!=a.exitURL?'<script data-id="exitScript" data-token="'+soy.$$escapeHtml(a.exitURL)+'" '+(null!=a.exitDomains?'data-token-domains="'+soy.$$escapeHtml(a.exitDomains)+'" ':"")+(!1==a.displayModal?'data-token-modal="false" ':"")+"src='"+wet.builder.environment(a)+'cdts/exitScript.js\'>\x3c/script><a id="sExitModalLink" class="wb-lbx lbx-modal wb-inv" title="" href="#sExitModal">Secure exit notice</a><section id="sExitModal" class="mfp-hide modal-dialog modal-content overlay-def"><header class="modal-header"><h2 class="modal-title">Warning</h2></header><div class="modal-body"><p>'+
(null!=a.exitMsg?soy.$$escapeHtml(a.exitMsg):"You are about to leave a secure site, do you wish to continue?")+'</p></div><div class="modal-footer"><button type="button" class="btn btn-primary popup-modal-dismiss pull-left" id="eCancel"><span class="glyphicon glyphicon-arrow-left"></span>&nbsp;Cancel</button><button type="button" class="btn btn-default popup-modal pull-right" id="eOK">Yes&nbsp;<span class="glyphicon glyphicon-arrow-right"></span></button></div></section>':"")+(!0==a.isApplication?
"<script src='"+wet.builder.environment(a)+"cdts/cdtscustom.js'>\x3c/script>":"")+(null!=a.webAnalytics?"<script>_satellite.pageBottom();\x3c/script>":"")};
wet.builder.splashTop=function(a,h){a=a||{};return"\t\t\x3c!--[if gte IE 9 | !IE ]>\x3c!--\x3e<link href='"+wet.builder.environment(a)+'assets/favicon.ico\' rel="icon" type="image/x-icon"><link rel="stylesheet" href=\''+wet.builder.environment(a)+"css/theme.min.css'>\x3c!--<![endif]--\x3e<link rel=\"stylesheet\" href='"+wet.builder.environment(a)+"css/messages.min.css'>\x3c!--[if lt IE 9]><link href='"+wet.builder.environment(a)+'assets/favicon.ico\' rel="shortcut icon" /><link rel="stylesheet" href=\''+
wet.builder.environment(a)+"css/messages-ie.min.css' /><link rel=\"stylesheet\" href='"+wet.builder.environment(a)+"css/ie8-theme.min.css' /><script src=\""+("external"==a.jqueryEnv?"https://ajax.googleapis.com/ajax/libs":wet.builder.environment(a)+"js/")+"jquery/1.12.4/jquery.min.js\">\x3c/script><script src='"+wet.builder.environment(a)+"js/ie8-wet-boew.min.js'>\x3c/script><![endif]--\x3e\x3c!--[if lte IE 9]><![endif]--\x3e"};
wet.builder.splash=function(a,h){return'\t\t<div id="bg"><img src=\''+wet.builder.environment(a)+'img/splash/sp-bg-2.jpg\' alt=""></div><main><div class="sp-hb"><div class="sp-bx col-xs-12"><h1 property="name" class="wb-inv">Canada.ca</h1><div class="row"><div class="col-xs-11 col-md-8"><img src=\''+wet.builder.environment(a)+'assets/sig-spl.svg\' alt="Government of Canada / Gouvernement du Canada" /></div></div><div class="row"><section class="col-xs-6 text-right">'+(null!=a.nameEng?'<h2 style="min-height:4.5em;">'+
soy.$$escapeHtml(a.nameEng)+"</h2>":'<h2 class="wb-inv">Government of Canada</h2>')+'<p><a href="'+soy.$$escapeHtml(a.indexEng)+'" class="btn btn-primary">English</a></p></section><section class="col-xs-6" lang="fr">'+(null!=a.nameFra?'<h2 style="min-height:4.5em;">'+soy.$$escapeHtml(a.nameFra)+"</h2>":'<h2 class="wb-inv">Gouvernement du Canada</h2>')+'<p><a href="'+soy.$$escapeHtml(a.indexFra)+'" class="btn btn-primary">Fran\u00e7ais</a></p></section></div></div><div class="sp-bx-bt col-xs-12"><div class="row"><div class="col-xs-7 col-md-8"><a href="'+
soy.$$escapeHtml(a.termsEng)+'" class="sp-lk">Terms & conditions</a> <span class="glyphicon glyphicon-asterisk"></span> <a href="'+soy.$$escapeHtml(a.termsFra)+'" class="sp-lk" lang="fr">Avis</a></div><div class="col-xs-5 col-md-4 text-right mrgn-bttm-md"><img src=\''+wet.builder.environment(a)+'assets/wmms-spl.svg\' width="127" alt="Symbol of the Government of Canada / Symbole du gouvernement du Canada" /></div></div></div></div></main>\x3c!--[if gte IE 9 | !IE ]>\x3c!--\x3e<script src="'+("external"==
a.jqueryEnv?"https://ajax.googleapis.com/ajax/libs":wet.builder.environment(a)+"js/")+"jquery/2.2.4/jquery.min.js\">\x3c/script><script src='"+wet.builder.environment(a)+"js/wet-boew.min.js'>\x3c/script>\x3c!--<![endif]--\x3e\x3c!--[if lt IE 9]><script src='"+wet.builder.environment(a)+"js/ie8-wet-boew2.min.js'>\x3c/script><![endif]--\x3e<script src='"+wet.builder.environment(a)+"js/theme.min.js'>\x3c/script>"+(null!=a.webAnalytics?"<script>_satellite.pageBottom();\x3c/script>":"")};
if("undefined"==typeof serverPage)var serverPage={};
serverPage.serverRefTop=function(a,h){a=a||{};return"\t\t\x3c!--[if gte IE 9 | !IE ]>\x3c!--\x3e<link href='"+wet.builder.environment(a)+'assets/favicon.ico\' rel="icon" type="image/x-icon"><link rel="stylesheet" href=\''+wet.builder.environment(a)+"css/theme.min.css'><link rel=\"stylesheet\" href='"+wet.builder.environment(a)+"cdts/cdtsfixes.css'>\x3c!--<![endif]--\x3e\x3c!--[if lt IE 9]><link href='"+wet.builder.environment(a)+'assets/favicon.ico\' rel="shortcut icon" /><link rel="stylesheet" href=\''+wet.builder.environment(a)+
"css/ie8-theme-srv.min.css' /><script src=\""+("external"==a.jqueryEnv?"https://ajax.googleapis.com/ajax/libs":wet.builder.environment(a)+"js/")+"jquery/1.12.4/jquery.min.js\">\x3c/script><script src='"+wet.builder.environment(a)+"js/ie8-wet-boew.min.js'>\x3c/script><![endif]--\x3e"};
serverPage.serverTop=function(a,h){return'\t<header><div id="wb-bnr" class="container"><div class="row"><div class="brand col-xs-8 col-sm-9 col-md-6"> <a href="https://canada.ca"><img src=\''+wet.builder.environment(a)+'assets/sig-blk-en.svg\' alt="" /><span class="wb-inv"> Government of Canada / Gouvernement du Canada</span></a> </div></div></div></header>'};
serverPage.serverBottom=function(a,h){return'\t<footer id="wb-info"><div class="brand"><div class="container"><div class="row"><div class="col-xs-6 visible-sm visible-xs tofpg"> <a href="#wb-cont">Top of page / <span lang="fr">Haut de la page</span> <span class="glyphicon glyphicon-chevron-up"></span></a> </div><div class="col-xs-6 col-md-12 text-right"><img src=\''+wet.builder.environment(a)+'assets/wmms-blk.svg\' alt="Symbol of the Government of Canada / Symbole du gouvernement du Canada" /></div></div></div></div></footer>'};
if("undefined"==typeof applicationPage)var applicationPage={};
applicationPage.appTop=function(a,h){var b="<script>dataLayer = [];\x3c/script>\x3c!-- Google Tag Manager --\x3e<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5DBPCQJ');\x3c/script>\x3c!-- End Google Tag Manager --\x3e<ul id=\"wb-tphp\"><li class=\"wb-slc\"><a class=\"wb-sl\" href=\"#wb-cont\">Skip to main content</a></li><li class=\"wb-slc visible-sm visible-md visible-lg\"><a class=\"wb-sl\" href=\"#wb-info\">Skip to \""+(!0==
a.topCusMenu?"Related links":"About this Web application")+'"</a></li>'+(!0==a.topSecMenu?'<li class="wb-slc visible-md visible-lg"><a class="wb-sl" href="#wb-sec">Skip to section menu</a></li>':"")+'</ul><header><div id="wb-bnr" class="container">';if(null!=a.lngLinks){for(var b=b+'<section id="wb-lng" class="text-right"><h2 class="wb-inv">Language selection</h2><ul class="list-inline margin-bottom-none">',e=a.lngLinks,f=e.length,c=0;c<f;c++)var d=e[c],b=b+('<li><a lang="'+soy.$$escapeHtml(d.lang)+
'" href="'+soy.$$escapeHtml(d.href)+'">'+soy.$$escapeHtml(d.text)+"</a></li>");b+="</ul></section>"}b+='<div class="row"><div class="brand col-xs-5 col-md-4"><img src=\''+wet.builder.environment(a)+'assets/sig-blk-en.svg\' alt="" /><span class="wb-inv"> Government of Canada / <span lang="fr">Gouvernement du Canada</span></span></div>'+(null!=a.customSearch?'<section id="wb-srch" class="col-lg-8 text-right visible-md visible-lg">'+("test"==a.customSearch?'<h2>Search</h2><form action="#" method="post" name="cse-search-box" role="search" class="form-inline"><div class="form-group"><label for="wb-srch-q" class="wb-inv">Search website</label><input id="wb-srch-q" list="wb-srch-q-ac" class="wb-srch-q form-control" name="q" type="search" value="" size="34" maxlength="170" placeholder="Search"><datalist id="wb-srch-q-ac">\x3c!--[if lte IE 9]><select><![endif]--\x3e\x3c!--[if lte IE 9]></select><![endif]--\x3e</datalist></div><div class="form-group submit"><button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small" name="wb-srch-sub"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Search</span></button></div></form>':
"")+"</section>":"")+'</div></div><div class="app-bar"><div class="container"><div class="row">'+(null!=a.appSettings||null!=a.signOut||null!=a.signIn?'<section class="col-xs-12 col-sm-7">':'<section class="col-xs-12">');e=a.appName;f=e.length;for(c=0;c<f;c++)d=e[c],b+=0==c?'<h2 class="wb-inv">Name of Web application</h2><a class="app-name" href="'+soy.$$escapeHtml(d.href)+'">'+soy.$$escapeHtml(d.text)+"</a>":"";b+="</section>";if(null!=a.appSettings||null!=a.signOut||null!=a.signIn){b+='<nav class="col-sm-5 hidden-xs hidden-print"><h2 class="wb-inv">Account menu</h2><ul class="app-list-account list-unstyled">';
if(null!=a.appSettings)for(e=a.appSettings,f=e.length,c=0;c<f;c++)d=e[c],b+=0==c?'<li><a href="'+soy.$$escapeHtml(d.href)+'" class="btn"><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Account settings</a></li>&#32;':"";if(null!=a.signOut)for(e=a.signOut,f=e.length,c=0;c<f;c++)d=e[c],b+=0==c?'<li><a href="'+soy.$$escapeHtml(d.href)+'" class="btn"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Sign out</a></li>':"";else if(null!=a.signIn)for(e=a.signIn,f=e.length,
c=0;c<f;c++)d=e[c],b+=0==c?'<li><a href="'+soy.$$escapeHtml(d.href)+'" class="btn"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Sign in</a></li>':"";b+="</ul></nav>"}b+="</div></div></div>";if(null!=a.customSearch||null!=a.menuPath||null!=a.menuLinks||!0==a.topSecMenu||null!=a.appSettings||null!=a.signOut||null!=a.signIn){b+='<div class="app-bar-mb container visible-xs-block hidden-print">'+(null!=a.menuPath||null!=a.menuLinks||!0==a.topSecMenu||null!=a.customSearch?'<nav><h2 class="wb-inv">'+
(null!=a.menuPath||null!=a.menuLinks||!0==a.topSecMenu?"Menu"+(null!=a.customSearch?" and search":""):"Search")+'</h2><ul class="app-list-main list-unstyled">'+(null!=a.menuPath||null!=a.menuLinks||!0==a.topSecMenu?'<li class="wb-mb-links" id="wb-glb-mn"><a href="#mb-pnl" aria-controls="mb-pnl" class="btn overlay-lnk" role="button">Menu</a><h2>Menu</h2></li>':"")+(null!=a.customSearch?'<li><a href="#app-srch-mb" title="Search" aria-controls="app-srch-mb" class="btn overlay-lnk" role="button"><span class="glyphicon-search glyphicon" aria-hidden="true"></span><span class="wb-inv">Search</span></a></li>':
"")+'</ul><div id="mb-pnl"></div>'+(null!=a.customSearch?'<section id="app-srch-mb" class="wb-overlay modal-content overlay-def wb-bar-t">'+("test"==a.customSearch?'<div class="modal-header"><h3 class="modal-title">Search</h3></div><div class="modal-body"><form action="#" method="post" name="cse-search-box" role="search" class="form-inline"><div class="input-group"><label for="app-srch-q-mb" class="wb-inv">Search website</label><input id="app-srch-q-mb" list="app-srch-q-ac-mb" class="app-srch-q-mb form-control" name="q" type="search" value="" size="27" maxlength="150"><datalist id="app-srch-q-ac-mb">\x3c!--[if lte IE 9]><select><![endif]--\x3e\x3c!--[if lte IE 9]></select><![endif]--\x3e</datalist><span class="input-group-btn"><button type="submit" id="app-srch-sub-mb" class="btn btn-primary btn-small" name="app-srch-sub-mb"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Search</span></button></span></div></form></div>':
"")+"</section>":"")+"</nav>":"");if(null!=a.appSettings||null!=a.signOut||null!=a.signIn){b+='<nav><h2 class="wb-inv">Account menu</h2><ul class="app-list-account list-unstyled">';if(null!=a.appSettings)for(e=a.appSettings,f=e.length,c=0;c<f;c++)d=e[c],b+=0==c?'<li><a href="'+soy.$$escapeHtml(d.href)+'" class="btn"><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Account settings</a></li>&#32;':"";if(null!=a.signOut)for(e=a.signOut,f=e.length,c=0;c<f;c++)d=e[c],b+=0==c?'<li><a href="'+
soy.$$escapeHtml(d.href)+'" class="btn"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Sign out</a></li>':"";else if(null!=a.signIn)for(e=a.signIn,f=e.length,c=0;c<f;c++)d=e[c],b+=0==c?'<li><a href="'+soy.$$escapeHtml(d.href)+'" class="btn"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Sign in</a></li>':"";b+="</ul></nav>"}b+="</div>";if(null!=a.menuLinks){b+='<nav id="wb-sm" data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"><div class="pnl-strt container nvbar"><h2 class="wb-inv">Main navigation menu</h2><div class="row"><ul class="list-inline menu" role="menubar">';
e=a.menuLinks;f=e.length;for(c=0;c<f;c++)if(d=e[c],null!=d.subLinks){for(var b=b+("<li><a"+(null!=d.href?' href="'+soy.$$escapeHtml(d.href)+'"':"")+' class="item"'+(!0==d.newWindow?' target="_blank"':"")+">"+soy.$$escapeHtml(d.text)+(!0==d.newWindow?'<span class="wb-inv"> This link will open in a new window</span>':"")+'</a><ul class="sm list-unstyled" id="s2" role="menu">'),d=d.subLinks,l=d.length,k=0;k<l;k++)var g=d[k],b=b+(k==l-1?'<li class="slflnk"><a href="'+soy.$$escapeHtml(g.subhref)+'"'+(!0==
g.newWindow?' target="_blank"':"")+">"+soy.$$escapeHtml(g.subtext)+(!0==g.newWindow?'<span class="wb-inv"> This link will open in a new window</span>':"")+"</a></li>":'<li><a href="'+soy.$$escapeHtml(g.subhref)+'"'+(!0==g.newWindow?' target="_blank"':"")+">"+soy.$$escapeHtml(g.subtext)+(!0==g.newWindow?'<span class="wb-inv"> This link will open in a new window</span>':"")+"</a></li>");b+="</ul></li>"}else b+='<li><a href="'+soy.$$escapeHtml(d.href)+'" class="item"'+(!0==d.newWindow?' target="_blank"':
"")+">"+soy.$$escapeHtml(d.text)+(!0==d.newWindow?'<span class="wb-inv"> This link will open in a new window</span>':"")+"</a></li>";b+="</ul></div></div></nav>"}else null!=a.menuPath&&(b+='<nav id="wb-sm" data-ajax-replace="'+soy.$$escapeHtml(a.menuPath)+'" data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"></nav>')}if(null!=a.breadcrumbs){b+='<nav id="wb-bc" property="breadcrumb"><h2>You are here:</h2><div class="container"><div class="row"><ol class="breadcrumb">';
e=a.breadcrumbs;f=e.length;for(c=0;c<f;c++)d=e[c],b+="<li>"+(null!=d.acronym?'<abbr title="'+soy.$$escapeHtml(d.acronym)+'">':"")+(null!=d.href?'<a href="'+soy.$$escapeHtml(d.href)+'">':"")+soy.$$escapeHtml(d.title)+(null!=d.href?"</a>":"")+(null!=d.acronym?"</abbr>":"")+"</li>";b+="</ol></div></div></nav>"}return b+"</header>"};
applicationPage.appFooter=function(a,h){a=a||{};var b='\t\t<footer id="wb-info">';if(null!=a.footerSections){for(var b=b+'<div class="landscape"><nav class="container wb-navcurr"><h2 class="wb-inv">Related links</h2><ul class="list-unstyled colcount-sm-2 colcount-md-3">',e=a.footerSections,f=e.length,c=0;c<f;c++)var d=e[c],b=b+('<li><a href="'+soy.$$escapeHtml(d.href)+'"'+(!0==d.newWindow?' target="_blank"':"")+">"+soy.$$escapeHtml(d.text)+(!0==d.newWindow?'<span class="wb-inv"> This link will open in a new window</span>':
"")+"</a></li>");b+="</ul></nav></div>"}b+='<div class="brand"><div class="container"><div class="row"><nav class="col-md-10 ftr-urlt-lnk"><h2 class="wb-inv">About this Web application</h2><ul>';if(null!=a.contactLink)for(e=a.contactLink,f=e.length,c=0;c<f;c++)d=e[c],b+=0==c?"<li><a "+(d.href?' href="'+soy.$$escapeHtml(d.href)+'"':' href="https://www.canada.ca/en/contact.html"')+(d.newWindow?' target="_blank"':"")+">Contact information"+(!0==d.newWindow?'<span class="wb-inv"> This link will open in a new window</span>':
"")+"</a></li>":"";else b+='<li><a href="https://www.canada.ca/en/contact.html">Contact information</a></li>';if(null!=a.termsLink)for(e=a.termsLink,f=e.length,c=0;c<f;c++)d=e[c],b+=0==c?"<li><a "+(d.href?' href="'+soy.$$escapeHtml(d.href)+'"':' href="https://www.canada.ca/en/transparency/terms.html"')+(d.newWindow?' target="_blank"':"")+">Terms and conditions"+(!0==d.newWindow?'<span class="wb-inv"> This link will open in a new window</span>':"")+"</a></li>":"";else b+='<li><a href="https://www.canada.ca/en/transparency/terms.html">Terms and conditions</a></li>';
if(null!=a.privacyLink)for(e=a.privacyLink,f=e.length,c=0;c<f;c++)d=e[c],b+=0==c?"<li><a "+(d.href?' href="'+soy.$$escapeHtml(d.href)+'"':' href="https://www.canada.ca/en/transparency/privacy.html"')+(d.newWindow?' target="_blank"':"")+">Privacy"+(!0==d.newWindow?'<span class="wb-inv"> This link will open in a new window</span>':"")+"</a></li>":"";else b+='<li><a href="https://www.canada.ca/en/transparency/privacy.html">Privacy</a></li>';return b+='</ul></nav><div class="col-xs-6 visible-sm visible-xs tofpg"><a href="#wb-cont">Top of Page <span class="glyphicon glyphicon-chevron-up"></span></a></div><div class="col-xs-6 col-md-3 col-lg-2 text-right"><img src=\''+
wet.builder.environment(a)+'assets/wmms-blk.svg\' alt="Symbol of the Government of Canada" /></div></div></div></div></footer>'};
