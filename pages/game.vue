<template>
  <div>
    <PhaserGame ref="phaserRef" @current-active-scene="currentScene" />
    <div>
      <div>
        <button class="button" @click="changeScene">Change Scene</button>
      </div>
      <div>
        <button :disabled="canMoveSprite" class="button" @click="moveSprite">Toggle Movement</button>
      </div>
      <div class="spritePosition">Sprite Position:
        <pre>{{ spritePosition }}</pre>
      </div>
      <div>
        <button class="button" @click="addSprite">Add New Sprite</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Phaser from 'phaser';
import { ref, toRaw } from 'vue';
import PhaserGame from '../game/PhaserGame.vue';

const canMoveSprite = ref();

const phaserRef = ref();
const spritePosition = ref({ x: 0, y: 0 })

const changeScene = () => {
  const scene = toRaw(phaserRef.value.scene)
  if (scene) {
    scene.changeScene();
  }
}

const moveSprite = () => {
  const scene = toRaw(phaserRef.value.scene);

  if (scene) {
    scene.moveLogo(({ x, y }: { x: any, y: any }) => {
      spritePosition.value = { x, y }
    })
  }
}

const addSprite = () => {
  const scene = toRaw(phaserRef.value.scene);
  if (scene) {
    const x = Phaser.Math.Between(64, scene.scale.width - 64)
    const y = Phaser.Math.Between(64, scene.scale.height - 64)

    const star = scene.add.sprite(x, y, 'star')

    scene.add.tween({
      targets: star,
      duration: 500 + Math.random() * 1000,
      alpha: 0,
      yoyo: true,
      repeat: -1
    })
  }
}

const currentScene = (scene: any) => {
  canMoveSprite.value = (scene.scene.key !== 'MainMenu')
}

onMounted(() => {
  const phaserGameInstance = phaserRef.value;
  console.log(phaserGameInstance);
})
</script>
