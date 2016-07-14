import angular from 'angular';
import ngModule from '../module';

class AvConfig {

  constructor() {

    this.SELECT2_OPTIONS = [
      'width',
      'minimumInputLength',
      'maximumInputLength',
      'minimumResultsForSearch',
      'maximumSelectionSize',
      'placeholderOption',
      'separator',
      'allowClear',
      'multiple',
      'closeOnSelect',
      'openOnEnter',
      'id',
      'matcher',
      'sortResults',
      'formatSelection',
      'formatResult',
      'formatResultCssClass',
      'formatNoMatches',
      'formatSearching',
      'formatAjaxError',
      'formatInputTooShort',
      'formatInputTooLong',
      'formatSelectionTooBig',
      'formatLoadMore',
      'createSearchChoice',
      'createSearchChoicePosition',
      'initSelection',
      'tokenizer',
      'tokenSeparators',
      'query',
      'ajax',
      'data',
      'tags',
      'containerCss',
      'containerCssClass',
      'dropdownCss',
      'dropdownCssClass',
      'dropdownAutoWidth',
      'adaptContainerCssClass',
      'adaptDropdownCssClass',
      'escapeMarkup',
      'selectOnBlur',
      'loadMorePadding',
      'nextSearchTerm',
      'correlationId',
      'eventListeners'
    ];

    this.DEFAULTS = {
      closeOnResize: true,
      dropdownAutoWidth: true,
      minimumResultsForSearch: 5
    };

  }

  set(options) {
    angular.extend(this.DEFAULTS, options);
  }

  $get() {

    return angular.copy({
      SELECT2_OPTIONS: this.SELECT2_OPTIONS,
      DEFAULTS: this.DEFAULTS
    });

  }
}

ngModule.provider('avDropdownConfig', AvConfig);
