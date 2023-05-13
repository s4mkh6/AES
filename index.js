function encryptMessage() {
  var message = document.getElementById("message").value;
  var key = document.getElementById("key").value;
  var level = document.getElementById("level").value;

  if (message.length == 0 || key.length == 0) {
    alert("Please enter both message and key.");
    return;
  }

  var keyLength = parseInt(level) / 8;
  if (key.length !== keyLength) {
    alert(`Invalid key length. Please enter a key with ${keyLength} characters.`);
    return;
  }

  var encrypted = CryptoJS.AES.encrypt(message, key, {
    keySize: keyLength
  });

  document.getElementById("result").innerHTML = encrypted.toString();
}

function decryptMessage() {

  var ciphertext=document.getElementById("ciphertext").value
  var key = document.getElementById("key-decrypt").value;
  var level = document.getElementById("level").value;

  if (key.length == 0) {
    alert("vui lòng nhập key !!.");
    return;
  }

  var keyLength = parseInt(level) / 8;
  if (key.length !== keyLength) {
    alert(`key lỗi !!. nhập   key với độ ${keyLength} characters.`);
    return;
  }

  var plaintext = CryptoJS.AES.decrypt(ciphertext, key, {
    keySize: keyLength
  });

  document.getElementById("plaintext").innerHTML = plaintext.toString(CryptoJS.enc.Utf8);
}