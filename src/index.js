export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // LIST ALL FORMATIONS
    if (url.pathname === "/list") {
      const list = await env.FORMATIONS.list();
      const links = list.keys.map(item => {
        return `<li>
          <a href="/${item.name}">
            ${item.name}
          </a>
        </li>`;
      }).join("");
      return new Response(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Stored Formations</title>
        </head>
        <body style="
          font-family: Arial;
          background:#111827;
          color:white;
          padding:40px;
        ">
          <h1>Stored Formations</h1>
          <ul>
            ${links}
          </ul>
        </body>
        </html>
      `, {
        headers: {
          "content-type": "text/html"
        }
      });
    }
    // GET FORMATION NAME FROM URL
    const name =
      url.pathname.split("/")
        .filter(Boolean)
        .pop() || "home";
    // LOAD FORMATION FROM KV
    const formation =
      await env.FORMATIONS.get(name);
    // NOT FOUND
    if (!formation) {
      return new Response(`
        <!DOCTYPE html>
        <html>
        <body style="
          font-family: Arial;
          background:#111827;
          color:white;
          text-align:center;
          padding:80px;
        ">
          <h1>Formation Not Found</h1>
        </body>
        </html>
      `, {
        status: 404,
        headers: {
          "content-type": "text/html"
        }
      });
    }
    // FORMATION PAGE
    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${name}</title>
</head>
<body style="
  font-family: Arial;
  background:#111827;
  color:white;
  text-align:center;
  padding:80px;
">
  <h1>${name}</h1>
  <button
    onclick="copyFormation()"
    style="
      padding:20px;
      font-size:20px;
      border:none;
      border-radius:10px;
      cursor:pointer;
    "
  >
    Copy Formation
  </button>
  <p id="status"></p>
  <script>
    const formation =
      ${JSON.stringify(formation)};
    async function copyFormation() {
      await navigator.clipboard.writeText(
        formation
      );
      document.getElementById("status")
        .innerText = "Copied!";
    }
  </script>
</body>
</html>
`;
    return new Response(html, {
      headers: {
        "content-type": "text/html"
      }
    });
  }
};
