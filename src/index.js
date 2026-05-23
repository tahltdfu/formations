export default {
  async fetch(request) {
    const url = new URL(request.url);
    const name = url.pathname.split("/").filter(Boolean).pop() || "defense0523";

    const formations = {
      "defense0523": "eyJHYW1lTW9kZSI6MCwidHJvb3BMYXlvdXQiOnsiMzIiOjE0NCwiMjEiOjIxNywiMjMiOjE4MCwiMjAiOjIxOSwiMzMiOjE3MywiNjQiOjIxMSwiNTQiOjIyMCwiMjUiOjIxNywiNTAiOjIyMCwiMiI6MTkzLCI0MCI6MTYwLCIzMCI6MTY4LCIxMSI6MjE5LCI0MiI6MTgzLCI2IjoyMTEsIjIyIjoyMTksIjYxIjoxNjYsIjMxIjoxNDQsIjQ0IjoxODMsIjY2IjoxMjUsIjAiOjIxMSwiMyI6MTYyLCI1NSI6MjE2LCI2MyI6MTY2LCIxNiI6MjE5LCIxMiI6MTgwLCIxNSI6MjE5LCI1MyI6MjE2LCI1NiI6MjIwLCI0NiI6MTYwLCIxIjoyMTEsIjM2IjoxNjgsIjM1IjoxNDQsIjI2IjoyMTksIjEzIjoxODYsIjUxIjoyMTYsIjUyIjoyMjAsIjE0IjoxODAsIjI0IjoyMTksIjM0IjoxNDQsIjQxIjoyMDgsIjYyIjoyMTEsIjQ1IjoyMDgsIjQiOjE5MywiNjAiOjEyNSwiNDMiOjE4MywiNSI6MjExLCI2NSI6MTY2LCIxMCI6MjE5fSwiaGVyb0xheW91dCI6eyIyIjoxNDJ9LCJhcm15TGF5b3V0IjpudWxsfQ==",
      "Da-Seo": "eyJHYW1lTW9kZSI6MCwidHJvb3BMYXlvdXQiOnsiMTMiOjIxMywiNjQiOjIyMCwiMTUiOjIxOSwiMzMiOjE5MywiNTYiOjIyMCwiMjAiOjIxOSwiNjAiOjIyMCwiNDUiOjIxNiwiNSI6MTI1LCIxNCI6MTc5LCI1MyI6MjA4LCIyNSI6MjE5LCI1MCI6MjIwLCIxIjoxMjUsIjM2IjoyMTksIjIxIjoyMTksIjAiOjE5MywiMjYiOjIxOSwiMzAiOjIxOSwiNTEiOjIxNiwiMTYiOjIxOSwiNiI6MTkzLCI2MyI6MjE2LCI0MSI6MjE2LCIzMSI6MTkzLCIxMCI6MjE5LCIzMiI6MjE5LCI1NCI6MjE2LCI0NiI6MjE2LCI2NiI6MjIwLCI0MyI6MjIwLCIyNCI6MTY4LCIxMSI6MjE5LCIyMyI6MTg2LCIyIjoyMTEsIjQwIjoyMTYsIjEyIjoxNzksIjMiOjE2MiwiNTUiOjIxNiwiMjIiOjE2OCwiNCI6MjExLCI2NSI6MjEzLCI0MiI6MjE2LCI2MSI6MjEzLCI1MiI6MjE2LCI0NCI6MjE2LCI2MiI6MjIwLCIzNSI6MTkzLCIzNCI6MjE5fSwiaGVyb0xheW91dCI6eyIxIjoxMzl9LCJhcm15TGF5b3V0IjpudWxsfQ=="
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
