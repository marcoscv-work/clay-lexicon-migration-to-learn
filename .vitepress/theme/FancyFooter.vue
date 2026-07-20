<script setup>
// Decorative animated mural closing the home page, adapted from the
// FancyFooter of design.liferay.com (liferay-design/liferay.design,
// src/components/molecules/FancyFooter). Purely presentational
// (aria-hidden); every animation is gated behind prefers-reduced-motion.
// Viewer-only polish: rendered through the theme's home-features-after
// slot, no content file involved.
</script>

<template>
	<div class="fancy-footer" aria-hidden="true">
		<svg
			viewBox="0 0 1440 720"
			fill="none"
			preserveAspectRatio="xMidYMin slice"
			xmlns="http://www.w3.org/2000/svg"
		>
			<defs>
				<clipPath id="poc-ff-clip1">
					<path transform="rotate(-180 240 120)" d="M0 0h240v240H0z" />
				</clipPath>
				<clipPath id="poc-ff-clip2">
					<path transform="rotate(-180 720 240)" d="M0 0h240v240H0z" />
				</clipPath>
				<clipPath id="poc-ff-clip3">
					<path transform="rotate(-90 960 -240)" d="M0 0h240v240H0z" />
				</clipPath>
				<clipPath id="poc-ff-clip4">
					<path transform="translate(960 480)" d="M0 0h240v240H0z" />
				</clipPath>
				<pattern id="poc-ff-dots" x="0" y="0" width=".083" height=".083">
					<circle fill="#353747" cx="8.3" cy="8.3" r="2" />
				</pattern>
				<pattern id="poc-ff-blueDots" x="0" y="0" width=".2" height=".2">
					<circle fill="#0058ff" cx="20" cy="20" r="4" />
				</pattern>
			</defs>
			<g>
				<path fill="#13141F" d="M0 0h1440v720H0z" />
				<path
					fill="#fff"
					d="M0 240h240v240H0zM240 480h240v240H240zM960 480h480v240H960zM480 240h720v240H480z"
				/>
				<path
					fill="#232225"
					d="M0 480h240v240H0zM240 0h240v240H240zM480 480h240v240H480z"
				/>
				<path fill="#0058FF" d="M720 480h240v240H720zM960 0h240v240H960z" />
				<path
					d="M480 480v240H240c0-132.548 107.452-240 240-240z"
					fill="#EEE"
					class="pie"
					data-seq="1"
				/>
				<path
					d="M960 480h240v240c-132.55 0-240-107.452-240-240z"
					fill="#C4C4C4"
					class="pie"
					data-seq="2"
				/>
				<path
					d="M1440 240h-240v480c132.55 0 240-107.452 240-240V240z"
					fill="#232225"
					class="pie"
					data-seq="3"
				/>
				<path
					d="M720 480c-132.548 0-240-107.452-240-240S587.452 0 720 0s240 107.452 240 240H720v240z"
					fill="#232225"
					class="pie"
					data-seq="4"
				/>
				<path
					d="M240 480H0V240c132.548 0 240 107.452 240 240z"
					fill="#0058FF"
					class="pie"
					data-seq="5"
				/>
				<circle cx="120" cy="120" r="60" fill="#232225" class="breathe" data-seq="1" />
				<circle cx="840" cy="600" r="48" fill="#232225" class="breathe" data-seq="2" />
				<path
					d="M600 240c0-66.274 53.726-120 120-120v240c-66.274 0-120-53.726-120-120z"
					fill="#0058FF"
					class="pie"
					data-seq="6"
				/>
				<path
					d="M840 240H720V120c66.274 0 120 53.726 120 120z"
					fill="#0084FF"
					class="beacon"
				/>
				<path
					d="M80 480H0v-80c44.183 0 80 35.817 80 80z"
					fill="#232225"
					class="pie"
					data-seq="7"
				/>
				<g class="stroke">
					<path
						class="primary-stroke line-flow"
						data-seq="1"
						pathLength="1"
						d="M130 120h110"
					/>
					<path
						class="white-stroke line-flow"
						data-seq="2"
						pathLength="1"
						d="M1310 360h-110M350 120H240M1310 600h-110"
					/>
					<path
						class="dark-stroke line-flow"
						data-seq="3"
						pathLength="1"
						d="M1090 600h110M1090 360h110"
					/>
					<path
						class="primary-stroke line-flow"
						data-seq="4"
						pathLength="1"
						d="M360 350V240"
					/>
					<circle cx="120" cy="120" r="9" class="white-stroke node" data-seq="1" />
					<circle cx="360" cy="360" r="9" class="white-stroke node" data-seq="3" />
					<circle cx="360" cy="120" r="9" class="primary-stroke node" data-seq="2" />
					<circle cx="1320" cy="360" r="9" class="primary-stroke node" data-seq="5" />
					<circle cx="1080" cy="360" r="9" class="primary-stroke node" data-seq="4" />
					<circle cx="1320" cy="600" r="9" class="primary-stroke node" data-seq="7" />
					<circle cx="1080" cy="600" r="9" class="primary-stroke node" data-seq="6" />
					<g clip-path="url(#poc-ff-clip1)">
						<circle
							cx="240"
							cy="240"
							r="120"
							transform="rotate(-180 240 240)"
							stroke="#fff"
							pathLength="1"
							class="arc-draw"
							data-seq="1"
						/>
					</g>
					<g clip-path="url(#poc-ff-clip2)">
						<circle
							cx="1200"
							cy="480"
							r="120"
							transform="rotate(-180 1200 480)"
							stroke="#fff"
							pathLength="1"
							class="arc-draw"
							data-seq="2"
						/>
					</g>
					<g clip-path="url(#poc-ff-clip3)">
						<circle
							cx="1200"
							cy="480"
							r="120"
							transform="rotate(-90 1200 480)"
							stroke="#fff"
							pathLength="1"
							class="arc-draw"
							data-seq="3"
						/>
					</g>
					<g clip-path="url(#poc-ff-clip4)">
						<circle
							cx="1200"
							cy="480"
							r="120"
							stroke="#232225"
							pathLength="1"
							class="arc-draw"
							data-seq="4"
						/>
					</g>
				</g>
				<g fill="#0058FF">
					<rect x="232" y="112" width="16" height="16" class="mini-square" data-seq="1" />
					<rect x="352" y="232" width="16" height="16" class="mini-square" data-seq="2" />
					<rect x="1192" y="352" width="16" height="16" class="mini-square" data-seq="3" />
					<rect x="1312" y="472" width="16" height="16" class="mini-square" data-seq="4" />
					<rect x="1192" y="592" width="16" height="16" class="mini-square" data-seq="5" />
					<rect x="1072" y="472" width="16" height="16" class="mini-square" data-seq="6" />
				</g>
				<g fill="#0058ff" class="dot-circle">
					<rect x="40" y="520" width="150" height="150" fill="url(#poc-ff-blueDots)" />
					<circle cx="120" cy="510" r="4" />
					<circle cx="150" cy="510" r="4" />
					<circle cx="90" cy="510" r="4" />
					<circle cx="30" cy="570" r="4" />
					<circle cx="30" cy="600" r="4" />
					<circle cx="30" cy="630" r="4" />
					<circle cx="210" cy="570" r="4" />
					<circle cx="210" cy="600" r="4" />
					<circle cx="210" cy="630" r="4" />
					<circle cx="120" cy="690" r="4" />
					<circle cx="150" cy="690" r="4" />
					<circle cx="90" cy="690" r="4" />
				</g>
				<path
					d="M736 360L 1056 360"
					stroke="#13141F"
					stroke-width="6"
					stroke-dasharray="3 12"
					class="dash-march"
				/>
				<rect
					x="1204"
					y="36"
					fill="url(#poc-ff-dots)"
					width="240"
					height="200"
					class="dots-drift"
				/>
			</g>
		</svg>
	</div>
