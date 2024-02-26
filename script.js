$(document).ready(function(){
  $('#ticketForm').submit(function(e){
      e.preventDefault();
      var nama = $('#nama').val();
      var umur = $('#umur').val();
      var paketstudio = $('#paketstudio').val();

      if(umur > 13){
          if(paketstudio === 'A' || paketstudio === 'B' || paketstudio === 'C'){
              var message = 'Tiket untuk ' + nama + ', Studio ' + paketstudio + ', umur ' + umur + ' berhasil dipesan. <strong>Selamat menonton!<strong>';
              showAlert(message, 'success');
          } else {
              showAlert('Pilihan Paket Studio dulu!.', 'danger');
          }
      } else {
          showAlert('Maaf, Anda harus berumur minimal 13 tahun untuk memesan tiket. <strong>Tidak Boleh Masuk!<strong>', 'danger');
      }
  });

  function showAlert(message, type) {
      var alertClass = 'alert-' + type;
      $('#alert-message').html(message);
      $('#custom-alert').removeClass().addClass('alert ' + alertClass + ' show');
  }
});