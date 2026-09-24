/**
 * Initial interactions for the engineering portfolio.
 * The script is intentionally defensive so it can be used with a minimal
 * static HTML/CSS foundation and enhanced as the portfolio grows.
 */
(function () {
	"use strict";

	const onReady = (callback) => {
		if (document.readyState === "loading") {
			document.addEventListener("DOMContentLoaded", callback, { once: true });
		} else {
			callback();
		}
	};

	onReady(() => {
		const body = document.body;
		const menuButton = document.querySelector("[data-menu-toggle], .menu-toggle");
		const navigation = document.querySelector("[data-navigation], nav");

		// Accessible mobile navigation.
		if (menuButton && navigation) {
			menuButton.setAttribute("aria-expanded", "false");
			menuButton.addEventListener("click", () => {
				const isOpen = body.classList.toggle("nav-open");
				menuButton.setAttribute("aria-expanded", String(isOpen));
			});

			navigation.querySelectorAll("a").forEach((link) => {
				link.addEventListener("click", () => {
					body.classList.remove("nav-open");
					menuButton.setAttribute("aria-expanded", "false");
				});
			});
		}

		// Keep copyright years current without requiring manual updates.
		document.querySelectorAll("[data-current-year], .current-year").forEach((element) => {
			element.textContent = new Date().getFullYear();
		});

		// Reveal portfolio sections as they enter the viewport.
		const revealItems = document.querySelectorAll("[data-reveal], .reveal");
		if ("IntersectionObserver" in window && revealItems.length) {
			const observer = new IntersectionObserver(
				(entries, currentObserver) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							entry.target.classList.add("is-visible");
							currentObserver.unobserve(entry.target);
						}
					});
				},
				{ threshold: 0.12 }
			);
			revealItems.forEach((item) => observer.observe(item));
		} else {
			revealItems.forEach((item) => item.classList.add("is-visible"));
		}

		// Smoothly return to the top for links using #top.
		document.querySelectorAll('a[href="#top"]').forEach((link) => {
			link.addEventListener("click", (event) => {
				event.preventDefault();
				window.scrollTo({ top: 0, behavior: "smooth" });
			});
		});
	});
})();
