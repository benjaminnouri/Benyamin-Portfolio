function sendEmail() {
    var email = 'benjamingenius05@gmail.com';
    var subject = 'Hello';
    var body = 'This is the email body.';

    var mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

    window.location.href = mailtoLink;
  }