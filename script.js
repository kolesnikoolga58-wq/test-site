document.getElementById('copy-phone').addEventListener('click', function () {
  var phone = document.getElementById('phone');
  var note = document.getElementById('copied');
  var text = phone.textContent.trim();
  function selectText() {
    var range = document.createRange();
    range.selectNodeContents(phone);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    note.textContent = 'Номер выделен, нажмите «Копировать»';
  }
  try {
    navigator.clipboard.writeText(text).then(function () {
      note.textContent = 'Номер скопирован';
    }, selectText);
  } catch (e) {
    selectText();
  }
});

// Волна от места нажатия на кнопку
document.querySelectorAll('.btn').forEach(function (btn) {
  btn.addEventListener('pointerdown', function (e) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var rect = btn.getBoundingClientRect();
    var size = Math.max(rect.width, rect.height) * 2.2;
    var wave = document.createElement('span');
    wave.className = 'ripple';
    wave.style.width = size + 'px';
    wave.style.height = size + 'px';
    wave.style.left = (e.clientX - rect.left - size / 2) + 'px';
    wave.style.top = (e.clientY - rect.top - size / 2) + 'px';
    btn.appendChild(wave);
    setTimeout(function () { wave.remove(); }, 800);
  });
});
