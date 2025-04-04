import Javohirboy from '../assets/images/Javohirboy.png'


function Myself() {
  return (
    <div>
      <h1 className="text-5xl text-center mt-10 font-bold">Bu sahifa o`zim haqimda va proyektim haqida</h1>
      <p className="text-2xl mt-7 font-bold ml-14">Bu proyektni qilishimdan maqsad bunda siz o`zingizga kerakli rasmlarni  juda ham oson va sifatli, aniq, tinniq va chiroyli qilib yuklab olaverasiz.</p>
      <p className="text text-3xl mt-5 font-bold text-center">O`zim haqimda qisqacha ma`lumot</p>
      <p className="text-xl mt-3 ml-10 mr-10">Men o`zim dasturlashga juda ham qiziqaman. Men 2023-yil 27-noyabrda dasturlashga ilk qadamimni quydim.
         Men Bu 1,5 yil ichida o`zimga juda ham ko`p do`stlar ortirdim, yangidan-yangi proyektlarga ega bo`ldim. Mana shu sayt mening Najot Ta`limning Frontent yo`nalishidagi oxirgi proyektim xisoblanadi. 
         Men bu proyektni yasaganimdan juda ham hursandman chunki men bu saytda hattoki 4-5-6-7- oyda o`rgangan narsalarimni ham esga solib ana o`sha o`rgangan narsalarimdan ham juda ham keng foydalandim. 
         Men bu vaqtgacha turli xil qiyinchiliklarga uchradim lekin ularni yengib o`tdim. Men 8 oy ichida juda ham ko`p narsalarni o`rgandim. 
          Masalan:HTML, Css, Javascript, React, Typescript o`rgandim asosan mana shular lekin bularni ichida juda ham ma`lumotlar ko`p ekan har birini ichida turlicha olam bordek . </p>
          <img src={Javohirboy} className='w-64 border rounded-md shadow-red-300 cursor-pointer ml-[700px] mt-20 mb-20 bg-blue-500 p-3 hover:bg-green-500' alt="O`zimning rasmim" />
          
          <p className="text-3xl mt-5 font-bold text-center">Proyektim haqida qisqacha ma`lumot</p>
          <p className="text-xl mt-3 ml-10 mr-10 mb-10">Bu sahifamda Navbar, Main, va Footer qisimlari bor.
            Navbar qismida Logotip, Home, Register, Login, Myself, Download, LikedImages va Dark mode - Light mode bulaklari bor.
            Har birida o`zi uchun kerakli manbalar bor. Har birini o`ziga hos jihatlari va funksiyanaliklari bor.
            Main qismida esa Search, Imagelar bor.
            bunda Searchda nimani qidirsangiz topasiz faqat manfatli narsalarnigina topasiz.
            Imageda esa unda Like bosish bor Unlike qilib Likeni qaytarib olsa ham bo`ladi,
             Download qilsangiz bo`ladi unda siz o`zingizga yoqqan rasmni ustiga olib borsangiz yuklab olish turadi ana ushani ustiga bosib yuklab olsangiz ham bo`ladi.
             Footer qismida esa daisyuidanfoydalanib yasab quyganman.
             Men bu sahifam uchun juda ham ko`p kutubxonalar bilan ishladim o`zimga eng yoqqan kutubxona bu react-toastify bo`ldi chunki u yordamida proyektimni yanada chiroyliroq qilib yasadim
          </p>
    </div>
  )
}

export default Myself
