(function() {
  'use strict';

  var $rootTag = document.getElementsByTagName('html')[0];

  // insert placeholder input register
  if ($rootTag.className === 'page-login') {
    var $inputMail = document.getElementById('email_cadastro');

    if ($inputMail.value === '') {
      $inputMail.placeholder = 'E-mail';
    }
  }
})();
