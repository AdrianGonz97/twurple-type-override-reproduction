/*
 * Simply comment these imports in/out to view the compile errors
 * for `crypto.subtle.timingSafeEqual`
 */

// import { ApiClient } from "@twurple/api";
// import { StaticAuthProvider } from "@twurple/auth";

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		// const client = new ApiClient({
		// 	authProvider: new StaticAuthProvider("", ""),
		// });

		/*
		 * Implementation doesn't matter but `crypto.subtle.timingSafeEqual` is a
		 * Cloudflare Worker specific API.
		 */
		const buffer = new ArrayBuffer(10);
		crypto.subtle.timingSafeEqual(buffer, buffer);

		return new Response("OK");
	},
};

type Env = {};
