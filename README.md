# NEXT JS NOTES

## Aşağıdaki komutu kullanarak yeni bir next.js projesi oluşturuyoruz.
```
npx create-next-app my-blog
```

## Projeyi çalıştırmak için aşağıdaki komutu kullanıyoruz.
```
npx run dev
```

## Next.js' de Router Yapısı: 
Herhangi bir paket kurmaya gerek kalmadan pages klasörü içerisinde bulunan sayfa adlarına rahatlıkla ulaşabiliyoruz. Örneğin page altında example.jsx dosyamız var ise http://localhost:3000/example yazarak kolaylıkla ulaşabiliriz. <br> <br>
💡 pages klasörü altına başka bir klasör açarakta farklı bir route yapısına yönlendirebiliriz. blog adında bir klasör açıp post.jsx dosyamızı eklersek http://localhost:3000/blog/post yönlendirmesiyle ulaşabiliriz. blog klasörünün içerisinde içeriğimiz var ise içerisine index.jsx dosyamızı ekleyip http://localhost:3000/blog şeklinde ulaşabiliriz.

## Link Yönlendirmek:
```
import Link from "next/link";
```
şeklinde Link'i import ederek aşağıdaki şekilde yönledirme sağlayabiliriz.
```
<Link href="/about">About</Link>
```

## Image Component: 
```
import Image from "next/image";
```
şeklinde Image componenti import ederek kullanabiliriz. İçerisine width ve height ayarlarını eklemek gerekiyor. Normal img tag'ı kullanarakta resim ekleyebiliriz fakat bu component bize daha optimize ve responsive resimler eklememize olanak sağlıyor.

## Metadata:
```
import Head from "next/head";
```
şeklinde Head componentini import ediyoruz.
```
<Head>
    <title>About Page</title>
</Head>
```
bu şekilde her sayfanın title kısmını değiştirebiliriz.

## CSS in JS:
Herhangi bir component içerisinde o sayfada css kodları yazmak istiyorsak.
```
<style jsx>{`
    h1 {font-size: 20px; font-weight: 500; color: orangered;}
`}</style>
```
yapısını kullanrak css kodlarını ekleyebiliriz.

## Layout Component:
Herhangi bir component içerisinde hazır olan bir yapıyı çağırıp kullanmamıza yarar. Kullanmak için öncelikle .next klasörünün içerisine component adında bir klasör oluşturup layout.jsx dosyamızı ekliyoruz.
```
export default function Layout({ children }) {
    return (
        <div className="layout-page">
            {children}

            <style jsx>{`
                .layout-page {background: lime}
            `}</style>
        </div>
    )
}
```
yazarak layout'u oluşturuyoruz. Tek yapmamız gereken kullanmak istediğimiz component'e import ederek Layout ile sarmalamak. Eğer CSS kodlarını jsx olarak yazmak istemiyorsanız layout.module.css dosyasını aynı dizin içerisine oluşturup kodlarımızı yazabiliriz. Daha sonra layout.jsx içerisine 
```
import styles from "./layout.module.css";
```
şeklinde import edip herhangi bir nesnenin içerisinde <b>classname={styles.layoutPage}</b> şeklinde çağırabiliriz. CSS dosyamızda farklı class'lar da olabilir onları yine aynı şekilde <b>classname={styles.className}</b> şeklinde kullanabiliriz.

## Global Styles:
Global olarak kullanacağımız bir CSS dosyası için öncelikle pages klasörü altına _app.js adında bir dosya oluşturarak aşağıdaki kodları ekliyoruz;
```
import "../public/styles/global.css";  //Global CSS dosyamız

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}
```
daha sonra public içerisine styles adında klasör oluşturup içerisine global.css dosyamızı ekliyoruz ve CSS kodlarımı yazıyoruz. <br><br>
💡 _app.js eklendikten sonra değişiklikleri görebilmek için projeyi terminalde CTRL+C basarak kapatıp <b>npm run dev</b> komutuyla tekrardan başlatmak gerekiyor.

## Router
Örnek olarak apiden çektiğimiz filmleri listeledik ve bunların detay sayfalarına movie/$id şeklinde bir parametre göndermemiz gerekiyor. Bunun için pages klasörü altına movie adında bir klasör oluşturup içerisine [url].js dosyamızı ekleyerek gerekli kodları yazıp yönlendirme işlemini yapabiliriz. .routuer.query metoduyla gönderilen id'yi yakalayıp gerekli detay listelemesini sağlayabiliriz.

