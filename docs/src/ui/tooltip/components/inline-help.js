import ngModule from '../../module';

const inlineHelp = {
  template($element, $attrs) {
    return `
      <span class="inline-help"
        av-tooltip
        placement="top"
        trigger="hover"
        title="${$attrs.title}"
        >
        What's this
      </span>
      `;
  }
};

ngModule.component('inlineHelp', inlineHelp);
