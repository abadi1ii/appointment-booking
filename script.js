// استماع لنموذج الحجز
document.getElementById('appointment-form').addEventListener('submit', async function (event) {
    event.preventDefault(); // منع إرسال النموذج بشكل افتراضي
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
  
    const appointmentData = { name, email, datetime: `${date}T${time}:00` };
  
    // إرسال البيانات إلى Google Sheets أو قاعدة بيانات عبر API (أو أي خدمة أخرى)
    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData),
      });
  
      if (response.ok) {
        document.getElementById('response').innerText = 'تم حجز الموعد بنجاح!';
      } else {
        document.getElementById('response').innerText = 'حدث خطأ أثناء الحجز.';
      }
    } catch (error) {
      document.getElementById('response').innerText = 'حدث خطأ في الاتصال.';
    }
  });
  
  // تفعيل التقويم باستخدام Flatpickr
  flatpickr("#date", {
    locale: "ar", // تعيين اللغة العربية
    minDate: "today", // الحد الأدنى من التاريخ هو اليوم
    dateFormat: "Y-m-d", // تنسيق التاريخ
  });
  // استماع لنموذج الحجز
document.getElementById('appointment-form').addEventListener('submit', async function (event) {
    event.preventDefault(); // منع إرسال النموذج بشكل افتراضي
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
  
    const appointmentData = { name, email, phone, datetime: date };
  
    // إرسال البيانات إلى Google Sheets أو قاعدة بيانات عبر API (أو أي خدمة أخرى)
    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData),
      });
  
      if (response.ok) {
        document.getElementById('response').innerText = 'تم حجز الموعد بنجاح!';
      } else {
        document.getElementById('response').innerText = 'حدث خطأ أثناء الحجز.';
      }
    } catch (error) {
      document.getElementById('response').innerText = 'حدث خطأ في الاتصال.';
    }
  });
  
  // تفعيل التقويم باستخدام Flatpickr
  flatpickr("#date", {
    locale: "ar", // تعيين اللغة العربية
    minDate: "today", // الحد الأدنى من التاريخ هو اليوم
    dateFormat: "Y-m-d", // تنسيق التاريخ
  });