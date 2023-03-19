function hitung(operator) {
    var angka1 = parseFloat(document.getElementById("angka1").value);
    var angka2 = parseFloat(document.getElementById("angka2").value);
    var hasil = document.getElementById("hasil");
  
    if (isNaN(angka1) || isNaN(angka2)) {
      alert("Maaf yang Anda Input bukan Angka");
      return;
    }
  
    switch (operator) {
      case '+':
        hasil.value = angka1 + angka2;
        break;
      case '-':
        hasil.value = angka1 - angka2;
        break;
      case '*':
        hasil.value = angka1 * angka2;
        break;
      case '/':
        hasil.value = angka1 / angka2;
        break;
      case '**':
        hasil.value = Math.pow(angka1, angka2);
        break;
      default:
        hasil.value = '';
        break;
    }
  }
  