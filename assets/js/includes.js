// Simple client-side include loader
;(async () => {
  const placeholders = Array.from(document.querySelectorAll('[data-include]'))
  for (const el of placeholders) {
    const url = el.getAttribute('data-include')
    try {
      const res = await fetch(url, { cache: 'no-store' })
      const html = await res.text()
      const frag = document.createRange().createContextualFragment(html)
      el.replaceWith(frag)
    } catch (e) {
      console.error('Include failed:', url, e)
    }
  }
  // After injection, load the main script so DOM exists
  const s = document.createElement('script')
  s.src = 'assets/js/script.js'
  document.body.appendChild(s)
})()

