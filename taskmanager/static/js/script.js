document.addEventListener('DOMContentLoaded', function() {
    // sidebar initialization
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
    //Collaspible initialization
    let collaspible = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collaspible);
    // Form initialization
      // Modal initialization
      let modal = document.querySelectorAll('.modal');
      M.Modal.init(modal);
      // Datepicker initialization
      let datep = document.querySelectorAll('.datepicker');
      M.Datepicker.init(datep, {
        format: "dd mmmm, yyyy",
        i18n: {done: "Select"}
      });
      // Select Box initialization
      let selectdrop = document.querySelectorAll('select');
      M.FormSelect.init(selectdrop);
  });