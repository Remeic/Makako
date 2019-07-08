import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <style>{`body { padding: 100px } /* custom! */`}</style>
        </Head>
        <body className="custom_classs">
          <div id="root">
            <Main />
            <NextScript />
          </div>
          
        </body>
      </Html>
    );
  }
}

export default MyDocument;