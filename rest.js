// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Example: Click on a menu item to show an alert
document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('click', () => {
    const dishName = item.querySelector('h3').textContent;
    alert(`You clicked on ${dishName}. Yummy choice! 😋`);
  });
});
