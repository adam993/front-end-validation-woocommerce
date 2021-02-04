// This file does front-end validation and formatting for various checkout fields for WooCommerce. 
// You can find this code live on https://healthyhead.dk/checkout/
//
//
//
//Couldn't find out what was the source of the placeholder for field billing_email so this line sets it to empty string

if (document.getElementById("billing_email").value == 'test@gmail.com') { document.getElementById("billing_email").value = '' };

function setRedBorder(field) {
    document.getElementById(field).setAttribute('style', 'border: 1px solid #00a550; border-radius: 7px');
};

// Billing phone validation - formats Any input to Danish phone # format (billing_phone_field).
var phoneNo = /[^0-9 +()/.-]/;
var phoneField = document.getElementById("billing_phone_field");
document.getElementById("billing_phone_field").setAttribute('onchange', 'phoneNumber(billing_phone)');
function phoneNumber(inputtxt) {
    if (inputtxt.value.match(phoneNo)) {
        phoneField.setAttribute('style', 'border: 1px solid red;');
    }
    else {
        phoneField.setAttribute('style', 'border: 1px solid #00a550;');
        phoneRaw = document.getElementById("billing_phone").value;
        phoneMinusDashes = phoneRaw.replace(/[^0-9]+/g, '');
        phoneProcessed = phoneMinusDashes.substr(phoneMinusDashes.length - 8);
        setProcessed();
    }

    function setProcessed() {
        if (phoneProcessed.length > 7) {
            document.getElementById("billing_phone").value = phoneProcessed;
        } else {
            phoneField.setAttribute('style', 'border: 1px solid red;');
        }
        ;
    }
};

// billing post code or zip code validation (billing_postcode).

var zipNo = /^[0-9]{4}$/;
var zipField = document.getElementById('billing_postcode');
var zipFieldField = document.getElementById('billing_postcode_field');
document.getElementById('billing_postcode').setAttribute('onchange', "zipNumber(zipField), zipFieldField.classList.remove('woocommerce-validated')");
function zipNumber(inputtxt) {
    if (inputtxt.value.match(zipNo)) {
        zipFieldField.setAttribute('style', 'border: 1px solid #00a550; border-radius: 7px');
    }
    else {
        zipFieldField.setAttribute('style', 'border: 1px solid red; border-radius: 7px');
    }
};


function borderPrefill(field) {
    if (document.getElementById([field]).value.length > 0) {
        document.getElementById(`${field}_field`).classList.toggle("woocommerce-validated");
    };
};
borderPrefill("billing_first_name");
borderPrefill("billing_last_name");
borderPrefill("billing_company");
borderPrefill("billing_address_1");
borderPrefill("billing_address_2");
borderPrefill("billing_city");

var phoneFinal = /[0-9]{8}/;

function phonePrefill(field) {
    if (document.getElementById([field]).value.match(phoneFinal)) {
        document.getElementById(`${field}_field`).classList.toggle("woocommerce-validated");
    } else if (document.getElementById([field]).value.length == 0) {
        return true
    } else {
        document.getElementById(`${field}_field`).setAttribute('style', 'border: 1px solid red; border-radius: 7px');
    }
};

phonePrefill("billing_phone");


function prefillZip(field) {
    if (document.getElementById([field]).value.match(zipNo)) {
        document.getElementById(`${field}_field`).setAttribute('style', 'border: 1px solid #00a550; border-radius: 7px');
    } else if (document.getElementById([field]).value.length == 0) { document.getElementById(`${field}`).setAttribute('style', 'border: 1px solid #eeeeee; border-radius: 7px'); }

    else { document.getElementById(`${field}_field`).setAttribute('style', 'border: 1px solid red; border-radius: 7px'); }
};

prefillZip("billing_postcode");
prefillZip("shipping_postcode");

var mailRegExPre = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
function preFillMail(field) {
    if (document.getElementById([field]).value.match(mailRegExPre)) {
        document.getElementById(`${field}_field`).classList.toggle("woocommerce-validated");
    } else if (document.getElementById([field]).value.length == 0) {
        return true
    } else {
        document.getElementById(`${field}_field`).classList.toggle("checkout-red-border");
    }
};

preFillMail("billing_email");

