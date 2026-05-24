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
