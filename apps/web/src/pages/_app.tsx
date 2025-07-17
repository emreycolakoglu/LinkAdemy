import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@web/components/theme-provider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { DefaultSeo } from "next-seo";
import "@web/styles/globals.css";
import { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";
import { Toaster } from "@web/components/ui/sonner";
import { NextIntlClientProvider } from "next-intl";
import { getCookie } from "cookies-next/client";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  const locale = getCookie("NEXT_LOCALE");

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      <QueryClientProvider client={queryClient}>
        <DefaultSeo
          title="LinkAdemy"
          openGraph={{
            type: "website",
            siteName: "LinkAdemy",
          }}
        />
        <NextIntlClientProvider
          locale={locale ?? "tr"}
          timeZone={
            Intl.DateTimeFormat().resolvedOptions().timeZone ?? "Europe/Vienna"
          }
          messages={pageProps.messages}
        >
          {getLayout(<Component {...pageProps} />)}
          <Toaster />
        </NextIntlClientProvider>

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
