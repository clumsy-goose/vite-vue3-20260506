export async function onRequest(context) {
      return new Response(JSON.stringify({
        TEST: process.env.TEST || '无',
        NAME: process.env.NAME || '无',
        ALL: process.env.ALL || '无'
      }, null, 2))
    }
  