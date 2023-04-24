<script setup></script>

<template>
  <nav
    class="lg:max-w-screen-lg lg:mx-auto relative flex w-full items-center justify-between bg-white py-3 px-3 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 md:flex-wrap md:justify-start"
    data-te-navbar-ref
  >
    <div class="flex flex-wrap items-center justify-between px-6">
      <ul
        class="mr-auto flex flex-col lg:flex-row"
        data-te-navbar-nav-ref
      >
        <li data-te-nav-item-ref>
          <a
            class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 lg:p-2 [&.active]:text-black/90"
            href="#"
            data-te-nav-link-ref
            data-te-ripple-init
            data-te-ripple-color="light"
          >About us</a>
        </li>
        <li data-te-nav-item-ref>
          <a
            class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30  lg:p-2 [&.active]:text-black/90"
            href="#"
            data-te-nav-link-ref
            data-te-ripple-init
            data-te-ripple-color="light"
          >Delivery/payment</a>
        </li>
        <li data-te-nav-item-ref>
          <a
            class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30  lg:p-2 [&.active]:text-black/90"
            href="#"
            data-te-nav-link-ref
            data-te-ripple-init
            data-te-ripple-color="light"
          >Contacts</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
