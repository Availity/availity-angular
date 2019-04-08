import ngModule from '../module';
import '../../core/api/dmaLogs';

const requiredFields = [
  'tradingPartnerId',
  'customerId',
  'category',
  'applicationId'
];

ngModule.factory('avDmaAnalytics', (avDmaLogMessagesResource) => {

  class DmaAnalyticsService {

    trackEvent(properties) {
      if (!properties) return {};

      const data = {};

      if (properties.ApplicationId) {
        properties.applicationId = properties.ApplicationId;
        delete properties.ApplicationId;
      }

      if (properties.Category) {
        properties.category = properties.Category;
        delete properties.Category;
      }

      if (properties.tradingPartnerId || properties.TradingPartnerId) {
        properties.tradingPartnerId =
          properties.tradingPartnerId || properties.TradingPartnerId;
        delete properties.TradingPartnerId;
      } else {
        properties.tradingPartnerId = 'NA';
      }

      if (properties.customerId || properties.CustomerId) {
        properties.customerId = properties.customerId || properties.CustomerId;
        delete properties.CustomerId;
      } else {
        properties.customerId = 'NA';
      }

      Object.keys(properties).forEach(key => {
        const isRequiredField = requiredFields.filter(field => key === field)
          .length;
        if (!isRequiredField) {
          data[key] = properties[key];

          delete properties[key];
        }
      });

      return avDmaLogMessagesResource.send([{ ...properties, data }]);
    }

    trackPageView(url) {
      const properties = {
        tradingPartnerId: 'NA',
        customerId: 'NA'
      };

      return avDmaLogMessagesResource.send([{...properties, data: { event: 'page', url }}]);
    }

  }

  return new DmaAnalyticsService();

});

export default ngModule;

