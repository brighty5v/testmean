Stripe.setPublishableKey('pk_test_foUfktByQh8r48m1R1HyWtiK00n1bBNEZP');
//var stripe=Stripe('pk_test_foUfktByQh8r48m1R1HyWtiK00n1bBNEZP');
var $form= $('#payment-form');
$form.submit(function(event) {
    $('#payment-errors').removeClass('hidden1');

$form.find('button').prop('disabled',true);


    Stripe.card.createToken({
    number: $('#card-number').val(),
    cvc: $('#card-cvc').val(),
    exp_month: $('#card-expiry-month').val(),
    exp_year: $('#card-expiry-year').val(),
    name: $('#card-name').val()
  },StripeResponseHandler);    // Handle result.error or result.token
 return false;
});

function stripeResponseHandler(status, response) {
    if (response.error) { // Problem!

        // Show the errors on the form
        $('#payment-errors').text(response.error.message);
        $('#payment-errors').removeClass('hidden1');
        $form.find('button').prop('disabled', false); // Re-enable submission
    
      } else { // Token was created!
    
        // Get the token ID:
        var token = response.id;
   
        // Insert the token into the form so it gets submitted to the server:
        $form.append($('<input type="hidden" name="stripeToken" />').val("token"));
    
        // Submit the form:
      
$form.get(0).submit();
    
      }
    }
