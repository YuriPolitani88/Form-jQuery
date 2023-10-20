$(document).ready(function() {

    $('#tel').mask ('+44 00000-0000')
    $('#nin').mask ('000.000.000-00')
    $('#postcode').mask ('SS00-0SS')

    $('form').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            tel: {
                required: true
            },
            nin: {
                required: true
            },
            address: {
                required: true
            },
            postcode: {
                required: true
            },
        }
    })
})
