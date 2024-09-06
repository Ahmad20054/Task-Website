const currentPage = window.location.pathname;
if (currentPage.includes('index.html')) {
  document.getElementById('nav-home').classList.add('fw-bold');
} else if (currentPage.includes('profile.html')) {
  document.getElementById('nav-profile').classList.add('fw-bold');
} else if (currentPage.includes('vacation-requests.html')) {
  document.getElementById('nav-vacation').classList.add('fw-bold');
}
// Select All functionality
document.getElementById('selectAll').addEventListener('change', function () {
    const checkboxes = document.querySelectorAll('.card input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      checkbox.checked = this.checked;
    });
  });
  