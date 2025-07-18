import { GetStaticPropsContext } from "next";
import { Homepage } from "@web/domains/landing/views/homepage";

export default Homepage;

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
