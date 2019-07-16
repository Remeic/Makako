export const imports = {
  'src/components/Button/button_doc.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-button-button-doc" */ 'src/components/Button/button_doc.mdx'
    ),
}