</template>

<style>
.fancy-footer {
	width: 100%;
	height: clamp(280px, 45vh, 560px);
	margin-top: 96px;
	overflow: hidden;
	line-height: 0;
}

.fancy-footer svg {
	width: 100%;
	height: 100%;
	/* Washed-out treatment so the mural reads as a soft background texture
	 * instead of a solid dark band. */
	filter: brightness(6);
	opacity: 0.6;
}

.fancy-footer .stroke {
	stroke-width: 6;
}

.fancy-footer .primary-stroke {
	stroke: #0058ff;
}

.fancy-footer .white-stroke {
	stroke: #fff;
}

.fancy-footer .dark-stroke {
	stroke: #13141f;
}

/* Living mural: every element family moves continuously with soft easing and
 * short, overlapping cycles. All motion is opt-in via the user's OS setting. */
@media (prefers-reduced-motion: no-preference) {
	/* Solid pies breathe from their corner anchor, phase-shifted so a soft
	 * wave crosses the whole mural. */
	.fancy-footer .pie {
		transform-box: view-box;
		animation: poc-ff-pie-breathe 5s ease-in-out infinite alternate;
	}
	.fancy-footer .pie[data-seq='1'] { transform-origin: 480px 720px; animation-delay: 0s; }
	.fancy-footer .pie[data-seq='2'] { transform-origin: 1200px 480px; animation-delay: -0.7s; }
	.fancy-footer .pie[data-seq='3'] { transform-origin: 1320px 480px; animation-delay: -1.4s; }
	.fancy-footer .pie[data-seq='4'] { transform-origin: 720px 240px; animation-delay: -2.1s; }
	.fancy-footer .pie[data-seq='5'] { transform-origin: 0px 480px; animation-delay: -2.8s; }
	.fancy-footer .pie[data-seq='6'] { transform-origin: 720px 240px; animation-delay: -3.5s; }
	.fancy-footer .pie[data-seq='7'] { transform-origin: 0px 480px; animation-delay: -4.2s; }

	/* The light-blue quarter glows like a beacon: chromatic motion only. */
	.fancy-footer .beacon {
		animation: poc-ff-beacon-glow 4s ease-in-out infinite alternate;
	}

	/* Connector nodes pulse in a left-to-right wave. */
	.fancy-footer .node {
		transform-box: fill-box;
		transform-origin: center;
		animation: poc-ff-node-pulse 6s ease-in-out infinite;
	}
	.fancy-footer .node[data-seq='1'] { animation-delay: 0s; }
	.fancy-footer .node[data-seq='2'] { animation-delay: 0.35s; }
	.fancy-footer .node[data-seq='3'] { animation-delay: 0.7s; }
	.fancy-footer .node[data-seq='4'] { animation-delay: 1.05s; }
	.fancy-footer .node[data-seq='5'] { animation-delay: 1.4s; }
	.fancy-footer .node[data-seq='6'] { animation-delay: 1.75s; }
	.fancy-footer .node[data-seq='7'] { animation-delay: 2.1s; }

	/* A signal gap travels along the connector lines. */
	.fancy-footer .line-flow {
		stroke-dasharray: 0.82 0.18;
		animation: poc-ff-line-flow 3.5s linear infinite;
	}
	.fancy-footer .line-flow[data-seq='1'] { animation-delay: 0s; }
	.fancy-footer .line-flow[data-seq='2'] { animation-delay: -0.9s; }
	.fancy-footer .line-flow[data-seq='3'] { animation-delay: -1.8s; }
	.fancy-footer .line-flow[data-seq='4'] { animation-delay: -2.7s; }

	/* A comet gap orbits each quarter arc continuously. */
	.fancy-footer .arc-draw {
		stroke-dasharray: 0.88 0.12;
		animation: poc-ff-line-flow 7s linear infinite;
	}
	.fancy-footer .arc-draw[data-seq='1'] { animation-delay: 0s; }
	.fancy-footer .arc-draw[data-seq='2'] { animation-delay: -1.75s; }
	.fancy-footer .arc-draw[data-seq='3'] { animation-delay: -3.5s; }
	.fancy-footer .arc-draw[data-seq='4'] { animation-delay: -5.25s; }

	/* Blue accents quarter-turn like clockwork, one tick each, staggered. A
	 * square rotated 90deg looks identical, so the loop reset is seamless. */
	.fancy-footer .mini-square {
		transform-box: fill-box;
		transform-origin: center;
		animation: poc-ff-quarter-turn 5s ease-in-out infinite;
	}
	.fancy-footer .mini-square[data-seq='1'] { animation-delay: 0s; }
	.fancy-footer .mini-square[data-seq='2'] { animation-delay: 0.8s; }
	.fancy-footer .mini-square[data-seq='3'] { animation-delay: 1.6s; }
	.fancy-footer .mini-square[data-seq='4'] { animation-delay: 2.4s; }
	.fancy-footer .mini-square[data-seq='5'] { animation-delay: 3.2s; }
	.fancy-footer .mini-square[data-seq='6'] { animation-delay: 4s; }

	/* Filled circles breathe in counter-phase. */
	.fancy-footer .breathe {
		transform-box: fill-box;
		transform-origin: center;
		animation: poc-ff-breathe 4s ease-in-out infinite alternate;
	}
	.fancy-footer .breathe[data-seq='2'] { animation-delay: -2s; }

	/* Dash period is 3 + 12 = 15, so a -15 shift loops seamlessly. */
	.fancy-footer .dash-march {
		animation: poc-ff-dash-march 1.8s linear infinite;
	}

	.fancy-footer .dot-circle {
		transform-box: fill-box;
		transform-origin: center;
		animation: poc-ff-gentle-float 4.5s ease-in-out infinite alternate;
	}

	.fancy-footer .dots-drift {
		animation: poc-ff-dots-breathe 4.5s ease-in-out infinite alternate;
	}

	@keyframes poc-ff-pie-breathe {
		from { transform: scale(1); }
		to { transform: scale(1.035); }
	}
	@keyframes poc-ff-beacon-glow {
		from { fill: #0084ff; }
		to { fill: #3db5ff; }
	}
	@keyframes poc-ff-node-pulse {
		0%, 30%, 100% { transform: scale(1); }
		15% { transform: scale(1.45); }
	}
	@keyframes poc-ff-line-flow {
		to { stroke-dashoffset: -1; }
	}
	@keyframes poc-ff-quarter-turn {
		0%, 78% { transform: rotate(0deg); }
		100% { transform: rotate(90deg); }
	}
	@keyframes poc-ff-breathe {
		from { transform: scale(1); }
		to { transform: scale(1.09); }
	}
	@keyframes poc-ff-dash-march {
		to { stroke-dashoffset: -15; }
	}
	@keyframes poc-ff-gentle-float {
		from { transform: translateY(2px); }
		to { transform: translateY(-6px); }
	}
	@keyframes poc-ff-dots-breathe {
		from { opacity: 0.5; }
		to { opacity: 1; }
	}
}
</style>
