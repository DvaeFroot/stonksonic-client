<template>
  <div class="h-[80px] bg-[#67c0f0] py-2 px-2 flex flex-row justify-between font-neue">
    <div class="flex flex-row">
      <div class="flex flex-row items-center"><img src="/stonksonic_logo.png" class="h-[60px] object-contain" />
        <div class="ml-[20px]  text-[40px]">Stonk the hedgehog</div>
      </div>
    </div>
    <div class="flex flex-col justify-between">
      <div class="flex flex-row-reverse">
        <div>
          <div class="flex flex-row items-center">
            <Icon name="prime:discord" class="mx w-7 h-7 cursor-pointer hover:border-b-4 " />
            <Icon name="prime:telegram" class="mx w-7 h-7 cursor-pointer hover:border-b-4 " />
            <Icon name="prime:twitter" class="mx cursor-pointer hover:border-b-4 " />
          </div>
        </div>
      </div>
      <div class="flex flex-row justify-between items-end w-[400px] text-[20px]">
        <div>
          <NuxtLink to="bridge" class="hover:text-yellow-300">
            Bridge
          </NuxtLink>
        </div>
        <div>
          <NuxtLink to="game" class="hover:text-yellow-300">
            Game
          </NuxtLink>
        </div>
        <div>
          <NuxtLink to="meme-maker" class="hover:text-yellow-300"> Meme Maker
          </NuxtLink>
        </div>
        <div>
          <NuxtLink to="presale" class="hover:text-yellow-300">
            Presale
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
