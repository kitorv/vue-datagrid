# Input 输入框

## 基础用法

:::snippet

```html
<template>
  <div>
    <kv-input placeholder="请输入内容"></kv-input>
    <br />
    <br />
    <kv-input placeholder="请输入内容">
      <template slot="prepend"
        >www</template
      >
      <template slot="append"
        >www</template
      >
    </kv-input>
    <br />
    <br />
    <kv-input placeholder="请输入内容">
      <i slot="prefix" class="k-v-icon-github"></i>
    </kv-input>
    <br />
    <br />
    <kv-input placeholder="请输入内容">
      <i slot="suffix" class="k-v-icon-github"></i>
    </kv-input>
    <br />
    <br />
    <kv-input placeholder="请输入内容" disabled></kv-input>
  </div>
</template>
```

:::