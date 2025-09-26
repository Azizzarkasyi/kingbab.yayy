<script>
  import logo from '$lib/assets/logo.png';
  import { onMount } from 'svelte';

  let isMenuOpen = false;
  let showScrollTop = false;
  let currentSlide = 0;
  
  // Slideshow functionality
  function nextSlide() {
    currentSlide = (currentSlide + 1) % 3; // assuming 3 slides
  }
  
  // Toggle mobile menu
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
  
  // Close mobile menu
  function closeMenu() {
    isMenuOpen = false;
  }
  
  // Scroll to top
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onMount(() => {
    // Handle scroll events for scroll-to-top button
    function handleScroll() {
      showScrollTop = window.pageYOffset > 300;
    }
    
    window.addEventListener('scroll', handleScroll);
    
    // Auto-slide every 5 seconds
    const interval = setInterval(nextSlide, 5000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  });
</script>

<svelte:head>
  <title>kingbab.yayy - UMKM Kuliner Terbaik</title>
  <meta name="description" content="Premium Culinary Experience - Nikmati kelezatan kuliner terbaik dengan cita rasa autentik yang tak terlupakan." />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>
    <!-- Header -->
    <header
      class="bg-gradient-to-r from-red-600 via-orange-500 to-red-500 shadow-2xl fixed w-full top-0 z-50 backdrop-blur-sm bg-opacity-95"
    >
      <!-- Main Navigation -->
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-3 lg:py-4">
          <!-- Logo and Brand -->
          <div class="flex items-center space-x-4">
            <div class="relative">
              <img
                src={logo}
                alt="kingbab.yayy Logo"
                class="h-14 w-14 lg:h-16 lg:w-16 rounded-full shadow-lg ring-2 ring-white ring-opacity-30 transition-transform hover:scale-105"
              />
              <div
                class="absolute -bottom-1 -right-1 bg-yellow-400 text-red-600 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg"
              >
                🔥
              </div>
            </div>
            <div>
              <h1
                class="text-2xl lg:text-4xl font-black text-white tracking-tight"
              >
                <span
                  class="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent drop-shadow-lg"
                  >king</span
                ><span class="text-white drop-shadow-lg">bab</span
                ><span class="text-yellow-300 drop-shadow-lg">.yayy</span>
              </h1>
              <p
                class="text-xs lg:text-sm text-white text-opacity-80 font-medium"
              >
                Premium Culinary Experience
              </p>
            </div>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden lg:flex items-center space-x-1">
            <a
              href="#home"
              class="px-4 py-2 text-white hover:text-yellow-300 hover:bg-white hover:bg-opacity-10 rounded-lg transition-all duration-300 font-medium relative group"
            >
              <span>Beranda</span>
              <div
                class="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"
              ></div>
            </a>
            <a
              href="#menu"
              class="px-4 py-2 text-white hover:text-yellow-300 hover:bg-white hover:bg-opacity-10 rounded-lg transition-all duration-300 font-medium relative group"
            >
              <span>Menu</span>
              <div
                class="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"
              ></div>
            </a>
            <a
              href="#tentang"
              class="px-4 py-2 text-white hover:text-yellow-300 hover:bg-white hover:bg-opacity-10 rounded-lg transition-all duration-300 font-medium relative group"
            >
              <span>Tentang</span>
              <div
                class="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"
              ></div>
            </a>
            <a
              href="#kontak"
              class="px-4 py-2 text-white hover:text-yellow-300 hover:bg-white hover:bg-opacity-10 rounded-lg transition-all duration-300 font-medium relative group"
            >
              <span>Kontak</span>
              <div
                class="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"
              ></div>
            </a>
            <div class="ml-4 pl-4 border-l border-white border-opacity-30">
              <button
                class="bg-yellow-400 hover:bg-yellow-300 text-red-600 px-6 py-2 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Pesan Sekarang
              </button>
            </div>
          </div>

          <!-- Mobile menu button -->
          <div class="lg:hidden">
            <button
              on:click={toggleMenu}
              aria-label="Toggle mobile menu"
              class="text-white hover:text-yellow-300 p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu -->
        {#if isMenuOpen}
        <div
          class="lg:hidden bg-black bg-opacity-20 backdrop-blur-sm border-t border-white border-opacity-20 animate-slideDown"
        >
          <div class="px-4 py-4 space-y-2">
            <a
              href="#home"
              on:click={closeMenu}
              class="block px-4 py-3 text-white hover:text-yellow-300 hover:bg-white hover:bg-opacity-10 rounded-lg transition-all duration-300 font-medium"
            >
              <div class="flex items-center space-x-3">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                </svg>
                <span>Beranda</span>
              </div>
            </a>
            <a
              href="#menu"
              on:click={closeMenu}
              class="block px-4 py-3 text-white hover:text-yellow-300 hover:bg-white hover:bg-opacity-10 rounded-lg transition-all duration-300 font-medium"
            >
              <div class="flex items-center space-x-3">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  ></path>
                </svg>
                <span>Menu</span>
              </div>
            </a>
            <a
              href="#tentang"
              on:click={closeMenu}
              class="block px-4 py-3 text-white hover:text-yellow-300 hover:bg-white hover:bg-opacity-10 rounded-lg transition-all duration-300 font-medium"
            >
              <div class="flex items-center space-x-3">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>Tentang</span>
              </div>
            </a>
            <a
              href="#kontak"
              on:click={closeMenu}
              class="block px-4 py-3 text-white hover:text-yellow-300 hover:bg-white hover:bg-opacity-10 rounded-lg transition-all duration-300 font-medium"
            >
              <div class="flex items-center space-x-3">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <span>Kontak</span>
              </div>
            </a>
            <div class="pt-4 border-t border-white border-opacity-20">
              <button
                class="w-full bg-yellow-400 hover:bg-yellow-300 text-red-600 px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Pesan Sekarang
              </button>
            </div>
            <div class="pt-4 flex justify-center space-x-6">
              <a
                href="#"
                class="text-white hover:text-yellow-300 transition-colors"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="text-white hover:text-yellow-300 transition-colors"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866.549 3.921 1.453l2.814-2.814C17.503 2.988 15.139 2 12.545 2 7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748L12.545 10.239z"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="text-white hover:text-yellow-300 transition-colors"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.219.082.338-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.754-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-12C24.007 5.367 18.641.001.017.001z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/if}
      </nav>
    </header>

    <!-- Hero Section -->
    <section
      id="home"
      class="bg-gradient-to-br from-red-500 via-orange-500 to-red-600 pt-32 lg:pt-40 pb-12"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="text-white">
            <h1 class="text-5xl font-bold mb-6 leading-tight">
              Selamat Datang di
              <span class="text-yellow-300">kingbab.yayy</span>
            </h1>
            <p class="text-xl mb-8 text-orange-100">
              Nikmati kelezatan kuliner terbaik dengan cita rasa autentik yang
              tak terlupakan. Kami hadir untuk memanjakan lidah Anda!
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <button
                on:click={() => document.getElementById('menu')?.scrollIntoView({behavior: 'smooth'})}
                class="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 hover:text-red-700 transition-all duration-300 transform hover:scale-105"
              >
                Lihat Menu
              </button>
              <button
                on:click={() => document.getElementById('kontak')?.scrollIntoView({behavior: 'smooth'})}
                class="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-all duration-300"
              >
                Hubungi Kami
              </button>
            </div>
          </div>
          <div class="relative">
            <div
              class="bg-gradient-to-br from-yellow-300 to-orange-400 rounded-3xl p-8 shadow-2xl"
            >
              <div class="text-center text-white">
                <div class="text-8xl mb-4">🍖</div>
                <p class="text-lg font-medium">Gambar Produk</p>
                <p class="text-sm opacity-90">Segera Hadir</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Menu Section -->
    <section id="menu" class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-red-600 mb-4">Menu Unggulan</h2>
          <div
            class="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto"
          ></div>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Menu Item 1 -->
          <div
            class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100"
          >
            <div
              class="bg-gradient-to-br from-red-500 to-orange-500 h-48 rounded-t-xl flex items-center justify-center"
            >
              <span class="text-6xl">🥩</span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-red-600 mb-2">
                Babi Panggang Spesial
              </h3>
              <p class="text-gray-600 mb-4">
                Babi panggang dengan bumbu rahasia yang gurih dan lezat, dimasak
                dengan teknik tradisional
              </p>
              <div class="flex justify-between items-center">
                <span class="text-2xl font-bold text-orange-500"
                  >Rp 45.000</span
                >
                <button
                  class="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors"
                >
                  Pesan
                </button>
              </div>
            </div>
          </div>

          <!-- Menu Item 2 -->
          <div
            class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100"
          >
            <div
              class="bg-gradient-to-br from-orange-500 to-red-500 h-48 rounded-t-xl flex items-center justify-center"
            >
              <span class="text-6xl">🍜</span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-red-600 mb-2">Mie Ayam Babi</h3>
              <p class="text-gray-600 mb-4">
                Mie ayam dengan topping babi cincang yang nikmat, disajikan
                dengan kuah gurih
              </p>
              <div class="flex justify-between items-center">
                <span class="text-2xl font-bold text-orange-500"
                  >Rp 25.000</span
                >
                <button
                  class="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors"
                >
                  Pesan
                </button>
              </div>
            </div>
          </div>

          <!-- Menu Item 3 -->
          <div
            class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100"
          >
            <div
              class="bg-gradient-to-br from-red-600 to-orange-400 h-48 rounded-t-xl flex items-center justify-center"
            >
              <span class="text-6xl">🍲</span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-red-600 mb-2">
                Sup Babi Asam Manis
              </h3>
              <p class="text-gray-600 mb-4">
                Sup babi dengan kuah asam manis yang segar, diperkaya dengan
                sayuran pilihan
              </p>
              <div class="flex justify-between items-center">
                <span class="text-2xl font-bold text-orange-500"
                  >Rp 35.000</span
                >
                <button
                  class="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors"
                >
                  Pesan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section
      id="tentang"
      class="py-16 bg-gradient-to-br from-orange-50 to-red-50"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-bold text-red-600 mb-6">
              Tentang kingbab.yayy
            </h2>
            <p class="text-gray-700 text-lg mb-6 leading-relaxed">
              kingbab.yayy adalah UMKM kuliner yang berkomitmen menghadirkan
              cita rasa autentik dengan kualitas terbaik. Kami menggunakan
              bahan-bahan segar dan bumbu pilihan untuk menciptakan pengalaman
              kuliner yang tak terlupakan.
            </p>

            <div class="space-y-4">
              <div class="flex items-center space-x-4">
                <div class="bg-red-500 text-white p-2 rounded-full">
                  <span class="text-xl">✨</span>
                </div>
                <span class="text-gray-700 font-medium"
                  >Bahan Segar Berkualitas Tinggi</span
                >
              </div>
              <div class="flex items-center space-x-4">
                <div class="bg-orange-500 text-white p-2 rounded-full">
                  <span class="text-xl">👨‍🍳</span>
                </div>
                <span class="text-gray-700 font-medium"
                  >Chef Berpengalaman & Terlatih</span
                >
              </div>
              <div class="flex items-center space-x-4">
                <div class="bg-red-600 text-white p-2 rounded-full">
                  <span class="text-xl">💯</span>
                </div>
                <span class="text-gray-700 font-medium"
                  >Cita Rasa Autentik Terjamin</span
                >
              </div>
            </div>
          </div>
          <div class="relative">
            <!-- Slideshow Container -->
            <div
              class="relative bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <!-- Slides -->
              <div class="slide-container">
                <!-- Slide 1 - Cabang Jakarta Selatan -->
                <div
                  class="slide active bg-gradient-to-br from-red-500 to-orange-500 p-8 text-white text-center min-h-[300px] flex flex-col justify-center"
                >
                  <div class="text-6xl mb-4">🏢</div>
                  <h3 class="text-2xl font-bold mb-2">
                    Cabang Jakarta Selatan
                  </h3>
                  <p class="text-lg mb-2">Jl. Kemang Raya No. 45</p>
                  <p class="text-sm opacity-90">
                    Cabang pertama dan terbesar kami
                  </p>
                </div>

                <!-- Slide 2 - Cabang Jakarta Pusat -->
                <div
                  class="slide bg-gradient-to-br from-orange-500 to-red-600 p-8 text-white text-center min-h-[300px] flex flex-col justify-center"
                >
                  <div class="text-6xl mb-4">🏪</div>
                  <h3 class="text-2xl font-bold mb-2">Cabang Jakarta Pusat</h3>
                  <p class="text-lg mb-2">Jl. Sudirman No. 123</p>
                  <p class="text-sm opacity-90">Di jantung kota Jakarta</p>
                </div>

                <!-- Slide 3 - Cabang Bekasi -->
                <div
                  class="slide bg-gradient-to-br from-red-600 to-orange-400 p-8 text-white text-center min-h-[300px] flex flex-col justify-center"
                >
                  <div class="text-6xl mb-4">🏬</div>
                  <h3 class="text-2xl font-bold mb-2">Cabang Bekasi</h3>
                  <p class="text-lg mb-2">Jl. Ahmad Yani No. 78</p>
                  <p class="text-sm opacity-90">
                    Melayani wilayah Bekasi dan sekitarnya
                  </p>
                </div>

                <!-- Slide 4 - Cabang Depok -->
                <div
                  class="slide bg-gradient-to-br from-orange-400 to-red-500 p-8 text-white text-center min-h-[300px] flex flex-col justify-center"
                >
                  <div class="text-6xl mb-4">�</div>
                  <h3 class="text-2xl font-bold mb-2">Cabang Depok</h3>
                  <p class="text-lg mb-2">Jl. Margonda Raya No. 234</p>
                  <p class="text-sm opacity-90">Dekat kampus UI</p>
                </div>
              </div>

              <!-- Navigation Dots -->
              <div
                class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
              >
                <button
                  class="slide-dot active w-3 h-3 rounded-full bg-white"
                  data-slide="0"
                ></button>
                <button
                  class="slide-dot w-3 h-3 rounded-full bg-white opacity-50"
                  data-slide="1"
                ></button>
                <button
                  class="slide-dot w-3 h-3 rounded-full bg-white opacity-50"
                  data-slide="2"
                ></button>
                <button
                  class="slide-dot w-3 h-3 rounded-full bg-white opacity-50"
                  data-slide="3"
                ></button>
              </div>

              <!-- Navigation Arrows -->
              <button
                class="slide-prev absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-300"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </button>

              <button
                class="slide-next absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-300"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </div>

            <!-- Slide Counter -->
            <div class="text-center mt-4">
              <span class="text-gray-600 text-sm">
                <span id="current-slide">1</span> /
                <span id="total-slides">4</span> Cabang
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="kontak" class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-red-600 mb-4">Hubungi Kami</h2>
          <div
            class="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto"
          ></div>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <!-- Alamat -->
          <div
            class="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border-l-4 border-red-500 text-center"
          >
            <div class="text-red-500 text-4xl mb-4">📍</div>
            <h4 class="text-xl font-bold text-red-600 mb-2">Alamat</h4>
            <p class="text-gray-700">
              Jl. Kuliner Raya No. 123<br />Jakarta Selatan, 12345
            </p>
          </div>

          <!-- Telepon -->
          <div
            class="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border-l-4 border-orange-500 text-center"
          >
            <div class="text-orange-500 text-4xl mb-4">📞</div>
            <h4 class="text-xl font-bold text-orange-600 mb-2">Telepon</h4>
            <p class="text-gray-700">+62 812-3456-7890<br />+62 21-1234-5678</p>
          </div>

          <!-- Jam Buka -->
          <div
            class="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border-l-4 border-red-600 text-center"
          >
            <div class="text-red-600 text-4xl mb-4">🕒</div>
            <h4 class="text-xl font-bold text-red-600 mb-2">Jam Buka</h4>
            <p class="text-gray-700">Senin - Minggu<br />10.00 - 22.00 WIB</p>
          </div>
        </div>

        <!-- Social Media -->
        <div class="text-center mt-12">
          <h3 class="text-2xl font-bold text-red-600 mb-6">Ikuti Kami</h3>
          <div class="flex justify-center space-x-6">
            <a
              href="#"
              class="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition-colors"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                />
              </svg>
            </a>
            <a
              href="#"
              class="bg-orange-500 text-white p-3 rounded-full hover:bg-orange-600 transition-colors"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.219.082.338-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.754-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-12C24.007 5.367 18.641.001.017.001z"
                />
              </svg>
            </a>
            <a
              href="#"
              class="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866.549 3.921 1.453l2.814-2.814C17.503 2.988 15.139 2 12.545 2 7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748L12.545 10.239z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer
      class="bg-gradient-to-r from-red-600 via-orange-500 to-red-500 text-white py-12"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-2xl font-bold mb-4">kingbab.yayy</h3>
            <p class="text-orange-100 mb-4">
              UMKM kuliner terbaik dengan cita rasa autentik yang tak
              terlupakan.
            </p>
            <p class="text-sm text-orange-200">
              Melayani dengan sepenuh hati sejak 2025
            </p>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li>
                <a
                  href="#home"
                  class="text-orange-100 hover:text-yellow-300 transition-colors"
                  >Beranda</a
                >
              </li>
              <li>
                <a
                  href="#menu"
                  class="text-orange-100 hover:text-yellow-300 transition-colors"
                  >Menu</a
                >
              </li>
              <li>
                <a
                  href="#tentang"
                  class="text-orange-100 hover:text-yellow-300 transition-colors"
                  >Tentang</a
                >
              </li>
              <li>
                <a
                  href="#kontak"
                  class="text-orange-100 hover:text-yellow-300 transition-colors"
                  >Kontak</a
                >
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4">Kontak Info</h4>
            <p class="text-orange-100 mb-2">📍 Jl. Kuliner Raya No. 123</p>
            <p class="text-orange-100 mb-2">📞 +62 812-3456-7890</p>
            <p class="text-orange-100">✉️ info@kingbab.yayy</p>
          </div>
        </div>

        <div class="border-t border-orange-400 mt-8 pt-8 text-center">
          <p class="text-orange-200">
            &copy; 2025 kingbab.yayy. Semua hak dilindungi undang-undang.
          </p>
        </div>
      </div>
    </footer>

    <!-- Scroll to Top Button -->
    <button
      on:click={scrollToTop}
      aria-label="Scroll to top"
      class="fixed bottom-8 right-8 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition-all duration-300 {showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'}"
    >
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        ></path>
      </svg>
    </button>

<style>
  /* Slideshow Styles */
  .slide-container {
    position: relative;
    width: 100%;
    height: 300px;
  }

  .slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0;
    transform: translateX(100%);
    transition: all 0.5s ease-in-out;
  }

  .slide.active {
    opacity: 1;
    transform: translateX(0);
  }

  .slide-dot {
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .slide-dot:hover {
    opacity: 0.8 !important;
  }

  .slide-dot.active {
    opacity: 1 !important;
  }
</style>


