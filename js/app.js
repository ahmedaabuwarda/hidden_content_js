const convert_btn = document.getElementById('convert_btn');
convert_btn.addEventListener('click', convert);

async function convert() {

    const stars = '****************';

    const phone = document.querySelector('#phone').value;
    const phone_length = phone.length;

    const result = `+${stars.substring(0, phone_length - 3)}${phone.substring(phone_length - 2, phone_length)}`;

    document.querySelector('#result').innerHTML = result;

}