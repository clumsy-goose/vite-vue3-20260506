export async function onRequest(context) {
      const data = {
        '当前环境为：': context.env.ENVSCOPE || '未设置',
        '所属分支为：': context.env.BRANCH || '未设置',
        TEST: context.env.TEST || '未设置',
        NAME: context.env.NAME || '未设置',
        ALL: context.env.ALL || '未设置',
      }
      const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Edge 函数 - 环境变量</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; max-width: 600px; margin: 40px auto; padding: 20px; background: #f5f5f5; }
    h1 { color: #333; margin-bottom: 20px; }
    .env-item { display: flex; justify-content: space-between; padding: 12px 16px; background: #fff; border-radius: 6px; margin-bottom: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .env-key { font-weight: 600; color: #555; }
    .env-val { color: #2c5aa0; font-family: monospace; }
  </style>
</head>
<body>
  <h1>⚡ Edge 函数 - 环境变量</h1>
  ${Object.entries(data).map(([k, v]) => `<div class="env-item"><span class="env-key">${k}</span><span class="env-val">${v}</span></div>`).join('')}
</body>
</html>`
      return new Response(html, {
        headers: { 'Content-Type': 'text/html; charset=utf-8' }
      })
    }
  