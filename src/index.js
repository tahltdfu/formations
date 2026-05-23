export default {
  async fetch(request) {
    const url = new URL(request.url);
    const name = url.pathname.split("/").filter(Boolean).pop() || "defense0523";

    const formations = {
      "defense0523": "PASTE_DEFENSE_STRING_HERE",
      "Da-Seo": "PASTE_DA_SEO_STRING_HERE"
    };

    const formation = formations[name] || "";

    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${name}</title>
</head>
<body style="font-family: Arial; background:#111827; color:white; text-align:center; padding:80px;">
  <h1>${name}</h1>
  <button onclick="copyFormation()" style="padding:20px; font-size:20px;">
    Copy Formation
  </button>
  <p id="status"></p>

  <script>
    const formation = ${JSON.stringify(formation)};

    async function copyFormation() {
      await navigator.clipboard.writeText(formation);
      document.getElementById("status").innerText = "Copied!";
    }
  </script>
</body>
</html>`;

    return new Response(html, {
      headers: { "content-type": "text/html" }
    });
  }
};
