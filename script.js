const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const opened = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(opened));
  menuButton.textContent = opened ? '×' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = '☰';
}));
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`درخواست از سایت دارنو - ${data.get('subject')}`);
  const body = encodeURIComponent(
    `نام: ${data.get('name')}\nشرکت: ${data.get('company') || '-'}\nشماره تماس: ${data.get('phone')}\nموضوع: ${data.get('subject')}\n\nپیام:\n${data.get('message') || '-'}`
  );
  // Replace this placeholder with the company's official email address.
  const companyEmail = '';
  if (!companyEmail) {
    alert('فرم سایت آماده است. برای فعال شدن ارسال پیام، ایمیل رسمی شرکت باید در فایل script.js وارد شود.');
    return;
  }
  window.location.href = `mailto:${companyEmail}?subject=${subject}&body=${body}`;
});
