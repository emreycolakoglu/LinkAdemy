import { useTranslations } from "next-intl";
import { GetStaticPropsContext } from "next";
import Link from "next/link";

export default function Home() {
  const t = useTranslations();

  return (
    <div>
      <div>index page</div>
      <Link href="/auth/signin">signin</Link>
      <Link href="/auth/signup">signup</Link>
    </div>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by locale and read
      // the desired one based on the `locale` received from Next.js.
      messages: (await import(`../translations/${context.locale}.json`))
        .default,
    },
  };
}
