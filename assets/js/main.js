/**
 * Website Souvenir Kantor - Main JavaScript
 * B2B Corporate Gift & Merchandise
 * Memenuhi PRD.md Section 8 (WhatsApp Conversion) & Section 13 (Aksesibilitas)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Update Dynamic Copyright Year
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. WhatsApp Number Constant
  const WA_NUMBER = '6285999666888';

  // 3. Interactive Quotation Brief Form to WhatsApp Handler
  const briefForm = document.getElementById('briefForm');
  if (briefForm) {
    briefForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nama = document.getElementById('briefNama')?.value.trim() || '-';
      const perusahaan = document.getElementById('briefPerusahaan')?.value.trim() || '-';
      const kategori = document.getElementById('briefKategori')?.value || 'Konsultasi Umum';
      const jumlah = document.getElementById('briefJumlah')?.value.trim() || '-';
      const budget = document.getElementById('briefBudget')?.value.trim() || '-';
      const deadline = document.getElementById('briefDeadline')?.value.trim() || '-';
      const kota = document.getElementById('briefKota')?.value.trim() || '-';
      const catatan = document.getElementById('briefCatatan')?.value.trim() || 'Mohon kirimkan katalog dan penawaran harga resmi.';

      const message = `Halo Souvenir Kantor, saya ingin meminta penawaran resmi untuk pengadaan merchandise perusahaan:\n\n` +
        `• Nama: ${nama}\n` +
        `• Perusahaan / Instansi: ${perusahaan}\n` +
        `• Kategori Paket: ${kategori}\n` +
        `• Perkiraan Jumlah: ${jumlah}\n` +
        `• Perkiraan Budget: ${budget}\n` +
        `• Target Deadline: ${deadline}\n` +
        `• Kota Pengiriman: ${kota}\n` +
        `• Catatan Kebutuhan: ${catatan}\n\n` +
        `Mohon informasi opsi spesifikasi dan ketersediaan jadwal produksi. Terima kasih.`;

      const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    });
  }

  // 4. Portfolio Filter Functionality (Accessible & Progressive)
  const filterButtons = document.querySelectorAll('.portfolio-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  if (filterButtons.length > 0 && portfolioItems.length > 0) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const filterValue = btn.getAttribute('data-filter');

        // Update active class & aria-pressed
        filterButtons.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');

        // Filter items
        portfolioItems.forEach(item => {
          const category = item.getAttribute('data-category');
          if (filterValue === 'all' || category === filterValue) {
            item.style.display = 'block';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            }, 20);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.96)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 180);
          }
        });
      });
    });
  }

  // 5. Auto-close mobile navbar on link click
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link:not(.dropdown-toggle)');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  if (navLinks && navbarCollapse) {
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show') && typeof bootstrap !== 'undefined') {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
          if (bsCollapse) {
            bsCollapse.hide();
          }
        }
      });
    });
  }

  // 6. Back To Top Button - Bottom Left (Pojok Bawah Kiri)
  let backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) {
    backToTopBtn = document.createElement('button');
    backToTopBtn.id = 'backToTopBtn';
    backToTopBtn.type = 'button';
    backToTopBtn.className = 'back-to-top-btn';
    backToTopBtn.setAttribute('aria-label', 'Kembali ke atas halaman');
    backToTopBtn.setAttribute('title', 'Kembali ke atas');
    backToTopBtn.innerHTML = '<i class="bi bi-chevron-up" aria-hidden="true"></i>';
    document.body.appendChild(backToTopBtn);
  }

  const toggleBackToTop = () => {
    if (window.scrollY > 280) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  };

  window.addEventListener('scroll', toggleBackToTop, { passive: true });
  toggleBackToTop();

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
