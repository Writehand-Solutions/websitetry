import localFont from 'next/font/local';

import type { Metadata } from 'next';

import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/sections/footer';
import { ThemeProvider } from '@/components/theme-provider';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: {
    default: 'Productised.ai | Build AI Products, Not Just Forms',
    template: '%s | Productised',
  },
  description: `Turn your expertise into branded, no-code AI
products—interactive funnels, calculators, and personalised output
pages. Capture better leads, deliver instant value, and scale
revenue effortlessly.`,
  keywords: [
    'Productised',
    'Writehand',
    'AI Productisation',
    'TypeScript',
    'Productised.ai',
    'AI Products',
  ],
  authors: [{ name: 'Productised Team' }],
  creator: 'Productised Team',
  publisher: 'Productised.ai',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '48x48' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon.ico' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/favicon.ico' }],
  },
  openGraph: {
    title: 'Productised.ai | Build AI Products, Not Just Forms',
    description: `Turn your expertise into branded, no-code AI
products—interactive funnels, calculators, and personalised output
pages. Capture better leads, deliver instant value, and scale
revenue effortlessly.`,
    siteName: 'Productised.ai',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Productised.ai | Build AI Products, Not Just Forms',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Productised.ai | Build AI Products, Not Just Forms',
    description: `Turn your expertise into branded, no-code AI
products—interactive funnels, calculators, and personalised output
pages. Capture better leads, deliver instant value, and scale
revenue effortlessly.`,
    images: ['/og-image.jpg'],
    creator: '@ProductisedAI',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* HEAD SCRIPTS - These will be in the <head> */}
        {/* ClickRank AI script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var clickRankAi = document.createElement("script");
              clickRankAi.src = "https://js.clickrank.ai/seo/98a13b7f-2a54-4fd6-a070-b5bedf2cc9a9/script?" + new Date().getTime();
              clickRankAi.async = true;
              document.head.appendChild(clickRankAi);
            `,
          }}
        />

        {/* Gist tracking script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(d,h,w){var gist=w.gist=w.gist||[];gist.methods=['trackPageView','identify','track','setAppId'];gist.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);gist.push(e);return gist;}};for(var i=0;i<gist.methods.length;i++){var c=gist.methods[i];gist[c]=gist.factory(c)}s=d.createElement('script'),s.src="https://widget.getgist.com",s.async=!0,e=d.getElementsByTagName(h)[0],e.appendChild(s),s.addEventListener('load',function(e){},!1),gist.setAppId("w6272xuv"),gist.trackPageView()})(document,'head',window);
            `,
          }}
        />

        {/* Gist ready event handler - Enhanced hiding */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Multiple attempts to hide Gist chat
              document.addEventListener('gistReady', function () {
                if (typeof gist !== 'undefined' && typeof gist.chat === 'function') {
                  gist.chat('hide');
                  gist.chat('hideLauncher');
                }
              });
              
              // Fallback - hide with CSS if JS doesn't work
              setTimeout(function() {
                var gistElements = document.querySelectorAll('[class*="gist"], [id*="gist"], iframe[src*="getgist"]');
                gistElements.forEach(function(el) {
                  el.style.display = 'none';
                });
              }, 2000);
              
              // Another fallback - check every few seconds
              setInterval(function() {
                if (typeof gist !== 'undefined' && typeof gist.chat === 'function') {
                  gist.chat('hide');
                  gist.chat('hideLauncher');
                }
              }, 5000);
            `,
          }}
        />

        {/* Kissmetrics script - FIXED SYNTAX */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              var _kmq = _kmq || [];
              var _kmk = _kmk || '343eb34cd320a260adabe1d7a71303a9ceaa71e7';
              function _kms(u) {
                setTimeout(function() {
                  var d = document, f = d.getElementsByTagName('script')[0],
                  s = d.createElement('script');
                  s.type = 'text/javascript'; s.async = true; s.src = u;
                  f.parentNode.insertBefore(s, f);
                }, 1);
              }
              _kms('//i.kissmetrics.io/i.js');
              _kms('//scripts.kissmetrics.io/' + _kmk + '.2.js');
            `,
          }}
        />

        {/* Privasee script */}
        <script
          id="privasee-cb"
          src="https://app.privasee.io/cdn/632d95ef5e7d2500133b97d6/cookie-banner.js"
          async
        />

        {/* CommandBar script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var o="87e35587",n="https://api.commandbar.com",a=void 0,t=window;
              function r(o,n){void 0===n&&(n=!1),"complete"!==document.readyState&&window.addEventListener("load",r.bind(null,o,n),{capture:!1,once:!0});var a=document.createElement("script");a.type="text/javascript",a.async=n,a.src=o,document.head.appendChild(a)}
              function e(){
                var e;
                if(void 0===t.CommandBar){
                  delete t.__CommandBarBootstrap__;
                  var c=Symbol.for("CommandBar::configuration"),
                  d=Symbol.for("CommandBar::disposed"),
                  i=Symbol.for("CommandBar::isProxy"),
                  m=Symbol.for("CommandBar::queue"),
                  u=Symbol.for("CommandBar::unwrap"),
                  s=Symbol.for("CommandBar::eventSubscriptions"),
                  l=[],
                  p=localStorage.getItem("commandbar.lc");
                  p && p.includes("local") && (n="http://localhost:8000",a=void 0);
                  var f = Object.assign(((e = {})[c] = {uuid:o,api:n,cdn:a}, e[d]=!1, e[i]=!0, e[m]=[], e[u]=function(){return f}, e[s]=void 0, e), t.CommandBar),
                  v = ["addCommand","boot","addEventSubscriber","addRecordAction","setFormFactor"],
                  b = f;
                  Object.assign(f,{shareCallbacks:function(){return{}},shareContext:function(){return{}}});
                  t.CommandBar = new Proxy(f,{
                    get:function(o,n){
                      return n in b ? f[n] : "then"!==n ? v.includes(n) ? function(){var o=Array.prototype.slice.call(arguments);return new Promise((function(a,t){o.unshift(n,a,t),f[m].push(o)}))} : function(){var o=Array.prototype.slice.call(arguments);o.unshift(n),f[m].push(o)} : void 0
                    }
                  });
                  null !== p && l.push("lc=".concat(p));
                  l.push("version=2");
                  a && l.push("cdn=".concat(encodeURIComponent(a)));
                  r("".concat(n,"/latest/").concat(o,"?").concat(l.join("&")),!0)
                }
              }
              e();
              var pathnameParts = window.location.pathname.split("/");
              var workspace = pathnameParts.length > 2 ? pathnameParts[2] : "unknown";
              window.CommandBar.boot("USER_ID_HERE", {}, {
                metadata: {
                  chatbase_key: "a802a0b8-bd40-456c-a12f-3af66c9b0af5",
                  workspace: workspace
                },
                appearance: {
                  placement: "bottom-right",
                  offset: {
                    bottom: 80, // Move up to avoid overlap
                    right: 20
                  }
                }
              });
            `,
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>

        {/* BODY SCRIPTS - These will be at the end of <body> */}
        <script defer src="https://roadmap.productised.ai/widgets_sdk"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(f,n) { 
                n = document.createElement('script'); 
                n.src = 'https://fcdn.answerly.io/fn.js'; 
                n.setAttribute('data-companyId', f);
                document.getElementsByTagName('html')[0].insertAdjacentElement('beforeend', n);
              })('9ef3d4d9-b539-4681-b642-86b2cf7ad500');
            `,
          }}
        />
      </body>
    </html>
  );
}
