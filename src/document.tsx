/**
 * The page's HTML template structure, using JSX.
 */
import { Meta, Title, Links, Main, Scripts, defineDataLoader, useAppData } from 'ice';
import { AppData } from '@ice/runtime/types';
import { unstable_useDocumentData } from '@ice/runtime';

export const dataLoader = defineDataLoader(() => {
  return 1;
});

export default function Document() {
  // Get document data when fallback to document only.
  const documentData = unstable_useDocumentData();

  console.log('document data', documentData);
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="description" content={'hello world'} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover" />
        <Meta />
        <Title />
        <Links />
      </head>
      <body>
        <Main />
        <Scripts />
      </body>
    </html>
  );
}
