export default {
  async fetch(request) {
    return new Response("Formation worker is live", {
      headers: { "content-type": "text/plain" }
    });
  }
};
