// Theme toggle (persists choice; light by default)
(function () {
  var root = document.documentElement;
  try {
    var saved = localStorage.getItem("theme");
    if (saved) root.setAttribute("data-theme", saved);
  } catch (e) {}

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.querySelector(".theme-toggle");
    if (btn) {
      btn.addEventListener("click", function () {
        var current = root.getAttribute("data-theme") || "light";
        var next = current === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", next);
        try { localStorage.setItem("theme", next); } catch (e) {}
      });
    }

    var year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();

    // Blog: render posts from blog/posts.json
    var list = document.getElementById("post-list");
    if (list) {
      fetch("posts.json")
        .then(function (r) { return r.json(); })
        .then(function (posts) {
          if (!posts.length) return;
          document.getElementById("empty").hidden = true;
          posts.sort(function (a, b) { return b.date.localeCompare(a.date); });
          posts.forEach(function (p) {
            var li = document.createElement("li");
            li.className = "post-item";
            var date = new Date(p.date).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" });
            li.innerHTML =
              '<h2><a href="' + p.url + '"></a></h2><span class="date">' + date + "</span><p></p>";
            li.querySelector("a").textContent = p.title;
            li.querySelector("p").textContent = p.summary || "";
            list.appendChild(li);
          });
        })
        .catch(function () { /* no posts yet; empty state stays visible */ });
    }
  });
})();
