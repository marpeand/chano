import Script from 'next/script'
const GoogleAnalytics = ({ googleAnalyticsId }: { googleAnalyticsId: string }) => {
    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
            />

            <Script strategy="afterInteractive" id="ga-script">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', ${JSON.stringify(googleAnalyticsId)});
            `}
            </Script>
        </>
    )
}

export default GoogleAnalytics
