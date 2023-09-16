document.addEventListener('DOMContentLoaded', function() {
    // sidebar initialization
    var sidenav = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(sidenav);
    var modal = document.querySelectorAll('.modal');
    var instances = M.Modal.init(modal);
  });