document.getElementById('shipping_first_name').setAttribute('onchange', `if(document.getElementById('shipping_first_name').value.length > 0){document.getElementById('shipping_first_name_field').setAttribute('style', 'border: 1px solid #00a550; border-radius: 7px');}else{document.getElementById('shipping_first_name_field').setAttribute('style', 'border: 1px solid red; border-radius: 7px')}`)
document.getElementById('shipping_last_name').setAttribute('onchange', `if(document.getElementById('shipping_last_name').value.length > 0){document.getElementById('shipping_last_name_field').setAttribute('style', 'border: 1px solid #00a550; border-radius: 7px');}else{document.getElementById('shipping_last_name_field').setAttribute('style', 'border: 1px solid red; border-radius: 7px')}`)
document.getElementById('shipping_company').setAttribute('onchange', `if(document.getElementById('shipping_company').value.length > 0){document.getElementById('shipping_company_field').setAttribute('style', 'border: 1px solid #00a550; border-radius: 7px');}else{document.getElementById('shipping_company_field').setAttribute('style', 'border: 1px solid #eee; border-radius: 7px')}`)
document.getElementById('shipping_address_2').setAttribute('onchange', `if(document.getElementById('shipping_address_2').value.length > 0){document.getElementById('shipping_address_2_field').setAttribute('style', 'border: 1px solid #00a550; border-radius: 7px');}else{document.getElementById('shipping_address_2_field').setAttribute('style', 'border: 1px solid #eee; border-radius: 7px')}`)
document.getElementById('shipping_address_1').setAttribute('onchange', `if(document.getElementById('shipping_address_1').value.length > 0){document.getElementById('shipping_address_1_field').setAttribute('style', 'border: 1px solid #00a550; border-radius: 7px');}else{document.getElementById('shipping_address_1_field').setAttribute('style', 'border: 1px solid red; border-radius: 7px')}`)
document.getElementById('shipping_city').setAttribute('onchange', `if(document.getElementById('shipping_city').value.length > 0){document.getElementById('shipping_city_field').setAttribute('style', 'border: 1px solid #00a550; border-radius: 7px');}else{document.getElementById('shipping_city_field').setAttribute('style', 'border: 1px solid red; border-radius: 7px')}`)


//Shipping ZIP validation

document.getElementById('shipping_postcode').setAttribute('onchange', `if(document.getElementById('shipping_postcode').value.match(zipNo)){document.getElementById('shipping_postcode_field').setAttribute('style', 'border: 1px solid #00a550; border-radius: 7px');}else{document.getElementById('shipping_postcode_field').setAttribute('style', 'border: 1px solid red; border-radius: 7px')}`)

//Prefilled Shipping fields check

function shipPrefill(field) {
    if (document.getElementById([field]).value.length > 0) {
        document.getElementById(`${field}_field`).setAttribute('style', 'border: 1px solid #00a550; border-radius: 7px');
    };
};

shipPrefill("shipping_last_name");
shipPrefill("shipping_company");
shipPrefill("shipping_address_2");
shipPrefill("shipping_first_name");
shipPrefill("shipping_address_1");
shipPrefill("shipping_city");

jQuery(document).ready(function () {
    jQuery('.woocommerce .product .item-info .price del').closest('span').addClass("del");
    jQuery('.woocommerce .product .item-info .price.del').closest('div').addClass("close_del");
    jQuery('.accordion-toggle').click(function () {
        jQuery('.accordion-content-test').slideToggle();
    });


});

jQuery(document).scroll(function () {
    var sticky = jQuery('.site-header');
    scroll = jQuery(document).scrollTop();
    if (scroll > 0) sticky.addClass('site-header-fixed');
    else sticky.removeClass('site-header-fixed');
});


jQuery(function () {
  
  if(window.location.href.indexOf('/checkout/') !== -1) {
    // On the checkout page.
    var cfForm = jQuery('form.checkout');
    cfForm.on('submit', function (event) {
      var msgTimerId = setInterval(function () {
        var msgBlock = cfForm.find('.woocommerce-NoticeGroup-checkout');
        if (msgBlock.length) {
          // Scroll into view of error messages if There are any
          clearInterval(msgTimerId);
          jQuery('html, body').animate({
            scrollTop: (cfForm.offset().top - 100)
          }, 1000);
        }
      }, 200);

      setTimeout(function () {
        clearInterval(msgTimerId);
      }, 5000);
    });

  }
});
