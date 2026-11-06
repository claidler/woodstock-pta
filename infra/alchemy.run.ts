import Alchemy from "alchemy";
import * as Cloudflare from "@alchemy.run/cloudflare";
import * as Effect from "effect/Effect";

export default Alchemy.Stack(
  "woodstock-pta",
  { providers: Cloudflare.providers() },
  Effect.gen(function* () {
    const site = yield* Cloudflare.Website.Vite("pta-site", {
      assets: { notFoundHandling: "single-page-application" },
    });

    return { url: site.url };
  })
);
