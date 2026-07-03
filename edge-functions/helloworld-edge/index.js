export async function onRequest(context) {
      return new Response(JSON.stringify({
        TEST: context.env.TEST,
        NAME: context.env.NAME,
        ALL: context.env.ALL
      }, null, 2))
    }
  