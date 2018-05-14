window.onload = function() {
  var homeBanner = document
    .getElementById("introduction")
    .getElementsByClassName("desc-wrapper")[0];

  homeBanner.innerHTML +=
    '<div class="header-link"><a href="/live-streaming">Live Streaming</a></div>';
};
