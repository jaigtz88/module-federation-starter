import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: ` <header>
    <nav class="bg-picton-blue sticky top-0 z-50 w-full dark:bg-gray-700 mb-4">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div
          class="relative flex items-center justify-start sm:justify-center header-height-50"
        >
          <svg
            class="flex sm:hidden cursor-pointer justify-start stroke-current text-white hover:text-nav-hover-blue h-6 w-6"
            (click)="showMobileMenu = !showMobileMenu"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <div
            class="flex items-center flex-wrap justify-center pl-3 sm:items-stretch sm:justify-start"
          >
            <div class="flex-shrink-0 flex items-center">
              <span [routerLink]="''" class="text-white text-lg cursor-pointer">
                Place-my-order.com</span
              >
            </div>
            <div class="hidden sm:block sm:ml-6 ">
              <div class="flex space-x-4">
                <a
                  routerLink="/home"
                  routerLinkActive="bg-nav-menu-active"
                  class="border hover:bg-nav-hover-blue hover:text-white cursor-pointer border-white-100 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >Home</a
                >

                <a
                  routerLink="/restaurants"
                  routerLinkActive="bg-nav-menu-active"
                  class="border border-white-100  text-white hover:bg-nav-hover-blue  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >Restaurant</a
                >

                <a
                  routerLink="/order/order-history"
                  routerLinkActive="bg-nav-menu-active"
                  class="border border-white-100 text-white hover:bg-nav-hover-blue  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >Order History</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--Mobile Menu-->
      <div class="sm:hidden" id="mobile-menu" [hidden]="!showMobileMenu">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
          <a
            routerLink="/home"
            routerLinkActive="bg-nav-menu-active"
            class="text-white block px-3 py-2 rounded-md text-base font-medium"
            aria-current="page"
            >Home</a
          >

          <a
            routerLink="/restaurants"
            routerLinkActive="bg-nav-menu-active"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >Restaurant</a
          >

          <a
            routerLink="/order/order-history"
            routerLinkActive="bg-nav-menu-active"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >Order History</a
          >
        </div>
      </div>
    </nav>
  </header>`,
  styles: [],
})
export class UtilsComponent implements OnInit {
  showMobileMenu: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
