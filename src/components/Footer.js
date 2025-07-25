import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (

    <footer class="bg-brand-primary text-white py-8">
		<div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row">
		<div class="flex flex-1/3 flex-col ">
			<p class="text-sm mt-2 mb-4">Copyright &copy; Green Root</p>
		</div>
		<div class="flex flex-2 flex-col mt-5 md:mt-0">
			<h4 class="font-semibold">Company</h4>
			<ul class="space-y-1 text-sm leading-8">
			<li><Link to="#">Home</Link></li>
			<li><Link to="#">About</Link></li>
			<li><Link to="#">Blog</Link></li>
			</ul>
		</div>
		<div class="flex flex-2 flex-col mt-5 md:mt-0">
			<h4 class="font-semibold">Support</h4>
			<ul class="space-y-1 text-sm leading-8">
			<li><Link to="#">Contact Us</Link></li>
			<li><Link to="#">Terms of Service</Link></li>
			</ul>
		</div>
		</div>
	</footer>
  );
}
