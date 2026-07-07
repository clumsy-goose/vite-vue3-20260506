export async function onRequest(context) {
      return new Response(JSON.stringify({
        TEST: context.env.TEST || '无',
        NAME: context.env.NAME || '无',
        ALL: context.env.ALL || '无'
      }, null, 2))
    }
  