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
