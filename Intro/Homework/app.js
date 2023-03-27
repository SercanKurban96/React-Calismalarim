// Komut İstemi (cmd) uygulamasından npm i axios kütüphanesi indirildi.
import axios from "axios"; // axios kütüphanesi import edildi.
async function getData(Number) {
  // Fonksiyon asenkron olarak tanımlandı. Fonksiyonun ismi getData olarak verildi. Parametre ismi Number olarak tanımlandı.
  try {
    // Burada hata yakalama (try - catch) metodu kullanıldı. Asenkron fonksiyonlar await olarak tanımlandı.
    const { data: user } = await axios(
      "https://jsonplaceholder.typicode.com/users/" + Number
    );
    const { data: post } = await axios(
      "https://jsonplaceholder.typicode.com/posts/" + Number
    );
    // Burada loglama işlemleri yapıldı.
    console.log("User: ", user);
    console.log("Post: ", post);
  } catch (e) {
    // Hata varsa buraya yönlendirilecektir.
    console.log(e);
  }
}
// Burada getData fonksiyonu export edildi.
export default getData;
