<script lang="ts">
	import BlogPostLayout from '$lib/components/BlogPostLayout.svelte';
	import { getResourcePost } from '$lib/blog';

	const post = getResourcePost('liforma-vs-d-id')!;
</script>

<BlogPostLayout {post} pathname="/resources/{post.slug}">
	<p>
		<strong>Short answer:</strong> choose Liforma when you need real-time, interactive avatar
		experiences in the browser (listen → think → speak → animate). Choose D-ID when your primary need
		is generating talking-head video from text or uploaded footage for playback, marketing, or
		asynchronous content.
	</p>

	<h2>Decision criteria</h2>
	<table>
		<thead>
			<tr>
				<th>Criterion</th>
				<th>Liforma</th>
				<th>D-ID</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Interaction model</td>
				<td>Live session; user can speak and get a response in realtime</td>
				<td>Primarily generate and play talking-head video</td>
			</tr>
			<tr>
				<td>Delivery</td>
				<td>Browser embed / SDK / hosted player</td>
				<td>Video generation APIs and studio workflows</td>
			</tr>
			<tr>
				<td>Authoring unit</td>
				<td>Reusable Avatar Experience (<code>exp_…</code>)</td>
				<td>Scripts, avatars, and generated media assets</td>
			</tr>
			<tr>
				<td>Best fit</td>
				<td>Education, training, support, interactive demos</td>
				<td>Explainers, personalized video messages, content pipelines</td>
			</tr>
		</tbody>
	</table>

	<p>
		This page is a category comparison, not a claim that one product replaces the other in every
		workflow. Validate against your latency budget, whether users must interrupt mid-turn, and whether
		you need a publishable experience object versus a finished video file.
	</p>

	<div class="callout">
		<strong>Related:</strong>
		<a href="/what-is-an-avatar-experience">What is an Avatar Experience?</a>
		·
		<a href="https://docs.liforma.ai/">Liforma docs</a>
		·
		<a href="https://www.d-id.com/" rel="noreferrer">D-ID</a> (vendor site)
	</div>
</BlogPostLayout>
