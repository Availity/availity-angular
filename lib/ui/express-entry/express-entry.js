(function(root) {

  'use strict';

  var availity = root.availity;

  availity.ui.directive('expressEntry', function(providersService) {
    return {
      scope: {
        label: '@',
        providerModel: '=?',
        coverageInformation: '=',
        role: '@',
        customerId: '@'
      },
      templateUrl: 'ui/express-entry/express-entry-tpl.html',
      link: function(scope, elem, attrs) {
        $('<link/>', {
          href: './express-entry.css',
          rel: 'stylesheet',
          type: 'text/css'}).appendTo('head');
        scope.generateProviderListName = function(provider) {
          var result = '';
          if(provider.lastName && provider.firstName) {
            result = provider.lastName + ', ' + provider.firstName;
          } else if (provider.businessName) {
            result = provider.businessName;
          }
          return result;
        };
        scope.getProviders = function() {
          providersService.query({
            params: {
              'limit': scope.providersLimit,
              'offset': scope.providersOffset,
              'customerId': scope.customerId,
              'role': scope.role
            }
          }).then(function(response) {
            _.each(response.providers, function(provider) {
              provider.providerName = scope.generateProviderListName(provider);
            });
            scope.providerList = scope.providerList.concat(response.providers);
          });
        };

        scope.init = function() {
          scope.providersOffset = 0;
          scope.providersLimit = 50;
          scope.providerList = [];
          scope.getProviders();
        };

        scope.onProviderScroll = function() {
          scope.providersOffset += 50;
          scope.getProviders();
        };

        scope.toggleCollapsed = function() {
          scope.collapsed = !scope.collapsed;
          setTimeout(function() {
            $('#inp').focus();
          }, 0);
        };
        scope.collapsed = true;
        scope.providersOffset = 0;
        scope.providersLimit = 50;
        scope.providerList = [];
        scope.getProviders();

        scope.onProviderClick = function(provider, $event) {
          if ($event.target.localName === 'tr' || $event.target.localName === 'td') {
            scope.collapsed = !scope.collapsed;
            scope.providerModel = _.clone(provider, true);
          }
          scope.collapsed = true;
        };

        scope.init();
        var tableElem = elem.find('#tabscroll');
        var raw = tableElem[0];
        tableElem.bind('scroll', function() {
          if(raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
            scope.$apply(attrs.scrollAction);
          }
        });
        $(document).bind('click', function(event) {
          if(elem.find(event.target).length === 0) {
            if (!scope.collapsed) {
              scope.collapsed = true;
              scope.$apply();
            }
          }
        });
      }
    };
  });

})(window);
