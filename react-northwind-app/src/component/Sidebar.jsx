import React from 'react';
import useSidebarToggle from '../hooks/useSidebarToggle';
import { Link } from "react-router-dom";

const Sidebar = () => {
    const { handleToggle } = useSidebarToggle();
    const handleClickMenuParent = (e) => {
        const submenu = e.currentTarget.nextElementSibling;
        if (submenu && submenu.tagName === "UL") {
            submenu.classList.toggle("in");
        }
    }


    return (
        <div>
            <aside className="left-sidebar">
                <div>
                    <div className="brand-logo d-flex align-items-center justify-content-between">
                        <a href="./index.html" className="text-nowrap logo-img">
                            <img src="./assets/images/logos/logo.svg" alt="" />
                        </a>
                        <div onClick={handleToggle} className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
                            <i className="ti ti-x fs-6"></i>
                        </div>
                    </div>
                    <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
                        <ul id="sidebarnav">
                            <li className="nav-small-cap">
                                <iconify-icon icon="solar:menu-dots-linear" className="nav-small-cap-icon fs-4"></iconify-icon>
                                <span className="hide-menu">Home</span>
                            </li>
                            <li className="sidebar-item">
                                <Link className="sidebar-link" to="/dashboard" aria-expanded="false">
                                    <i className="ti ti-atom"></i>
                                    <span className="hide-menu">Dashboard</span>
                                </Link>
                            </li>

                            <li className="sidebar-item">
                                <a className="sidebar-link justify-content-between"
                                    href="#" aria-expanded="false">
                                    <div className="d-flex align-items-center gap-3">
                                        <span className="d-flex">
                                            <i className="ti ti-aperture"></i>
                                        </span>
                                        <span className="hide-menu">Analytical</span>
                                    </div>

                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link justify-content-between"
                                    href="#" aria-expanded="false">
                                    <div className="d-flex align-items-center gap-3">
                                        <span className="d-flex">
                                            <i className="ti ti-shopping-cart"></i>
                                        </span>
                                        <span className="hide-menu">eCommerce</span>
                                    </div>

                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a onClick={handleClickMenuParent} className="sidebar-link justify-content-between has-arrow" aria-expanded="false">
                                    <div className="d-flex align-items-center gap-3">
                                        <span className="d-flex">
                                            <i className="ti ti-layout-grid"></i>
                                        </span>
                                        <span className="hide-menu">Products</span>
                                    </div>

                                </a>
                                <ul aria-expanded="false" className="collapse first-level">
                                    <li className="sidebar-item">
                                        <Link className="sidebar-link justify-content-between"
                                            to="/product-list">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="round-16 d-flex align-items-center justify-content-center">
                                                    <i className="ti ti-circle"></i>
                                                </div>
                                                <span  className="hide-menu">List Products</span>
                                            </div>

                                        </Link>
                                    </li>
                                    <li className="sidebar-item">
                                        <Link className="sidebar-link justify-content-between"
                                            to="/add-product">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="round-16 d-flex align-items-center justify-content-center">
                                                    <i className="ti ti-circle"></i>
                                                </div>
                                                <span className="hide-menu">Add Product</span>
                                            </div>

                                        </Link>
                                    </li>
                                    <li className="sidebar-item">
                                        <a className="sidebar-link justify-content-between"
                                            href="#">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="round-16 d-flex align-items-center justify-content-center">
                                                    <i className="ti ti-circle"></i>
                                                </div>
                                                <span className="hide-menu">Blog</span>
                                            </div>

                                        </a>
                                    </li>
                                    <li className="sidebar-item">
                                        <a className="sidebar-link justify-content-between"
                                            href="#">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="round-16 d-flex align-items-center justify-content-center">
                                                    <i className="ti ti-circle"></i>
                                                </div>
                                                <span className="hide-menu">Blog Details</span>
                                            </div>

                                        </a>
                                    </li>
                                    <li className="sidebar-item">
                                        <a className="sidebar-link justify-content-between"
                                            href="#">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="round-16 d-flex align-items-center justify-content-center">
                                                    <i className="ti ti-circle"></i>
                                                </div>
                                                <span className="hide-menu">Contact Us</span>
                                            </div>

                                        </a>
                                    </li>
                                    <li className="sidebar-item">
                                        <a className="sidebar-link justify-content-between"
                                            href="#">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="round-16 d-flex align-items-center justify-content-center">
                                                    <i className="ti ti-circle"></i>
                                                </div>
                                                <span className="hide-menu">Portfolio</span>
                                            </div>

                                        </a>
                                    </li>
                                    <li className="sidebar-item">
                                        <a className="sidebar-link justify-content-between"
                                            href="#">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="round-16 d-flex align-items-center justify-content-center">
                                                    <i className="ti ti-circle"></i>
                                                </div>
                                                <span className="hide-menu">Pricing</span>
                                            </div>

                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <span className="sidebar-divider lg"></span>
                            </li>
                            <li className="nav-small-cap">
                                <iconify-icon icon="solar:menu-dots-linear" className="nav-small-cap-icon fs-4"></iconify-icon>
                                <span className="hide-menu">Apps</span>
                            </li>
                            <li className="sidebar-item">
                                <a onClick={handleClickMenuParent} className="sidebar-link justify-content-between has-arrow" aria-expanded="false">
                                    <div className="d-flex align-items-center gap-3">
                                        <span className="d-flex">
                                            <i className="ti ti-basket"></i>
                                        </span>
                                        <span className="hide-menu">Ecommerce</span>
                                    </div>

                                </a>
                                <ul aria-expanded="false" className="collapse first-level">
                                    <li className="sidebar-item">
                                        <a className="sidebar-link justify-content-between"
                                            href="#">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="round-16 d-flex align-items-center justify-content-center">
                                                    <i className="ti ti-circle"></i>
                                                </div>
                                                <span className="hide-menu">Shop</span>
                                            </div>

                                        </a>
                                    </li>
                                    <li className="sidebar-item">
                                        <a className="sidebar-link justify-content-between"
                                            href="#">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="round-16 d-flex align-items-center justify-content-center">
                                                    <i className="ti ti-circle"></i>
                                                </div>
                                                <span className="hide-menu">Details</span>
                                            </div>

                                        </a>
                                    </li>
                                    <li className="sidebar-item">
                                        <a className="sidebar-link justify-content-between"
                                            href="#">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="round-16 d-flex align-items-center justify-content-center">
                                                    <i className="ti ti-circle"></i>
                                                </div>
                                                <span className="hide-menu">List</span>
                                            </div>

                                        </a>
                                    </li>
                                    <li className="sidebar-item">
                                        <a className="sidebar-link justify-content-between"
                                            href="#">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="round-16 d-flex align-items-center justify-content-center">
                                                    <i className="ti ti-circle"></i>
                                                </div>
                                                <span className="hide-menu">Checkout</span>
                                            </div>

                                        </a>
                                    </li>
                                    <li className="sidebar-item">
                                        <a className="sidebar-link justify-content-between"
                                            href="#">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="round-16 d-flex align-items-center justify-content-center">
                                                    <i className="ti ti-circle"></i>
                                                </div>
                                                <span className="hide-menu">Add Product</span>
                                            </div>

                                        </a>
                                    </li>
                                    <li className="sidebar-item">
                                        <a className="sidebar-link justify-content-between"
                                            href="#">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="round-16 d-flex align-items-center justify-content-center">
                                                    <i className="ti ti-circle"></i>
                                                </div>
                                                <span className="hide-menu">Edit Product</span>
                                            </div>

                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-item">
                                <a onClick={handleClickMenuParent} className="sidebar-link justify-content-between has-arrow" aria-expanded="false">
                                    <div className="d-flex align-items-center gap-3">
                                        <span className="d-flex">
                                            <i className="ti ti-chart-donut-3"></i>
                                        </span>
                                        <span className="hide-menu">Blog</span>
                                    </div>

                                </a>
                                <ul aria-expanded="false" className="collapse first-level">
                                    <li className="sidebar-item">
                                        <a className="sidebar-link justify-content-between"
                                            href="#">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="round-16 d-flex align-items-center justify-content-center">
                                                    <i className="ti ti-circle"></i>
                                                </div>
                                                <span className="hide-menu">Blog Posts</span>
                                            </div>

                                        </a>
                                    </li>
                                    <li className="sidebar-item">
                                        <a className="sidebar-link justify-content-between"
                                            href="#">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="round-16 d-flex align-items-center justify-content-center">
                                                    <i className="ti ti-circle"></i>
                                                </div>
                                                <span className="hide-menu">Blog Details</span>
                                            </div>

                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link justify-content-between"
                                    href="#"
                                    aria-expanded="false">
                                    <div className="d-flex align-items-center gap-3">
                                        <span className="d-flex">
                                            <i className="ti ti-user-circle"></i>
                                        </span>
                                        <span className="hide-menu">User Profile</span>
                                    </div>

                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link justify-content-between"
                                    href="#" aria-expanded="false">
                                    <div className="d-flex align-items-center gap-3">
                                        <span className="d-flex">
                                            <i className="ti ti-mail"></i>
                                        </span>
                                        <span className="hide-menu">Email</span>
                                    </div>

                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link justify-content-between"
                                    href="#" aria-expanded="false">
                                    <div className="d-flex align-items-center gap-3">
                                        <span className="d-flex">
                                            <i className="ti ti-calendar"></i>
                                        </span>
                                        <span className="hide-menu">Calendar</span>
                                    </div>

                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link justify-content-between"
                                    href="#" aria-expanded="false">
                                    <div className="d-flex align-items-center gap-3">
                                        <span className="d-flex">
                                            <i className="ti ti-layout-kanban"></i>
                                        </span>
                                        <span className="hide-menu">Kanban</span>
                                    </div>

                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link justify-content-between"
                                    href="#" aria-expanded="false">
                                    <div className="d-flex align-items-center gap-3">
                                        <span className="d-flex">
                                            <i className="ti ti-message-dots"></i>
                                        </span>
                                        <span className="hide-menu">Chat</span>
                                    </div>

                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link justify-content-between"
                                    href="#" aria-expanded="false">
                                    <div className="d-flex align-items-center gap-3">
                                        <span className="d-flex">
                                            <i className="ti ti-notes"></i>
                                        </span>
                                        <span className="hide-menu">Notes</span>
                                    </div>

                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link justify-content-between"
                                    href="#" aria-expanded="false">
                                    <div className="d-flex align-items-center gap-3">
                                        <span className="d-flex">
                                            <i className="ti ti-phone"></i>
                                        </span>
                                        <span className="hide-menu">Contact Table</span>
                                    </div>

                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link justify-content-between"
                                    href="#" aria-expanded="false">
                                    <div className="d-flex align-items-center gap-3">
                                        <span className="d-flex">
                                            <i className="ti ti-list-details"></i>
                                        </span>
                                        <span className="hide-menu">Contact List</span>
                                    </div>

                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link justify-content-between"
                                    href="#" aria-expanded="false">
                                    <div className="d-flex align-items-center gap-3">
                                        <span className="d-flex">
                                            <i className="ti ti-file-text"></i>
                                        </span>
                                        <span className="hide-menu">Invoice</span>
                                    </div>

                                </a>
                            </li>

                            <li>
                                <span className="sidebar-divider lg"></span>
                            </li>
                            <li className="nav-small-cap">
                                <iconify-icon icon="solar:menu-dots-linear" className="nav-small-cap-icon fs-4"></iconify-icon>
                                <span className="hide-menu">Pages</span>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link justify-content-between"
                                    href="#" aria-expanded="false">
                                    <div className="d-flex align-items-center gap-3">
                                        <span className="d-flex">
                                            <i className="ti ti-accessible"></i>
                                        </span>
                                        <span className="hide-menu">Animation</span>
                                    </div>

                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link justify-content-between"
                                    href="#"
                                    aria-expanded="false">
                                    <div className="d-flex align-items-center gap-3">
                                        <span className="d-flex">
                                            <i className="ti ti-user-search"></i>
                                        </span>
                                        <span className="hide-menu">Search Result</span>
                                    </div>

                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link justify-content-between"
                                    href="#" aria-expanded="false">
                                    <div className="d-flex align-items-center gap-3">
                                        <span className="d-flex">
                                            <i className="ti ti-brand-google-photos"></i>
                                        </span>
                                        <span className="hide-menu">Gallery</span>
                                    </div>

                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link justify-content-between"
                                    href="#" aria-expanded="false">
                                    <div className="d-flex align-items-center gap-3">
                                        <span className="d-flex">
                                            <i className="ti ti-masks-theater"></i>
                                        </span>
                                        <span className="hide-menu">Treeview</span>
                                    </div>

                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link justify-content-between"
                                    href="#" aria-expanded="false">
                                    <div className="d-flex align-items-center gap-3">
                                        <span className="d-flex">
                                            <i className="ti ti-arrows-maximize"></i>
                                        </span>
                                        <span className="hide-menu">Block-Ui</span>
                                    </div>

                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link justify-content-between"
                                    href="#"
                                    aria-expanded="false">
                                    <div className="d-flex align-items-center gap-3">
                                        <span className="d-flex">
                                            <i className="ti ti-sort-ascending"></i>
                                        </span>
                                        <span className="hide-menu">Session Timeout</span>
                                    </div>

                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link justify-content-between"
                                    href="#" aria-expanded="false">
                                    <div className="d-flex align-items-center gap-3">
                                        <span className="d-flex">
                                            <i className="ti ti-currency-dollar"></i>
                                        </span>
                                        <span className="hide-menu">Pricing</span>
                                    </div>

                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link justify-content-between"
                                    href="#" aria-expanded="false">
                                    <div className="d-flex align-items-center gap-3">
                                        <span className="d-flex">
                                            <i className="ti ti-help"></i>
                                        </span>
                                        <span className="hide-menu">FAQ</span>
                                    </div>

                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link justify-content-between"
                                    href="#"
                                    aria-expanded="false">
                                    <div className="d-flex align-items-center gap-3">
                                        <span className="d-flex">
                                            <i className="ti ti-user-circle"></i>
                                        </span>
                                        <span className="hide-menu">Account Setting</span>
                                    </div>

                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link justify-content-between"
                                    href="#" aria-expanded="false">
                                    <div className="d-flex align-items-center gap-3">
                                        <span className="d-flex">
                                            <i className="ti ti-app-window"></i>
                                        </span>
                                        <span className="hide-menu">Landingpage</span>
                                    </div>

                                </a>
                            </li>

                            <li className="sidebar-item">
                                <a onClick={handleClickMenuParent} className="sidebar-link justify-content-between has-arrow" aria-expanded="false">
                                    <div className="d-flex align-items-center gap-3">
                                        <span className="d-flex">
                                            <i className="ti ti-layout"></i>
                                        </span>
                                        <span className="hide-menu">Widgets</span>
                                    </div>

                                </a>
                                <ul aria-expanded="false" className="collapse first-level">
                                    <li className="sidebar-item">
                                        <a className="sidebar-link justify-content-between"
                                            href="#">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="round-16 d-flex align-items-center justify-content-center">
                                                    <i className="ti ti-circle"></i>
                                                </div>
                                                <span className="hide-menu">Cards</span>
                                            </div>

                                        </a>
                                    </li>
                                    <li className="sidebar-item">
                                        <a className="sidebar-link justify-content-between"
                                            href="#">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="round-16 d-flex align-items-center justify-content-center">
                                                    <i className="ti ti-circle"></i>
                                                </div>
                                                <span className="hide-menu">Banner</span>
                                            </div>

                                        </a>
                                    </li>
                                    <li className="sidebar-item">
                                        <a className="sidebar-link justify-content-between"
                                            href="#">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="round-16 d-flex align-items-center justify-content-center">
                                                    <i className="ti ti-circle"></i>
                                                </div>
                                                <span className="hide-menu">Charts</span>
                                            </div>

                                        </a>
                                    </li>
                                    <li className="sidebar-item">
                                        <a className="sidebar-link justify-content-between"
                                            href="#">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="round-16 d-flex align-items-center justify-content-center">
                                                    <i className="ti ti-circle"></i>
                                                </div>
                                                <span className="hide-menu">Feeds</span>
                                            </div>

                                        </a>
                                    </li>
                                    <li className="sidebar-item">
                                        <a className="sidebar-link justify-content-between"
                                            href="#">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="round-16 d-flex align-items-center justify-content-center">
                                                    <i className="ti ti-circle"></i>
                                                </div>
                                                <span className="hide-menu">Apps</span>
                                            </div>

                                        </a>
                                    </li>
                                    <li className="sidebar-item">
                                        <a className="sidebar-link justify-content-between"
                                            href="#">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="round-16 d-flex align-items-center justify-content-center">
                                                    <i className="ti ti-circle"></i>
                                                </div>
                                                <span className="hide-menu">Data</span>
                                            </div>

                                        </a>
                                    </li>
                                </ul>
                            </li>                        
                        </ul>
                    </nav>
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;