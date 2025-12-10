<script setup lang="ts">
import { NButton, NCard, NConfigProvider, NGrid, NGridItem, NTag, darkTheme } from 'naive-ui';
import { availableThemes } from '@/themes';
import { useStyleStore } from '@/stores/style.store';
import { Check } from '@vicons/tabler';

const styleStore = useStyleStore();
</script>

<template>
  <div class="theme-settings-page">
    <c-card title="Theme Selection" mb-5>
      <div mb-4>
        Select a theme to customize the look and feel of IT-Tools.
      </div>

      <n-grid x-gap="20" y-gap="20" cols="1 s:2 m:3 l:4" responsive="screen">
        <n-grid-item v-for="theme in availableThemes" :key="theme.key">
          <div
            class="theme-card"
            :class="{ active: styleStore.themeName === theme.key }"
            @click="styleStore.setTheme(theme.key)"
          >
            <div class="color-preview" :style="{ background: theme.colors.background }">
              <div class="primary-dot" :style="{ background: theme.colors.primary }" />
              <div v-if="styleStore.themeName === theme.key" class="check-icon">
                <n-icon :component="Check" size="24" color="#fff" />
              </div>
            </div>
            
            <div class="theme-info">
              <div class="theme-name">{{ theme.name }}</div>
              <div class="theme-desc">{{ theme.description }}</div>
            </div>
          </div>
        </n-grid-item>
      </n-grid>
    </c-card>

    <c-card title="Live Preview" mb-5>
      <div mb-4>
        This is how UI elements look with the current theme.
      </div>
      
      <!-- Nested Config Provider for Isolation if we wanted to preview non-active themes, 
           but here we just preview the global one which is already applied app-wide -->
      <div class="preview-container" p-5 border rounded>
        <n-grid x-gap="12" y-gap="12" cols="1 s:2">
          <n-grid-item>
            <div flex gap-2 flex-wrap>
              <n-button type="primary">Primary</n-button>
              <n-button>Default</n-button>
              <n-button type="warning">Warning</n-button>
              <n-button type="error">Error</n-button>
            </div>
          </n-grid-item>
          <n-grid-item>
            <div flex gap-2>
               <n-tag type="primary">Tag</n-tag>
               <n-tag type="success">Success</n-tag>
               <n-tag type="warning">Warning</n-tag>
            </div>
          </n-grid-item>
        </n-grid>
      </div>
    </c-card>
  </div>
</template>

<style scoped lang="less">
.theme-card {
  border: 2px solid transparent;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  background-color: var(--n-card-color);
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }

  &.active {
    border-color: var(--n-primary-color);
  }

  .color-preview {
    height: 100px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgba(128,128,128, 0.1);

    .primary-dot {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    }

    .check-icon {
      position: absolute;
      top: 8px;
      right: 8px;
      background: var(--n-primary-color);
      border-radius: 50%;
      padding: 2px;
      display: flex;
    }
  }

  .theme-info {
    padding: 12px;
    
    .theme-name {
      font-weight: 600;
      font-size: 16px;
      margin-bottom: 4px;
    }
    
    .theme-desc {
      font-size: 12px;
      opacity: 0.7;
    }
  }
}
</style>
