# NEXT JS NOTES

## Aşağıdaki komutu kullanarak yeni bir next.js projesi oluşturuyoruz.
```
npx create-next-app my-blog
```
## Projeyi çalıştırmak için aşağıdaki komutu kullanıyoruz.
```
npx run dev
```
## Next.js' de router yapısı: 
Herhangi bir paket kurmaya gerek kalmadan pages klasörü içerisinde bulunan sayfa adlarına rahatlıkla ulaşabiliyoruz. Örneğin page altında example.jsx dosyamız var ise http://localhost:3000/example yazarak kolaylıkla ulaşabiliriz. <br>
💡 pages klasörü altına başka bir klasör açarakta farklı bir route yapısına yönlendirebiliriz. blog adında bir klasör açıp post.jsx dosyamızı eklersek http://localhost:3000/blog/post yönlendirmesiyle ulaşabiliriz. blog klasörünün içerisinde içeriğimiz var ise içerisine index.jsx dosyamızı ekleyip http://localhost:3000/blog şeklinde ulaşabiliriz.

