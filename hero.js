(function () {
  var canvas = document.getElementById("hero-canvas");
  if (!canvas) return;

  var ctx = canvas.getContext("2d");
  var nodes = [];
  var count = 48;
  var maxDist = 140;
  var animId;

  function resize() {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w = canvas.offsetWidth;
    var h = canvas.offsetHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    nodes = [];
    for (var i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      });
    }
  }

  function draw() {
    var w = canvas.offsetWidth;
    var h = canvas.offsetHeight;
    ctx.clearRect(0, 0, w, h);

    nodes.forEach(function (n) {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;
    });

    for (var i = 0; i < nodes.length; i++) {
      for (var j = i + 1; j < nodes.length; j++) {
        var a = nodes[i];
        var b = nodes[j];
        var dx = a.x - b.x;
        var dy = a.y - b.y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          ctx.strokeStyle = "rgba(15,98,254," + (1 - dist / maxDist) * 0.35 + ")";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    nodes.forEach(function (n) {
      ctx.fillStyle = "rgba(69,137,255,0.85)";
      ctx.fillRect(n.x - 1.5, n.y - 1.5, 3, 3);
    });

    animId = requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener("resize", resize);

  window.addEventListener(
    "beforeunload",
    function () {
      if (animId) cancelAnimationFrame(animId);
    },
    { once: true }
  );
})();
