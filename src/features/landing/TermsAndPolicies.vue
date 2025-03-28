<template>
  <navWhite />
  <div class=" bg-[#FFF6F4] flex flex-col items-center w-full h-fit">
    <div class="w-full">
      <img class="w-full object-fill" :src="girlWriting" alt="" />
    </div>
    <div class="w-5/6 bg-[#FFF6F4] h-full flex flex-col gap-6 py-16">
      <span class="font-bold text-4xl text-[#4C3F3F]">Terms and Policies</span>
      <div class="flex flex-col gap-9">
        <div class="w-full p-4 bg-white rounded-md h-full flex flex-col gap-4">
          <span class="font-bold">Affordable coverage</span>
          <p>
            Lorem ipsum dolor sit amet consectetur. Neque vestibulum nisl diam
            facilisis erat commodo. Dictumst lectus erat netus nunc. Sed
            consectetur a id purus placerat ornare velit in neque. Quam nulla in
            lorem nam et volutpat aliquam. Ultricies pulvinar proin turpis
            ultrices maecenas rhoncus. Sagittis a dignissim nisl platea urna.
            Semper integer amet justo pretium elit. Ut non urna id sed sit.
            Tortor odio lectus enim tristique tincidunt egestas vitae tristique.
            In sit morbi magna eu massa. Bibendum augue enim et congue arcu
            dignissim felis dolor. Libero vulputate odio ultricies nec. Risus
            arcu quis augue eu etiam nibh nulla pellentesque non. Facilisi
            porttitor nullam est sit pellentesque aliquam purus donec. Tellus
            varius ante non lacinia tortor euismod massa ullamcorper. Id tortor
            vestibulum consectetur diam. Ac laoreet risus turpis pellentesque.
            Facilisi urna enim faucibus massa ac semper. Nunc dignissim molestie
            ac aliquam elit suspendisse. Est lectus in eros morbi faucibus
            aenean facilisis. Ornare ipsum non arcu scelerisque senectus cursus
            at adipiscing semper. Sagittis malesuada nulla massa sagittis.
          </p>
        </div>
        <div class="w-full p-4 bg-white rounded-md h-full flex flex-col gap-4">
          <span class="font-bold">Balanced coverage</span>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lobortis eu suscipit tellus
            vestibulum ac netus. Viverra volutpat aliquam gravida neque dui.
            Eleifend mattis eu cursus amet quis. Nunc vulputate vitae mattis
            sodales pretium quam. Vel ac odio pulvinar elementum. Facilisis
            elementum enim molestie pharetra diam a. Nisl mauris amet integer
            nibh. Lectus neque eget tristique dui habitant. Quam a enim
            fermentum dui. Non metus tellus mi ornare mi. Duis id quis dictum
            facilisis. Dolor quis aliquet metus lectus curabitur risus
            malesuada. Non eleifend purus lectus interdum semper egestas lacus.
            Sem quam pellentesque nibh nunc aliquet amet platea facilisis.
            Sodales egestas bibendum mauris viverra nam faucibus pellentesque.
            Morbi nibh sit amet et mauris proin sem tincidunt. Ullamcorper
            bibendum rhoncus in felis phasellus pellentesque. In et aliquet
            interdum tempus congue ipsum et integer egestas. Eget viverra lacus
            maecenas purus. A condimentum condimentum massa tellus. Nisi tortor
            ornare dignissim non ut tincidunt eget sem. Sit nascetur odio
            habitant ultrices et placerat vel tristique. Nibh nunc scelerisque
            tortor mauris molestie phasellus. Morbi vel sodales sed sagittis
            tellus. Massa cras cursus pellentesque nunc in sed etiam.
          </p>
        </div>
        <div class="w-full p-4 bg-white rounded-md h-full flex flex-col gap-4">
          <span class="font-bold">Comprehensive coverage</span>
          <p>
            Lorem ipsum dolor sit amet consectetur. Et sollicitudin feugiat
            tincidunt quam eget tellus integer lacus. Massa fermentum mi tellus
            ac interdum leo elementum. Tempor amet cum massa habitant enim
            cursus tincidunt tempor. Non nulla fames placerat proin volutpat
            sollicitudin tellus. Nec ornare eu nunc viverra quisque integer
            mattis duis turpis. Aliquet lectus pellentesque rutrum sed luctus
            sodales commodo lectus placerat. Lacus curabitur sodales vulputate
            mauris. Purus volutpat faucibus pharetra semper nec diam scelerisque
            lobortis nisi. Eleifend elementum ornare vestibulum enim tempus. Et
            et phasellus tempus lacus magna non. Nulla tellus pellentesque neque
            dui eget tortor eros ut. A faucibus sed dui nec pharetra. Sem
            vulputate faucibus vel tristique eget vulputate quam. Semper in
            ultricies convallis vitae. Mattis ipsum vitae id nibh amet ultrices
            enim pharetra. Ac tellus nibh quam ipsum vitae egestas sagittis sit.
            Sed vestibulum eget consectetur facilisi mauris cras tempus.
            Interdum semper tristique tortor pretium urna mauris bibendum non
            nullam. Euismod vitae dictumst turpis cras tempor egestas. Magna
            massa consequat vel commodo diam orci. Sapien elementum blandit nunc
            enim nisl. Urna arcu tellus amet convallis pellentesque. Senectus
            ipsum neque blandit nunc elementum fames eget cursus sed. Et egestas
            tincidunt posuere ac enim nibh id. Mauris mi enim et facilisi id
            eget eget id.
          </p>
        </div>
      </div>
    </div>
 
   
  </div>
  <about />
  <footers />

</template>
<script setup>
import footers from "./components/Home/footer.vue";
import about from "./components/Home/about.vue";
import girlWriting from "@/assets/girlWriting.svg";
import navWhite from "./components/Home/navWhite.vue";
</script>