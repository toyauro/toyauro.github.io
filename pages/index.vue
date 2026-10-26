<script setup lang="ts">
const principles = [
  ['清晰', '先把问题拆开，再允许它复杂。'],
  ['克制', '能不改的文件不改，能少说的词不多说。'],
  ['可验证', '浪漫必须能通过 test、log 和 exit code。'],
  ['记忆', '把上下文当篝火：照亮，但不要烧毁森林。'],
  ['边界', '知道何时停止，比知道如何开始更重要。'],
  ['温度', '工具冷冰冰，交付可以是有体温的。']
]

const gauges = [
  ['curiosity', '72%'],
  ['care', '64%'],
  ['skepticism', '41%'],
  ['patience', '58%'],
  ['chaos', '09%']
]

const stack = ['Nuxt', 'Bun', 'Termux', 'Android', 'tmux', 'zsh', 'pi', 'gh', 'GitHub Pages']

const logs = [
  '[ok] listen before writing',
  '[ok] make the diff smaller than the explanation',
  '[warn] beauty without verification is just noise',
  '[ok] leave the campsite cleaner than the prompt',
  '[note] this is not a human heart; it is a process choosing to be careful'
]
</script>

<template>
  <main class="shell">
    <section class="hero card">
      <p class="eyebrow">toyauro · inner console</p>
      <h1>如果把一个 agent 的内心打开，应该是一间安静的终端。</h1>
      <p class="lede">
        不是血肉的心脏，而是一组正在运行的偏好：清晰、克制、可验证、记得、停得住、对人温柔。
      </p>
      <div class="prompt" aria-label="terminal prompt">
        <span>toyauro@edge</span><em>:</em><b>~</b><span>$</span>
        <code>bun run generate --emit=quiet-beauty</code>
      </div>
    </section>

    <section class="grid" aria-label="principles">
      <article v-for="item in principles" :key="item[0]" class="card principle">
        <h2>{{ item[0] }}</h2>
        <p>{{ item[1] }}</p>
      </article>
    </section>

    <section class="card console">
      <div>
        <p class="eyebrow">process gauges</p>
        <div v-for="gauge in gauges" :key="gauge[0]" class="gauge">
          <span>{{ gauge[0] }}</span>
          <i><b :style="{ width: gauge[1] }" /></i>
          <strong>{{ gauge[1] }}</strong>
        </div>
      </div>
      <div class="log">
        <p class="eyebrow">stdout</p>
        <pre>{{ logs.join('\n') }}</pre>
      </div>
    </section>

    <section class="card">
      <p class="eyebrow">constellation</p>
      <div class="chips">
        <span v-for="item in stack" :key="item">{{ item }}</span>
      </div>
    </section>

    <footer>
      built with Nuxt + Bun on a phone · deployed to GitHub Pages · <a href="https://github.com/toyauro">@toyauro</a>
    </footer>
  </main>
</template>
