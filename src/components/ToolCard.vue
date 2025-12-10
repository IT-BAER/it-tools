<script setup lang="ts">
import { useThemeVars } from 'naive-ui';
import FavoriteButton from './FavoriteButton.vue';
import type { Tool } from '@/tools/tools.types';

const props = defineProps<{ tool: Tool & { category: string } }>();
const { tool } = toRefs(props);
const theme = useThemeVars();
const isHovered = ref(false);
</script>

<template>
  <router-link :to="tool.path" class="decoration-none">
    <c-card
      class="h-full transition-all duration-200 ease-out !border-2px hover:transform hover:scale-102"
      :style="{
        borderColor: isHovered ? theme.primaryColor : `color-mix(in srgb, ${theme.primaryColor}, transparent 95%)`,
        background: `linear-gradient(145deg, color-mix(in srgb, ${theme.cardColor}, black 8%), color-mix(in srgb, ${theme.primaryColor}, transparent 97%) 100%)`,
        transform: isHovered ? 'scale(1.02)' : 'scale(1)'
      }"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <div flex items-center justify-between>
        <n-icon size="40" :component="tool.icon" :color="theme.textColor3" />

        <div flex items-center gap-8px>
          <div
            v-if="tool.isNew"
            class="rounded-full px-8px py-3px text-xs text-white"
            :style="{
              'background-color': theme.primaryColor,
            }"
          >
            {{ $t('toolCard.new') }}
          </div>

          <FavoriteButton :tool="tool" />
        </div>
      </div>

      <div class="truncat my-5px text-lg" :style="{ color: theme.textColor1 }">
        {{ tool.name }}
      </div>

      <div class="line-clamp-2" :style="{ color: theme.textColor3 }">
        {{ tool.description }}
      </div>
    </c-card>
  </router-link>
</template>
