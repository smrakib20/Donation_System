let head = document.getElementById('headers');
let first_element = document.createElement('div');
first_element.innerHTML = `<div class="flex items-center navbar-center md:hidden space-x-3 pb-4">
                <img src="assets/logo.png" alt="">
                <h2 class=" font-bold text-xl ">Donate Bangladesh </h2>
            </div>` ;
head.prepend(first_element);

let donate_bd = document.getElementById('Donate-bangladesh');
donate_bd.classList.add('md:flex');
donate_bd.classList.remove('md:hidden');

// home section dekhabe 
let blog_btn = document.getElementById('blog-btn')
let main_parts = document.getElementById('main_part')

blog_btn.addEventListener('click', function () {
    blog_btn.classList.add('hidden');
    main_parts.classList.add('hidden');

    let home_remove = document.getElementById('home-btn')
    let home_removes = document.getElementById('home-btns')
    home_remove.classList.remove('hidden');
    home_removes.classList.remove('hidden');

});
// blog section dekhabe
document.getElementById('home-btn').addEventListener('click', function () {
    let blog_remove = document.getElementById('blog-btn')
    let main_parts = document.getElementById('main_part')
    blog_remove.classList.remove('hidden');
    main_parts.classList.remove('hidden');


    let home_remove = document.getElementById('home-btn')
    let home_removes = document.getElementById('home-btns')
    home_remove.classList.add('hidden');
    home_removes.classList.add('hidden');
});
// History
let history_bg = document.getElementById('history');
history_bg.addEventListener('click', function () {
    let parts_hidden = document.getElementById('parts')
    let history_add = document.getElementById('last-history')
    history_add.classList.remove('hidden');
    parts_hidden.classList.add('hidden');
    history_bg.classList.add('bg-lime-400');
    donate_bg.classList.remove('bg-lime-400');

})
let donate_bg = document.getElementById('donate');
donate_bg.addEventListener('click', function () {
    let history_hidden = document.getElementById('last-history')
    let parts_add = document.getElementById('parts')
    parts_add.classList.remove('hidden');
    history_hidden.classList.add('hidden');
    donate_bg.classList.add('bg-lime-400');
    history_bg.classList.remove('bg-lime-400');

})
// tk 1 section

document.getElementById('donate_btn').addEventListener('click', function (e) {

    let add_tks = document.getElementById('add_tk').innerText;
    let main_tks = document.getElementById('main_tk').innerText;
    let input_fields = document.getElementById('input_field').value;

    let input_fields_pf = parseFloat(input_fields);
    let add_tks_pf = parseFloat(add_tks);
    let main_tks_pf = parseFloat(main_tks);
    let modal = document.getElementById('success_modal');
    if (isNaN(input_fields_pf)) {
        alert("Invalid amount!");
        return;
    }
    let taka = "1";
    if (input_fields_pf < taka) {
        alert("You do not have Donate Money under 1 tk")
        return;
    }
    let current_tks_pf = add_tks_pf + input_fields_pf;
    let main_current_tks_pf = main_tks_pf - input_fields_pf;
    document.getElementById('add_tk').innerText = `${current_tks_pf} BDT`;
    document.getElementById('main_tk').innerText = `${main_current_tks_pf} BDT`;
    let add_tk = document.getElementById('input_field')
    add_tk.value = '';

    // history 
    const h2Container = document.getElementById('last-history');
    h2Container.classList.add('hidden');

    const h2div = document.createElement('div');
    h2div.className = 'flex flex-col gap-4 bg-white shadow-md rounded-xl border border-gray-300 p-4 my-4 w-11/12 md:w-3/4 mx-auto text-center';;
    const h2Element = document.createElement('h2');
    h2Element.className = 'text-lg md:text-xl font-semibold text-gray-800 mx-auto';
    // const times = (date.getDay())
    h2Element.innerText = `${input_fields_pf} Taka is Donated for famine -2024 at Feni, Bangladesh`; // at ${times}
    const dateEl = document.createElement('p');
    dateEl.className = 'text-sm text-gray-500 mt-2';
    dateEl.innerText = `Date: ${new Date().toString()}`;
    h2div.appendChild(h2Element);
    h2div.appendChild(dateEl);
    h2Container.appendChild(h2div);
    // let brk = document.createElement('br');
    // h2Container.parentNode.insertBefore(brk, h2Container.nextSibling);

    // modal 
    modal.classList.remove('hidden');
    let closeModal = document.getElementById('close_modal');
    closeModal.addEventListener('click', function () {
        modal.classList.add('hidden');
    });
});

// 2 section 
document.getElementById('donate_btns').addEventListener('click', function (e) {

    let add_tks = document.getElementById('add_tks').innerText;
    let main_tks = document.getElementById('main_tk').innerText;
    let input_fields = document.getElementById('input_fields').value;

    let input_fields_pf = parseFloat(input_fields);
    let add_tks_pf = parseFloat(add_tks);
    let main_tks_pf = parseFloat(main_tks);
    let modal = document.getElementById('success_modal');

    if (isNaN(input_fields_pf)) {
        alert("Invalid amount!");
        return;
    }
    let taka = "1";
    if (input_fields_pf < taka) {
        alert("You do not have Donate Money under 1 tk")
        return;
    }
    let current_tks_pf = add_tks_pf + input_fields_pf;
    let main_current_tks_pf = main_tks_pf - input_fields_pf;
    document.getElementById('add_tks').innerText = `${current_tks_pf} BDT`;
    document.getElementById('main_tk').innerText = `${main_current_tks_pf} BDT`;

    let add_tk = document.getElementById('input_fields')
    add_tk.value = '';
    modal.classList.remove('hidden');
    let closeModal = document.getElementById('close_modal');
    closeModal.addEventListener('click', function () {
        modal.classList.add('hidden');
    });
})
// 3 section 
document.getElementById('donate_btnss').addEventListener('click', function (e) {

    let add_tks = document.getElementById('add_tkss').innerText;
    let main_tks = document.getElementById('main_tk').innerText;
    let input_fields = document.getElementById('input_fieldss').value;

    let input_fields_pf = parseFloat(input_fields);
    let add_tks_pf = parseFloat(add_tks);
    let main_tks_pf = parseFloat(main_tks);
    let modal = document.getElementById('success_modal');

    if (isNaN(input_fields_pf)) {
        alert("Invalid amount!");
        return;
    }
    let taka = "1";
    if (input_fields_pf < taka) {
        alert("You do not have Donate Money under 1 tk")
        return;
    }
    let current_tks_pf = add_tks_pf + input_fields_pf;
    let main_current_tks_pf = main_tks_pf - input_fields_pf;
    document.getElementById('add_tkss').innerText = `${current_tks_pf} BDT`;
    document.getElementById('main_tk').innerText = `${main_current_tks_pf} BDT`;

    let add_tk = document.getElementById('input_fieldss')
    add_tk.value = '';

    modal.classList.remove('hidden');
    let closeModal = document.getElementById('close_modal');
    closeModal.addEventListener('click', function () {
        modal.classList.add('hidden');
    });

})
