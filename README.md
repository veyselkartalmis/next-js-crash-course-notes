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

## CSS in JS
Herhangi bir component içerisinde o sayfada css kodları yazmak istiyorsak.
```
<style jsx>{`
    h1 {font-size: 20px; font-weight: 500; color: orangered;}
`}</style>
```
yapısını kullanrak css kodlarımı ekleyebiliriz.
