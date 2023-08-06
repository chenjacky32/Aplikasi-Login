/* Comment : Membuat Variabel untuk setiap elemen view */
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

/*Comment : Membuat variabel untuk memyimpan informasi 
email dan password
 */
const expectedEmail = 'chenjacky32@gmail.com';
const expectedPassword = '123';


/*Comment : Menambahkan aksi klik pada button */
loginFormElement.addEventListener('submit', function(event) {
    event.preventDefault();

   /* Comment : Mendapatkan nilai dari masing masing input
   (email dan password) ketika tombol di klik */
    const email = inputEmailElement.value;
    const password = inputPasswordElement.value;

    /* Comment : Memastikan bahwa nilai email dan password sesuai
    dengan nilai yang tersimpan 
     */
if (email == expectedEmail && password == expectedPassword){
 
 /* Comment : Jika sesuai maka program akan berpindah 
 ke halaman home*/
  goToHome();
} else {
   /* Comment : Namun jika tidak sesuai maka akan menampilkan
   informasi bahwa input salah */
  showPopUp();
}
});
