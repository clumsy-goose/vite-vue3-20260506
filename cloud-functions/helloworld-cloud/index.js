export async function onRequest(context) {
      return new Response(JSON.stringify({
        TEST: process.env.TEST,
        NAME: process.env.NAME,
        ALL: process.env.ALL
      }, null, 2))
    }
  