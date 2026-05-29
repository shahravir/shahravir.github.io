(function () {
  var imgs = document.querySelectorAll("[data-photo]");
  imgs.forEach(function (img) {
    var real = img.getAttribute("data-photo");
    if (!real) return;
    var probe = new Image();
    probe.onload = function () {
      img.src = real;
      var wrap = img.closest(".profile-wrap") || img.closest(".page-hero");
      var cap = wrap && wrap.querySelector(".profile-caption");
      if (cap) cap.hidden = true;
    };
    probe.src = real;
  });
})();

(function () {
  var container = document.getElementById("medium-posts");
  if (!container) return;

  var RSS_URL = "https://medium.com/feed/@shah.ravir";
  var API_URL =
    "https://api.rss2json.com/v1/api.json?rss_url=" +
    encodeURIComponent(RSS_URL) +
    "&count=6";

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatDate(dateStr) {
    var d = new Date(dateStr);
    return d.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  function stripHtml(html) {
    return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  }

  function renderPosts(items) {
    if (!items || items.length === 0) {
      container.className = "";
      container.innerHTML =
        '<p>No posts found yet. <a href="https://medium.com/@shah.ravir">View on Medium →</a></p>';
      return;
    }
    var html = '<ul class="card-grid">';
    items.forEach(function (item) {
      var title = escapeHtml(item.title || "Untitled");
      var link = escapeHtml(item.link || "https://medium.com/@shah.ravir");
      var pubDate = item.pubDate ? formatDate(item.pubDate) : "";
      var snippet = item.description
        ? escapeHtml(stripHtml(item.description).trim().slice(0, 140)) + "…"
        : "";
      html += "<li class=\"card\">";
      html +=
        "<h3><a href=\"" + link + "\" target=\"_blank\" rel=\"noopener noreferrer\">" +
        title +
        "</a></h3>";
      if (snippet) html += "<p>" + snippet + "</p>";
      if (pubDate) html += "<p class=\"meta\">" + pubDate + "</p>";
      html += "</li>";
    });
    html += "</ul>";
    container.className = "";
    container.innerHTML = html;
  }

  function showError() {
    container.className = "";
    container.innerHTML =
      '<p>Could not load posts right now. <a href="https://medium.com/@shah.ravir">Read on Medium →</a></p>';
  }

  fetch(API_URL)
    .then(function (r) {
      if (!r.ok) throw new Error("Network response was not ok");
      return r.json();
    })
    .then(function (data) {
      if (data.status === "ok" && Array.isArray(data.items)) {
        renderPosts(data.items);
      } else {
        showError();
      }
    })
    .catch(showError);
})();
