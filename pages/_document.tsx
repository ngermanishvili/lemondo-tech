import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <title>Domenebi.ge</title>
                    <meta name="description" content="Find Your Domain - იპოვნე სასურველი დომეინი" />
                    <meta property="twitter:image" content="https://i.ibb.co/d6TXxB2/homepage-https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoZGh9MrLweXKaVRHlRCVA4DgehGUAOVWF5w&usqp=CAU.jpg" />
                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="og:url" content="domenebi.ge" />
                    <meta property="og:image" content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoZGh9MrLweXKaVRHlRCVA4DgehGUAOVWF5w&usqp=CAU" />
                    <meta property="og:type" content="website" />
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
