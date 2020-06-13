import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="keywords" content="Apartments, Apartments near me, Apartments in kampala" />
          <meta name="description" content="Just search for a neighbourhood you want to rent in" />
          <link
            href="https://fonts.googleapis.com/css2?family=Muli:wght@300;400;500;600;700;900&display=swap"
            rel="stylesheet"
          />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet" />
          <style>
            {`
          body { 
            margin: 0;
            font-family: Muli, sans-serif;
          }
          ul{
            padding-left: 0px;
            list-style: none;
          }
          * {
            box-sizing: border-box;
          }
            /* custom! */`}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
