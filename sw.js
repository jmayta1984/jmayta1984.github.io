self.addEventListener("install", e => {
	e.waitUntil(
		caches.open("static").then(cache => {
			return cache.addAll(["./", "./src/master.css", "./images/logo192.png"])
		})
	)
});

self.addEventListener("fetch", e => {
	console.log(`Interceptin fetch request for: ${e.request.url}`);

})