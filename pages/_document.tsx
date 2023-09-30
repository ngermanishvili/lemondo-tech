import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* Primary Meta Tags */}
                    <title>Domenebi.ge</title>
                    <meta name="title" content="Domenebi.ge" />
                    <meta name="description" content="Find Your Domain - იპოვნე სასურველი დომეინი" />

                    {/* Open Graph / Facebook */}
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://domenebi.ge/" />
                    <meta property="og:title" content="Domenebi.ge" />
                    <meta property="og:description" content="Find Your Domain - იპოვნე სასურველი დომეინი" />
                    <meta property="og:image" content="https://i.ibb.co/d6TXxB2/homepage.jpg" />

                    {/* Twitter */}
                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content="https://domenebi.ge/" />
                    <meta property="twitter:title" content="Domenebi.ge" />
                    <meta property="twitter:description" content="Find Your Domain - იპოვნე სასურველი დომეინი" />
                    <meta property="twitter:image" content="https://i.ibb.co/d6TXxB2/homepage.jpg" />
                </Head>
                <body className="min-h-screen bg-black-100 font-poppins">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
