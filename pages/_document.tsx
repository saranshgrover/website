// /pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import { GA_TACKING_ID } from 'config/settings'
export default class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<script
						id='hotjar'
						dangerouslySetInnerHTML={{
							__html: `(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3344235,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
						}}
					/>
					{/* Global Site Tag (gtag.js) - Google Analytics */}
					<script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TACKING_ID}`} />
					<script
						dangerouslySetInnerHTML={{
							__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
						}}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
